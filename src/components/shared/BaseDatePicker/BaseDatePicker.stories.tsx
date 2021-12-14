import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BaseDatePicker from './BaseDatePicker';

export default {
    title: 'Components/BaseDatePicker_',
    component: BaseDatePicker,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof BaseDatePicker>;

const date = new Date

const Template: ComponentStory<typeof BaseDatePicker> = (args) =>{
    const [valueDateStart,setValueDateStart]=useState<any>(date)
    const [valueDateEnd,setValueDateEnd]=useState<any>(date)
    return(
        <BaseDatePicker endDate={valueDateEnd} onChangeEndDate={setValueDateEnd} startDate={valueDateStart}  onChangeStartDate={setValueDateStart}  />
    )
} ;

export const BaseDatePicker_ = Template.bind({});
