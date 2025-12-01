<article class="e-card-archive">
    <a href="<?php echo get_the_permalink($post->ID) ?>" title="<?php echo get_the_title($post->ID); ?>">
        <div class="e-card-archive__inner">
            <div class="e-card-archive__container">
                <div class="e-card-archive__items grid-layout">
                    <div class="e-card-archive__media js-anim h-animate-in-fade">
                        <?php 
                        $mediaid = $mediasrc = $mediaalt = null;
                        if(has_post_thumbnail( $post->ID )) {
                            $mediasrc = get_the_post_thumbnail_url($post->ID, 'large');
                            $mediaid = get_post_thumbnail_id($post->ID);
                            $mediaalt = get_post_meta($mediaid, '_wp_attachment_image_alt', true);
                        }
    
                        if(!$mediaalt) {
                            $mediaalt = get_the_title($post->ID);
                        }
                        
                        ?>
                        <picture>
                            <?php echo wp_filter_content_tags('<img class="wp-image-' . $mediaid . '" src="' . $mediasrc . '" alt="' . $mediaalt . '" >') ?>
                        </picture>
                    </div>
                    <div class="e-card-archive__content">
                        <?php
                        $categories = get_the_category($post->ID);
                        if ($categories) {
                            $category = $categories[0];
                            $category_link = get_category_link($category->term_id);
                            echo '<p class="h-heading__pre js-anim h-animate-in-slide-left">' . esc_html($category->name) . '</p>';
                        }
                        ?>
                        <header class="e-card-archive__header">
                            <h3 class="e-card-archive__heading js-anim h-animate-in-slide-left"><?php echo get_the_title($post->ID); ?></h3>
                        </header>
                        <div class="e-card-archive__excerpt js-anim h-animate-in-slide-left">
                            <?php echo wp_trim_words(get_the_excerpt($post->ID), 10, '...'); ?>
                        </div>
                        <div class="e-card-archive__arrows e-pagination-arrows js-anim h-animate-in-slide-left">
                            <span class="e-card-archive__btn e-pagination-arrows__arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.228 27.228">
                                    <path d="M31.495,29.814l.1-20.135H30.037L30,29.474l-5.525-5.524-1.22,1.22,7.661,7.661h.034l1.186-1.22,6.474-6.474-1.22-1.22Z" transform="translate(20.459 50.518) rotate(-135)"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </a>
</article>