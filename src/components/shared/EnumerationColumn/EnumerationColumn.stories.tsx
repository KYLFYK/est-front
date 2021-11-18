import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  EnumerationColumn  from './EnumerationColumn';
import ParamsColumn from "../ParamsColumn/ParamsColumn";

export default {
    title: 'Components/EnumerationColumn',
    component: EnumerationColumn,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof EnumerationColumn>;

const Template: ComponentStory<typeof EnumerationColumn> = (args) => <EnumerationColumn {...args} />;

const emunsArray =[{title:'цена',value:'5 000 000 '},{title:'Тип объекта',value:'участок'},
    {title:'площадь',value:'30 соток'},{title:'Статус',value:'ИЖС'},
    {title:'Строения',value:'нет'},{title:'Коммуникации',value:'По улице'},]

export const Column = Template.bind({});
Column.args = {
    children:
        emunsArray.map(({title,value})=>(
            <ParamsColumn
                title={title}
                value={value}
                key={title}
            />
        ))
};