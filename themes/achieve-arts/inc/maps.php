<?php 

add_action( 'wp_enqueue_scripts', function () {
	if ( ! is_singular() || ! has_block( 'bwp/media-text' ) ) {
		return;
	}

	$api_key = defined( 'BWP_GOOGLE_MAPS_API_KEY' ) ? BWP_GOOGLE_MAPS_API_KEY : '';
	if ( empty( $api_key ) ) {
		return;
	}

	// 1) Register a tiny config script (no src needed)
	wp_register_script( 'bwp-maps-config', '', [], null, true );

	// 2) Add the config to it
	wp_add_inline_script(
		'bwp-maps-config',
		'window.BWP_MAPS = ' . wp_json_encode( [ 
      'apiKey' => $api_key,
      'markerUrl' => get_template_directory_uri() . '/images/svg/map-marker.svg',
      'markerSize' => [75, 90]
    ] ) . ';',
		'before'
	);

	// 3) Enqueue it
	wp_enqueue_script( 'bwp-maps-config' );
}, 20 );
