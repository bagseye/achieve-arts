<?php
// This file is generated. Do not modify it manually.
return array(
	'faqs-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/faqs-item',
		'version' => '0.1.0',
		'title' => 'FAQs Item',
		'category' => 'widgets',
		'icon' => 'welcome-learn-more',
		'description' => 'A single faq item.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'parent' => array(
			'bwp/faqs'
		),
		'textdomain' => 'faqs-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
