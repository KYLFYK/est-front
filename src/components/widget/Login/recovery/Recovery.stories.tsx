import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Recovery} from './Recovery';



export default {
    title: 'Components/Header',
    component: Recovery,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Recovery>;

const Template: ComponentStory<typeof Recovery> = (args) => <Recovery {...args} />;

export const Recovery_ = Template.bind({});
Recovery_.args = {

};