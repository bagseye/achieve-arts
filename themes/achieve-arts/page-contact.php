<?php 

/**
 * 
 * Template Name: Contact
 * 
*/

get_header(); ?>

<main class="main-content p-default-page">
    <div class="p-default-page__inner">
        <div class="p-default-page__container">
            <div class="p-default-page__items d-content-area">
                <?php if (have_posts()) : ?>

                    <?php while (have_posts()) : the_post(); ?>
                        <?php the_content(); ?>

                        <article class="c-contact-pane c-contact-pane__brand-4">
                          <div class="c-contact-pane__inner border-radius__top border-radius__bottom padding-block__top padding-block__bottom">
                            <div class="c-contact-pane__container">
                              <div class="c-contact-pane__items d-typography">
                                <header class="c-contact-pane__header">
                                  <h2 class="c-contact-pane__heading">Achieve Arts Enquiries</h2>
                                </header>
                                <p class="c-contact-pane__intro">If you have any questions, or would like to make an enquiry, please use the email addresses below to contact our team. Alternatively, you can schedule a call and book your child's free trial here</p>
                                <div class="wp-block-button is-style-white">
                                  <a href="" class="wp-block-button__link">Book a Discovery Call</a>
                                </div>
                                <ul class="c-contact-pane__methods">
                                  <li class="c-contact-pane__method">
                                    <p>Achieve Arts</p>
                                    <p><a href="mailto:info@achievearts.co.uk">info@achievearts.co.uk</a></p>
                                  </li>
                                  <li class="c-contact-pane__method">
                                    <p>Achieve Arts International</p>
                                    <p><a href="mailto:info@achieveartsinternational.co.uk">info@achieveartsinternational.co.uk</a></p>
                                  </li>
                                  <li class="c-contact-pane__method">
                                    <p>Address</p>
                                    <p><address>Crouch End, London, Greater London, England, United Kingdom</address></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </article>

                        <article class="c-contact-pane">
                          <div class="c-contact-pane__inner border-radius__top border-radius__bottom padding-block__top padding-block__bottom">
                            <div class="c-contact-pane__container">
                              <div class="c-contact-pane__items d-typography">
                                <header class="c-contact-pane__header">
                                  <h2 class="c-contact-pane__heading">Achieve Arts Agency Enquiries</h2>
                                </header>
                                <p class="c-contact-pane__intro">If you are interested in representation for your child, please use the form below. If you have any other questions regarding Achieve Arts Agency, please send us an email or give us a call:</p>
                                <div class="wp-block-button is-style-white">
                                  <a href="" class="wp-block-button__link">Agency Application</a>
                                </div>
                                <ul class="c-contact-pane__methods">
                                  <li class="c-contact-pane__method">
                                    <p>Achieve Arts Agency</p>
                                    <p><a href="mailto:info@achieveartsagency.co.uk">info@achieveartsagency.co.uk</a></p>
                                  </li>
                                  <li class="c-contact-pane__method">
                                    <p>Call Us On</p>
                                    <p><a href="tel:+442080872461">02080872461</a></p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </article>
                    <?php endwhile; ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>