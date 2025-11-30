<?php
// This file is generated. Do not modify it manually.
return array(
	'team-members-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/team-members-item',
		'version' => '0.1.0',
		'title' => 'Team Members Item',
		'category' => 'widgets',
		'icon' => 'businessperson',
		'description' => 'A single Team Member. Only available in the Team Members block.',
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
			'variant' => array(
				'type' => 'string',
				'default' => 'team-members'
			),
			'cardurl' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'usesContext' => array(
			'bwp/team-members-variant'
		),
		'textdomain' => 'team-members-item',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
