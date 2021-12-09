import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Agents from './Agents';

export default {
    title: 'Tabs/AgentRoleTabs',
    component: Agents,

} as ComponentMeta<typeof Agents>;

const agentsList = [{
    name: "name",
    status: 0,
    experience: '25лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 1,
    url: 'url',
    id: 1,
}, {
    name: "name2",
    status: 1,
    experience: '5лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 2,
    url: 'url2',
    id: 2,
}, {
    name: "name3",
    status: 0,
    experience: '15лет',
    phone: '+7 999 888 77 11',
    email: '123ivanov@mail.ru',
    rating: 3,
    url: 'url3',
    id: 3,
},]

const Template: ComponentStory<typeof Agents> = (args) => <Agents  {...args} />;
export const Agents_ = Template.bind({});
Agents_.args = {
    agents:agentsList
};