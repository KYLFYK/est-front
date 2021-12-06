import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Agents from './Agents';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: Agents,

} as ComponentMeta<typeof Agents>;


const Template: ComponentStory<typeof Agents> = (args) => <Agents  />;
export const Agents_ = Template.bind({});
Agents_.args = {
};