import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Active from './MyAdsContainer';

export default {
    title: 'Tabs/Others',
    component: Active,

} as ComponentMeta<typeof Active>;

const mocActive = [{
    id: '1',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Аренда',
    name: '3-этажный коттедж',
    price: '100 000р/mec',
    mainSpecifications: ['600м', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Забронирован',
    address: 'Крым, Ялта'
}, {
    id: '2',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Продажа',
    name: '5-этажный коттедж',
    price: '30 000 000р',
    mainSpecifications: ['900м', '5 этажей', 'Бассейн', 'Гараж 150м2', 'Терраса 120 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Свободна',
    address: 'Крым, Ялта'
}, {
    id: '3',
    img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
    type: 'Аренда',
    name: '5-этажный коттедж',
    price: '30 000 000р',
    mainSpecifications: ['900м', '5 этажей', 'Бассейн', 'Гараж 150м2', 'Терраса 120 m2'],
    agent: 'Виталий Панкратов',
    dateStart: '31/08/2021',
    dateEnd: '05/09/21',
    status: 'Забронирован',
    address: 'Крым, Ялта'
},
]

const Template: ComponentStory<typeof Active> = (args) => <Active {...args} />;
export const Active_ = Template.bind({});
Active_.args = {
    menu:'active',
    objects:mocActive
};