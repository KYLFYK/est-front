import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BaseDropDown } from './BaseDropDown';

export default {
    title: 'Components/DropDown',
    component: BaseDropDown,
} as ComponentMeta<typeof BaseDropDown>;

const OPTION_DATA = [{ label: 'option_1', value: "1" }, { label: 'option_2', value: "2" }, { label: 'option_3', value: "3" }, { label: 'option_4', value: "4" }]

const Template: ComponentStory<typeof BaseDropDown> = (args) => {
    const [value ,setValue] =useState(OPTION_DATA[0].value)
    return <BaseDropDown options={OPTION_DATA} onChange={setValue}  value={value} placeholder={OPTION_DATA[0].value}/>;
}

export const DefaultDropDown = Template.bind({});


