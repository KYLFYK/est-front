import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Planning from './CardContainer';
import {mapData} from './config'

export default {
    title: 'Containers/CardContainer',
    component: Planning,

} as ComponentMeta<typeof Planning>;


const Template: ComponentStory<typeof Planning> = (args) => <Planning {...args} />;
export const SectionComponent = Template.bind({});
SectionComponent.args = {
    mapData: mapData
};

