import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OfferNews} from './offerNews';


export default {
    title: 'Components/OfferNews',
    component: OfferNews,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof OfferNews>;

const Template: ComponentStory<typeof OfferNews> = (args) => <OfferNews />;

const mock = ['EMAAR','EMAAR','EMAAR','EMAAR','EMAAR',]

export const OfferNews_ = Template.bind({});
OfferNews_.args = {
};