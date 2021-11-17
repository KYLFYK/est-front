import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectCard from '.';
import { APIObject } from '../../../../shared/api';
import { objectConfigs } from '../..';

export default {
    title: 'Entities_UI/Object/ObjectCard',
    component: ObjectCard,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof ObjectCard>;

const images: APIObject.types.IObjectEntry['images'] = objectConfigs.generalInfo.IMAGES_SET.map((img, idx) => ({url: img, id: idx})) 

const Template: ComponentStory<typeof ObjectCard> = (args) => <ObjectCard {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
    houseData: new APIObject.types.IObjectEntry([])
};

export const CardWithImages = Template.bind({});
CardWithImages.args = {
    houseData: new APIObject.types.IObjectEntry(images)
}