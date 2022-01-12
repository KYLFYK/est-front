import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AgencyRoleTabs from './AgencyRoleTabs';

export default {
    title: 'Tabs/AgencyRoleTabs',
    component: AgencyRoleTabs,

} as ComponentMeta<typeof AgencyRoleTabs>;


const Template: ComponentStory<typeof AgencyRoleTabs> = (args) => <AgencyRoleTabs {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
    storybook:true
};

