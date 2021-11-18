import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardAgency } from './CardAgency';

export default {
    title: 'Components/CardAgency',
    component: CardAgency,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof CardAgency>;

const Template: ComponentStory<typeof CardAgency> = (args) => <CardAgency {...args} />;

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Card = Template.bind({});
Card.args = {
    id:1,
    onDelete:()=>console.log(1),
    img:'https://www.publicdomainpictures.net/pictures/20000/velka/westminster-abbey-11297883825gkU.jpg',
    name:'Emaar',
    description:'lorem ipsum',
    phone:'+7 000 222 11',
};