import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormScreen from './FormScreen';

export default {
    title: 'Processes/FormScreen',
    component: FormScreen,
    argTypes: {

    },
} as ComponentMeta<typeof FormScreen>;

const Template: ComponentStory<typeof FormScreen> = (args) => <FormScreen {...args} />;

export const FormScreenProcess = Template.bind({});
FormScreenProcess.args = {

};
