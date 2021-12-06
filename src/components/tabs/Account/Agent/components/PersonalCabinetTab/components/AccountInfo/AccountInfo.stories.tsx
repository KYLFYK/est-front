import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountInfo from './AccountInfo';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AccountInfo,

} as ComponentMeta<typeof AccountInfo>;


const Template: ComponentStory<typeof AccountInfo> = (args) => <AccountInfo  />;
export const AccountInfo_ = Template.bind({});
AccountInfo_.args = {
};