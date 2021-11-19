import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Advantage } from './Advantage';
import Mortgage from '../../../icons/Advantages/Mortage';
import { IOption } from '../../../utils/interfaces/general';

export default {
    title: 'Components/Advantages',
    component: Advantage,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Advantage>;

const Template: ComponentStory<typeof Advantage> = (args) => <Advantage {...args} />;

const title: IOption = {label: "Ипотека от РКНБ", value: 'mortgage'}

export const Advantage_card = Template.bind({});
Advantage_card.args = {
    title: title.label,
    text: 'Используйте ипотечный калькулятор для расчета своей ставки',
    children: <Mortgage />
};