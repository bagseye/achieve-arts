<?php 

/**
 * 
 * Template Name: Basic
 * 
*/

get_header(); ?>

<main class="main-content p-basic padding-block__top padding-block__bottom">
    <div class="p-basic__inner">
        <div class="p-basic__container">
            <div class="p-basic__items d-typography">
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