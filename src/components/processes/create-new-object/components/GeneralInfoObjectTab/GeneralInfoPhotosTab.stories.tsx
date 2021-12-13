import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralInfoPhotosTab from './GeneralInfoPhotosTab';

export default {
    title: 'Processes/GeneralInfoPhotosTab',
    component: GeneralInfoPhotosTab,
    argTypes: {

    },
} as ComponentMeta<typeof GeneralInfoPhotosTab>;

const Template: ComponentStory<typeof GeneralInfoPhotosTab> = (args) => <GeneralInfoPhotosTab {...args} />;

export const GeneralInfoPhotosTabProcess = Template.bind({});
GeneralInfoPhotosTabProcess.args = {

};
