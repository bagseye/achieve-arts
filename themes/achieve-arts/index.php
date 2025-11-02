<?php get_header(); ?>

<main class="main-content p-archive">
    <div class="p-archive__inner">
        <div class="p-archive__container">
            <div class="p-archive__items">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>

                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>