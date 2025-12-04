<?php 

/**
 * 
 * Template Name: Policies Archive
 * 
*/

get_header(); ?>

<main class="main-content p-single padding-block__top padding-block__bottom">
    <div class="p-single__inner padding-block__top padding-block__bottom">
        <div class="p-single__container">
            <div class="p-single__items d-typography">
              
              <header class="p-single__header">
                <span class="p-single__tab h-tab">
                  <p>Policies</p>
                </span>
                <h1 class="p-single__heading"><?= get_the_title() ?></h1>
              </header>
              <?php the_content(); ?>
              
              <?php 
										
										$policy_items = new WP_Query([
                      'post_type' => 'policies',
											'post_status' => 'publish',
											'posts_per_page' => -1
										]);
										
										?>
                    <?php if ($policy_items->have_posts()) : ?>
                      <?php while ($policy_items->have_posts()) : $policy_items->the_post(); ?>

                      <?php 
                      
                      $policy_file = get_field('policy_upload', get_the_ID());
                      
                      ?>
                      <?php if($policy_file && is_array($policy_file)) : ?>
                        <article class="c-policy">
                          <a href="<?= isset($policy_file['url']) ? $policy_file['url'] : '' ?>">
                            <div class="c-policy__inner">
                              <div class="c-policy__container">
                                <div class="c-policy__items">
                                  <h3 class="c-policy__title">
                                    <?php echo get_the_title(); ?>
                                    <?= isset($policy_file['subtype']) ? ' (' . $policy_file['subtype'] . ')' : '' ?>
                                  </h3>
                                  <span class="c-policy__icon" aria-hidden="true">
                                    <svg viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
                                      <path d="M19.3857 6.74368C19.3753 6.55046 19.3035 6.39739 19.2082 6.30203L13.1919 0.199255C12.9152 -0.0679909 12.5013 -0.0567013 12.2467 0.174162C11.9921 0.405025 11.9804 0.837887 12.2206 1.08254L17.1609 6.10127L0.668467 6.10127C0.298972 6.10127 -3.1022e-07 6.38859 -2.94699e-07 6.74367C-2.79178e-07 7.09875 0.298982 7.38607 0.668467 7.38607L17.1609 7.38607L12.2206 12.4048C11.9804 12.6495 12.0012 13.0735 12.2467 13.3132C12.5013 13.5603 12.9517 13.5327 13.1919 13.2881L19.2082 7.18531C19.3674 7.02973 19.3753 6.89675 19.3857 6.74368Z"/>
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </article>
                      <?php endif; ?>

                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>