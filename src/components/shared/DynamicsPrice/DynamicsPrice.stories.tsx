import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DynamicsPrice from './DynamicsPrice';

export default {
    title: 'Containers/PaybackContainer',
    component: DynamicsPrice,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DynamicsPrice>;

const Template: ComponentStory<typeof DynamicsPrice> = (args) => <DynamicsPrice  />;

export const DynamicsPrice_ = Template.bind({});
DynamicsPrice_.args = {
};