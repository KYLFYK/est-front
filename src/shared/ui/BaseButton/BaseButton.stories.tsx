import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseButton from './BaseButtons';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: BaseButton,
  argTypes: {
    onClick: {action: "onClick"},
    type: {
      options: ["primary", "secondary", "blank"],
      control: { type: 'select' }
    },
  },
} as ComponentMeta<typeof BaseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  isActive: false,
  children: 'Button'
};

export const Blank = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blank.args = {
  type: 'blank',
  isActive: false,
  children: 'Button',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  type: 'secondary',
  isActive: false,
  children: 'Button'
  
};

