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


let $testimonialscarousels;

const { Extensions } = window.splide;

const chosenExtensions = {
	AutoScroll: Extensions.AutoScroll,
};

function cacheDOM() {
	$testimonialscarousels = [
		...document.querySelectorAll( '.splide.js-carousel__testimonials' ),
	];
}

function bindTestimonialsCarousels( $testimonialscarousel ) {
	let splide;
	if (
		$testimonialscarousel.classList.contains(
			'js-carousel__testimonials--scrolling-card'
		)
	) {
		splide = new window.Splide( $testimonialscarousel, {
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
				pauseOnHover: false
			},
		} );
		splide.mount( chosenExtensions );
	} else {
		splide = new window.Splide( $testimonialscarousel, {
			perPage: 1,
			type: 'fade',
			rewind: true,
			autoWidth: false,
			focus: 'center',
			pagination: false,
			arrows: true,
		} );
		splide.mount();
	}
}

function init() {
	cacheDOM();

	if ( $testimonialscarousels.length ) {
		$testimonialscarousels.forEach( ( testimonialscarousel ) => {
			bindTestimonialsCarousels( testimonialscarousel );
		} );
	}
}

init();
