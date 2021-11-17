import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeveloperData } from './DeveloperData';

export default {
    title: 'Components/EstateDeveloper',
    component: DeveloperData,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DeveloperData>;

const Template: ComponentStory<typeof DeveloperData> = (args) => <DeveloperData {...args} />;

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Modal = Template.bind({});
Modal.args = {
    img:"https://uploads-ssl.webflow.com/5f14a5126f7ca904d71ec160/5f1586ce4fa5ae44b6609443_emaar-in-black.png",
    title:'Инвестиционная компания, основанная в 1997 году',
    location:'Дубай, Объединенные Арабские Эмираты',
    passed:'54 дома в 6 ЖК',
    objectDeveloper:nameObject
};
