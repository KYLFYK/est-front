import { ComponentStory, ComponentMeta } from '@storybook/react';
import LandInfoTab from './LandInfoTab';

export default {
    title: 'Processes/LandInfoTab',
    component: LandInfoTab,
    argTypes: {

    },
} as ComponentMeta<typeof LandInfoTab>;

const Template: ComponentStory<typeof LandInfoTab> = (args) => <LandInfoTab {...args} />;

export const LandInfoTabProcess = Template.bind({});
LandInfoTabProcess.args = {

};
