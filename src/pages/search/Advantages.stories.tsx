import { ComponentStory, ComponentMeta } from '@storybook/react';
import Finder from './Finder';

export default {
    title: 'Pages/Finder',
    component: Finder,
    argTypes: {

    },
} as ComponentMeta<typeof Finder>;

const Template: ComponentStory<typeof Finder> = (args) => <Finder {...args} />;

export const FinderPage = Template.bind({});
FinderPage.args = {

};
