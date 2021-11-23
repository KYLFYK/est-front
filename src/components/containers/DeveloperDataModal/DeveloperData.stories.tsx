import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeveloperDataModal } from './DeveloperDataModal';

export default {
    title: 'Components/EstateDeveloper',
    component: DeveloperDataModal,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DeveloperDataModal>;

const Template: ComponentStory<typeof DeveloperDataModal> = (args) => <DeveloperDataModal {...args} />;

export const Modal = Template.bind({});
Modal.args = {
    img: "https://uploads-ssl.webflow.com/5f14a5126f7ca904d71ec160/5f1586ce4fa5ae44b6609443_emaar-in-black.png",
    developer:{
        title:'hello',
        location:'Dybai',
        passed:'52 in 42',
        objectsDeveloper:[{nameObject:'1ddaa',id:'1'},{nameObject:'2ffasd',id:'2'},
            {nameObject:'3ffawer',id:'3'},{nameObject:'4rr123',id:'4'},]
    },
     isActive: true,

};
