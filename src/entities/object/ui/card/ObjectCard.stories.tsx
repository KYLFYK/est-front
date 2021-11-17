import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectCard from '.';
import { APIObject } from '../../../../shared/api';

export default {
    title: 'Entities_UI/ObjectCard',
    component: ObjectCard,
    argTypes: {
        test: {type: 'string', defaultValue: "teststr"}
    }
} as ComponentMeta<typeof ObjectCard>;


const Template: ComponentStory<typeof ObjectCard> = (args) => <ObjectCard {...args} isStorie />;
console.log(new APIObject.types.IObjectEntry())
export const InitialCard = Template.bind({});
InitialCard.args = {
    houseData: new APIObject.types.IObjectEntry([])
};
