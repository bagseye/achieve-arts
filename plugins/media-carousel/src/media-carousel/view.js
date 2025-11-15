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

import Splide from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';

let $videocarousels;

function cacheDOM() {
	$videocarousels = [
		...document.querySelectorAll( '.splide.js-carousel__video' ),
	];
}

function bindVideoCarousels( $videocarousel ) {
	var splide = new Splide( $videocarousel, {
		perPage: 1,
		type: 'loop',
		gap: 16,
		autoWidth: false,
		focus: 'center',
		pagination: true,
		arrows: false,
		video: {
			autoplay: true,
			loop: true,
			mute: true,
			disableOverlayUI: true,
			hideControls: true,
		},
	} );
	splide.mount( { Video } );
}

function init() {
	cacheDOM();

	if ( $videocarousels.length ) {
		$videocarousels.forEach( ( videocarousel ) => {
			bindVideoCarousels( videocarousel );
		} );
	}
}

init();
