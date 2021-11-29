import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AverageMarketPrice from './AverageMarketPrice';

export default {
    title: 'Containers/PaybackContainer',
    component: AverageMarketPrice,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AverageMarketPrice>;

const averagePrice ={
    price:'150 001 240',
    priceUSD:' 2 025 221.09',
    priceEU:'1 728 447.47',
    priceMetre:'79 000',
    priceMetreUSD:'1 0066.61',
    priceMetreEU:'910.31',
}

const Template: ComponentStory<typeof AverageMarketPrice> = (args) => <AverageMarketPrice {...args} />;

export const AverageMarketPrice_ = Template.bind({});
AverageMarketPrice_.args = {
    averagePrice:averagePrice
};