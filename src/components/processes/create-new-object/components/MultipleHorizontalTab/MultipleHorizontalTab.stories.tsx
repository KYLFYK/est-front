import {ComponentStory, ComponentMeta} from '@storybook/react';
import MultipleHorizontalTab, {ICreateObjectTabs} from './MultipleHorizontalTab';
import React from "react";

export default {
    title: 'Processes/MultipleHorizontalTab',
    component: MultipleHorizontalTab,
    argTypes: {},
} as ComponentMeta<typeof MultipleHorizontalTab>;

const Template: ComponentStory<typeof MultipleHorizontalTab> = (args) => {
    const [activeTabIdx, setActiveTabIdx] = React.useState<number>(1)
    const [activeSubTabIdx, setActiveSubTabIdx] = React.useState<number>(1)
    const [tabsProp, setTabsProp] = React.useState<ICreateObjectTabs[]>([])
    return (
        <div>
            <MultipleHorizontalTab activeSubTabIdx={activeSubTabIdx} activeTabIdx={activeTabIdx} tabs={tabsProp} />;
        </div>)

}

export const MultipleHorizontalTabProcess = Template.bind({});

