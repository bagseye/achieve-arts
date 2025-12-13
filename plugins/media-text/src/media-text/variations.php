<?php 

return array(
    array(
        'isDefault'  => true,
        'name'       => 'media-text',
        'title'      => 'Media Text',
        'description' => 'Displays media and text content with alternate layouts.',
        'icon'       => 'id',
        'attributes' => array(
            'variant' => 'media-text',
        ),
        'isActive'   => array('variant')
    ),
    array(
        'name'       => 'media-text-media-carousel',
        'title'      => 'Media Text - Media Carousel',
        'description' => 'Displays media and text content with alternate layouts. Media is displayed in a carousel',
        'icon'       => 'id',
        'attributes' => array(
            'variant' => 'media-text-media-carousel',
        ),
        'isActive'   => array('variant')
    ),
    array(
        'name'       => 'media-text-map',
        'title'      => 'Media Text - Map',
        'description' => 'Displays media and text content with alternate layouts. Media is a map',
        'icon'       => 'admin-site-alt',
        'attributes' => array(
            'variant' => 'media-text-map',
        ),
        'isActive'   => array('variant')
    ),
);