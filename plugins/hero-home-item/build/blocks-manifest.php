<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-home-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/hero-home-item',
		'version' => '0.1.0',
		'title' => 'Hero Home Item',
		'category' => 'widgets',
		'icon' => 'shield',
		'description' => 'A single scroll item for use with the Home Hero.',
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
			'mediaId' => array(
				'type' => 'number',
				'default' => 0
			),
			'mediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'mediaAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'url' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'parent' => array(
			'bwp/hero-home'
		),
		'textdomain' => 'hero-home-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
