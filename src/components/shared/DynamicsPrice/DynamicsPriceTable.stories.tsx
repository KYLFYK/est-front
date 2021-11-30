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

const Template: ComponentStory<typeof DynamicsPriceTable> = (args) => <DynamicsPriceTable  />;

export const DinamicPrice_ = Template.bind({});
DinamicPrice_.args = {
};