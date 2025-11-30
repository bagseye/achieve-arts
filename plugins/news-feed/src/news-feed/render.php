<?php
/**
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php 

$BLOCK_NAME = 'c-news-feed';
$category = 0;
$block_classes = [];
$block_classes[] = $BLOCK_NAME;
$block_classes[] = 'full-width';
$block_classes[] = 'splide';
$block_classes[] = 'js-carousel__news-feed';
$block_classes[] = 'no-padding__right';
$block_classes[] = 'no-padding__left';

if(! empty( $attributes['topmargin'] )) {
	$block_classes[] = 'margin-block__top';
}

if(! empty( $attributes['bottommargin'] )) {
	$block_classes[] = 'margin-block__bottom';
}

if(! empty( $attributes['catid'] )) {
	$category = $attributes['catid'];
}

?>


<section <?php echo get_block_wrapper_attributes([ 'class' => implode(' ', $block_classes)]); ?>>
	<div class="<?php echo $BLOCK_NAME ?>__inner padding-block__top padding-block__bottom">
			<div class="<?php echo $BLOCK_NAME ?>__container">
					<div class="<?php echo $BLOCK_NAME ?>__items">
						<?php if($attributes && $attributes['heading']) : ?>
							<div class="<?php echo $BLOCK_NAME ?>__item c-news-feed__item--content">
									<header class="<?php echo $BLOCK_NAME ?>__header">
											<h2 class="<?php echo $BLOCK_NAME ?>__heading"><?php echo $attributes['heading'] ?></h2>
									</header>
							</div>
							<?php endif; ?>
							<div class="<?php echo $BLOCK_NAME ?>__item c-news-feed__item--feed splide__track">
									<div class="<?php echo $BLOCK_NAME ?>__scroller splide__list">
										<?php 
										
										$news_items = new WP_Query([
											'post_type' => 'post',
											'post_status' => 'publish',
											'posts_per_page' => 8,
											'cat' => $category
										]);
										
										?>
										<?php if($news_items->have_posts()) : ?>
											<?php while($news_items->have_posts()) : $news_items->the_post(); ?>
											<article class="splide__slide c-news-feed__card">
													<a href="<?php echo esc_url( get_permalink( get_the_ID() ) ); ?>" title="<?php echo esc_attr( get_the_title( get_the_ID() ) ); ?>">
															<div class="<?php echo $BLOCK_NAME ?>__card--inner">
																	<div class="<?php echo $BLOCK_NAME ?>__card--container">
																			<div class="<?php echo $BLOCK_NAME ?>__card--media">
																				  <?php 
																					$mediaid = $mediasrc = $mediaalt = null;
																					if(has_post_thumbnail( get_the_ID() )) {
																							$mediasrc = get_the_post_thumbnail_url(get_the_ID(), '1536x1536');
																							$mediaid = get_post_thumbnail_id(get_the_ID());
																							$mediaalt = get_post_meta($mediaid, '_wp_attachment_image_alt', true);
																					}

																					if(!$mediaalt) {
																							$mediaalt = get_the_title(get_the_ID());
																					}
																					
																					?>
																					<picture>
																						<?php echo wp_filter_content_tags('<img class="wp-image-' . esc_attr( $mediaid ) . '" src="' . esc_url( $mediasrc ) . '" alt="' . esc_attr( $mediaalt ) . '" >'); ?>																					
																					</picture>
																					<?php 
																					
																					$categories = get_the_category();

																					if ( ! empty( $categories ) ) {
																							$first_category = $categories[0];
																							echo '<span class="' . $BLOCK_NAME . '__card--tab h-tab"><p>' . esc_html( $first_category->name ) . '</p></span>';
																					}
																					
																					?>
																			</div>
																			<div class="<?php echo $BLOCK_NAME ?>__card--content">
																					<header class="<?php echo $BLOCK_NAME ?>__card--header">
																							<h3 class="<?php echo esc_attr( $BLOCK_NAME ); ?>__card--heading"><?php echo esc_html( get_the_title( get_the_ID() ) ); ?></h3>
																					</header>
																					<p><?php echo get_the_excerpt(get_the_ID()) ?></p>
																			</div>
																	</div>
															</div>
													</a>
											</article>
											<?php endwhile; ?>
											<?php wp_reset_postdata(); ?>
										<?php endif; ?>

									</div>

							</div>
					</div>
			</div>
			<span class="<?php echo $BLOCK_NAME ?>__gradient"></span>
	</div>
</section>
