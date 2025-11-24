<?php
// This file is generated. Do not modify it manually.
return array(
	'media-carousel-item-spotlight' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/media-carousel-item-spotlight',
		'version' => '0.1.0',
		'title' => 'Spotlight Item',
		'category' => 'widgets',
		'icon' => 'visibility',
		'description' => 'A single spotlight item. Only available in the spotlight carousel block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'tab' => array(
				'type' => 'string',
				'default' => 'Client Spotlight'
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
			)
		),
		'parent' => array(
			'bwp/media-carousel'
		),
		'usesContext' => array(
			'bwp/media-carousel-variant'
		),
		'textdomain' => 'media-carousel-item-spotlight',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
