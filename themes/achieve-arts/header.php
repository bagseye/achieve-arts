<?php

global $post;

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php wp_head(); ?>

</head>

<body>
    <header class="js-fixed-na c-header">
        <?php get_template_part('template-parts/components/alert') ?>
        
        <div class="c-header__inner">
            <div class="c-header__container">
                <div class="c-header__items">
                    <div class="c-header__item c-header__item--left"></div>
                    <div class="c-header__item c-header__item--centre"></div>
                    <div class="c-header__item c-header__item--right"></div>
                </div>
            </div>
        </div>

        <?php get_template_part('template-parts/components/hamburger') ?>

    </header>