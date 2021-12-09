import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountEdit from './AccountEdit';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AccountEdit,

} as ComponentMeta<typeof AccountEdit>;
const infoAgencyMoc = {
    name: 'Estatum',
    status: 'Agency',
    address: 'Смоленская обл. г.Смоленск',
    phone: '+7 999 777 55 11',
    email: 'estatum@mail.com',
    website: 'estatum.com',
    description: 'You agency'
}

const Template: ComponentStory<typeof AccountEdit> = (args) => <AccountEdit {...args} />;
export const AccountEdit_ = Template.bind({});
AccountEdit_.args = {
    infoAgency:infoAgencyMoc
};