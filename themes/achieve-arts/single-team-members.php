<?php get_header(); ?>

<main class="main-content p-team-members">
    <div class="p-team-members__inner">
        <div class="p-team-members__container">
            <div class="p-team-members__items">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php
                            $team_terms = get_the_terms( get_the_ID(), 'team_speciality' );

                            if ( ! empty( $team_terms ) && ! is_wp_error( $team_terms ) ) {
                                $names = wp_list_pluck( $team_terms, 'name' );
                                $names = array_map( 'esc_html', $names );

                                echo '<p>' . implode( ' / ', $names ) . '</p>';
                            }
                        ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>