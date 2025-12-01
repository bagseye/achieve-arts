<?php
// This file is generated. Do not modify it manually.
return array(
	'team-members' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/team-members',
		'version' => '0.1.0',
		'title' => 'Team Members',
		'category' => 'widgets',
		'icon' => 'businessperson',
		'description' => 'Displays team member cards and images.',
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
			'subheading' => array(
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
			'pageurl' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctabuttontext' => array(
				'type' => 'string',
				'default' => ''
			),
			'variant' => array(
				'type' => 'string',
				'default' => 'team-members'
			),
			'bgcolour' => array(
				'type' => 'string',
				'default' => 'none'
			)
		),
		'providesContext' => array(
			'bwp/team-members-variant' => 'variant'
		),
		'textdomain' => 'team-members',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'script' => 'splide-core',
		'variations' => 'file:./variations.php'
	)
);
