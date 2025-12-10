<?php
// This file is generated. Do not modify it manually.
return array(
	'testimonials-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/testimonials-item',
		'version' => '0.1.0',
		'title' => 'Testimonials Item',
		'category' => 'widgets',
		'icon' => 'awards',
		'description' => 'A single testimonial that is only available in the Testimonials block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'name' => array(
				'type' => 'string',
				'default' => ''
			),
			'role' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaid' => array(
				'type' => 'number',
				'default' => null
			),
			'mediasrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaalt' => array(
				'type' => 'string',
				'default' => ''
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'testimonials-default'
			)
		),
		'usesContext' => array(
			'bwp/testimonialscount',
			'bwp/testimonialsvariant'
		),
		'parent' => array(
			'bwp/testimonials'
		),
		'textdomain' => 'testimonials-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
