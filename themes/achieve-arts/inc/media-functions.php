<?php 

add_action( 'after_setup_theme', 'bwp_theme_setup' );
function bwp_theme_setup() {
	add_image_size( 'cta', 1000 );
}