import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditingProfile from './EditingProfile';

export default {
    title: 'Components/EditingProfile',
    component: EditingProfile,
    argTypes: {
        onClick: { action: "onClick" },
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof EditingProfile>;

const Template: ComponentStory<typeof EditingProfile> = (args) => <EditingProfile {...args} />;

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const Profile = Template.bind({});
Profile.args = {
    title: 'DEAL'
};