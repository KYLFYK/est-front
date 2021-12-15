import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  LineV1  from './LineV1';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/LinesCard',
    component: LineV1,
} as ComponentMeta<typeof LineV1>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LineV1> = (args) => <LineV1 {...args} />;

export const LinesV1_ = Template.bind({});
LinesV1_.args = {
};