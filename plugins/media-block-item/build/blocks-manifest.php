<?php
// This file is generated. Do not modify it manually.
return array(
	'media-block-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-block-item',
		'version' => '0.1.0',
		'title' => 'Media Block Item',
		'category' => 'widgets',
		'icon' => 'format-image',
		'description' => 'A single media block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'imageid' => array(
				'type' => 'number',
				'default' => null
			),
			'imagesrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'imagealt' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoid' => array(
				'type' => 'number',
				'default' => null
			),
			'videosrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'posterid' => array(
				'type' => 'number',
				'default' => null
			),
			'postersrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'posteralt' => array(
				'type' => 'string',
				'default' => ''
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'image'
			)
		),
		'parent' => array(
			'bwp/media-block'
		),
		'textdomain' => 'media-block-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
