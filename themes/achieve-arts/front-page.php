<?php get_header(); ?>

<main class="main-content p-front-page">
    <div class="p-front-page__inner">
        <div class="p-front-page__container">
            <div class="p-front-page__items">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php the_content() ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>