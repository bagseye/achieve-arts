<?php 

return array(
    array(
        'isDefault'  => true,
        'name'       => 'team-members',
        'title'      => 'Team Members',
        'description' => 'Displays team member cards and images.',
        'icon'       => 'businessperson',
        'attributes' => array(
            'variant' => 'team-members',
        ),
        'isActive'   => array('team-members')
    ),
    array(
        'name'       => 'clients',
        'title'      => 'Clients',
        'description' => 'Displays client cards in a carousel format.',
        'icon'       => 'businessperson',
        'attributes' => array(
            'variant' => 'clients',
        ),
        'isActive'   => array('clients')
    ),
);