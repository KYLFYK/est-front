import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Planning from './Plannings';
import { PlanningFilter } from '../../../../../features/planning-filter';

export default {
    title: 'Entities_UI/Object/PlanningSection',
    component: Planning,

} as ComponentMeta<typeof Planning>;


const Template: ComponentStory<typeof Planning> = (args) => <Planning {...args} />;
export const SectionComponent = Template.bind({});
SectionComponent.args = {
    FilterComponent: <PlanningFilter />,
    planningList: Array(7).fill({
        image: '',
        price: 144444,
        title: "Большущий домина",
        housing: 3,
        deadline: "2 квартал 2023г",
        floor: 4 
    })
};

