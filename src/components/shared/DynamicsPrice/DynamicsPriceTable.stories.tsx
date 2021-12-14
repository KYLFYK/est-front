import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DynamicsPriceTable from './DynamicsPriceTable';

export default {
    title: 'Containers/PaybackContainer',
    component: DynamicsPriceTable,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DynamicsPriceTable>;

const Template: ComponentStory<typeof DynamicsPriceTable> = (args) => <DynamicsPriceTable {...args} />;

const table = [
    {name: 'Январь 2018', price: '50000'},
    {name: 'Июль 2018', price: '55000'},
    {name: 'Январь 2019', price: '56000'},
    {name: 'Июль 2019', price: '61000'},
    {name: 'Январь 2020', price: '62000'},
    {name: 'Июль 2020', price: '67000'},
    {name: 'Январь 2021', price: '68000'},
    {name: 'Июль 2021', price: '71000'},
]

export const DinamicPrice_ = Template.bind({});
DinamicPrice_.args = {
    table:table
};