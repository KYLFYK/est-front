import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaybackContainer from './PaybackContainer';

export default {
    title: 'Components/PaybackContainer',
    component: PaybackContainer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof PaybackContainer>;

const averagePrice ={
    price:'150 001 240',
    priceUSD:' 2 025 221.09',
    priceEU:'1 728 447.47',
    priceMetre:'79 000',
    priceMetreUSD:'1 0066.61',
    priceMetreEU:'910.31',
}

const Template: ComponentStory<typeof PaybackContainer> = (args) => <PaybackContainer {...args} />;

export const PaybackContainer_ = Template.bind({});
PaybackContainer_.args = {
   averagePrice: averagePrice
};