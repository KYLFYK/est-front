import { ComponentStory, ComponentMeta } from '@storybook/react';
import Plot from './Plot';

export default {
    title: 'Pages/Plot',
    component: Plot,
    argTypes: {

    },
} as ComponentMeta<typeof Plot>;

const Template: ComponentStory<typeof Plot> = (args) => <Plot  />;

export const PlotPage = Template.bind({});

