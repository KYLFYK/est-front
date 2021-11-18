import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Header} from './Header';



export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Header_ = Template.bind({});
Header_.args = {

};