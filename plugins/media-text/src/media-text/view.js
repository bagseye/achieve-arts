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

let $mediatextcarousels;
let $maps;

function cacheDOM() {
	$mediatextcarousels = [
		...document.querySelectorAll( '.splide.js-carousel__media-text' ),
	];

	$maps = [
		...document.querySelectorAll( '.js-google-map[data-lat][data-lng]' ),
	];
}

function bindMediaTextCarousels( $mediatextcarousel ) {
	var splide = new window.Splide( $mediatextcarousel, {
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

// --- Google Maps loader (loads once) ---
function loadGoogleMaps( apiKey ) {
	// Already loaded?
	if ( window.google && window.google.maps ) {
		return Promise.resolve( window.google );
	}

	// Already loading?
	if ( window.__bwpGoogleMapsPromise ) {
		return window.__bwpGoogleMapsPromise;
	}

	window.__bwpGoogleMapsPromise = new Promise( ( resolve, reject ) => {
		if ( ! apiKey ) {
			reject( new Error( 'Missing Google Maps API key' ) );
			return;
		}

		const scriptId = 'bwp-google-maps-js';
		if ( document.getElementById( scriptId ) ) {
			// Script tag exists but google not ready yet; wait a tick
			const timer = setInterval( () => {
				if ( window.google && window.google.maps ) {
					clearInterval( timer );
					resolve( window.google );
				}
			}, 50 );

			setTimeout( () => {
				clearInterval( timer );
				reject(
					new Error(
						'Google Maps script present but did not initialise'
					)
				);
			}, 8000 );

			return;
		}

		const script = document.createElement( 'script' );
		script.id = scriptId;
		script.async = true;
		script.defer = true;
		script.src =
			'https://maps.googleapis.com/maps/api/js?key=' +
			encodeURIComponent( apiKey );

		script.onload = () => {
			if ( window.google && window.google.maps ) {
				resolve( window.google );
			} else {
				reject(
					new Error( 'Google Maps loaded but `google.maps` missing' )
				);
			}
		};

		script.onerror = () =>
			reject( new Error( 'Failed to load Google Maps script' ) );
		document.head.appendChild( script );
	} );

	return window.__bwpGoogleMapsPromise;
}

// --- Maps init ---
function initMaps() {
	// Provide the key via a global set in PHP (shown below)
	if ( ! $maps.length ) return;

	const apiKey = window.BWP_MAPS?.apiKey;
	if ( ! apiKey ) {
		console.warn( '[Media Text] window.BWP_MAPS.apiKey is missing' );
		return;
	}

	const markerUrl = window.BWP_MAPS?.markerUrl;
	const markerSize = window.BWP_MAPS?.markerSize || [ 75, 90 ];

	loadGoogleMaps( apiKey )
		.then( () => {
			$maps.forEach( ( el ) => {
				const lat = parseFloat( el.dataset.lat );
				const lng = parseFloat( el.dataset.lng );
				const zoom = parseInt( el.dataset.zoom || '14', 10 );

				if ( ! Number.isFinite( lat ) || ! Number.isFinite( lng ) )
					return;

				// Prefer a child canvas if you output one; else use the container itself
				const canvas =
					el.querySelector( '.c-media-text__map-canvas' ) || el;

				const centre = { lat, lng };

				const map = new window.google.maps.Map( canvas, {
					center: centre,
					zoom,
					disableDefaultUI: true,
					gestureHandling: 'cooperative', // nicer UX on scroll pages
				} );

				new window.google.maps.Marker( {
					position: centre,
					map,
					// Optional custom marker:
					icon: markerUrl
						? {
								url: markerUrl,
								scaledSize: new window.google.maps.Size(
									markerSize[ 0 ],
									markerSize[ 1 ]
								),
								// Optional: if your SVG is “pointy” at the bottom, anchor it:
								anchor: new window.google.maps.Point(
									markerSize[ 0 ] / 2,
									markerSize[ 1 ]
								),
						  }
						: undefined,
				} );
			} );
		} )
		.catch( ( err ) => {
			// Don’t hard-fail the page if maps doesn’t load
			console.warn( '[Media Text] Google Maps not initialised:', err );
		} );
}

function init() {
	cacheDOM();

	if ( $mediatextcarousels.length ) {
		$mediatextcarousels.forEach( ( mediatextcarousel ) => {
			bindMediaTextCarousels( mediatextcarousel );
		} );
	}

	initMaps();
}

init();
