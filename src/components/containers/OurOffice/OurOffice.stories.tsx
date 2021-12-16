import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OurOffice from './OurOffice';
//import {ourOfficeType} from "./OurOffice";


export default {
    title: 'Containers/OurOffice',
    component: OurOffice,
} as ComponentMeta<typeof OurOffice>;

const Template: ComponentStory<typeof OurOffice> = (args) => <OurOffice {...args} />;

const ourOffice: any = {
    positionMap: {
        lat: 44.959975,
        lng: 34.109053
    },
    location: 'start',
    contactsOffice: [
        {title: 'metro', value: 'Проспект Победы'},
        {title: 'dot', value: 'Крым, Ленина, 23 корпус 1'},
        {title: 'time', value: 'Ежедневно с 10:00 до 20:00'},
        {title: 'phone', value: '+7 913 453 22 34'},
        {title: 'phone', value: '+7 913 453 22 35'},
        {title: 'printer', value: '+7 913 453 22 34'},
        {title: 'email', value: 'estatum@mail.com'}
    ],
    plotRoute: 'www.google.com'
}

export const OurOffice_ = Template.bind({});
OurOffice_.args = {
    ourOffice:ourOffice

}