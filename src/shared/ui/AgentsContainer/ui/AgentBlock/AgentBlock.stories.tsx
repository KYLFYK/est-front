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



export const AgentBlock_ = Template.bind({});
AgentBlock_.args = {
    name:'Семен Семёнов',
    img:'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg',
    heldPost:'Great Agent'
};