<?php get_header(); ?>

<main class="main-content p-team-members">
    <div class="p-team-members__inner">
        <div class="p-team-members__container">
            <div class="p-team-members__items">
                <?php if (have_posts()) : ?>
                    <?php while (have_posts()) : the_post(); ?>
                        <?php 
                        $team_cats = get_categories( 
                            [
                                'taxonomy' => 'team_speciality',
                                'hide_empty' => TRUE
                            ]
                            ); 
                            

                            if($team_cats) {
                                $count = 0;
                                echo '<p>';
                                foreach($team_cats as $team_cat) {
                                    $count++;
                                    if(count($team_cats) === $count) {
                                        echo $team_cat->name;
                                    } else {
                                        echo $team_cat->name . ' / ';
                                    }
                                }
                                echo '</p>';
                            }
                            
                        ?>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>