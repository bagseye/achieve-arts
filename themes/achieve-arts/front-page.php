<?php get_header(); ?>

<main class="main-content p-front-page">
    <div class="p-front-page__inner">
        <div class="p-front-page__container">
            <div class="p-front-page__items d-content-area">
                <?php if (have_posts()) : ?>
                    <section class="c-hero-home no-padding__left no-padding__right">
                        <div class="c-hero-home__inner">
                            <div class="c-hero-home__container">
                                <div class="c-hero-home__items">
                                    <div class="c-hero-home__item c-hero-home__item--content">
                                        <header class="c-hero-home__header">
                                            <h1 class="c-hero-home__heading">Shaping Futures Through Elite and Professional Training.</h1>
                                        </header>
                                        <h2>Where Creativity meets Opportunity.</h2>
                                        <p>Achieve Arts Speech & Drama School is North London's premier part-time theatre school, dedicated to nurturing young talent in drama, speech, singing, and camera technique.</p>
                                        <div class="c-hero-home__ctas">
                                            <span class="h-button">
                                                <a href="" class="h-button__link">Book Discovery Call</a>
                                            </span>
                                            <span class="h-button">
                                                <a href="" class="h-button__link">About Achieve Arts</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c-hero-home__scroller splide js-carousel">
                            <div class="c-hero-home__scroller--inner">
                                <div class="c-hero-home__scroller--container splide__track">
                                    <div class="c-hero-home__scroller--items splide__list">
                                        
                                        <article class="c-hero-home__scroller--item splide__slide">
                                            <a href="" class="c-hero-home__scroller--item-link">
                                                <div class="c-hero-home__scroller--item-inner">
                                                    <div class="c-hero-home__scroller--item-container">
                                                        <header class="c-hero-home__scroller--item-header">
                                                            <h3 class="c-hero-home__scroller--item-heading">Achieve Arts London</h3>
                                                        </header>
                                                    </div>
                                                    <div class="c-hero-home__scroller--item-media">
                                                        <picture>
                                                            <img src="<?= get_template_directory_uri() ?>/images/jpg/achieve-arts-in-schools.jpg" />
                                                        </picture>
                                                        <span class="c-hero-home__scroller--item-overlay"></span>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>

                                        <article class="c-hero-home__scroller--item splide__slide">
                                            <a href="" class="c-hero-home__scroller--item-link">
                                                <div class="c-hero-home__scroller--item-inner">
                                                    <div class="c-hero-home__scroller--item-container">
                                                        <header class="c-hero-home__scroller--item-header">
                                                            <h3 class="c-hero-home__scroller--item-heading">Achieve Arts Online</h3>
                                                        </header>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>

                                        <article class="c-hero-home__scroller--item splide__slide">
                                            <a href="" class="c-hero-home__scroller--item-link">
                                                <div class="c-hero-home__scroller--item-inner">
                                                    <div class="c-hero-home__scroller--item-container">
                                                        <header class="c-hero-home__scroller--item-header">
                                                            <h3 class="c-hero-home__scroller--item-heading">Achieve Arts In Schools</h3>
                                                        </header>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>

                                        <article class="c-hero-home__scroller--item splide__slide">
                                            <a href="" class="c-hero-home__scroller--item-link">
                                                <div class="c-hero-home__scroller--item-inner">
                                                    <div class="c-hero-home__scroller--item-container">
                                                        <header class="c-hero-home__scroller--item-header">
                                                            <h3 class="c-hero-home__scroller--item-heading">Achieve Arts International</h3>
                                                        </header>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>

                                        <article class="c-hero-home__scroller--item splide__slide">
                                            <a href="" class="c-hero-home__scroller--item-link">
                                                <div class="c-hero-home__scroller--item-inner">
                                                    <div class="c-hero-home__scroller--item-container">
                                                        <header class="c-hero-home__scroller--item-header">
                                                            <h3 class="c-hero-home__scroller--item-heading">Achieve Arts Agency</h3>
                                                        </header>
                                                    </div>
                                                </div>
                                            </a>
                                        </article>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php the_content(); ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>