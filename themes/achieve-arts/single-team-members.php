<?php get_header(); ?>

<main class="main-content p-team-members">
    <div class="p-team-members__inner">
        <div class="p-team-members__container">
            <div class="p-team-members__items">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>

                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>