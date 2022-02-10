import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {BestOffers} from './bestOffers';
import {IMAGES_SET} from "../GeneralInfo/config";



export default {
    title: 'Components/BestOffers',
    component: BestOffers,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof BestOffers>;

const Template: ComponentStory<typeof BestOffers> = (args) =><div style={{display: 'flex', gap: '15px', flexDirection: 'column'}}> <BestOffers {...args} /> </div> ;

const estateOffers = [{id:1,url:'www.google.com',img:IMAGES_SET,tags:["Покупка",'Таунхаус','Новостройка']},
    {id:1,url:'www.google.com',img:IMAGES_SET,tags:["Покупка",'Таунхаус','Новостройка']},
    {id:1,url:'www.google.com',img:IMAGES_SET,tags:["Покупка",'Таунхаус','Новостройка']}
]

export const BestOffers_ = Template.bind({});
BestOffers_.args = {
    tagsButton:['Покупка', 'Аренда', 'Дом', 'Коммерческая недвижимость', 'Новостройка', 'Вторичноежилье',
        'Строящийся дом', '2-23 этажи']
};