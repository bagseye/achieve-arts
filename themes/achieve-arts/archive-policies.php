<?php get_header(); ?>

<main class="main-content p-single padding-block__top padding-block__bottom">
    <div class="p-single__inner padding-block__top padding-block__bottom">
        <div class="p-single__container">
            <div class="p-single__items d-typography">
                <?php if (have_posts()) : ?>

                    <?php while (have_posts()) : the_post(); ?>
                    <header class="p-single__header">
                      <span class="p-single__tab h-tab">
                        <p>Policies</p>
                      </span>
                      <h1 class="p-single__heading"><?= get_the_title() ?></h1>
                    </header>
                        <?php the_content(); ?>
                    <?php endwhile; ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>