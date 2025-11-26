<?php
// This file is generated. Do not modify it manually.
return array(
	'page-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/page-hero',
		'version' => '0.1.0',
		'title' => 'Page Hero',
		'category' => 'widgets',
		'icon' => 'shield',
		'description' => 'Displays a large hero area for use on pages.',
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
			'tab' => array(
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
			'toprightmediaId' => array(
				'type' => 'number',
				'default' => 0
			),
			'toprightmediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'toprightmediaAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'bottomleftmediaId' => array(
				'type' => 'number',
				'default' => 0
			),
			'bottomleftmediaUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'bottomleftmediaAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoid' => array(
				'type' => 'number',
				'default' => 0
			),
			'videosrc' => array(
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
			'altlayout' => array(
				'type' => 'boolean',
				'default' => false
			),
			'includegradient' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bgcolour' => array(
				'type' => 'string',
				'default' => 'dark'
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'page-hero-default'
			),
			'mediatype' => array(
				'type' => 'string',
				'default' => 'image'
			)
		),
		'textdomain' => 'page-hero',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'variations' => 'file:./variations.php'
	)
);
