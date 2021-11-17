import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralInfo from './GeneralInfo';
import { objectConfigs } from '../..';

export default {
    title: 'Entities_UI/GeneralInfo',
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
    images: objectConfigs.generalInfo.IMAGES_SET,
    info: objectConfigs.generalInfo.INFO_OPTIONS,
    price: 500000
};

export const WithoutPrice = Template.bind({});
WithoutPrice.args = {
    images: objectConfigs.generalInfo.IMAGES_SET,
    info: objectConfigs.generalInfo.INFO_OPTIONS,
};