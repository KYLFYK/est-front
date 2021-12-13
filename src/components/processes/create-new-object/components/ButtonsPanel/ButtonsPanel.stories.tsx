import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonsPanel from './ButtonsPanel';

export default {
    title: 'Processes/ButtonsPanel',
    component: ButtonsPanel,
    argTypes: {

    },
} as ComponentMeta<typeof ButtonsPanel>;

const Template: ComponentStory<typeof ButtonsPanel> = (args) => <ButtonsPanel {...args} />;

export const ButtonsPanelProcess = Template.bind({});
ButtonsPanelProcess.args = {

};
