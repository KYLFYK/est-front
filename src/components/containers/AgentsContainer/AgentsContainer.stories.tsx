import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgentsContainer } from './AgentsContainer';


export default {
    title: 'Components/AgentsContainer',
    component: AgentsContainer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AgentsContainer>;

const Template: ComponentStory<typeof AgentsContainer> = (args) => <AgentsContainer {...args} />;

const agentInfoMoc ={
    img:'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=80',
    connection:{
        whatsApp:'www.google.com',
        telegram:'www.google.com',
        email:'www.google.com',
        phone:'9999999999'
    },
    infoAgent:{
        fullName:'Ivanov Ivan',
        heldPost:'Best of Best',
        professionalExperience:'5 year',
        completed:'101 objects',
        inWork:'4 object',
        whatsApp:'+7 966 222 11 00',
        telegram:'+7 966 222 11 00',
        phone:'+7 966 222 11 11',
        email:'ivanov@marketPlase.com'
    }
}

const mocAgent = [agentInfoMoc,agentInfoMoc,agentInfoMoc]

export const AgentsContainer_ = Template.bind({});
AgentsContainer_.args = {
    title:'Наши агенты к вашим услугам',
};