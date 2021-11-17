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

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Card = Template.bind({});
Card.args = {
    title:'EMAAR',
    img:"https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png"
};