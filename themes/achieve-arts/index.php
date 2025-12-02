<?php get_header(); ?>

<main class="main-content p-archive">
    <div class="p-archive__inner">
        <div class="p-archive__container">
            <div class="p-archive__items margin-block__bottom">
                <?php if (have_posts()) : ?>

                    <?php the_post() ?>

                    <div class="p-archive__featured margin-block__bottom">
                        <div class="p-archive__featured--inner">
                            <div class="p-archive__featured--container">
                                <div class="p-archive__featured--items">
                                    <div class="p-archive__featured--item p-archive__featured--item-content">
                                        <header class="p-archive__featured--header">
                                            <?php 
                                        
                                            $categories = get_the_category();

                                            if ( ! empty( $categories ) ) {
                                                echo '<span class="p-archive__featured--tab h-tab">';
                                                    $first_category = $categories[0];
                                                    echo '<p>' . esc_html( $first_category->name ) . '</p>';
                                                echo '</span>';
                                            }
                                            
                                            ?>
                                            </span>
                                            <h2 class="p-archive__featured--heading"><?= get_the_title() ?></h2>
                                        </header>
                                        <div class="p-archive__featured--content-area d-typography">
                                            <p><?php echo get_the_excerpt() ?></p>
                                        </div>
                                    </div>
                                    <div class="p-archive__featured--item p-archive__featured--item-media">
                                    <?php 
                                        $mediaid = $mediasrc = $mediaalt = null;
                                        if(has_post_thumbnail(  )) {
                                                $mediasrc = get_the_post_thumbnail_url( '1536x1536');
                                                $mediaid = get_post_thumbnail_id();
                                                $mediaalt = get_post_meta($mediaid, '_wp_attachment_image_alt', true);
                                        }

                                        if(!$mediaalt) {
                                                $mediaalt = get_the_title();
                                        }
                                        
                                        ?>
                                        <picture>
                                            <?php echo wp_filter_content_tags('<img class="wp-image-' . esc_attr( $mediaid ) . '" src="' . esc_url( $mediasrc ) . '" alt="' . esc_attr( $mediaalt ) . '" >'); ?>																					
                                        </picture>

                                    </div>
                                </div>
                            </div>
                            <div class="p-archive__featured--gradient"></div>
                        </div>
                    </div>

                    <?php 

                    $categories = get_terms(array(
                        'taxonomy' => 'category',
                        'hide_empty' => false,
                        'orderby' => 'name',
                        'order' => 'ASC',
                    )); 

                    if ($categories) : ?>

                    <div class="p-archive__cats margin-block__bottom">
                        <div class="p-archive__cats--inner">
                            <div class="p-archive__cats--container">
                                <form id="ajax-filter" class="p-archive__cats--items grid-layout">
                                    <label for="category-select" class="p-archive__cats--label sr-only">Filter by Category</label>
                                    <select id="category-select" class="p-archive__cats--select e-form__input">
                                        <option value="">Filter by Category</option>
                                        <option value="">All</option>
                                        <?php foreach ($categories as $category) : ?>
                                            <option value="<?php echo esc_attr($category->term_id); ?>">
                                                <?php echo esc_html($category->name); ?>
                                            </option>
                                        <?php endforeach; ?>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>

                    <?php endif; ?>

                    <div id="site-content" class="p-archive__feed">
                
                    <?php while (have_posts()) : the_post(); ?>

                        <?php get_template_part('template-parts/components/card', 'archive'); ?>

                    <?php endwhile; ?>
                
                    </div>

                    <?php if ($wp_query->max_num_pages > 1) : ?>
                        <div class="load-more-trigger" id="load-more-trigger">
                            <div class="loading-indicator" style="display: none;">Loading more posts...</div>
                        </div>
                    <?php endif; ?>


                    <!-- <div class="js-scroll-load"></div> -->

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>