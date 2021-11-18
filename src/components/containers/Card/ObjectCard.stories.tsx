import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { APIObject } from '../../../api';
import ObjectCard from '.';
import { IMAGES_SET } from './config';

export default {
    title: 'Entities_UI/Object/ObjectCard',
    component: ObjectCard,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof ObjectCard>;

const images: APIObject.types.IObjectEntry['images'] = IMAGES_SET.map((img, idx) => ({url: img, id: idx})) 

const Template: ComponentStory<typeof ObjectCard> = (args) => <ObjectCard {...args} />;
export const InitialCard = Template.bind({});
InitialCard.args = {
    houseData: new APIObject.types.IObjectEntry([])
};

export const CardWithImages = Template.bind({});
CardWithImages.args = {
    houseData: new APIObject.types.IObjectEntry(images)
}