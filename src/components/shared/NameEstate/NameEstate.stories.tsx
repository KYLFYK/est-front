import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NameEstate } from './NameEstate';
import { IOption } from '../../../utils/interfaces/general';

export default {
    title: 'Components/NameEstate',
    component: NameEstate,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof NameEstate>;

const Template: ComponentStory<typeof NameEstate> = (args) => <NameEstate {...args} />;

const title: IOption = {label: "Ипотека от РКНБ", value: 'mortgage'}

export const NameEstate_card = Template.bind({});
NameEstate_card.args = {
    item: 'Крым',
};