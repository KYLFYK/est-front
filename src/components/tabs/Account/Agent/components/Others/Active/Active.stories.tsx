import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Active from './Active';

export default {
    title: 'Tabs/Others',
    component: Active,

} as ComponentMeta<typeof Active>;


const Template: ComponentStory<typeof Active> = (args) => <Active  />;
export const Active_ = Template.bind({});
Active_.args = {
};