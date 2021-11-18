import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Footer} from './Footer';



export default {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Footer_ = Template.bind({});
Footer_.args = {

};