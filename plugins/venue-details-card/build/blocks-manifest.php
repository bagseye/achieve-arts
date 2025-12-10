<?php
// This file is generated. Do not modify it manually.
return array(
	'venue-details-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/venue-details-card',
		'version' => '0.1.0',
		'title' => 'Venue Details Card',
		'category' => 'widgets',
		'icon' => 'sticky',
		'description' => 'Displays details of courses held at a venue.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => true
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			),
			'intro' => array(
				'type' => 'string',
				'default' => ''
			),
			'tab' => array(
				'type' => 'string',
				'default' => ''
			),
			'whenDetail' => array(
				'type' => 'string',
				'default' => ''
			),
			'whereDetail' => array(
				'type' => 'string',
				'default' => ''
			),
			'pricingDetail' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgcolour' => array(
				'type' => 'string',
				'default' => 'dark'
			),
			'pageurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctabuttontext' => array(
				'type' => 'string',
				'default' => 'Register your child\'s details and book your discovery call'
			)
		),
		'textdomain' => 'venue-details-card',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
