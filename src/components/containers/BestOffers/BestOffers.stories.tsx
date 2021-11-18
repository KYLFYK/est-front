import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {BestOffers} from './bestOffers';



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

const Template: ComponentStory<typeof BestOffers> = (args) => <BestOffers />;

export const BestOffers_ = Template.bind({});
BestOffers_.args = {

};