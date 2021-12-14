import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Settings from './Settings';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: Settings,

} as ComponentMeta<typeof Settings>;

const personalCabinet = {
    phones: ['+7 999 888 77 55', '+7 999 888 77 66', '+7 999 888 77 44'],
    login: "Estatum",
    passwordOld: '1235',
    passwordNew: '',
    messagePhone: '+7 999 888 77 55',
    messageEmail: 'estatum@estatum.com'
}

const Template: ComponentStory<typeof Settings> = (args) => <Settings  {...args} />;
export const Settings_ = Template.bind({});
Settings_.args = {
    personalCabinet:personalCabinet

};