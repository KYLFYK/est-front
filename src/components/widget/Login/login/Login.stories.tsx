import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Login} from './Login';



export default {
    title: 'Components/Header',
    component: Login,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Login_ = Template.bind({});
Login_.args = {

};