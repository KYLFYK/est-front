import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuccessPage from './SuccessPage';

export default {
    title: 'Processes/SuccessPage',
    component: SuccessPage,
    argTypes: {

    },
} as ComponentMeta<typeof SuccessPage>;

const Template: ComponentStory<typeof SuccessPage> = (args) => <SuccessPage {...args} />;

export const SuccessPageProcess = Template.bind({});
SuccessPageProcess.args = {

};
