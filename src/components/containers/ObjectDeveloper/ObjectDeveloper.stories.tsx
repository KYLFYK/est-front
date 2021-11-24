import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectDeveloper from './ObjectDeveloper';
import { OBJECT_DEVELOPER_INFO } from "./config"

export default {
    title: 'Containers/ObjectDeveloper',
    component: ObjectDeveloper,
} as ComponentMeta<typeof ObjectDeveloper>;

const Template: ComponentStory<typeof ObjectDeveloper> = (args) => <ObjectDeveloper {...args} />;

export const Default = Template.bind({});
Default.args = {
    developerData: OBJECT_DEVELOPER_INFO
}