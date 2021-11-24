import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EstateOffer from './estateOffer';
import { IMAGES_SET } from '../../containers/GeneralInfo/config';



export default {
    title: 'Components/BestOffers',
    component: EstateOffer,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof EstateOffer>;

const Template: ComponentStory<typeof EstateOffer> = (args) => <EstateOffer {...args} />;

export const EstateOffer_ = Template.bind({});
EstateOffer_.args = {
    tags:['Покупка','Дом'],
    img:IMAGES_SET,
    url:'www.google.com'
};