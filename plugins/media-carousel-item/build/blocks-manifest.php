<?php
// This file is generated. Do not modify it manually.
return array(
	'media-carousel-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-carousel-item',
		'version' => '0.1.0',
		'title' => 'Media Carousel Item',
		'category' => 'widgets',
		'icon' => 'image-alt2',
		'description' => 'A single media carousel item. Only available in the Media Carousel block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'defaultmediaselect' => array(
				'type' => 'string',
				'default' => 'image'
			),
			'defaultimageid' => array(
				'type' => 'number',
				'default' => null
			),
			'defaultimagesrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'defaultimagealt' => array(
				'type' => 'string',
				'default' => ''
			),
			'defaultvideoid' => array(
				'type' => 'number',
				'default' => null
			),
			'defaultvideosrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'defaultposterid' => array(
				'type' => 'number',
				'default' => null
			),
			'defaultpostersrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'defaultposteralt' => array(
				'type' => 'string',
				'default' => ''
			),
			'videotab' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoheading' => array(
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
			'videoposterid' => array(
				'type' => 'number',
				'default' => null
			),
			'videopostersrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'videoposteralt' => array(
				'type' => 'string',
				'default' => ''
			),
			'spotlighttab' => array(
				'type' => 'string',
				'default' => ''
			),
			'spotlightimageid' => array(
				'type' => 'number',
				'default' => null
			),
			'spotlightimagesrc' => array(
				'type' => 'string',
				'default' => ''
			),
			'spotlightimagealt' => array(
				'type' => 'string',
				'default' => ''
			),
			'clientHeading' => array(
				'type' => 'string',
				'default' => 'Achieve Arts Agency Client'
			),
			'clientName' => array(
				'type' => 'string',
				'default' => ''
			),
			'projectHeading' => array(
				'type' => 'string',
				'default' => 'Project Name'
			),
			'projectName' => array(
				'type' => 'string',
				'default' => ''
			),
			'projectTypeHeading' => array(
				'type' => 'string',
				'default' => 'Project Type'
			),
			'projectTypeName' => array(
				'type' => 'string',
				'default' => ''
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'media-carousel-default'
			)
		),
		'parent' => array(
			'bwp/media-carousel'
		),
		'usesContext' => array(
			'bwp/media-carousel-variant'
		),
		'textdomain' => 'media-carousel-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
