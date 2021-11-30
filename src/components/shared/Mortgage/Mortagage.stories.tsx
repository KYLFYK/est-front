import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Mortgage} from './Mortgage';

export default {
    title: 'Components/Mortgage',
    component: Mortgage,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Mortgage>;

const Template: ComponentStory<typeof Mortgage> = (args) => <Mortgage {...args} />;

export const Mortgage_ = Template.bind({});
Mortgage_.args = {
};