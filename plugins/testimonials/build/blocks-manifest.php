<?php
// This file is generated. Do not modify it manually.
return array(
	'testimonials' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/testimonials',
		'version' => '0.1.0',
		'title' => 'Testimonials',
		'category' => 'widgets',
		'icon' => 'awards',
		'description' => 'Displays multiple testimonial items.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'topmargin' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottommargin' => array(
				'type' => 'boolean',
				'default' => false
			),
			'testimonialscount' => array(
				'type' => 'number',
				'default' => 0
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'testimonials-default'
			)
		),
		'providesContext' => array(
			'bwp/testimonialscount' => 'testimonialscount',
			'bwp/testimonialsvariant' => 'variant'
		),
		'textdomain' => 'testimonials',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'variations' => 'file:./variations.php'
	)
);
