import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HorizontalTabs } from './HorizontalTabs';

export default {
    title: 'Components/HorizontalTabs',
    component: HorizontalTabs,

} as ComponentMeta<typeof HorizontalTabs>;


const Template: ComponentStory<typeof HorizontalTabs> = (args) => <HorizontalTabs {...args} />;
export const Example = Template.bind({});
Example.args = {
    tabs: [{
        title: "Об объекте",
        Component: <div>Об объекте</div>
    },
    {
        title: "Особенности",
        Component: <div>Особенности</div>
    },
    {
        title: "Архитектура",
        Component: <div>Архитектура</div>,
    },
    {
        title: "Квартиры",
        Component: <div>Квартиры</div>
    },
    {
        title: "Инфраструктура",
        Component: <div>Инфраструктура</div>,
    },
    {
        title: "Застройщик",
        Component: <div>Застройщик</div>
    }
]
};

