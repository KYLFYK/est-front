import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Map from '.';
import { mapData } from './config';

export default {
    title: 'Containers/MapFinder',
    component: Map,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof Map>;


const Template: ComponentStory<typeof Map> = (args: any) => <Map {...args} isStorie />;
export const FinderMap = Template.bind({});
FinderMap.args = {
    mapData: mapData,
    location: 'finder',
};
