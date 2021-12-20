import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OwnerRoleTabs from './OwnerRoleTabs';

export default {
    title: 'Tabs/OwnerRoleTabs',
    component: OwnerRoleTabs,

} as ComponentMeta<typeof OwnerRoleTabs>;


const Template: ComponentStory<typeof OwnerRoleTabs> = (args) => <OwnerRoleTabs />;
export const OwnerRoleTabs_ = Template.bind({});
OwnerRoleTabs_.args = {
};