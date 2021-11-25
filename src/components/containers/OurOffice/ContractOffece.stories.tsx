import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ContactOffice from './ContactOffice';


export default {
    title: 'Containers/OurOffice',
    component: ContactOffice,
} as ComponentMeta<typeof ContactOffice>;

const Template: ComponentStory<typeof ContactOffice> = (args) => <ContactOffice {...args} />;

const contactsOffice = [
    {title:'metro',value:'Проспект Победы'},
    {title:'dot',value:'Крым, Ленина, 23 корпус 1'},
    {title:'time',value:'Ежедневно с 10:00 до 20:00'},
    {title:'phone',value:'+7 913 453 22 34'},
    {title:'phone',value:'+7 913 453 22 35'},
    {title:'printer',value:'+7 913 453 22 34'},
    {title:'email',value:'estatum@mail.com'}
]

export const ContactOffice_ = Template.bind({});

ContactOffice_.args = {
    contactOffice:contactsOffice,
    link:'www.google.com'
}