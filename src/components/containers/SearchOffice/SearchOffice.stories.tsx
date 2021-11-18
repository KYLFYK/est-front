import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SearchOffice}  from './SearchOffice';

export default {
    title: 'Components/SearchOffice',
    component: SearchOffice,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof SearchOffice>;

const Template: ComponentStory<typeof SearchOffice> = (args) => <SearchOffice  />;

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Search_Office = Template.bind({});
Search_Office.args = {

};