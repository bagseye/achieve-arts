<?php
// This file is generated. Do not modify it manually.
return array(
	'news-feed' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/news-feed',
		'version' => '0.1.0',
		'title' => 'News Feed',
		'category' => 'widgets',
		'icon' => 'media-document',
		'description' => 'Displays a scrolling feed of the latest news.',
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
			'catid' => array(
				'type' => 'number',
				'default' => -1
			)
		),
		'textdomain' => 'news-feed',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => array(
			'splide-core',
			'splide-auto-scroll',
			'file:./view.js'
		)
	)
);
