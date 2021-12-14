import { ComponentStory, ComponentMeta } from '@storybook/react';
import HouseInfoInterierTab from './HouseInfoInterierTab';

export default {
    title: 'Processes/HouseInfoInterierTab',
    component: HouseInfoInterierTab,
    argTypes: {

    },
} as ComponentMeta<typeof HouseInfoInterierTab>;

const Template: ComponentStory<typeof HouseInfoInterierTab> = (args) => <HouseInfoInterierTab {...args} />;

export const HouseInfoInterierTabProcess = Template.bind({});
HouseInfoInterierTabProcess.args = {

};
