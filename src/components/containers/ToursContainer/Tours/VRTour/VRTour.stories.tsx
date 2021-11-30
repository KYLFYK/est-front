import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VRTour } from './VRTour';

export default {
    title: 'Components/ToursContainer',
    component: VRTour,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof VRTour>;

const Template: ComponentStory<typeof VRTour> = (args) => <VRTour {...args} />;


export const VRTour_ = Template.bind({});
VRTour_.args = {
    url:'https://3d-tur.ru/010/',
};