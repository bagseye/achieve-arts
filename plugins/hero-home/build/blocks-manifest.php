<?php
// This file is generated. Do not modify it manually.
return array(
	'hero-home' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/hero-home',
		'version' => '0.1.0',
		'title' => 'Hero Home',
		'category' => 'widgets',
		'icon' => 'shield',
		'description' => 'A hero for use on the home page.',
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
			'intro' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'hero-home',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
