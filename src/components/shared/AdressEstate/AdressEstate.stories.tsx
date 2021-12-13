import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AdressEstate } from './AdressEstate';
import { IOption } from '../../../utils/interfaces/general';

export default {
    title: 'Components/AdressEstate',
    component: AdressEstate,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AdressEstate>;

const Template: ComponentStory<typeof AdressEstate> = (args) => <AdressEstate {...args} />;

const title: IOption = {label: "Ипотека от РКНБ", value: 'mortgage'}

export const AdressEstate_card = Template.bind({});
AdressEstate_card.args = {
    item: 'Крым', 
};