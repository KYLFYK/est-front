import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseTextarea } from './BaseTextarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/BaseTextarea',
    component: BaseTextarea,
} as ComponentMeta<typeof BaseTextarea>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTextarea> = (args) => <BaseTextarea {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
    value: "text",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: "₽",
    value: "Textarea with icon",
};