import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralInfoDataTab from './GeneralInfoDataTab';

export default {
    title: 'Processes/GeneralInfoDataTab',
    component: GeneralInfoDataTab,
    argTypes: {

    },
} as ComponentMeta<typeof GeneralInfoDataTab>;

const Template: ComponentStory<typeof GeneralInfoDataTab> = (args) => <GeneralInfoDataTab {...args} />;

export const GeneralInfoDataTabProcess = Template.bind({});
GeneralInfoDataTabProcess.args = {

};
