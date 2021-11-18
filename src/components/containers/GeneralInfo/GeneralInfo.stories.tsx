import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralInfo from './GeneralInfo';
import { IMAGES_SET, INFO_OPTIONS } from './config';

export default {
    title: 'Entities_UI/Object/GeneralInfo',
    component: GeneralInfo,
    decorators: [
        (Story) => (
            <div style={{width: 1400}}><Story /></div>
        )
    ]
} as ComponentMeta<typeof GeneralInfo>;

const Template: ComponentStory<typeof GeneralInfo> = (args) => <GeneralInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
    images: IMAGES_SET,
    info: INFO_OPTIONS,
    price: 500000
};

export const WithoutPrice = Template.bind({});
WithoutPrice.args = {
    images: IMAGES_SET,
    info: INFO_OPTIONS,
};