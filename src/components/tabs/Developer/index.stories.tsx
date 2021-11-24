import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DeveloperTabs from '.';

export default {
    title: 'Tabs/Developer',
    component: DeveloperTabs,

} as ComponentMeta<typeof DeveloperTabs>;


const Template: ComponentStory<typeof DeveloperTabs> = (args) => <DeveloperTabs {...args} />;
export const Example = Template.bind({});
Example.args = {

};

