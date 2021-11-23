import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Header} from './Header';



export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        onClick: {action: "onClick"},
        type: {
            options: ["primary", "secondary", "blank"],
            control: { type: 'select' }
        },
    },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
const city = ['Москва', 'Санкт-Петербург', 'Крым', 'Сочи', 'Нижний Новгород']
const officeUser = [{ title: 'Личный кабинет', href: '/User', message: 0 },
    { title: 'Избранное', href: '/User', message: 0 },
    { title: 'Сохраненные поиски', href: '/User', message: 0 },
    { title: 'Сообщения', href: '/User', message: 12 },
    { title: 'Уведомления', href: '/User', message: 3 },
    { title: 'Мои объекты', href: '/User', message: 0 },
    { title: 'Проверка объекта', href: '/User', message: 0 },
]
export const Header_ = Template.bind({});
Header_.args = {
    city:city,
    personalAccount:officeUser,
    auth:true
};