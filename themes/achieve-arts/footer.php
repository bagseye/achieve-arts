<footer class="c-footer">
  <div class="c-footer__inner">
    <div class="c-footer__container">
      <div class="c-footer__items">
        <div class="c-footer__item c-footer__item--top">
          <div class="c-footer__item--top-left">
            <h3>Shaping Futures Through <span>Elite And Professional Training.</span></h3>
            <p>Schedule a discovery call and book your child's free trial</p>
          </div>
          <div class="c-footer__item--top-right">
            
          </div>
        </div>

        <?php if(function_exists('get_field') && get_field('email_addresses', 'options')) : ?>
        <ul class="c-footer__item c-footer__item--emails">
          <?php foreach(get_field('email_addresses', 'options') as $email_address) : ?>
          <li class="c-footer__item--email">
            <?= $email_address['title'] ?>
            <a href="mailto:<?= $email_address['address'] ?>" title="Email <?= $email_address['title'] ?>">
              <?= $email_address['address'] ?>
            </a>
          </li>
          <?php endforeach; ?>
        </ul>
        <?php endif; ?>

        <?php if(function_exists('get_field')) : ?>
        <ul class="c-footer__item c-footer__item--socials">
          <?php if(get_field('vimeo_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('vimeo_social', 'options') ?>" title="Achieve Arts on Vimeo">
              
            </a>
          </li>
          <?php endif; ?>

          <?php if(get_field('instagram_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('instagram_social', 'options') ?>" title="Achieve Arts on Instagram">
              
            </a>
          </li>
          <?php endif; ?>

          <?php if(get_field('facebook_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('facebook_social', 'options') ?>" title="Achieve Arts on Facebook">
              
            </a>
          </li>
          <?php endif; ?>

        </ul>
        <?php endif; ?>
        <div class="c-footer__item c-footer__item--menus">
          <nav aria-label="Footer Menu One" class="c-footer__menu">
            <?php
            $menu_args = array(
               'menu'              => 'footer-menu-one',
               'menu_class'        => 'c-footer__menu--items',
               'menu_id'           => 'footerMenuOne',
               'container'         => false,
               'depth'             => 2,
               'theme_location'    => 'footer-menu-one',
            );

            wp_nav_menu($menu_args);
            ?>
          </nav>

          <nav aria-label="Footer Menu Two" class="c-footer__menu">
            <?php
            $menu_args = array(
               'menu'              => 'footer-menu-two',
               'menu_class'        => 'c-footer__menu--items',
               'menu_id'           => 'footerMenuTwo',
               'container'         => false,
               'depth'             => 2,
               'theme_location'    => 'footer-menu-two',
            );

            wp_nav_menu($menu_args);
            ?>
          </nav>

          <nav aria-label="Footer Menu Three" class="c-footer__menu">
            <?php
            $menu_args = array(
               'menu'              => 'footer-menu-three',
               'menu_class'        => 'c-footer__menu--items',
               'menu_id'           => 'footerMenuThree',
               'container'         => false,
               'depth'             => 2,
               'theme_location'    => 'footer-menu-three',
            );

            wp_nav_menu($menu_args);
            ?>
          </nav>

        </div>
        <div class="c-footer__item c-footer__item--base">
          <p>Achieve Arts. All Rights Reserved.</p>
          <p>Made by <a href="https://www.bluestone98.com/" target="_blank" title="Made by Bluestone98" rel="follow">Bluestone98</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>

<?php get_template_part('template-parts/components/to-top'); ?>
<?php get_template_part('template-parts/menu/mobile', 'menu'); ?>
<?php wp_footer(); ?>
</body>

</html>