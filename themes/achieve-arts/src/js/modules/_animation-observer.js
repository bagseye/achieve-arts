let elementsToObserve;
let options;
let observer;

function cacheDOM() {
    elementsToObserve = [...document.querySelectorAll('.js-anim')];
}

export function observerCallback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-anim__visible');
            observer.unobserve(entry.target);
        }
    });
}

export function cleanup() {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
}

export function reinit() {
    init();
}

export default function init() {
    // Cleanup any existing observers
    cleanup();
    cacheDOM();
    if (elementsToObserve.length) {
        if (!('IntersectionObserver' in window)) {
            // Check if the API is available, if not, add the classes to display all items
            console.error('Intersection Observer API is not avaialble. Fallbacks are being used.')
            elementsToObserve.forEach(element => element.classList.add('js-anim__visible'));
        } else {
            options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.25
            };

            observer = new IntersectionObserver(observerCallback, options);
            elementsToObserve.forEach(element => {
                if (!element || !(element instanceof Element)) {
                    console.error('Invalid DOM element', element);
                    return;
                } else {
                    observer.observe(element);
                }
            });
        }
    }
}