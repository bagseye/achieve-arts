<div class="c-mobile-menu js-mobile-nav">
  <!-- <button class="c-mobile-menu__close js-mobile-nav__close" aria-label="Close Mobile Menu">
    <span class="c-mobile-menu__close--bar"></span>
    <span class="c-mobile-menu__close--bar"></span>
  </button> -->
  <div class="c-mobile-menu__inner">
    <div class="c-mobile-menu__container">
      <div class="c-mobile-menu__items">

        <div class="c-mobile-menu__item">
          <div class="c-mobile-menu__primary c-mobile-menu__primary--one">

              <nav aria-label="Primary Menu One" class="c-mobile-menu__nav">
              <?php 
              $menu_args = array(
                  'menu'              => 'primary-one',
                  'menu_class'        => 'c-mobile-menu__nav-items',
                  'menu_id'           => 'mobileMenuOne',
                  'container'         => false,
                  'depth'             => 2,
                  'theme_location'    => 'primary-one',
                  'walker'            => new Add_Nav_Toggle_Custom_Walker()
              );
              
              wp_nav_menu($menu_args); 
              ?>
              </nav>
          </div>

          <div class="c-mobile-menu__primary c-mobile-menu__primary--two">

              <nav aria-label="Primary Menu Two" class="c-mobile-menu__nav">
              <?php 
              $menu_args = array(
                  'menu'              => 'primary-two',
                  'menu_class'        => 'c-mobile-menu__nav-items',
                  'menu_id'           => 'mobileMenuTwo',
                  'container'         => false,
                  'depth'             => 2,
                  'theme_location'    => 'primary-two',
                  'walker'            => new Add_Nav_Toggle_Custom_Walker()
              );
              
              wp_nav_menu($menu_args); 
              ?>
              </nav>
          </div>

          <div class="c-mobile-menu__primary c-mobile-menu__primary--three">

              <nav aria-label="Primary Menu Three" class="c-mobile-menu__nav">
              <?php 
              $menu_args = array(
                  'menu'              => 'primary-three',
                  'menu_class'        => 'c-mobile-menu__nav-items',
                  'menu_id'           => 'mobileMenuThree',
                  'container'         => false,
                  'depth'             => 2,
                  'theme_location'    => 'primary-three',
                  'walker'            => new Add_Nav_Toggle_Custom_Walker()
              );
              
              wp_nav_menu($menu_args); 
              ?>
              </nav>
          </div>
        </div><!-- .c-mobile-menu__item -->
      </div><!-- .c-mobile-menu__items -->
    </div><!-- .c-mobile-menu__container -->
  </div><!--c.c-mobile-menu__inner -->
</div><!-- .e-mobile-menu -->