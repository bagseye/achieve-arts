<?php

/**
 * Register a custom post type called "Example".
 *
 * @see get_post_type_labels() for label keys.
 * 
 * @link https://developer.wordpress.org/reference/functions/register_post_type/
 */

function team_members_cpt_init() {

    $TEXT_DOMAIN = 'bwp';
    $SLUG = 'example';
    $REGISTRATION_NAME = 'team-members';
    $SINGULAR_NAME = 'Team Member';
    $SINGULAR_NAME_LOWER = strtolower($SINGULAR_NAME);
    $PLURAL_NAME = 'Team Members';
    $PLURAL_NAME_LOWER = strtolower($PLURAL_NAME);

    $labels = array(
        'name'                  => _x( $PLURAL_NAME, 'Post type general name', $TEXT_DOMAIN ),
        'singular_name'         => _x( $SINGULAR_NAME, 'Post type singular name', $TEXT_DOMAIN ),
        'menu_name'             => _x( $PLURAL_NAME, 'Admin Menu text', $TEXT_DOMAIN ),
        'name_admin_bar'        => _x( $SINGULAR_NAME, 'Add New on Toolbar', $TEXT_DOMAIN ),
        'add_new'               => __( 'Add New', $TEXT_DOMAIN ),
        'add_new_item'          => __( 'Add New ' . $SINGULAR_NAME_LOWER, $TEXT_DOMAIN ),
        'new_item'              => __( 'New ' . $SINGULAR_NAME_LOWER, $TEXT_DOMAIN ),
        'edit_item'             => __( 'Edit ' . $SINGULAR_NAME_LOWER, $TEXT_DOMAIN ),
        'view_item'             => __( 'View ' . $SINGULAR_NAME_LOWER, $TEXT_DOMAIN ),
        'all_items'             => __( 'All ' . $PLURAL_NAME_LOWER, $TEXT_DOMAIN ),
        'search_items'          => __( 'Search ' . $PLURAL_NAME_LOWER, $TEXT_DOMAIN ),
        'parent_item_colon'     => __( 'Parent ' . $PLURAL_NAME_LOWER . ':', $TEXT_DOMAIN ),
        'not_found'             => __( 'No ' . $PLURAL_NAME_LOWER . ' found.', $TEXT_DOMAIN ),
        'not_found_in_trash'    => __( 'No ' . $PLURAL_NAME_LOWER . ' found in Trash.', $TEXT_DOMAIN ),
        'featured_image'        => _x( $SINGULAR_NAME . ' Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', $TEXT_DOMAIN ),
        'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', $TEXT_DOMAIN ),
        'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', $TEXT_DOMAIN ),
        'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', $TEXT_DOMAIN ),
        'archives'              => _x( $SINGULAR_NAME . ' archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', $TEXT_DOMAIN ),
        'insert_into_item'      => _x( 'Insert into ' . $SINGULAR_NAME_LOWER, 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', $TEXT_DOMAIN ),
        'uploaded_to_this_item' => _x( 'Uploaded to this ' . $SINGULAR_NAME_LOWER, 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', $TEXT_DOMAIN ),
        'filter_items_list'     => _x( 'Filter ' . $PLURAL_NAME_LOWER . ' list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', $TEXT_DOMAIN ),
        'items_list_navigation' => _x( $PLURAL_NAME . ' list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', $TEXT_DOMAIN ),
        'items_list'            => _x( $PLURAL_NAME . ' list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', $TEXT_DOMAIN ),
    );     
    $args = array(
        'labels'             => $labels,
        'description'        => $SINGULAR_NAME . ' custom post type.',
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => $SLUG ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 20,
        'menu_icon'          => 'dashicons-groups',
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail' ),
        'taxonomies'         => array( 'team_speciality' ),
        'show_in_rest'       => true
    );
     
    register_post_type( $REGISTRATION_NAME, $args );
}
add_action( 'init', 'team_members_cpt_init' );



// Team Speciality Category
function team_speciality_taxonomy() {
    $labels = array(
        'name'              => _x( 'Team Specialities', 'taxonomy general name', 'bwp' ),
        'singular_name'     => _x( 'Team Speciality', 'taxonomy singular name', 'bwp' ),
        'search_items'      => __( 'Search Team Specialities', 'bwp' ),
        'all_items'         => __( 'All Team Specialities', 'bwp' ),
        'parent_item'       => __( 'Parent Team Speciality', 'bwp' ),
        'parent_item_colon' => __( 'Parent Team Speciality:', 'bwp' ),
        'edit_item'         => __( 'Edit Team Speciality', 'bwp' ),
        'update_item'       => __( 'Update Team Speciality', 'bwp' ),
        'add_new_item'      => __( 'Add New Team Speciality', 'bwp' ),
        'new_item_name'     => __( 'New Team Speciality Name', 'bwp' ),
        'menu_name'         => __( 'Team Speciality', 'bwp' ),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 
			'slug' 				=> 'team-speciality',
			'with_front' 		=> false  
		),
		'show_in_rest'		=> true
    );

    // The key part: associate the taxonomy with the custom post type
    register_taxonomy( 'team_speciality', array( 'team-members' ), $args );
}

add_action( 'init', 'team_speciality_taxonomy', 11 );