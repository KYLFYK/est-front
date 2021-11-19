import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectSpecifications from './ObjectSpecifications';
import { OBJECT_SPECS_MOCK, OBJECT_SPEC_WITHOUT_TEXT } from './config';

export default {
    title: 'Containers/ObjectSpecifications',
    component: ObjectSpecifications,
} as ComponentMeta<typeof ObjectSpecifications>;

const Template: ComponentStory<typeof ObjectSpecifications> = (args) => <ObjectSpecifications {...args} />;

export const Default = Template.bind({});
Default.args = {
 specificationsLists: Array(3).fill(OBJECT_SPECS_MOCK),
 title: "Особенности"
};

export const SingleLinedSpecifications = Template.bind({});
SingleLinedSpecifications.args = {
 specificationsLists: Array(2).fill(OBJECT_SPEC_WITHOUT_TEXT),
 title: "Особенности"
};