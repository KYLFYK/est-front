import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import QuestionPopup from './QuestionPopup';


export default {
    title: 'Components/QuestionPopup',
    component: QuestionPopup,
} as ComponentMeta<typeof QuestionPopup>;

const Template: ComponentStory<typeof QuestionPopup> = (args) => <QuestionPopup {...args} />;

export const Sample = Template.bind({});
Sample.args = {
    text: "Текст, который появляется при наведении на иконку"
};