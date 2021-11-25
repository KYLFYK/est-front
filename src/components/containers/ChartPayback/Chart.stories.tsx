import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chart from '.';

export default {
    title: 'Containers/ChartPayback',
    component: Chart,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof Chart>;


const Template: ComponentStory<typeof Chart> = (args: any) => <Chart {...args} isStorie />;
export const PaybackChart = Template.bind({});
PaybackChart.args = {

};
