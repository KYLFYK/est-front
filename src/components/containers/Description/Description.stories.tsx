import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Description from './Description';
import { DESCRIPTION_ITEMS } from './config';

export default {
    title: 'Entities_UI/Object/Description',
    component: Description,
} as ComponentMeta<typeof Description>;


const Template: ComponentStory<typeof Description> = (args) => <Description {...args} />;

export const DescriptionDefault = Template.bind({});
DescriptionDefault.args = {
    items: DESCRIPTION_ITEMS
};
