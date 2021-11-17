import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card'
import SampleImage from '../../../assets/planning_sample.png'

export default {
    title: 'Entities_UI/Object/PlanningCard',
    component: Card,

} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
    image: SampleImage,
    floor: 5,
    housing: 2,
    deadline: "3 квартал 2022",
    price: 12860000,
    title: "1-комнатная, 52 м "
};

