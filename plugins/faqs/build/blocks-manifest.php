<?php
// This file is generated. Do not modify it manually.
return array(
	'faqs' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/faqs',
		'version' => '0.1.0',
		'title' => 'FAQs',
		'category' => 'widgets',
		'icon' => 'welcome-learn-more',
		'description' => 'Displays faq content using a toggle.',
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
			)
		),
		'textdomain' => 'faqs',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
