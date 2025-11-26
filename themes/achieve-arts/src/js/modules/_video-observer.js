/**
 * Auto-play/pause <video> when it enters/leaves the viewport.
 * - Lazy-loads <source data-src> → source.src on first intersect
 * - Respects prefers-reduced-motion (disables autoplay)
 * - Works with iOS/Safari autoplay policy (muted + playsinline)
 * - Guards against repeated play() calls
 * - Pauses when tab is hidden
 * - Exposes a cleanup() to disconnect the observer
 */

const VIDEO_SELECTOR = '.js-video';

let observer;

function shouldAutoplay(video) {
    if (video.dataset.autoplay === 'false') return false;
    // Respect reduced motion
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return false;

    return true;
}

function primeForAutoplay(video) {
    // iOS/Safari require muted + playsinline for autoplay
    if (!video.hasAttribute('muted')) video.muted = true;
    if (!video.hasAttribute('playsinline')) video.setAttribute('playsinline', '');

    // Avoid unexpected audio; allow override via data-unmute="true"
    if (video.dataset.unmute === 'true') {
        video.muted = false; // only if authors explicitly opt-in
    }
}

/** Lazy-load <source data-src> only once */
function lazyLoadSources(video) {
    if (video.hasAttribute('data-loaded')) return;

    const sources = Array.from(video.children).filter(el => el.tagName === 'SOURCE');
    let changed = false;

    for (const source of sources) {
        const dataSrc = source.getAttribute('data-src');
        if (!dataSrc) continue;
        source.src = dataSrc;
        source.removeAttribute('data-src');
        changed = true;
    }

    if (changed) {
        video.load();
    }

    // Mark as processed when metadata is ready
    if (!video.hasAttribute('data-loaded')) {
        const onMeta = () => {
            video.setAttribute('data-loaded', 'true');
            video.removeEventListener('loadedmetadata', onMeta);
        };
        video.addEventListener('loadedmetadata', onMeta, { once: true });
    }
}

/** Play with guard to reduce noisy errors in consoles */
async function safePlay(video) {
    // Avoid repeated play() spam while already playing
    if (!video.paused && !video.ended) return;

    try {
        await video.play();
    } catch (err) {
        console.debug('Video play() blocked or failed:', err?.name || err);
    }
}


function handleIntersect(entries) {
    entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
            lazyLoadSources(video);

            if (!shouldAutoplay(video)) return;

            primeForAutoplay(video);

            video.classList.add('js-video__visible');
            video.parentElement?.classList.add('js-video-ready');
            safePlay(video);
        } else {
            video.classList.remove('js-video__visible');
            // Guard: only pause if not already paused
            if (!video.paused) {
                video.pause();
            }
        }
    });
}

/** Pause everything if the tab is hidden; resume visible ones on return */
function handleVisibilityChange() {
    const videos = document.querySelectorAll(VIDEO_SELECTOR);
    if (document.hidden) {
        videos.forEach(v => { if (!v.paused) v.pause(); });
    } else {
        // Let the observer drive resume; no action needed here
    }
}


/**
 * Initialise the video observer.
 * @param {IntersectionObserverInit} [opts]
 * @returns {{ cleanup: () => void }}
 */
export default function init(opts) {
    const elements = Array.from(document.querySelectorAll(VIDEO_SELECTOR))
        .filter(el => el instanceof HTMLVideoElement);

    if (!elements.length) {
        console.warn(`No video elements found matching selector: ${VIDEO_SELECTOR}`);
        return { cleanup() { } };
    }

    // Fallback if IntersectionObserver is unavailable
    if (!('IntersectionObserver' in window)) {
        console.error('IntersectionObserver not available: playing all videos as fallback.');
        elements.forEach(video => {
            lazyLoadSources(video);
            if (!shouldAutoplay(video)) return;
            primeForAutoplay(video);
            video.classList.add('js-video__visible');
            video.parentElement?.classList.add('js-video-ready');
            safePlay(video);
        });
        return { cleanup() { } };
    }

    const options = {
        root: null,
        // Preload a touch before entering; 200px tends to feel nicer than 50px
        rootMargin: '200px 0px',
        // 0.4 is fine; if videos are tall, consider 0.25 for snappier starts
        threshold: 0.4,
        ...opts
    };

    observer = new IntersectionObserver(handleIntersect, options);
    elements.forEach(video => observer.observe(video));

    // Tab visibility handling
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Provide a teardown for SPA/unmount cases
    const cleanup = () => {
        try {
            observer?.disconnect();
        } catch { }
        document.removeEventListener('visibilitychange', handleVisibilityChange);
    };

    return { cleanup };
}