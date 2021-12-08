import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Views } from './Views';
import { IOption } from '../../../utils/interfaces/general';

export default {
    title: 'Components/Views',
    component: Views,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Views>;

const Template: ComponentStory<typeof Views> = (args) => <Views {...args} />;

const title: IOption = {label: "Ипотека от РКНБ", value: 'mortgage'}

export const Views_card = Template.bind({});
Views_card.args = {
    items: ['Крым', 'Купить участок', 'Участок в Троицком 30 соток'],
};