<?php 

return array(
    array(
        'isDefault'  => true,
        'name'       => 'media-carousel-default',
        'title'      => 'Media Carousel',
        'description' => 'Displays a media carousel. Allows a mix of images and video.',
        'icon'       => 'images-alt2',
        'attributes' => array(
            'variant' => 'media-carousel-default',
        ),
        'isActive'   => array('variant')
    ),
    array(
        'name'       => 'media-carousel-video-preview',
        'title'      => 'Video Preview',
        'description' => 'Displays video media content in a carousel format.',
        'icon'       => 'images-alt2',
        'attributes' => array(
            'variant' => 'media-carousel-video-preview',
        ),
        'isActive'   => array('variant')
    ),
);