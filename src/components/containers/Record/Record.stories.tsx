import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Record } from './Record';

export default {
    title: 'Components/Record',
    component: Record,
    decorators: [
        (Story) => (
            <div ><Story /></div>
        )
    ]
} as ComponentMeta<typeof Record>;

const Template: ComponentStory<typeof Record> = (args) => <Record  />;

export const Record_ = Template.bind({});
Record_.args = {

};