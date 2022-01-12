import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DevelopersContainer, {mockDevelopers} from './DevelopersContainer';


export default {
    title: 'Components/EstateDeveloper',
    component: DevelopersContainer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof DevelopersContainer>;

const Template: ComponentStory<typeof DevelopersContainer> = (args) => <DevelopersContainer {...args} />;

const mock = ['EMAAR','EMAAR','EMAAR','EMAAR','EMAAR',]

export const DevelopersContainer_ = Template.bind({});
DevelopersContainer_.args = {
    title:'Developers',
    developersInfo:mockDevelopers,
};