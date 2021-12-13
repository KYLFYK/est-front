import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';
import { IOption } from '../../../utils/interfaces/general';

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;

const title: IOption = {label: "Ипотека от РКНБ", value: 'mortgage'}

export const Breadcrumbs_card = Template.bind({});
Breadcrumbs_card.args = {
    items: ['Крым', 'Купить участок', 'Участок в Троицком 30 соток'],
};