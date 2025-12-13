<?php 
/**
 * WP Theme constants and setup functions
 *
 * @package BoilerplateWP
 */

// Useful global constants.
define( 'BWP_THEME_PATH', get_template_directory() . '/' );
define( 'BWP_THEME_INC', BWP_THEME_PATH . 'inc/' );
define( 'BWP_THEME_CLASSES', BWP_THEME_PATH . 'classes/' );

require_once BWP_THEME_INC . 'allowed-blocks.php';
require_once BWP_THEME_INC . 'core.php';
require_once BWP_THEME_INC . 'maps.php';
// require_once BWP_THEME_INC . 'helper-functions.php';
require_once BWP_THEME_INC . 'post-types.php';
// require_once BWP_THEME_INC . 'no-comments.php';
// require_once BWP_THEME_INC . 'disable-emojis.php';
require_once BWP_THEME_INC . 'menu-functions.php';
require_once BWP_THEME_INC . 'loadmore.php';
// require_once BWP_THEME_CLASSES . 'class-add-nav-toggle-walker.php';

