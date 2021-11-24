import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectDeveloper from './ObjectDeveloper';
import { DEVELOPER_TABS_DATA } from "./config"

export default {
    title: 'Containers/ObjectDeveloper',
    component: ObjectDeveloper,
} as ComponentMeta<typeof ObjectDeveloper>;

const Template: ComponentStory<typeof ObjectDeveloper> = (args) => <ObjectDeveloper {...args} />;

export const Default = Template.bind({});
Default.args = {
    tabsData: DEVELOPER_TABS_DATA
}