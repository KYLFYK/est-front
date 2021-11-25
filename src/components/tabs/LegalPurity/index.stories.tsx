import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalPurityTabs from '.';

export default {
    title: 'Tabs/LegalPurity',
    component: LegalPurityTabs,

} as ComponentMeta<typeof LegalPurityTabs>;


const Template: ComponentStory<typeof LegalPurityTabs> = (args) => <LegalPurityTabs {...args} />;
export const Example = Template.bind({});
Example.args = {
};

