import { ComponentStory, ComponentMeta } from '@storybook/react';
import House from './House';

export default {
    title: 'Pages/House',
    component:House,
    argTypes: {

    },
} as ComponentMeta<typeof House>;

const Template: ComponentStory<typeof House> = (args) => <House {...args} />;

export const HousePage = Template.bind({});
HousePage.args = {

};
