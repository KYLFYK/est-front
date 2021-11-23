import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Record } from './Record';

export default {
    title: 'Components/Record',
    component: Record,
    decorators: [
        (Story) => (
            <div ><Story /></div>
        )
    ]
} as ComponentMeta<typeof Record>;

const Template: ComponentStory<typeof Record> = (args) => <Record {...args}  />;

const agentRecord = {
    "id": 1,
    "img": " https://test-estatum.f-case.ru/static/media/%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%A1%D0%B0%D1%84%D0%BE%D0%BD%D0%BE%D0%B2.b38acd57.png",
    "fullName": "Роман Сафонов",
    "heldPost": "Старший агент",
    "workExperience": "5 лет",
    "inWork": "2 проекта",
    "completed": "43 проекта",
    "connection": [{
        "title": "telegram",
        "value": "+7 992 146 37 15",
        "url": ""
    },
        {
            "title": "whatsApp",
            "value": "+7 992 146 37 15",
            "url": ""
        },
        {
            "title": "phone",
            "value": "+7 992 146 37 15",
            "url": ""
        }, {
            "title": "email",
            "value": "valsidirov@mail.com",
            "url": "",
        }]
}

export const Record_ = Template.bind({});

Record_.args = {
    Record:agentRecord
};