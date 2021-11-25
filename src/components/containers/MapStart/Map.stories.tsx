import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Map from '.';

export default {
    title: 'Containers/OurOffice',
    component: Map,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof Map>;

const center={
    lat: 44.959975,
    lng: 34.109053
}
const Template: ComponentStory<typeof Map> = (args: any) => <Map {...args} isStorie />;
export const StartMap = Template.bind({});
StartMap.args = {
    location: 'start',
    center:center
};
