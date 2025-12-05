<?php
// This file is generated. Do not modify it manually.
return array(
	'panel' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/panel',
		'version' => '0.1.0',
		'title' => 'Panel',
		'category' => 'widgets',
		'icon' => 'align-center',
		'description' => 'A simple panel block that allows basic content and background colours.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'tab' => array(
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
			'toppadding' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bottompadding' => array(
				'type' => 'boolean',
				'default' => false
			),
			'bgcolour' => array(
				'type' => 'string',
				'default' => 'none'
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
		'textdomain' => 'panel',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
