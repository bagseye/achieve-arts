<?php
// This file is generated. Do not modify it manually.
return array(
	'venues-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/venues-item',
		'version' => '0.1.0',
		'title' => 'Venues Item',
		'category' => 'widgets',
		'icon' => 'sticky',
		'description' => 'A single Venue Item that is only available in the Venues block.',
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
			'details' => array(
				'type' => 'string',
				'default' => ''
			),
			'linkurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'pageurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctabuttontext' => array(
				'type' => 'string',
				'default' => 'View Classes'
			)
		),
		'parent' => array(
			'bwp/venues'
		),
		'textdomain' => 'venues-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
