<?php get_header(); ?>

<main class="main-content p-archive">
    <div class="p-archive__inner">
        <div class="p-archive__container">
            <div class="p-archive__items">
                <?php if (have_posts()) : ?>

                    <?php 

                    $categories = get_terms(array(
                        'taxonomy' => 'category',
                        'hide_empty' => false,
                        'orderby' => 'name',
                        'order' => 'ASC',
                    )); 

                    if ($categories) : ?>

                    <div class="p-archive__cats">
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

                    <div id="site-content" class="p-archive__items">
                
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