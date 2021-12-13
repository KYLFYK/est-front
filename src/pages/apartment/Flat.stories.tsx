import { ComponentStory, ComponentMeta } from '@storybook/react';
import Flat from './Flat';

export default {
    title: 'Pages/Flat',
    component: Flat,
    argTypes: {

    },
} as ComponentMeta<typeof Flat>;

const Template: ComponentStory<typeof Flat> = (args) => <Flat {...args} />;

export const FlatPage = Template.bind({});
FlatPage.args = {

};
