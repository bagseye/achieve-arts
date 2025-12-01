<?php 

$BLOCK_NAME = 'c-news-feed';

?>

<article class="p-archive__card c-news-feed__card">
    <a href="<?php echo esc_url(get_the_permalink($post->ID)); ?>" title="<?php echo esc_attr(get_the_title($post->ID)); ?>">
        <div class="<?php echo $BLOCK_NAME ?>__card--inner">
            <div class="<?php echo $BLOCK_NAME ?>__card--container">
                <div class="<?php echo $BLOCK_NAME ?>__card--media">
                        <?php 
                        $mediaid = $mediasrc = $mediaalt = null;
                        if(has_post_thumbnail( $post->ID )) {
                                $mediasrc = get_the_post_thumbnail_url($post->ID, '1536x1536');
                                $mediaid = get_post_thumbnail_id($post->ID);
                                $mediaalt = get_post_meta($mediaid, '_wp_attachment_image_alt', true);
                        }

                        if(!$mediaalt) {
                                $mediaalt = get_the_title($post->ID);
                        }
                        
                        ?>
                        <picture>
                            <?php echo wp_filter_content_tags('<img class="wp-image-' . esc_attr( $mediaid ) . '" src="' . esc_url( $mediasrc ) . '" alt="' . esc_attr( $mediaalt ) . '" >'); ?>																					
                        </picture>
                        <?php 
                        
                        $categories = get_the_category();

                        if ( ! empty( $categories ) ) {
                                $first_category = $categories[0];
                                echo '<span class="' . $BLOCK_NAME . '__card--tab h-tab"><p>' . esc_html( $first_category->name ) . '</p></span>';
                        }
                        
                        ?>
                </div>
                <div class="<?php echo $BLOCK_NAME ?>__card--content">
                        <header class="<?php echo $BLOCK_NAME ?>__card--header">
                                <h3 class="<?php echo esc_attr( $BLOCK_NAME ); ?>__card--heading"><?php echo esc_html( get_the_title( $post->ID ) ); ?></h3>
                        </header>
                        <p><?php echo get_the_excerpt($post->ID) ?></p>
                </div>
            </div>
        </div>
    </a>
</article>