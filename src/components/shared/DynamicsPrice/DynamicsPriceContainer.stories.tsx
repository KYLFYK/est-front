import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DynamicsPriceContainer from './DynamicsPriceContainer';

export default {
    title: 'Components/DynamicsPriceContainer',
    component: DynamicsPriceContainer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DynamicsPriceContainer>;

const Template: ComponentStory<typeof DynamicsPriceContainer> = (args) => <DynamicsPriceContainer  />;

export const DynamicsPriceContainer_ = Template.bind({});
DynamicsPriceContainer_.args = {
};