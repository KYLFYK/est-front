import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ParamsColumn1  from './ParamsColumn';


export default {
    title: 'Components/EnumerationColumn',
    component: ParamsColumn1,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof ParamsColumn1>;

const Template: ComponentStory<typeof ParamsColumn1> = (args) => <ParamsColumn1 {...args} />;

export const ParamsColumn = Template.bind({});
ParamsColumn.args = {
    title:'Дом',
    value:'Хороший'
};