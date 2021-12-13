import { ComponentStory, ComponentMeta } from '@storybook/react';
import Start from './Start';

export default {
    title: 'Pages/Start',
    component: Start,
    argTypes: {

    },
} as ComponentMeta<typeof Start>;

const Template: ComponentStory<typeof Start> = (args) => <Start {...args} />;

export const StartPage = Template.bind({});
StartPage.args = {

};
