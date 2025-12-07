<?php 

/**
 * 
 * Template Name: Testimonials
 * 
*/

get_header(); ?>

<main class="main-content p-testimonials">
    <div class="p-testimonials__inner">
        <div class="p-testimonials__container">
            <div class="p-testimonials__items d-content-area">
                <?php if (have_posts()) : ?>

                    <?php while (have_posts()) : the_post(); ?>
                        <?php the_content(); ?>

                        <div class="p-testimonials__masonry">

                        <?php 

                        $testimonials = get_field('testimonials', 'options');

                        if($testimonials) {
                            foreach($testimonials as $testimonial) {
                                $message = $testimonial['message'];
                                $name = $testimonial['name'];
                                $additional = $testimonial['additional'];

                                $testimonials_card = '<!-- wp:bwp/testimonials-item {"variant":"testimonials-scrolling-card"} -->
                                                <article class="wp-block-bwp-testimonials-item c-testimonials-item c-testimonials-item__variant--testimonials-scrolling-card">
                                                    <div class="c-testimonials-item__inner">
                                                        <div class="c-testimonials-item__container">
                                                            <div class="c-testimonials-item__items">
                                                                <span class=" c-testimonials-item__tab h-tab">
                                                                    <p>Testimonial</p>
                                                                </span>
                                                                <div class="c-testimonials-item__content-area">
                                                                    ' . $message . '
                                                                </div>
                                                                <div class="c-testimonials-item__name">
                                                                    <p>' . $name . '</p>
                                                                </div>
                                                                <div class="c-testimonials-item__role">
                                                                    <p>' . $additional . '</p>
                                                                </div>
                                                                <div class="c-testimonials-item__stars">
                                                                    <div class="c-testimonials-item__star">
                                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z" fill="url(#paint0_linear_209_4863)"></path><defs><linearGradient id="paint0_linear_209_4863" x1="18.8482" y1="8.10577" x2="-1.53502" y2="8.45883" gradientUnits="userSpaceOnUse"><stop stop-color="#927049"></stop><stop offset="0.2" stop-color="#D2BC74"></stop><stop offset="0.5" stop-color="#F9E7B7"></stop><stop offset="0.8" stop-color="#AE8D4D"></stop><stop offset="1" stop-color="#927049"></stop></linearGradient></defs></svg></div><div class="c-testimonials-item__star"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z" fill="url(#paint0_linear_209_4863)"></path><defs><linearGradient id="paint0_linear_209_4863" x1="18.8482" y1="8.10577" x2="-1.53502" y2="8.45883" gradientUnits="userSpaceOnUse"><stop stop-color="#927049"></stop><stop offset="0.2" stop-color="#D2BC74"></stop><stop offset="0.5" stop-color="#F9E7B7"></stop><stop offset="0.8" stop-color="#AE8D4D"></stop><stop offset="1" stop-color="#927049"></stop></linearGradient></defs></svg>
                                                                    </div>
                                                                    <div class="c-testimonials-item__star">
                                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z" fill="url(#paint0_linear_209_4863)"></path><defs><linearGradient id="paint0_linear_209_4863" x1="18.8482" y1="8.10577" x2="-1.53502" y2="8.45883" gradientUnits="userSpaceOnUse"><stop stop-color="#927049"></stop><stop offset="0.2" stop-color="#D2BC74"></stop><stop offset="0.5" stop-color="#F9E7B7"></stop><stop offset="0.8" stop-color="#AE8D4D"></stop><stop offset="1" stop-color="#927049"></stop></linearGradient></defs></svg></div><div class="c-testimonials-item__star"><svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z" fill="url(#paint0_linear_209_4863)"></path><defs><linearGradient id="paint0_linear_209_4863" x1="18.8482" y1="8.10577" x2="-1.53502" y2="8.45883" gradientUnits="userSpaceOnUse"><stop stop-color="#927049"></stop><stop offset="0.2" stop-color="#D2BC74"></stop><stop offset="0.5" stop-color="#F9E7B7"></stop><stop offset="0.8" stop-color="#AE8D4D"></stop><stop offset="1" stop-color="#927049"></stop></linearGradient></defs></svg>
                                                                    </div>
                                                                    <div class="c-testimonials-item__star">
                                                                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.14916 0.211826L11.7343 4.80223C11.7882 4.90601 11.9216 4.98309 12.0279 5.00829L17.2909 5.90388C17.6364 5.95321 17.7725 6.36894 17.5355 6.60531L13.8766 10.4383C13.7978 10.5431 13.7457 10.6738 13.7731 10.7778L14.5316 15.982C14.5874 16.3203 14.2179 16.5838 13.9247 16.4298L9.07572 14.2022C8.96914 14.151 8.80988 14.1523 8.70413 14.2052L3.89156 16.5104C3.57431 16.6692 3.22716 16.4115 3.27752 16.0724L3.95233 10.8567C3.95128 10.7264 3.95023 10.5962 3.84344 10.5189L0.123451 6.74518C-0.117316 6.51264 0.0120493 6.09477 0.356686 6.0399L5.60461 5.05988C5.73732 5.05882 5.84265 4.95376 5.8949 4.84914L8.37942 0.218009C8.53637 -0.0698215 8.9876 -0.0734459 9.14916 0.211826Z" fill="url(#paint0_linear_209_4863)"></path><defs><linearGradient id="paint0_linear_209_4863" x1="18.8482" y1="8.10577" x2="-1.53502" y2="8.45883" gradientUnits="userSpaceOnUse"><stop stop-color="#927049"></stop><stop offset="0.2" stop-color="#D2BC74"></stop><stop offset="0.5" stop-color="#F9E7B7"></stop><stop offset="0.8" stop-color="#AE8D4D"></stop><stop offset="1" stop-color="#927049"></stop></linearGradient></defs></svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <!-- /wp:bwp/testimonials-item -->';

                                echo '<div class="p-testimonials__masonry--item js-anim h-animate-in-fade">';
                                    echo do_blocks( $testimonials_card );
                                echo '</div>';
                            }
                        }
                        

                        
                        ?>

                        </div>
                    <?php endwhile; ?>

                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>