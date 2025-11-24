<?php
// This file is generated. Do not modify it manually.
return array(
	'venues' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/venues',
		'version' => '0.1.0',
		'title' => 'Venues',
		'category' => 'theme',
		'icon' => 'sticky',
		'description' => 'Displays a list of venue blocks.',
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
			'subheading' => array(
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
			'toppadding' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottompadding' => array(
				'type' => 'boolean',
				'default' => false
			),
			'pageurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctabuttontext' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'venues',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
