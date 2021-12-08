import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConstructProgress from './ConstructProgress';
import { IMAGES_SET, INFO_OPTIONS } from './config';

export default {
    title: 'Containers/ConstructProgress',
    component: ConstructProgress,
    decorators: [
        (Story) => (
            <div style={{width: 1400}}><Story /></div>
        )
    ]
} as ComponentMeta<typeof ConstructProgress>;

const Template: ComponentStory<typeof ConstructProgress> = (args) => <ConstructProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: IMAGES_SET,
    info: INFO_OPTIONS,
};

export const WithoutPrice = Template.bind({});
WithoutPrice.args = {
    images: IMAGES_SET,
    info: INFO_OPTIONS,
};