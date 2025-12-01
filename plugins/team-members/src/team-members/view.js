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


let $teamcarousels;

function cacheDOM() {
	$teamcarousels = [
		...document.querySelectorAll( '.splide.js-carousel__team-members' ),
	];
}

function bindTeamCarousels( $teamcarousel ) {
	var splide = new Splide( $teamcarousel, {
		gap: 16,
		perPage: 3,
		type: 'loop',
		autoWidth: true,
		focus: 'center',
		pagination: false,
		arrows: true,
		breakpoints: {
			1260: {
				gap: 12,
				perPage: 2,
				padding: {
					left: '60px',
					right: '60px'
				}
			},
			760: {
				perPage: 1,
				padding: {
					left: '120px',
					right: '120px'
				}
			},
			560: {
				gap: 8,
				padding: {
					left: '70px',
					right: '70px'
				}
			},
			360: {
				padding: {
					left: '50px',
					right: '50px'
				}
			}
		},
	} );
	splide.mount();
}

function init() {
	cacheDOM();

	if ( $teamcarousels.length ) {
		$teamcarousels.forEach( ( teamcarousel ) => {
			bindTeamCarousels( teamcarousel );
		} );
	}
}

init();
