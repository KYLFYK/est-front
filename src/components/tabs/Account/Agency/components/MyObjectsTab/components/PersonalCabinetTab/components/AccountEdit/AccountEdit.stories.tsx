import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountEdit from './AccountEditAgency';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AccountEdit,

} as ComponentMeta<typeof AccountEdit>;

const Template: ComponentStory<typeof AccountEdit> = (args) => <AccountEdit {...args} />;
export const AccountEdit_ = Template.bind({});
AccountEdit_.args = {
};