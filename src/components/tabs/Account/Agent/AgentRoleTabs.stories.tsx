import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AgentRoleTabs from './AgentRoleTabs';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AgentRoleTabs,

} as ComponentMeta<typeof AgentRoleTabs>;


const Template: ComponentStory<typeof AgentRoleTabs> = (args) => <AgentRoleTabs {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
};

