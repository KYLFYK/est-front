import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgentBlock } from './AgentBlock';

export default {
    title: 'Components/AgentsContainer',
    component: AgentBlock,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AgentBlock>;

const Template: ComponentStory<typeof AgentBlock> = (args) => <AgentBlock {...args} />;

const agentInfoMoc ={
    img:'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg',
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

export const AgentBlock_ = Template.bind({});
AgentBlock_.args = {
    img:agentInfoMoc.img,
    connection:agentInfoMoc.connection,
    infoAgent:agentInfoMoc.infoAgent
};