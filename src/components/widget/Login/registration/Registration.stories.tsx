import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Registration} from './Registration';

export default {
    title: 'Components/Header',
    component: Registration,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Registration>;

const Template: ComponentStory<typeof Registration> = (args) => <Registration {...args} />;

export const Registration_ = Template.bind({});
Registration_.args = {

};