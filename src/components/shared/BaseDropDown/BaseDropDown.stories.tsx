import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseDropDown } from './BaseDropDown';

export default {
    title: 'Components/DropDown',
    component: BaseDropDown,
} as ComponentMeta<typeof BaseDropDown>;

const OPTION_DATA = [{ label: 'option_1', value: "1" }, { label: 'option_2', value: "2" }, { label: 'option_3', value: "3" }, { label: 'option_4', value: "4" }]

const Template: ComponentStory<typeof BaseDropDown> = (args) => <BaseDropDown {...args} />;

export const DefaultDropDown = Template.bind({});
DefaultDropDown.args = {
    options: OPTION_DATA,
    placeholder: "Sample placeholder"
};

export const WithActiveValue = Template.bind({});
WithActiveValue.args = {
    options: OPTION_DATA,
    placeholder: "Sample placeholder",
    value: OPTION_DATA[1].value
};

