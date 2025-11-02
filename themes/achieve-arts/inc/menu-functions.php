<?php 
/**
 * Menu Functions
 *
 * This file contains functions related to WordPress menu setup and modifications.
 * It includes menu registration, accessibility enhancements, and parent menu item identification.
 *
 * @package BWP_Theme
 * @subpackage Menu_Functions
 */

// Register Menus
function bwp_menus_setup() {
    $locations = array(
        'primary'             => esc_html__( 'Primary Menu', 'bwp-theme' ),
        'footer-menu-one'     => esc_html__( 'Footer Menu One', 'bwp-theme' ),
        'footer-menu-two'     => esc_html__( 'Footer Menu Two', 'bwp-theme' ),
        'footer-menu-three'   => esc_html__( 'Footer Menu Three', 'bwp-theme' ),
        // Add more locations here in the future
    );
    register_nav_menus($locations);
}

add_action( 'after_setup_theme', 'bwp_menus_setup' );