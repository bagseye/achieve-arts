<?php
// This file is generated. Do not modify it manually.
return array(
	'avatar' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/avatar',
		'version' => '0.1.0',
		'title' => 'Avatar',
		'category' => 'widgets',
		'icon' => 'admin-users',
		'description' => 'Displays a avatar with name and details.',
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
			'role' => array(
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
			'avataralign' => array(
				'type' => 'string',
				'default' => 'left'
			)
		),
		'textdomain' => 'avatar',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
