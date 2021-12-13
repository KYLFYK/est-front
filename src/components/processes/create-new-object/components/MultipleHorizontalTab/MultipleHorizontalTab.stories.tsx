import { ComponentStory, ComponentMeta } from '@storybook/react';
import MultipleHorizontalTab from './MultipleHorizontalTab';

export default {
    title: 'Processes/MultipleHorizontalTab',
    component: MultipleHorizontalTab,
    argTypes: {

    },
} as ComponentMeta<typeof MultipleHorizontalTab>;

const Template: ComponentStory<typeof MultipleHorizontalTab> = (args) => <MultipleHorizontalTab {...args} />;

export const MultipleHorizontalTabProcess = Template.bind({});
MultipleHorizontalTabProcess.args = {

};
