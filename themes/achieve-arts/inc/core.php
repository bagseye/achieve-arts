<?php 

/**
 * Theme setup
 * --------------------------------------------------
 * Registers theme supports, image sizes, etc.
 */
if ( ! function_exists( 'bwp_theme_setup' ) ) {

	function bwp_theme_setup() {

		// Document <title> tag managed by WordPress.
		add_theme_support( 'title-tag' );

		// Featured images.
		add_theme_support( 'post-thumbnails' );

		// Block editor stylesheet support.
		add_theme_support( 'editor-styles' );
		add_editor_style( 'assets/editor.css' );

		// HTML5 markup for some core elements.
		add_theme_support(
			'html5',
			array(
				'search-form',
				'gallery',
			)
		);

		// Disable core block patterns.
		remove_theme_support( 'core-block-patterns' );

		// Disable block templates (template editor) for this classic theme.
		remove_theme_support( 'block-templates' );

		// Custom image sizes.
		add_image_size( 'cta', 1000 );
		add_image_size( 'pageherocorner', 500, 500, true );
		add_image_size( 'instacard', 700 );
	}
}
add_action( 'after_setup_theme', 'bwp_theme_setup' );


/**
 * Expose custom image sizes in the media modal.
 */
function bwp_custom_sizes( $sizes ) {
	return array_merge(
		$sizes,
		array(
			'pageherocorner' => __( 'Page Hero Corner' ),
		)
	);
}
add_filter( 'image_size_names_choose', 'bwp_custom_sizes' );


/**
 * General head cleanup
 * --------------------------------------------------
 * Removes various default tags from <head>.
 */
if ( ! function_exists( 'bwp_init' ) ) {

	function bwp_init() {

		// Remove the WordPress version meta tag.
		remove_action( 'wp_head', 'wp_generator' );

		// Remove Windows Live Writer manifest link.
		remove_action( 'wp_head', 'wlwmanifest_link' );

		// Remove xmlrpc.php RSD (Really Simple Discovery) link.
		remove_action( 'wp_head', 'rsd_link' );
	}
}
add_action( 'init', 'bwp_init' );


/**
 * Strip only the <style id="global-styles-inline-css"> tag
 * from the final HTML output on the front-end.
 */
add_action( 'template_redirect', function () {
    if ( is_admin() ) {
        return;
    }

    ob_start( function ( $html ) {
        // Remove the entire <style id="global-styles-inline-css">…</style> block.
        $html = preg_replace(
            '#<style[^>]+id=(["\'])global-styles-inline-css\1[^>]*>.*?</style>#s',
            '',
            $html
        );

        return $html;
    } );
});



/**
 * Front-end scripts & styles
 * --------------------------------------------------
 * Enqueue theme assets and dequeue unwanted core styles.
 */
if ( ! function_exists( 'bwp_scripts' ) ) {

	function bwp_scripts() {

		// --- Remove core/front-end styles we don't want ---

		// Classic theme styles.
		wp_dequeue_style( 'classic-theme-styles' );

		// Block library styles (front-end).
		wp_dequeue_style( 'wp-block-library' );
		wp_dequeue_style( 'wp-block-library-theme' );

		// Emoji styles.
		wp_dequeue_style( 'wp-emoji-styles' );

		// Global styles handle (also responsible for the inline global styles block).
		wp_dequeue_style( 'global-styles' );


		// --- Theme styles ---

		wp_enqueue_style(
			'main-style',
			get_template_directory_uri() . '/assets/main.css',
			[],
			getBuildTimeStamp()
		);

		if ( is_home() || is_archive() ) {
			wp_enqueue_style(
				'archive-style',
				get_template_directory_uri() . '/assets/archive.css',
				[],
				getBuildTimeStamp()
			);
		}

		if ( is_singular() ) {
			wp_enqueue_style(
				'single-style',
				get_template_directory_uri() . '/assets/single.css',
				[],
				getBuildTimeStamp()
			);
		}

		if ( is_404() ) {
			wp_enqueue_style(
				'error-style',
				get_template_directory_uri() . '/assets/error.css',
				[],
				getBuildTimeStamp()
			);
		}


		// --- Theme scripts ---

		wp_enqueue_script(
			'main-script',
			get_template_directory_uri() . '/assets/main.min.js',
			[],
			getBuildTimeStamp(),
			true
		);

		if(is_page_template( 'page-testimonials.php' )) {
			wp_enqueue_script(
				'masonry-build-script',
				'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js',
				[],
				getBuildTimeStamp(),
				true
			);

			wp_enqueue_script(
				'masonry-script',
				get_template_directory_uri() . '/assets/masonry.min.js',
				['masonry-build-script'],
				getBuildTimeStamp(),
				true
			);
		}

		// Only enqueue vendors bundle if it exists.
		$vendors_file_path = get_template_directory() . '/assets/vendors.min.js';
		if ( file_exists( $vendors_file_path ) ) {
			wp_enqueue_script(
				'vendors-script',
				get_template_directory_uri() . '/assets/vendors.min.js',
				[],
				getBuildTimeStamp(),
				true
			);
		}
	}
}
add_action( 'wp_enqueue_scripts', 'bwp_scripts', 20 );


/**
 * Global vendor scripts for blocks (Splide, etc.)
 * --------------------------------------------------
 * Registered so they can be used as dependencies in custom blocks.
 */
add_action(
	'init',
	function () {

		$splide_version = getBuildTimeStamp();

		wp_register_script(
			'splide-core',
			get_template_directory_uri() . '/vendors/splide.min.js',
			[],
			$splide_version,
			true
		);

		wp_register_script(
			'splide-auto-scroll',
			get_template_directory_uri() . '/vendors/splide-extension-auto-scroll.min.js',
			[ 'splide-core' ],
			$splide_version,
			true
		);

		wp_register_script(
			'splide-video',
			get_template_directory_uri() . '/vendors/splide-extension-video.min.js',
			[ 'splide-core' ],
			$splide_version,
			true
		);
	}
);


/**
 * Block editor extras
 * --------------------------------------------------
 * Custom sidebar UI / controls for blocks.
 */
function bwp_block_additional_styles_enqueue() {
	wp_enqueue_script(
		'bwp-block-additonal-styles-script',
		get_template_directory_uri() . '/bwp-block-additional-styles.js',
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' )
	);
}
add_action( 'enqueue_block_editor_assets', 'bwp_block_additional_styles_enqueue' );


/**
 * Remove core block styles in the editor
 * --------------------------------------------------
 * This affects the block editor only (not the front-end).
 * It strips the registered styles for some core block libraries.
 */
if ( ! function_exists( 'bwp_remove_editor_core_block_styles' ) ) {

	function bwp_remove_editor_core_block_styles( $styles ) {

		$handles = array( 'wp-block-library', 'wp-block-library-theme' );

		foreach ( $handles as $handle ) {

			// Look up the style object.
			$style = $styles->query( $handle, 'registered' );
			if ( ! $style ) {
				continue;
			}

			// Remove the style.
			$styles->remove( $handle );

			// Re-add as an empty handle (no src, no deps).
			$styles->add( $handle, false, array() );
		}
	}
}
add_action( 'wp_default_styles', 'bwp_remove_editor_core_block_styles', PHP_INT_MAX );


/**
 * Build number (cache-busting)
 * --------------------------------------------------
 * Reads assets/build-info.json and returns the current build number.
 */
function getBuildTimeStamp() {

	$build_file_path = __DIR__ . '/../assets/build-info.json';
	$buildNo         = 0;

	if ( file_exists( $build_file_path ) && is_readable( $build_file_path ) ) {
		$buildFile = file_get_contents( $build_file_path );
		$buildData = json_decode( $buildFile, true );
		if ( isset( $buildData['build'] ) ) {
			$buildNo = $buildData['build'];
		}
	}

	return $buildNo;
}
