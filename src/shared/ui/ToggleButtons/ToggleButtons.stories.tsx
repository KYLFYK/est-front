import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtons } from './ToggleButtons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/ToggleButtons',
    component: ToggleButtons,
} as ComponentMeta<typeof ToggleButtons>;

const OPTION_DATA = [{ label: 'option_1', value: "1" }, { label: 'option_2', value: "2" }, { label: 'option_3', value: "3" }, { label: 'option_4', value: "4" }]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButtons> = (args) => <ToggleButtons {...args} />;

export const WithoutActiveElement = Template.bind({});
WithoutActiveElement.args = {
    items: OPTION_DATA
};

export const OneActiveElement = Template.bind({});
OneActiveElement.args = {
    items: OPTION_DATA,
    activeValue: '2'
};

export const MultipleActiveElements = Template.bind({});
MultipleActiveElements.args = {
    items: OPTION_DATA,
    activeValue: '2,1',
    multiple: true
};
