import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography'
import FavoriteIcon from '../../../icons/Favorite/Favorite';
import HeadLine from "../HeadLine/HeadLine";

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    color: {
      options: ["default", "nude", "accent", 'secondary', 'tertiary',"green","red"],
      control: { type: 'select' }
    },
    size: {
        options: ["default","subheader","header","small","medium","big","headerLow","subheaderBig"],
        control: {type: 'select'}
    },
    weight: {
        options: ["light", "regular", "medium", "bold"],
        control: {type: "select"}
    },
    iconPosition: {
        options: ["start", "end"],
        control: {type: "radio"}
    },
    mapping:{
      color:["default", "nude", "accent", 'secondary', 'tertiary',"green","red"]
    }
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;
const TemplateDiv: ComponentStory<typeof HeadLine> = (args) => <HeadLine {...args} />;


export const All = TemplateDiv.bind({});
All.args = {
  children: <div>
    <h2>Size: </h2>
    <Typography size={'small'} >14px - small </Typography>
    <Typography size={'default'}>16px - default </Typography>
    <Typography size={'medium'} color={"red"}>18px - medium - red</Typography>
    <Typography size={'subheader'} color={"accent"}>20px -subheader -accent </Typography>
    <div style={{backgroundColor:'black'}}>
      <Typography size={'subheaderBig'} color={"secondary"}>24px - subheaderBig -secondary </Typography>
    </div>
    <Typography size={'big'} color={"green"}>30px - big -green </Typography>
    <Typography size={'headerLow'} color={"tertiary"}>40px - headerLow -tertiary </Typography>
    <Typography size={'header'} color={"nude"} >48px - header -nude </Typography>

    <h2>Weight :</h2>
    <Typography size={'small'} color={"accent"} weight={'light'}>light -accent </Typography>
    <Typography size={'small'} color={"accent"} weight={'regular'}>regular -accent </Typography>
    <Typography size={'small'} color={"accent"} weight={'medium'}>medium -accent </Typography>
    <Typography size={'small'} color={"accent"} weight={'bold'}>bold -accent </Typography>
  </div>
};



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

export const SubheaderBig = Template.bind({});
SubheaderBig.args = {
  color: "green",
  size: "subheaderBig",
  children: 'subheaderBig text style',
};

export const Big = Template.bind({});
Big.args = {
  color: "nude",
  size: "big",
  children: 'Big text style',
};

export const headerLow = Template.bind({});
headerLow.args = {
  color: "secondary",
  size: "headerLow",
  children: <div style={{backgroundColor: '#000'}}> Heading text style </div>,
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
