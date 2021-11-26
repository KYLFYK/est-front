import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Map from '.';
import { places } from './config';

export default {
    title: 'Containers/MapInfrastructure',
    component: Map,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof Map>;


const Template: ComponentStory<typeof Map> = (args: any) => <Map {...args} isStorie />;
export const InfrastructureMap = Template.bind({});
InfrastructureMap.args = {
    places: places,
    location: 'infrastructure',
};

