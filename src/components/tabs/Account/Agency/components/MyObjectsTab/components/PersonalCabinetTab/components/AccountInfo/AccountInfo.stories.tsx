import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountInfo from './AccountInfo';
import imgMoc from "./logoFalse.svg";
import {InfoAccountAgencyType} from "../../PersonalCabinetTab";

export default {
    title: 'Tabs/AgentRoleTabs',
    component: AccountInfo,

} as ComponentMeta<typeof AccountInfo>;

const infoAccountAgency :InfoAccountAgencyType ={
    info:[
        {label: 'Наименование', value: 'Estatum'},
        {label: 'Статус', value: 'Агентво'},
        {label: 'Адрес', value: 'Смоленская обл., г.Смоленск, ул.Советская, д.64'},
        {label: 'Телефон', value: '+7(495) 006 78 69'},
        {label: 'E-mail', value: 'estatum@mail.com'},
        {label: 'Сайт', value: 'estatum'},
        {label: 'Описание', value: 'фывжлаодфлоыадждлоодлжфыв'},
    ],
    id:'1',
    img:imgMoc,
    statusVerification:'notConfirmed'
}

const Template: ComponentStory<typeof AccountInfo> = (args) => <AccountInfo {...args} />;
export const AccountInfo_ = Template.bind({});
AccountInfo_.args = {
    statusVerification:infoAccountAgency.statusVerification,
    info:infoAccountAgency.info,
    img:infoAccountAgency.img,
};