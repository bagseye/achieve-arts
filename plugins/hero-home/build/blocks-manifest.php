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
			),
			'ctalinkonetext' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctalinkoneurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctalinktwotext' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctalinktwourl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'textdomain' => 'hero-home',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => array(
			'splide-core',
			'splide-auto-scroll',
			'file:./view.js'
		)
	)
);
