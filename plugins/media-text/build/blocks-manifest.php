<?php
// This file is generated. Do not modify it manually.
return array(
	'media-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-text',
		'version' => '0.1.0',
		'title' => 'Media & Text',
		'category' => 'widgets',
		'icon' => 'id',
		'description' => 'Displays media and text content with alternate layouts.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'mapLat' => array(
				'type' => 'string',
				'default' => ''
			),
			'mapLong' => array(
				'type' => 'string',
				'default' => ''
			),
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
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'media-text'
			),
			'bgcolour' => array(
				'type' => 'string',
				'default' => 'dark'
			),
			'borderradiustop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'borderradiusbottom' => array(
				'type' => 'boolean',
				'default' => true
			),
			'fullwidth' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'media-text',
		'variations' => 'file:./variations.php',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => array(
			'splide-core',
			'file:./view.js'
		)
	)
);
