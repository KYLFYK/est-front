import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography'
import FavoriteIcon from '../../../icons/Favorite/Favorite';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    color: {
      options: ["default", "nude", "accent", 'secondary', 'tertiary'],
      control: { type: 'select' }
    },
    size: {
        options: ["default","subheader","header","small","medium","big"],
        control: {type: 'select'}
    },
    weight: {
        options: ["light", "regular", "medium", "bold"],
        control: {type: "select"}
    },
    iconPosition: {
        options: ["start", "end"],
        control: {type: "radio"}
    }
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Small = Template.bind({});

Small.args = {
    color: "tertiary",
    size: "small",
    children: "Small text style",
  };

export const Default = Template.bind({});
Default.args = {
  color: "default",
  weight: "regular",
  size: "default",
  children: 'Most common used text style'
};

export const Medium = Template.bind({});
Medium.args = {
  color: "default",
  size: 'medium',
  children: 'Medium text style',
};

export const Subheader = Template.bind({});
Subheader.args = {
  color: "accent",
  size: "subheader",
  children: 'Subheader text style',
};

export const Big = Template.bind({});
Big.args = {
  color: "nude",
  size: "big",
  children: 'Big text style',
};

export const Heading = Template.bind({});
Heading.args = {
  color: "secondary",
  size: "header",
  children: <div style={{backgroundColor: '#000'}}> Heading text style </div>,
};

export const IconAtStart = Template.bind({});
IconAtStart.args = {
  color: "default",
  size: "default",
  children: "Text with icon at start",
  icon: <FavoriteIcon />,
  iconPosition: 'start'
};

export const IconAtEnd = Template.bind({});
IconAtEnd.args = {
  color: "default",
  size: "default",
  children: "Text with icon at end",
  icon: <FavoriteIcon />,
  iconPosition: 'end'
};
