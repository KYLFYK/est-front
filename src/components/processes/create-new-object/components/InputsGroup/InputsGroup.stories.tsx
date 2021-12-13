import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputsGroup from './InputsGroup';

export default {
    title: 'Processes/InputsGroup',
    component: InputsGroup,
    argTypes: {

    },
} as ComponentMeta<typeof InputsGroup>;

const Template: ComponentStory<typeof InputsGroup> = (args) => <InputsGroup {...args} />;

export const InputsGroupProcess = Template.bind({});
InputsGroupProcess.args = {

};
