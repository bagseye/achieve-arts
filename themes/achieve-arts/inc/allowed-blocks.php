<?php 

function bwp_allowed_block_types ( $block_editor_context, $editor_context ) {
	if ( ! empty( $editor_context->post ) ) {
		return array(
			'core/paragraph',
			'core/heading',
			'core/list',
      'core/buttons',

      'bwp/avatar',
      'bwp/news-feed',
      'bwp/cta',
      'bwp/media-carousel',
      'bwp/media-carousel-item',
      'bwp/media-text',
      'bwp/hero-home',
      'bwp/hero-home-item',
      'bwp/page-hero',
      'bwp/panel',
      'bwp/team-members',
      'bwp/team-members-item',
      'bwp/testimonials',
      'bwp/testimonials-item',
      'bwp/venue-details-card',
      'bwp/venues',
      'bwp/venues-item',
      'bwp/faqs',
      'bwp/faqs-item',
      'bwp/media-block',
      'bwp/media-block-item'
		);
	}

	return $block_editor_context;
}

add_filter( 'allowed_block_types_all', 'bwp_allowed_block_types', 10, 2 );