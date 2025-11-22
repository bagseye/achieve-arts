<?php 

return array(
    array(
        'isDefault'  => true,
        'name'       => 'testimonials-default',
        'title'      => 'Testimonials',
        'description' => 'Displays multiple testimonial items.',
        'icon'       => 'awards',
        'attributes' => array(
            'variant' => 'testimonials-default',
        ),
        'isActive'   => array('variant')
    ),
    array(
        'name'       => 'testimonials-scrolling-card',
        'title'      => 'Scrolling Card Testimonials',
        'description' => 'Displays multiple testimonial items in a scrolling card formart.',
        'icon'       => 'awards',
        'attributes' => array(
            'variant' => 'testimonials-scrolling-card',
        ),
        'isActive'   => array('variant')
    ),
);