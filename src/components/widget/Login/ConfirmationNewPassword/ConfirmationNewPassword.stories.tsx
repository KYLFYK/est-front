import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ConfirmationNewPassword} from './ConfirmationNewPassword';

export default {
    title: 'Components/Header',
    component: ConfirmationNewPassword,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof ConfirmationNewPassword>;

const Template: ComponentStory<typeof ConfirmationNewPassword> = (args) => <ConfirmationNewPassword {...args} />;

export const ConfirmationNewPassword_ = Template.bind({});
ConfirmationNewPassword_.args = {
    account:'lunaPark'
};