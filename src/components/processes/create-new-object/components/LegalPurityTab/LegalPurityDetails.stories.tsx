import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalPurityDetails from './LegalPurityDetails';

export default {
    title: 'Processes/LegalPurityDetails',
    component: LegalPurityDetails,
    argTypes: {

    },
} as ComponentMeta<typeof LegalPurityDetails>;

const Template: ComponentStory<typeof LegalPurityDetails> = (args) => <LegalPurityDetails {...args} />;

export const LegalPurityDetailsProcess = Template.bind({});
LegalPurityDetailsProcess.args = {

};
