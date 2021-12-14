import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SampleImage from '../assets/planning_sample.png'
import Card from './Card';

export default {
    title: 'Containers/PlanningCard',
    component: Card,

} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
    image: '../assets/planning_sample.png',
    floor: 5,
    housing: 2,
    deadline: "3 квартал 2022",
    price: 12860000,
    title: "1-комнатная, 52 м "
};

