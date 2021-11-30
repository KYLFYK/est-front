import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThankRegistering} from './ThankRegistering';



export default {
    title: 'Components/Header',
    component: ThankRegistering,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof ThankRegistering>;

const Template: ComponentStory<typeof ThankRegistering> = (args) => <ThankRegistering {...args} />;

export const ThankRegistering_ = Template.bind({});
ThankRegistering_.args = {
    email:'villa@mail.ru'
};