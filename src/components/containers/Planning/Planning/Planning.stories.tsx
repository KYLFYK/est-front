import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PlanningFilter from '../../PlanningFilter/PlanningFilter';
import Planning from './Plannings';

export default {
    title: 'Containers/PlanningSection',
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

