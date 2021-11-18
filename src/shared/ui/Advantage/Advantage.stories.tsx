import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Advantage } from './Advantage';
import Mortgage from "../../icons/Advantages/Mortage";

export default {
    title: 'Components/Advantages',
    component: Advantage,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Advantage>;

const Template: ComponentStory<typeof Advantage> = (args) => <Advantage {...args} />;

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Advantage_card = Template.bind({});
Advantage_card.args = {
    title:'Ипотека от РКНБ',
    text: 'Используйте ипотечный калькулятор  для расчета своей ставки',
    children:<Mortgage/>
};