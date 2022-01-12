import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import VerticalTabs from './VerticalTabs';
import Typography from '../Typography/Typography';
import { RouterContext } from "next/dist/shared/lib/router-context";
export const parameters = {
    nextRouter: {
        Provider: RouterContext.Provider,
    },
}
export default {
    title: 'Components/VerticalTabs',
    component: VerticalTabs,

} as ComponentMeta<typeof VerticalTabs>;


const Template: ComponentStory<typeof VerticalTabs> = (args) => <VerticalTabs {...args} />;
export const Example = Template.bind({});

Example.args = {
    link: false,
    storybook:true,
    tabs: [
        {title: "Типография", Component: <Typography size="subheader" color="nude">Типография</Typography>},
        {title: "Описание", Component: <Typography size="subheader" color="nude">Описание</Typography>}
    ],
};



