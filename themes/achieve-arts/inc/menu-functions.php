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
        'primary-one'         => esc_html__( 'Primary Menu One', 'bwp-theme' ),
        'primary-two'         => esc_html__( 'Primary Menu Two', 'bwp-theme' ),
        'primary-three'       => esc_html__( 'Primary Menu Three', 'bwp-theme' ),
        'footer-menu-one'     => esc_html__( 'Footer Menu One', 'bwp-theme' ),
        'footer-menu-two'     => esc_html__( 'Footer Menu Two', 'bwp-theme' ),
        'footer-menu-three'   => esc_html__( 'Footer Menu Three', 'bwp-theme' ),
        // Add more locations here in the future
    );
    register_nav_menus($locations);
}

add_action( 'after_setup_theme', 'bwp_menus_setup' );



/**
 * Adds an additional toggle button for menu items that have children and require an action to view
 * 
 * 
*/
class Add_Nav_Toggle_Custom_Walker extends Walker_Nav_Menu {
    public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
        // Existing start_el logic here
        parent::start_el( $output, $item, $depth, $args, $id );

        // Check if this item has children and append a button within the <li>
        if ( in_array( 'menu-item-has-children', $item->classes ) ) {
            $output .= '<span class="sub-menu__toggle js-mobile-nav__toggle">
							<svg viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.21429 2.85753C8.20986 2.77566 8.17943 2.7108 8.13905 2.6704L5.58981 0.0844738C5.47253 -0.0287664 5.29716 -0.0239823 5.18928 0.0738409C5.0814 0.171664 5.07642 0.355081 5.17822 0.458749L7.27157 2.58533L0.283249 2.58533C0.126683 2.58533 -1.31449e-07 2.70708 -1.24872e-07 2.85753C-1.18296e-07 3.00799 0.126687 3.12973 0.283249 3.12973L7.27157 3.12973L5.17822 5.25631C5.07642 5.35998 5.08527 5.53967 5.18928 5.64122C5.29716 5.74595 5.48802 5.73426 5.58981 5.63059L8.13905 3.04467C8.20654 2.97874 8.20986 2.92239 8.21429 2.85753Z" fill="white"/>
                            </svg>
						</span>';
        }
    }
}