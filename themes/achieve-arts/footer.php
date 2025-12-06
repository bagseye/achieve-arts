<footer class="c-footer">
  <div class="c-footer__icons">
    <svg width="741" height="498" viewBox="0 0 741 498" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M402.33 -253.95L571.549 -108.118C575.194 -104.756 581.622 -103.602 586.228 -104.13L809.021 -144.222C823.509 -147.231 834.923 -132.611 828.876 -119.77L738.167 85.7948C736.535 91.1109 736.342 97.0719 738.932 100.825L844.145 297.45C851.243 310.135 840.302 325.966 826.39 324.049L600.922 305.058C595.933 304.549 589.6 306.894 586.146 310.53L427.42 471.783C417.056 482.688 399.499 477.41 396.623 463.162L348.406 245.432C346.488 240.252 344.57 235.073 339.197 233.528L136.484 136.614C123.533 130.808 122.673 112.28 135.627 105.127L330.802 -9.54901C336.08 -11.5031 338.767 -17.21 339.344 -22.1352L371.721 -242.616C373.835 -256.356 391.778 -263 402.33 -253.95Z" fill="#49464A" fill-opacity="0.4"/>
      <path d="M3.79609 349.5L77.1787 316.822C78.8312 316.152 80.1921 314.238 80.7268 312.66L101.851 234.046C103.094 228.872 109.6 227.401 112.849 231.337L165.801 292.364C167.28 293.71 169.189 294.687 170.807 294.42L250.895 290.35C256.11 289.987 259.581 295.973 256.824 300.204L216.072 370.627C215.142 372.172 214.934 374.592 215.586 376.273L243.695 452.627C245.653 457.671 241.244 462.572 236.169 461.322L157.956 443.617C155.977 443.447 153.998 443.276 152.672 444.787L90.0644 495.86C86.19 499.182 80.0316 496.621 79.6916 491.311L72.3215 410.243C72.4952 408.227 71.0511 406.477 69.5376 405.534L2.78885 361.193C-1.35604 358.399 -0.765588 351.544 3.79609 349.5Z" fill="#49464A" fill-opacity="0.4"/>
    </svg>
  </div>
  <div class="c-footer__inner">
    <div class="c-footer__container">
      <div class="c-footer__items">
        <div class="c-footer__item c-footer__item--top">
          <div class="c-footer__item--top-left">
            <h3 class="c-footer__heading js-anim h-animate-in-slide-up">Shaping Futures Through <span>Elite And Professional Training.</span></h3>
            <p class="c-footer__intro js-anim h-animate-in-slide-up">Schedule a discovery call and book your child's free trial</p>
            <span class="h-button c-footer__cta js-anim h-animate-in-fade">
              <a href="" class="h-button__link" title="Schedule a call">
                  Schedule a call
                  <svg viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.506542 8.82856L8.00777 7.43487C8.17523 7.40956 8.3433 7.26291 8.42764 7.12892L12.119 0.335543C12.3483 -0.114816 12.9818 -0.106646 13.1948 0.328815L16.7347 7.13764C16.8414 7.2947 16.9962 7.42719 17.1515 7.43836L24.6388 8.83538C25.1285 8.91725 25.3166 9.547 24.9683 9.87677L19.6454 15.4792C19.5252 15.6012 19.4524 15.8201 19.4755 15.9898L20.3815 23.6644C20.4506 24.1736 19.9349 24.5287 19.4938 24.3009L12.6617 20.9342C12.4828 20.8747 12.3038 20.8151 12.1478 20.9253L5.23457 24.2566C4.80317 24.4777 4.29107 24.1048 4.37722 23.6068L5.4911 15.9559C5.55177 15.7736 5.45712 15.58 5.33819 15.4594L0.154642 9.88635C-0.166333 9.53649 0.0399525 8.91641 0.506542 8.82856Z" />
                  </svg>
              </a>
            </span>
          </div>
          <div class="c-footer__item--top-right">
              <a href="<?php echo get_bloginfo('url') ?>/" title="Return to Achieve Arts Home">
                <picture>
                    <img class="c-footer__logo js-anim h-animate-in-fade" width="275" height="175" src="<?php echo get_template_directory_uri() ?>/images/svg/logo.svg" alt="Achieve Arts Logo" />
                </picture>
              </a>
          </div>
        </div>

        <?php if(function_exists('get_field') && get_field('email_addresses', 'options')) : ?>
        <ul class="c-footer__item c-footer__item--emails js-anim h-animate-in-slide-up">
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
        <ul class="c-footer__item c-footer__item--socials js-anim h-animate-in-slide-up">
          <?php if(get_field('vimeo_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('vimeo_social', 'options') ?>" title="Achieve Arts on Vimeo">
              <svg viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.02826 2.55672L0 5.30164L1.0478 6.62098C1.51443 6.33092 2.44767 5.57423 2.86384 5.57423C3.79709 5.57423 4.63604 8.10286 5.43657 10.8836C6.15542 13.3807 6.89949 19.5855 10.3298 19.5855C14.2771 19.5855 22.5754 8.92886 22.5754 4.18595C22.5754 2.46977 22.2349 0 18.8172 0C15.1549 0 13.3531 3.53443 12.91 5.30164C13.2287 5.08912 14.0965 4.94744 14.5746 4.94744C16.5226 4.94744 16.1066 6.96661 15.841 7.78123C15.5753 8.59585 13.5331 12.5624 12.4318 12.5624C11.0859 12.5624 10.289 6.71836 9.89942 4.18595C9.50982 1.65354 8.5004 0.272229 6.9597 0.272229C5.72715 0.272229 3.82518 1.79522 3.02826 2.55672Z" />
              </svg>
            </a>
          </li>
          <?php endif; ?>

          <?php if(get_field('instagram_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('instagram_social', 'options') ?>" title="Achieve Arts on Instagram">
              <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2 1.84337C12.9036 1.84337 13.2723 1.84337 14.3783 1.84337C15.3614 1.84337 15.853 2.08916 16.2217 2.21205C16.7133 2.45783 17.0819 2.58072 17.4506 2.9494C17.8193 3.31807 18.0651 3.68675 18.188 4.17831C18.3108 4.54699 18.4337 5.03856 18.5566 6.02169C18.5566 7.12771 18.5566 7.37349 18.5566 10.2C18.5566 13.0265 18.5566 13.2723 18.5566 14.3783C18.5566 15.3614 18.3108 15.853 18.188 16.2217C17.9422 16.7133 17.8193 17.0819 17.4506 17.4506C17.0819 17.8193 16.7133 18.0651 16.2217 18.188C15.853 18.3108 15.3614 18.4337 14.3783 18.5566C13.2723 18.5566 13.0265 18.5566 10.2 18.5566C7.37349 18.5566 7.12771 18.5566 6.02169 18.5566C5.03856 18.5566 4.54699 18.3108 4.17831 18.188C3.68675 17.9422 3.31807 17.8193 2.9494 17.4506C2.58072 17.0819 2.33494 16.7133 2.21205 16.2217C2.08916 15.853 1.96627 15.3614 1.84337 14.3783C1.84337 13.2723 1.84337 13.0265 1.84337 10.2C1.84337 7.37349 1.84337 7.12771 1.84337 6.02169C1.84337 5.03856 2.08916 4.54699 2.21205 4.17831C2.45783 3.68675 2.58072 3.31807 2.9494 2.9494C3.31807 2.58072 3.68675 2.33494 4.17831 2.21205C4.54699 2.08916 5.03856 1.96627 6.02169 1.84337C7.12771 1.84337 7.49639 1.84337 10.2 1.84337ZM10.2 0C7.37349 0 7.12771 0 6.02169 0C4.91566 0 4.17831 0.245784 3.56386 0.491567C2.9494 0.73735 2.33494 1.10602 1.72048 1.72048C1.10602 2.33494 0.860242 2.82651 0.491567 3.56386C0.245784 4.17831 0.122892 4.91566 0 6.02169C0 7.12771 0 7.49639 0 10.2C0 13.0265 0 13.2723 0 14.3783C0 15.4843 0.245784 16.2217 0.491567 16.8361C0.73735 17.4506 1.10602 18.0651 1.72048 18.6795C2.33494 19.294 2.82651 19.5398 3.56386 19.9084C4.17831 20.1542 4.91566 20.2771 6.02169 20.4C7.12771 20.4 7.49639 20.4 10.2 20.4C12.9036 20.4 13.2723 20.4 14.3783 20.4C15.4843 20.4 16.2217 20.1542 16.8361 19.9084C17.4506 19.6627 18.0651 19.294 18.6795 18.6795C19.294 18.0651 19.5398 17.5735 19.9084 16.8361C20.1542 16.2217 20.2771 15.4843 20.4 14.3783C20.4 13.2723 20.4 12.9036 20.4 10.2C20.4 7.49639 20.4 7.12771 20.4 6.02169C20.4 4.91566 20.1542 4.17831 19.9084 3.56386C19.6627 2.9494 19.294 2.33494 18.6795 1.72048C18.0651 1.10602 17.5735 0.860242 16.8361 0.491567C16.2217 0.245784 15.4843 0.122892 14.3783 0C13.2723 0 13.0265 0 10.2 0Z"/>
                <path d="M10.2 4.91566C7.2506 4.91566 4.91566 7.2506 4.91566 10.2C4.91566 13.1494 7.2506 15.4843 10.2 15.4843C13.1494 15.4843 15.4843 13.1494 15.4843 10.2C15.4843 7.2506 13.1494 4.91566 10.2 4.91566ZM10.2 13.641C8.35663 13.641 6.75904 12.1663 6.75904 10.2C6.75904 8.35663 8.23374 6.75904 10.2 6.75904C12.0434 6.75904 13.641 8.23374 13.641 10.2C13.641 12.0434 12.0434 13.641 10.2 13.641Z"/>
                <path d="M15.6072 6.02169C16.2859 6.02169 16.8361 5.47148 16.8361 4.79277C16.8361 4.11406 16.2859 3.56386 15.6072 3.56386C14.9285 3.56386 14.3783 4.11406 14.3783 4.79277C14.3783 5.47148 14.9285 6.02169 15.6072 6.02169Z"/>
              </svg>
            </a>
          </li>
          <?php endif; ?>

          <?php if(get_field('facebook_social', 'options')) : ?>
          <li class="c-footer__item--social">
            <a href="<?= get_field('facebook_social', 'options') ?>" title="Achieve Arts on Facebook">
              <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6188 0H2.23125C1.00072 0 0 1.00072 0 2.23125V15.6188C0 16.8493 1.00072 17.85 2.23125 17.85H8.925V11.7141H6.69375V8.925H8.925V6.69375C8.925 5.8061 9.27762 4.95481 9.90528 4.32715C10.5329 3.69949 11.3842 3.34688 12.2719 3.34688H14.5031V6.13594H13.3875C12.7717 6.13594 12.2719 6.07793 12.2719 6.69375V8.925H15.0609L13.9453 11.7141H12.2719V17.85H15.6188C16.8493 17.85 17.85 16.8493 17.85 15.6188V2.23125C17.85 1.00072 16.8493 0 15.6188 0Z" />
              </svg>
            </a>
          </li>
          <?php endif; ?>

        </ul>
        <?php endif; ?>
        <div class="c-footer__item c-footer__item--menus">
          <nav aria-label="Footer Menu One" class="c-footer__menu js-anim h-animate-in-slide-up">
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

          <nav aria-label="Footer Menu Two" class="c-footer__menu js-anim h-animate-in-slide-up">
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

          <nav aria-label="Footer Menu Three" class="c-footer__menu js-anim h-animate-in-slide-up">
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
        <div class="c-footer__item c-footer__item--base js-anim h-animate-in-slide-up">
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