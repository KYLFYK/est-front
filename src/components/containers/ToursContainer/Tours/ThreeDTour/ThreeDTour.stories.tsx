import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThreeDTour } from './ThreeDTour';

export default {
    title: 'Components/ToursContainer',
    component: ThreeDTour,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof ThreeDTour>;

const Template: ComponentStory<typeof ThreeDTour> = (args) => <ThreeDTour {...args} />;


export const ThreeDTour_ = Template.bind({});
ThreeDTour_.args = {
    url:'https://www.youtube.com/embed/Ke3qyQYNob4',
};