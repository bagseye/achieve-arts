<?php 
// Enqueue scripts and localize data
add_action( 'wp_enqueue_scripts', function() {
    global $wp_query;

    wp_register_script(
        'loadmore_script',
        get_template_directory_uri() . '/assets/loadmore.min.js',
        array( 'jquery' ),
        time(),
        true
    );
 
    wp_localize_script( 
        'loadmore_script', 
        'loadmore_params', 
        array(
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'posts_per_page' => get_option('posts_per_page'),
            'current_page' => get_query_var('paged') ? get_query_var('paged') : 1,
            'max_page' => $wp_query->max_num_pages
        )
    );

    wp_enqueue_script( 'loadmore_script' );
});

// AJAX handler for loading more posts
add_action( 'wp_ajax_load_more_posts', 'load_more_posts_handler' ); 
add_action( 'wp_ajax_nopriv_load_more_posts', 'load_more_posts_handler' );



function load_more_posts_handler(){
    $page = isset($_POST['page']) ? absint($_POST['page']) : 1;
    $category_id = isset($_POST['category_id']) ? intval($_POST['category_id']) : '';
    $posts_per_page = get_option('posts_per_page');
    
    $args = array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => $posts_per_page,
        'paged' => $page
    );
    
    // Add category filter if provided
    if (!empty($category_id)) {
        $args['cat'] = $category_id;
    }

    $posts_html = '';
    $posts_query = new WP_Query($args);
 
    if($posts_query->have_posts()) :
        ob_start();
        
        while($posts_query->have_posts()): $posts_query->the_post();
            get_template_part('template-parts/components/card', 'archive');
        endwhile;
        
        $posts_html = ob_get_contents();
        ob_end_clean();
    endif;
    
    wp_reset_postdata();
 
    echo json_encode(array(
        'posts' => $posts_html,
        'current_page' => $page,
        'max_page' => $posts_query->max_num_pages
    ));
 
    die();
}