import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EstateDeveloper } from './EstateDeveloper';

export default {
    title: 'Components/EstateDeveloper',
    component: EstateDeveloper,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof EstateDeveloper>;

const Template: ComponentStory<typeof EstateDeveloper> = (args) => <EstateDeveloper {...args} />;

const mockObjects = [{nameObject:'EMAAR',id:'1'},
    {nameObject:'EMAAR',id:'1'},
    {nameObject:'EMAAR',id:'1'},
    {nameObject:'EMAAR',id:'1'},
    {nameObject:'EMAAR',id:'1'},]

export const Card = Template.bind({});
Card.args = {
    img:"https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title:'EMAAR',
    description:'lorem ipsum',
    developerInfo:{
        title: 'EMAAR date of foundation 1997',
        location:'xianjos',
        passed:'50 in 50',
        objectsDeveloper:mockObjects
    }
};