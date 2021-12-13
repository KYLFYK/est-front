import { ComponentStory, ComponentMeta } from '@storybook/react';
import HouseInfoDetailsTab from './HouseInfoDetailsTab';

export default {
    title: 'Processes/HouseInfoDetailsTab',
    component: HouseInfoDetailsTab,
    argTypes: {

    },
} as ComponentMeta<typeof HouseInfoDetailsTab>;

const Template: ComponentStory<typeof HouseInfoDetailsTab> = (args) => <HouseInfoDetailsTab {...args} />;

export const HouseInfoDetailsTabProcess = Template.bind({});
HouseInfoDetailsTabProcess.args = {

};
