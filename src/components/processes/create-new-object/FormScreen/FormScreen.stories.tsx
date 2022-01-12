import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormScreen from './FormScreen';
import {ObjectTypes} from "../../../../utils/interfaces/objects";
import React from "react";

export default {
    title: 'Processes/FormScreen',
    component: FormScreen,
    argTypes: {

    },
} as ComponentMeta<typeof FormScreen>;

const Template: ComponentStory<typeof FormScreen> = (args) =>{
    const [objectType, setObjectType] = React.useState<ObjectTypes>(1)

    return(
        <FormScreen objectType={objectType} clearObjectType={()=>setObjectType(0)} />
        )
} ;

export const FormScreenProcess = Template.bind({});

