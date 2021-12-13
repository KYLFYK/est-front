import { ComponentStory, ComponentMeta } from '@storybook/react';
import InfrastructureTab from './InfrastructureTab';

export default {
    title: 'Processes/InfrastructureTab',
    component: InfrastructureTab,
    argTypes: {

    },
} as ComponentMeta<typeof InfrastructureTab>;

const Template: ComponentStory<typeof InfrastructureTab> = (args) => <InfrastructureTab {...args} />;

export const InfrastructureTabProcess = Template.bind({});
InfrastructureTabProcess.args = {

};
