<?php get_header(); ?>

<?php if (have_posts()) : ?>
    <main class="main-content p-team-members padding-block__top padding-block__bottom">
        <div class="p-team-members__inner">
            <div class="p-team-members__container">
                <div class="p-team-members__items">
                    <div class="p-team-members__item p-team-members__details">
                        <div class="p-team-members__details--inner">
                            <div class="p-team-members__details--container">
                                <div class="p-team-members__details--items">
                                    <div class="p-team-members__details--back">
                                        <div class="wp-block-button is-style-white">
                                            <a class="wp-block-button__link" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to Team</a>
                                        </div> 
                                    </div>
                                    <div class="p-team-members__details--item p-team-members__details--left">
                                        <div class="p-team-members__details--media">
                                            <?php 
                                            $mediaid = $mediasrc = $mediaalt = null;
                                            if(has_post_thumbnail( $post->ID )) {
                                                $mediasrc = get_the_post_thumbnail_url($post->ID, '2048x2048');
                                                $mediaid = get_post_thumbnail_id($post->ID);
                                                $mediaalt = get_post_meta($mediaid, '_wp_attachment_image_alt', true);
                                            }

                                            if(!$mediaalt) {
                                                $mediaalt = get_the_title($post->ID);
                                            }
                                            
                                            ?>
                                            <picture>
                                                <?php echo wp_filter_content_tags('<img class="wp-image-' . $mediaid . '" src="' . $mediasrc . '" alt="' . $mediaalt . '" >') ?>
                                            </picture>
                                        </div>
                                    </div>
                                    <div class="p-team-members__details--item p-team-members__details--right">
                                        <?php while (have_posts()) : the_post(); ?>
                                            <header class="p-team-members__header">
                                                <span class="p-team-members__tab h-tab">
                                                    <p>Team Member</p>
                                                </span>
                                                <h1 class="p-team-members__heading"><?php echo esc_html( get_the_title() ); ?></h1>
                                            </header>
                                            <?php
                                                $team_terms = get_the_terms( get_the_ID(), 'team_speciality' );
                    
                                                if ( ! empty( $team_terms ) && ! is_wp_error( $team_terms ) ) {
                                                    $names = wp_list_pluck( $team_terms, 'name' );
                                                    $names = array_map( 'esc_html', $names );
                    
                                                    echo '<div class="p-team-members__details--specialities">
                                                            <p class="p-team-members__details--speciality">' . implode( ' / ', $names ) . '</p>
                                                        </div>';
                                                }
                                            ?>
                                            <div class="p-team-members__details--content-area">
                                                <?php the_content(  ) ?>
                                            </div>
                                            <div class="p-team-members__details--cta">
                                               <div class="wp-block-button is-style-white">
                                                <a class="wp-block-button__link" href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact Us</a>
                                               </div> 
                                            </div>
                                        <?php endwhile; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
<?php endif; ?>

<?php get_footer(); ?>