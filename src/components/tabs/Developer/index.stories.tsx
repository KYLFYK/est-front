import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeveloperTabs from '.';
import { OBJECT_DEVELOPER_TABS_DATA } from '../../containers/ObjectDeveloper/config';

export default {
    title: 'Tabs/Developer',
    component: DeveloperTabs,

} as ComponentMeta<typeof DeveloperTabs>;


const Template: ComponentStory<typeof DeveloperTabs> = (args) => <DeveloperTabs {...args} />;
export const Example = Template.bind({});
Example.args = {
    tabsData: OBJECT_DEVELOPER_TABS_DATA
};

