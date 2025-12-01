<?php 

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
if (!function_exists('bwp_theme_setup')) {

	function bwp_theme_setup()
	{
		add_theme_support('title-tag');
		add_theme_support('post-thumbnails');
		// Add support for an additional stylesheet for the block editor
		add_theme_support('editor-styles');
		// Set the location of the editor stylesheet
		add_editor_style('assets/editor.css');
		add_theme_support(
			'html5',
			array(
				'search-form',
				'gallery',
			)
		);
		// Remove block patterns for core blocks
		remove_theme_support('core-block-patterns');
		// by adding the `theme.json` file block templates automatically get enabled.
		// because the template editor will need additional QA and work to get right
		// the default is to disable this feature.
		remove_theme_support('block-templates');

		add_image_size( 'cta', 1000 );
		add_image_size( 'pageherocorner', 500, 500, true );
		add_image_size( 'instacard', 700 );
	}
}
add_action('after_setup_theme', 'bwp_theme_setup');


add_filter( 'image_size_names_choose', 'bwp_custom_sizes' );
function bwp_custom_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'pageherocorner' => __( 'Page Hero Corner' ),
    ) );
}


if (!function_exists('bwp_init')) {

	function bwp_init()
	{
		// Remove the version number from <head>
		remove_action('wp_head', 'wp_generator');
		// Remove global-styles-inline-css from <head> 
		remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
		// Remove Windows Live Writer Manifest link from <head>
		remove_action('wp_head', 'wlwmanifest_link');
		// Remove xmlrpc.php?rsd link from <head>
		remove_action('wp_head', 'rsd_link');
	}
}
add_action('init', 'bwp_init');


if (!function_exists('bwp_scripts')) {

	function bwp_scripts()
	{
		// Remove the 'classic-styles' from the frontend
		wp_dequeue_style('classic-theme-styles');
		// Remove basic block styles from the frontend
		wp_dequeue_style('wp-block-library');

		// Styles
		wp_enqueue_style('main-style', get_template_directory_uri() . '/assets/main.css', [], getBuildTimeStamp());

		// Scripts
		wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/main.min.js', [], getBuildTimeStamp(), true);
		$vendors_file_path = get_template_directory() . '/assets/vendors.min.js';
		if(file_exists($vendors_file_path)) {
			// Only enqueue vendors script if the file exists
			wp_enqueue_script('vendors-script', get_template_directory_uri() . '/assets/vendors.min.js', [], getBuildTimeStamp(), true);
		}

		if (is_home() || is_archive()) {
			wp_enqueue_style('archive-style', get_template_directory_uri() . '/assets/archive.css', [], getBuildTimeStamp());
		}

		if (is_singular()) {
			wp_enqueue_style('single-style', get_template_directory_uri() . '/assets/single.css', [], getBuildTimeStamp());
		}

		if (is_404()) {
			wp_enqueue_style('error-style', get_template_directory_uri() . '/assets/error.css', [], getBuildTimeStamp());
		}
	}
}
add_action('wp_enqueue_scripts', 'bwp_scripts');


/**
 * 
 * These scripts will be made global and used as dependencies in custom blocks
 * 
*/
add_action( 'init', function () {
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
		[ 'splide-core' ], // depends on core
		$splide_version,
		true
	);

	wp_register_script(
		'splide-video',
		get_template_directory_uri() . '/vendors/splide-extension-video.min.js',
		[ 'splide-core' ], // depends on core
		$splide_version,
		true
	);
	
} );

/**
 * Custom scripts for the block editor
 * Used to add new options in the sidebar
 * Also removes basic functionality added by WP
 * 
*/
function bwp_block_additional_styles_enqueue() {
	wp_enqueue_script( 
		'bwp-block-additonal-styles-script', 
		get_template_directory_uri() . '/bwp-block-additional-styles.js', 
		array('wp-blocks', 'wp-dom-ready', 'wp-edit-post')
	);
}
add_action( 'enqueue_block_editor_assets', 'bwp_block_additional_styles_enqueue' );


/**
 * Remove block styles of core blocks within the editor
 * 
 * https://fullsiteediting.com/lessons/how-to-remove-default-block-styles/
 * 
 * This does not solve the 'issue' of inline styles being applied
 * Solution still required for this
 * @TODO - Fix inline css loading of core blocks to prevent styling overrides
 * 
 */
if (!function_exists('bwp_remove_editor_core_block_styles')) {
	function bwp_remove_editor_core_block_styles($styles)
	{
		/* Create an array with the two handles wp-block-library and
		 * wp-block-library-theme.
		 */
		$handles = ['wp-block-library', 'wp-block-library-theme'];

		foreach ($handles as $handle) {
			// Search and compare with the list of registered style handles:
			$style = $styles->query($handle, 'registered');
			if (! $style) {
				continue;
			}
			// Remove the style
			$styles->remove($handle);
			// Remove path and dependencies
			$styles->add($handle, false, []);
		}
	}
}
add_action('wp_default_styles', 'bwp_remove_editor_core_block_styles', PHP_INT_MAX);


/**
 * Get the build number. Used to 'bust' cache
 * 
 */
function getBuildTimeStamp()
{
	$build_file_path = __DIR__ . '/../assets/build-info.json';
	$buildNo = 0;

	if (file_exists($build_file_path)) {
		if (is_readable($build_file_path)) {
			$buildFile = file_get_contents($build_file_path);
			$buildData = json_decode($buildFile, true);
			if (isset($buildData['build'])) {
				$buildNo = $buildData['build'];
			}
		}
	}

	return $buildNo;
}