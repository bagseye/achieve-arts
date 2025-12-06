<?php

global $post;

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>

    <link rel="stylesheet" href="https://use.typekit.net/ntc2gcj.css">

</head>

<body <?php body_class(); ?>>
    <header class="js-fixed-nav c-header">
        <?php get_template_part('template-parts/components/alert') ?>
        
        <div class="c-header__inner">
            <div class="c-header__container">
                <div class="c-header__items js-anim h-animate-in-fade">
                    <div class="c-header__item c-header__item--left">
                        <span class="c-header__cta--mobile">
                            <a href="" title="Schedule a call">
                                <picture>
                                    <img width="26" height="29" src="<?php echo get_template_directory_uri() ?>/images/svg/phone.svg" alt="Phone Icon" />
                                </picture>
                            </a>
                        </span>
                        <span class="h-button c-header__cta--desktop">
                            <a href="" class="h-button__link" title="Schedule a call">
                                Schedule a call
                                <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.506542 8.82856L8.00777 7.43487C8.17523 7.40956 8.3433 7.26291 8.42764 7.12892L12.119 0.335543C12.3483 -0.114816 12.9818 -0.106646 13.1948 0.328815L16.7347 7.13764C16.8414 7.2947 16.9962 7.42719 17.1515 7.43836L24.6388 8.83538C25.1285 8.91725 25.3166 9.547 24.9683 9.87677L19.6454 15.4792C19.5252 15.6012 19.4524 15.8201 19.4755 15.9898L20.3815 23.6644C20.4506 24.1736 19.9349 24.5287 19.4938 24.3009L12.6617 20.9342C12.4828 20.8747 12.3038 20.8151 12.1478 20.9253L5.23457 24.2566C4.80317 24.4777 4.29107 24.1048 4.37722 23.6068L5.4911 15.9559C5.55177 15.7736 5.45712 15.58 5.33819 15.4594L0.154642 9.88635C-0.166333 9.53649 0.0399525 8.91641 0.506542 8.82856Z" />
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div class="c-header__item c-header__item--centre">
                        <a href="<?php echo get_bloginfo('url') ?>/" title="Return to Achieve Arts Home">
                            <picture>
                                <img class="c-header__logo" width="140" height="90" src="<?php echo get_template_directory_uri() ?>/images/svg/logo.svg" alt="Achieve Arts Logo" />
                            </picture>
                        </a>
                    </div>
                    <div class="c-header__item c-header__item--right">
                        <?php get_template_part('template-parts/components/hamburger') ?>
                    </div>
                </div>
            </div>
        </div>

        

    </header>