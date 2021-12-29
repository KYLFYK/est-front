import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import VerticalTabs from './VerticalTabs';
import Typography from '../Typography/Typography';
import ObjectDescription from '../../containers/ObjectDescription/ObjectDescription';

export default {
    title: 'Components/VerticalTabs',
    component: VerticalTabs,

} as ComponentMeta<typeof VerticalTabs>;


const Template: ComponentStory<typeof VerticalTabs> = (args) => <VerticalTabs {...args} />;
export const Example = Template.bind({});
Example.args = {
    link: false,
    tabs: [
        {title: "Типография", Component: <Typography size="subheader" color="nude">TEXT</Typography>},
        {title: "Описание", Component: <ObjectDescription items={['text', 'text', 'text']}/>}
    ]
};

