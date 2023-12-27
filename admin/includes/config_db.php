<?php
function getSchema()
{
    return [
        'woman' => [
            'menuName' => 'Платья',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'man' => [
            'menuName' => 'Мужские',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'child' => [
            'menuName' => 'Детские',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'type' => [
                    'name' => 'Тег',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Для девочек", "Для мальчиков"],
                    'selectOne' => true,
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'baby' => [
            'menuName' => 'Для младенцев',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'type' => [
                    'name' => 'Тег',
                    'element' => 'input',
                    'type' => 'hidden',
                    'data' => ["Комплекты для люльки", "Костюмы для младенцев"],
                    'selectOne' => true,
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'study' => [
            'menuName' => 'Работы учеников',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],

        'atelier' => [
            'menuName' => 'Ателье',
            'fields' => [
                'title' => [
                    'name' => 'Наименование',
                    'element' => 'input',
                    'type' => 'text',
                    'required' => true,
                ],

                'img' => [
                    'name' => 'Картинки',
                    'element' => 'input',
                    'type' => 'file',
                    'required' => true,
                ],
            ],
        ],
       
    ];
}