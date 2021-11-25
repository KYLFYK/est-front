import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AverageMarketPrice from './AverageMarketPrice';

export default {
    title: 'Components/AverageMarketPrice',
    component: AverageMarketPrice,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AverageMarketPrice>;

const Template: ComponentStory<typeof AverageMarketPrice> = (args) => <AverageMarketPrice  />;

export const AverageMarketPrice_ = Template.bind({});
AverageMarketPrice_.args = {
};