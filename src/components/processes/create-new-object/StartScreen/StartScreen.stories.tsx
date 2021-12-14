import { ComponentStory, ComponentMeta } from '@storybook/react';
import StartScreen from './StartScreen';

export default {
    title: 'Processes/StartScreen',
    component: StartScreen,
    argTypes: {

    },
} as ComponentMeta<typeof StartScreen>;

const Template: ComponentStory<typeof StartScreen> = (args) => <StartScreen {...args} />;

export const StartScreenProcess = Template.bind({});
StartScreenProcess.args = {

};
