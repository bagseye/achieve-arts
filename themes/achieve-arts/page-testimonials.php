<?php 

/**
 * 
 * Template Name: Testimonials
 * 
*/

get_header(); ?>

<main class="main-content p-default-page">
    <div class="p-default-page__inner">
        <div class="p-default-page__container">
            <div class="p-default-page__items d-content-area">
                <?php if (have_posts()) : ?>

                    <?php while (have_posts()) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>