<?php
// This file is generated. Do not modify it manually.
return array(
	'media-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-block',
		'version' => '0.1.0',
		'title' => 'Media Block',
		'category' => 'widgets',
		'icon' => 'format-image',
		'description' => 'A media builder that allows image and video.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'topmargin' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottommargin' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'media-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
