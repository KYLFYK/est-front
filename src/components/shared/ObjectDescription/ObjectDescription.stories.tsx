import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectDescription from './ObjectDescription';
import { DESCRIPTION_ITEMS } from './config';

export default {
    title: 'Components/ObjectDescription',
    component: ObjectDescription,
} as ComponentMeta<typeof ObjectDescription>;


const Template: ComponentStory<typeof ObjectDescription> = (args) => <ObjectDescription {...args} />;

export const DescriptionDefault = Template.bind({});
DescriptionDefault.args = {
    items: DESCRIPTION_ITEMS
};
