import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CounterButtons from './CounterButtons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/CounterButtons',
    component: CounterButtons,
} as ComponentMeta<typeof CounterButtons>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CounterButtons> = (args) => <CounterButtons {...args} />;

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    initValue: 1,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    initValue: 1,
    label: "Какая-то надпись"
};