import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LegalPurityTabs from '.';
import { OBJECT_LEGAL_PURITY_TABS_DATA } from '../../containers/ObjectLegalPurity/config';

export default {
    title: 'Tabs/LegalPurity',
    component: LegalPurityTabs,

} as ComponentMeta<typeof LegalPurityTabs>;


const Template: ComponentStory<typeof LegalPurityTabs> = (args) => <LegalPurityTabs {...args} />;
export const Example = Template.bind({});
Example.args = {
    tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
};

