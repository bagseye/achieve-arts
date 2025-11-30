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
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

let $newscarousels;

function cacheDOM() {
	$newscarousels = [
		...document.querySelectorAll( '.splide.js-carousel__news-feed' ),
	];
}

function bindNewsCarousels( $newscarousel ) {
	var splide = new Splide( $newscarousel, {
		gap: 12,
		type: 'loop',
		autoWidth: true,
		focus: 'center',
		pagination: false,
		arrows: false,
		breakpoints: {
			760: {
				gap: 12,
			},
		},
		autoScroll: {
			speed: 0.75,
			pauseOnHover: false,
		},
	} );
	splide.mount( { AutoScroll } );
}

function init() {
	cacheDOM();

	if ( $newscarousels.length ) {
		$newscarousels.forEach( ( teamcarousel ) => {
			bindNewsCarousels( teamcarousel );
		} );
	}
}

init();
