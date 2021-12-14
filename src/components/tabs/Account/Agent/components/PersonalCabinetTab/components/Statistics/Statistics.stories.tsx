import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Statistics from './Statistics';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: Statistics,

} as ComponentMeta<typeof Statistics>;


const Template: ComponentStory<typeof Statistics> = (args) => <Statistics  />;
export const Statistics_ = Template.bind({});
Statistics_.args = {
};