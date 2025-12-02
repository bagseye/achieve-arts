<?php get_header(); ?>

<main class="main-content p-single padding-block__top padding-block__bottom">
    <div class="p-single__inner padding-block__top padding-block__bottom">
        <div class="p-single__back">
          <div class="wp-block-button is-style-white">
            <a href="<?= get_permalink( get_option('page_for_posts' ) ) ?>" class="wp-block-button__link">Back to News</a>
          </div>
        </div>
        <div class="p-single__container">
            <div class="p-single__items d-typography">
                <?php if (have_posts()) : ?>

                    <?php while (have_posts()) : the_post(); ?>
                    <header class="p-single__header">
                      <?php 
                  
                      $categories = get_the_category($post->ID);

                      if ( ! empty( $categories ) ) {
                          echo '<span class="p-single__tab h-tab">';
                              $first_category = $categories[0];
                              echo '<p>' . esc_html( $first_category->name ) . '</p>';
                          echo '</span>';
                      }
                      
                      ?>
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