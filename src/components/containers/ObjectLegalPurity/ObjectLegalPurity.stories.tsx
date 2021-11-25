import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ObjectLegalPurity from './ObjectLegalPurity';
import { OBJECT_LEGAL_PURITY_TABS_DATA } from './config';

export default {
    title: 'Containers/ObjectLegalPurity',
    component: ObjectLegalPurity,
} as ComponentMeta<typeof ObjectLegalPurity>;

const Template: ComponentStory<typeof ObjectLegalPurity> = (args) => <ObjectLegalPurity {...args} />;

export const Default = Template.bind({});
Default.args = {
    legalPurityData: {
        encumbrances: false,
        risks: false,
        tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    }
}