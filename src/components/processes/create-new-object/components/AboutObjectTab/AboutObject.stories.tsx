import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutObject from './AboutObject';
import { ObjectTypes } from "../../../../../utils/interfaces/objects"
import {useStores} from "../../../../../hooks/useStores";

export default {
    title: 'Processes/AboutObject',
    component: AboutObject,
    decorators:[
        (Story) =>(
            <div>
                {Story()}
            </div>
        )
    ],
    argTypes: {

    },
} as ComponentMeta<typeof AboutObject>;

const Template: ComponentStory<typeof AboutObject> = (args) => {
    const { createObjectStore } = useStores()
    return(
        <AboutObject {...args} />
        )
}

export const AboutObjectProcess = Template.bind({});
AboutObjectProcess.args = {
    objectType: ObjectTypes.APARTMENTS
};
