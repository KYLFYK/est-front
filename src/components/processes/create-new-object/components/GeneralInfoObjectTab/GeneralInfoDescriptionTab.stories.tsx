import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralInfoDescriptionTab from './GeneralInfoDescriptionTab';

export default {
    title: 'Processes/GeneralInfoDescriptionTab',
    component: GeneralInfoDescriptionTab,
    argTypes: {

    },
} as ComponentMeta<typeof GeneralInfoDescriptionTab>;

const Template: ComponentStory<typeof GeneralInfoDescriptionTab> = (args) => <GeneralInfoDescriptionTab {...args} />;

export const GeneralInfoDescriptionTabProcess = Template.bind({});
GeneralInfoDescriptionTabProcess.args = {

};
