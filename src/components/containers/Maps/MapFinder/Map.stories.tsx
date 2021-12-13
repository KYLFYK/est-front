import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MapModal from '.';
import { mapData } from './config';

export default {
    title: 'Containers/Maps/MapFinder',
    component: MapModal,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof MapModal>;


const Template: ComponentStory<typeof MapModal> = (args: any) => <MapModal {...args} isStorie />;
export const FinderMap = Template.bind({});
FinderMap.args = {
    mapData: mapData,
    location: 'finder',
    center: {lat: 45.16, lng: 36.90},
};
