<?php 

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
			if ($buildData['build']) {
				$buildNo = $buildData['build'];
			}
		}
	}

	return $buildNo;
}