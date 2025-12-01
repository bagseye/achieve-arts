<?php
// This file is generated. Do not modify it manually.
return array(
	'media-carousel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-carousel',
		'version' => '0.1.0',
		'title' => 'Media Carousel',
		'category' => 'widgets',
		'icon' => 'images-alt2',
		'description' => 'Displays media content in a carousel format.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'topmargin' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottommargin' => array(
				'type' => 'boolean',
				'default' => false
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'media-carousel-default'
			)
		),
		'providesContext' => array(
			'bwp/media-carousel-variant' => 'variant'
		),
		'textdomain' => 'media-carousel',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => array(
			'splide-core',
			'splide-video',
			'file:./view.js'
		),
		'variations' => 'file:./variations.php'
	)
);
