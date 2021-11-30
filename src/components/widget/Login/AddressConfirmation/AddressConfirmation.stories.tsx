import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AddressConfirmation} from './AddressConfirmation';



export default {
    title: 'Components/Header',
    component: AddressConfirmation,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof AddressConfirmation>;

const Template: ComponentStory<typeof AddressConfirmation> = (args) => <AddressConfirmation {...args} />;

export const AddressConfirmation_ = Template.bind({});
AddressConfirmation_.args = {

};