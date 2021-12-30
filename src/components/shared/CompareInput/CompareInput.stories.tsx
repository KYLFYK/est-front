import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CompareInput } from './CompareInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/CompareInput',
    component: CompareInput,
} as ComponentMeta<typeof CompareInput>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CompareInput> = (args) =>{
    const [valueFrom, setValueFrom]=useState<string>('1')
    const [value, setValue]=useState<string>('100')
    return <CompareInput onChangeFrom={setValueFrom} onChangeTo={setValue} valueTo={value} valueFrom={valueFrom}/>
}
export const WithoutIcon = Template.bind({});

// export const WithoutIcon = Template.bind({});
// WithoutIcon.args = {
//     valueFrom: '1',
//     valueTo: '10',
//     placeholderFrom: 'from placeholder',
//     placeholderTo: 'to placeholder',
// };
//
// export const WithIcon = Template.bind({});
// WithIcon.args = {
//     valueFrom: '1',
//     valueTo: '10',
//     placeholderFrom: 'from placeholder',
//     placeholderTo: 'to placeholder',
//     Icon: "₽",
// };