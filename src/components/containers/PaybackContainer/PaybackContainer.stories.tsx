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

const Template: ComponentStory<typeof PaybackContainer> = (args) => <PaybackContainer  />;

export const PaybackContainer_ = Template.bind({});
PaybackContainer_.args = {
};