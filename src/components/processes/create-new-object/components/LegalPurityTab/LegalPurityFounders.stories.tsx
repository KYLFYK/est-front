import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalPurityFounders from './LegalPurityFounders';

export default {
    title: 'Processes/LegalPurityFounders',
    component: LegalPurityFounders,
    argTypes: {

    },
} as ComponentMeta<typeof LegalPurityFounders>;

const Template: ComponentStory<typeof LegalPurityFounders> = (args) => <LegalPurityFounders {...args} />;

export const LegalPurityFoundersProcess = Template.bind({});
LegalPurityFoundersProcess.args = {

};
