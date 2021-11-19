import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {RecoveryMail} from './RecoveryMail';



export default {
    title: 'Components/Header',
    component: RecoveryMail,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof RecoveryMail>;

const Template: ComponentStory<typeof RecoveryMail> = (args) => <RecoveryMail {...args} />;

export const RecoveryMail_ = Template.bind({});
RecoveryMail_.args = {
    email:'www.leningrad.ru'
};