import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Settings from './Settings';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: Settings,

} as ComponentMeta<typeof Settings>;


const Template: ComponentStory<typeof Settings> = (args) => <Settings  />;
export const Settings_ = Template.bind({});
Settings_.args = {
};