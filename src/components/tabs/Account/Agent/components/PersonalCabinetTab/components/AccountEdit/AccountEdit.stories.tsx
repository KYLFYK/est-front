import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountEdit from './AccountEdit';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AccountEdit,

} as ComponentMeta<typeof AccountEdit>;


const Template: ComponentStory<typeof AccountEdit> = (args) => <AccountEdit  />;
export const AccountEdit_ = Template.bind({});
AccountEdit_.args = {
};