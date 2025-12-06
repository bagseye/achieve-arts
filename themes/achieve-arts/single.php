<?php get_header(); ?>


<main class="main-content p-basic padding-block__top padding-block__bottom">
    <div class="p-basic__inner">
        <div class="p-basic__container">
            <div class="p-basic__items d-typography">
                <?php if (have_posts()) : ?>


                    <?php while (have_posts()) : the_post(); ?>

                    <?php 
                    $categories       = get_the_category();
                    $post_category    = ! empty( $categories ) ? $categories[0]->name : '';
                    $post_title       = get_the_title();
                    $post_body_content = apply_filters( 'the_content', get_the_content() );
                    ?>

                    <?php 
                    $panel = '<!-- wp:bwp/panel {"tab":"Benefits","topmargin":true,"bottommargin":true,"toppadding":true,"bottompadding":true,"bgcolour":"deep-purple"} -->
                                <section class="wp-block-bwp-panel c-panel margin-block__top margin-block__bottom c-panel__bgcolour--deep-purple">
                                    <div class="c-panel__inner padding-block__top padding-block__bottom border-radius__top border-radius__bottom">
                                        <div class="c-panel__container">
                                            <header class="c-panel__content--header">
                                                <span class="c-panel__tab h-tab">
                                                    <p>' . $post_category . '</p>
                                                </span>
                                            </header>
                                            <div class="c-panel__items d-typography">
                                                <!-- wp:heading {"level":3} -->
                                                <h3 class="wp-block-heading">' . $post_title . '</h3>
                                                <!-- /wp:heading -->
                                                ' . $post_body_content . '
                                            </div>
                                        </div>
                                        <span class="c-panel__star"><svg width="588" height="725" viewBox="0 0 588 725" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M743.964 403.655L610.437 253.413L629.733 53.2643C633.304 16.3831 595.908 -10.7202 561.971 4.15219L377.768 84.7808L193.43 4.64476C159.464 -10.1051 122.139 17.0596 125.749 53.9438L145.459 254.047L12.2324 404.656C-12.3189 432.391 1.99044 476.333 38.1898 484.229L234.553 527.283L336.583 700.495C355.378 732.404 401.566 732.362 420.283 700.398L521.948 526.915L718.248 483.369C754.398 475.355 768.623 431.394 744.034 403.706L743.964 403.655Z" fill="white" fill-opacity="0.18"></path></svg></span>
                                    </div>
                                </section>
                            <!-- /wp:bwp/panel -->';

                        echo do_blocks($panel);

                        ?>

                    <?php endwhile; ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>