/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

( function () {
	// Create a modal and reuse for all video buttons
	function createVideoModal() {
		const existing = document.querySelector( '.c-video-modal' );

		if ( existing ) return existing;

		const wrapper = document.createElement( 'div' );
		wrapper.className = 'c-video-modal';
		wrapper.setAttribute( 'hidden', 'hidden' );

		wrapper.innerHTML = `
			<div class="c-video-modal__backdrop" data-modal-close></div>
      	<button type="button" class="c-video-modal__close" data-modal-close aria-label="Close video">
					<span></span>
          <span></span>
				</button>
			<div class="c-video-modal__dialog" role="dialog" aria-modal="true" aria-label="Video player">

				<div class="c-video-modal__content">
					<video class="c-video-modal__video" controls playsinline></video>
				</div>
			</div>
		`;

		document.body.appendChild( wrapper );
		return wrapper;
	}

	function openVideoModal( src ) {
		if ( ! src ) return;

		const modal = createVideoModal();
		const videoEl = modal.querySelector( '.c-video-modal__video' );
    const closeBtn = modal.querySelector( '.c-video-modal__close' );

		// Set source and show modal
		videoEl.src = src;
		videoEl.load();
		videoEl.play().catch( () => {} );

		modal.removeAttribute( 'hidden' );
		document.body.classList.add( 'has-video-modal-open' );

    		// Store trigger for focus restoration
	modal.dataset.triggerElement = triggerElement;
	
	// Move focus to close button
	closeBtn?.focus();
	}

	function closeVideoModal() {
		const modal = document.querySelector( '.c-video-modal' );
		if ( ! modal ) return;

		const videoEl = modal.querySelector( '.c-video-modal__video' );
		if ( videoEl ) {
			videoEl.pause();
			videoEl.removeAttribute( 'src' );
			videoEl.load();
		}

		modal.setAttribute( 'hidden', 'hidden' );
		document.body.classList.remove( 'has-video-modal-open' );

    		// Restore focus to trigger
		const triggerId = modal.dataset.triggerElement;
		if ( triggerId ) {
			const trigger = document.querySelector( `[data-trigger-id="${triggerId}"]` );
			trigger?.focus();
		delete modal.dataset.triggerElement;
		}
	}

	function bindVideoButtons() {
		const triggers = document.querySelectorAll( '.js-video-popup-trigger' );

		triggers.forEach( ( btn ) => {
			if ( btn.dataset.hasVideoHandler ) return; // avoid double-binding
			btn.dataset.hasVideoHandler = 'true';

			btn.addEventListener( 'click', ( event ) => {
				event.preventDefault();
				const src = btn.getAttribute( 'data-video-src' );
				openVideoModal( src, btn );
			} );
		} );
	}

	document.addEventListener( 'DOMContentLoaded', () => {
		// Bind triggers on initial load
		bindVideoButtons();

		// Close by click (backdrop or close button)
		document.addEventListener( 'click', ( event ) => {
			const target = event.target;
			if ( target && target.hasAttribute( 'data-modal-close' ) ) {
				closeVideoModal();
			}
		} );

		// Close on ESC
		document.addEventListener( 'keydown', ( event ) => {
			if ( event.key === 'Escape' ) {
				closeVideoModal();
			}
		} );
	} );
} )();
