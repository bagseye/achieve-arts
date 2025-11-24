<?php 

return array(
    array(
        'isDefault'   => true,
        'name'        => 'page-hero-default',
        'title'       => 'Page Hero',
        'description' => 'Displays a large hero area for use on pages.',
        'icon'        => 'shield',
        'attributes'  => array(
            'variant' => 'page-hero-default',
        ),
        'isActive'    => array('variant')
    ),
    array(
        'name'        => 'page-hero-basic',
        'title'       => 'Basic Page Hero',
        'description' => 'A basic hero for use on pages.',
        'icon'        => 'shield',
        'attributes'  => array(
            'variant' => 'page-hero-basic',
        ),
        'isActive'    => array('variant')
    ),
);