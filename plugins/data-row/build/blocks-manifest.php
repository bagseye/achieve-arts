<?php
// This file is generated. Do not modify it manually.
return array(
	'data-row' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'bwp/data-row',
		'version' => '0.1.0',
		'title' => 'Data Row',
		'category' => 'widgets',
		'icon' => 'chart-area',
		'description' => 'A data row only avaialble in the Inner Panel block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'columnOneHeading' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnOneDetail' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnTwoHeading' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnTwoDetail' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnThreeHeading' => array(
				'type' => 'string',
				'default' => ''
			),
			'columnThreeDetail' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'parent' => array(
			'bwp/inner-panel'
		),
		'textdomain' => 'data-row',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
