import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseButton from './BaseButtons';
import FavoriteIcon from '../../icons/Favorite/Favorite';


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

const Template: ComponentStory<typeof BaseButton> = (args) => <BaseButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  isActive: false,
  children: 'Primary Button'
};

export const Blank = Template.bind({});
Blank.args = {
  type: 'blank',
  isActive: false,
  children: 'Blank Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  isActive: false,
  children: 'Secondary Button (Can be active)'
};

export const IconButton = Template.bind({});
IconButton.args = {
  type: 'secondary',
  isActive: false,
  children: '',
  icon: <FavoriteIcon />,
  iconActive: '',
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  type: 'secondary',
  isActive: false,
  children: 'Sample text',
  icon: <FavoriteIcon />,
  iconActive: '',
};

