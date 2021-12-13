import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutObject from './AboutObject';
import { ObjectTypes } from "../../../../../utils/interfaces/objects"

export default {
    title: 'Processes/AboutObject',
    component: AboutObject,
    argTypes: {

    },
} as ComponentMeta<typeof AboutObject>;

const Template: ComponentStory<typeof AboutObject> = (args) => <AboutObject {...args} />;

export const AboutObjectProcess = Template.bind({});
AboutObjectProcess.args = {
    objectType: ObjectTypes.APARTMENTS
};
