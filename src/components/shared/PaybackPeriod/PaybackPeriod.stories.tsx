import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaybackPeriod from './PaybackPeriod';

export default {
    title: 'Containers/PaybackContainer',
    component: PaybackPeriod,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof PaybackPeriod>;

const Template: ComponentStory<typeof PaybackPeriod> = (args) => <PaybackPeriod  />;

export const PaybackPeriod_ = Template.bind({});
PaybackPeriod_.args = {
};