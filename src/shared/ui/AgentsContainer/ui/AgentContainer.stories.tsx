import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AgentsContainer } from './agentsContainer';


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

const mocAgent = [{
    name: 'Василий Сидоров',
    heldPost: 'Старший агент',
    img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
},
    {
        name: 'Семён Панкратов ',
        heldPost: 'Старший агент',
        img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
    },
    {name: 'Петр Петрович', heldPost: 'Старший агент', img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'},
]

export const AgentsContainer_ = Template.bind({});
AgentsContainer_.args = {
    title:'Наши агенты к вашим услугам',
    agents:mocAgent
};