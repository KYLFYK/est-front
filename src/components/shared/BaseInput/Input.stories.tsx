import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseInput } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Input',
    component: BaseInput,
} as ComponentMeta<typeof BaseInput>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseInput> = (args) => <BaseInput {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    value: "text",
    type: "text"
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: "₽",
    type: "text",
    value: "Input with icon",
};