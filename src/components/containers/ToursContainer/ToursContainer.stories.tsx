import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToursContainer from './ToursContainer';

export default {
    title: 'Components/ToursContainer',
    component: ToursContainer,

} as ComponentMeta<typeof ToursContainer>;

const Template: ComponentStory<typeof ToursContainer> = (args) => <ToursContainer {...args} />;
export const ToursContainer_ = Template.bind({});
ToursContainer_.args = {
     Online_tour:{
        threeD_tour:{
            url:'https://www.youtube.com/embed/Ke3qyQYNob4',
        },
        vr_tour:{
            url:'https://3d-tur.ru/010/',
        }
    }
};