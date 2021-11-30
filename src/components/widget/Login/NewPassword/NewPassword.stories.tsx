import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewPassword from './NewPassword';



export default {
    title: 'Components/Header',
    component: NewPassword,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof NewPassword>;

const Template: ComponentStory<typeof NewPassword> = (args) => <NewPassword {...args} />;

export const NewPassword_ = Template.bind({});
NewPassword_.args = {
    account:'linaPark'
};