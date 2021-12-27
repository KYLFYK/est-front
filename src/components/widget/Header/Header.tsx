import React, {FC, useState} from 'react';
import Link from 'next/link';
import {SelectUser} from "./SelectUser/SelectUser";
import LogoMain from '../../../icons/Header/LogoMain';
import IconLocation from '../../../icons/Header/IconLocation';
import Typography from '../../shared/Typography/Typography';
import {SelectEstate} from '../../shared/SelectCustom/SelectCustom';
import {LoginIcon} from '../../../icons/Header/LoginIcon';
import {Modal} from '../../shared/Modal/Modal';
import {Login} from '../Login/login/Login';
import {Recovery} from '../Login/recovery/Recovery';
import {Registration} from '../Login/registration/Registration';
import classNames from 'classnames';
import {AddressConfirmation} from "../Login/AddressConfirmation/AddressConfirmation";
import {RecoveryMail} from "../Login/RecoveryMail/RecoveryMail";
import {ThankRegistering} from "../Login/ThankRegistering/ThankRegistering";
import NewPassword from "../Login/NewPassword/NewPassword";
import {ConfirmationNewPassword} from "../Login/ConfirmationNewPassword/ConfirmationNewPassword";
import css from './Header.module.scss'

type HeaderPropsType = {
    className?: string
    city: Array<string>
    personalAccount: Array<{ title: string, href: string, message: number }>
    auth?: boolean
}

const moc = [{href: '/Buy', title: 'Купить'},
    {href: '/Take', title: 'Снять'},
    {href: '/calculator', title: 'Ипотека'},
    {href: '/Сonstruction', title: 'Строящиеся дома'},
    {href: '/contacts', title: 'Контакты'}
]


const personalAcc = [
    [           //'agency'
        {title: 'Аккаунт Агентства', href: '/cabinet', message: 0},
        {title: 'Каталог заявок на просмотр', href: '/requests', message: 0},
        {title: 'Мои объявления', href: '/ads', message: 0},
        {title: 'Тарифы размещения', href: '/tariff', message: 12},
        {title: 'Профпоиск', href: '/search', message: 3},
        {title: 'Сообщения', href: '/messages', message: 0},
        {title: 'Уведомления', href: '/notification', message: 0},
    ],
    [        //'agent'
        {title: 'Личный кабинет', href: '/cabinet', message: 0},
        {title: 'Заявки на просмотр', href: '/requests', message: 0},
        {title: 'Мои объявления', href: '/ads', message: 0},
        {title: 'Тарифы размещения', href: '/tariff', message: 12},
        {title: 'Профпоиск', href: '/search', message: 3},
        {title: 'Сообщения', href: '/messages', message: 0},
        {title: 'Уведомления', href: '/notification', message: 0},
    ],
    [        //'owner'
        {title: 'Личный кабинет', href: '/cabinet', message: 0},
        {title: 'Избранное', href: '/favorites', message: 0},
        {title: 'Сохраненые поиски', href: '/saved-searches', message: 0},
        {title: 'Сообщения', href: '/messages', message: 12},
        {title: 'Уведомления', href: '/notifications', message: 3},
        {title: 'Мои объекты', href: '/ads', message: 0},
        {title: 'Проверка объекта', href: '/new', message: 0},
    ],
    [        //'developer'
        {title: 'Личный кабинет', href: '/cabinet', message: 0},
        {title: 'Мои объекты', href: '/ads', message: 0},
        {title: 'Уведомления', href: '/notifications', message: 5},
    ],
    [        //'admin'
        {title: 'Пользователи', href: '/users', message: 0},
        {title: 'Объявления', href: '/ads', message: 0},
        {title: 'Сообщения', href: '/messages', message: 4},
    ],
    [        //'bank'
        {title: 'Личный кабинет', href: '/cabinet', message: 0},
        {title: 'Заявки на ипотеку', href: '/mortgage-applications', message: 0},
    ],
]



export const Header: FC<HeaderPropsType> = ({className, city, personalAccount, auth = false}) => {



    const [authorization, setAuthorization] = useState<boolean>(auth)

    const [login, setLogin] = useState<boolean>(false)

    const [edit, setEdit] = useState<string>('')

    const searchModal = (menu: string) => {
        switch (menu) {
            case 'login':
                return <Login onEdit={(e) => setEdit(e)}/>
            case 'recovery':
                return <Recovery onEdit={(e) => setEdit(e)}/>
            case 'registration':
                return <Registration onEdit={(e) => setEdit(e)}/>
            case 'addressConfirmation':
                return <AddressConfirmation onEdit={(e) => setEdit(e)}/>
            case 'recoveryMail':
                return <RecoveryMail onEdit={(e) => setEdit(e)} email={'vika@mail.ru'}/>
            case 'thankRegistering':
                return <ThankRegistering onEdit={(e) => setEdit(e)} email={'vika@mail.ru'}/>
            case 'newPassword':
                return <NewPassword onEdit={(e) => setEdit(e)} account={'vika@Best'}/>
            case 'confirmationNewPassword':
                return <ConfirmationNewPassword onEdit={(e) => setEdit(e)} account={'vika@Best'}/>
            default:
                return <div>123</div>
        }
    }

    const [active, setActive] = useState<number>(0)


    const [mocAccountMenu , setMocAccountMenu]=useState<Array<{title:string, href:string,message:number}>>(personalAcc[0])
    const searchLoginMoc = (role: string) => {
        if(role === 'agency') setMocAccountMenu(personalAcc[0])
        if(role === 'agent') setMocAccountMenu(personalAcc[1])
        if(role === 'owner') setMocAccountMenu(personalAcc[2])
        if(role === 'developer') setMocAccountMenu(personalAcc[3])
        if(role === 'admin') setMocAccountMenu(personalAcc[4])
        if(role === 'bank') setMocAccountMenu(personalAcc[5])
        setAuthorization(true)
    }

    return (
        <div className={classNames(css.header, className)}>
            <Link href={'/'} passHref>
                <div style={{cursor: 'pointer'}}>
                    <LogoMain/>
                </div>
            </Link>
            <div className={css.menu}>
                <div
                    className={css.menuName}
                    onClick={() => setActive(0)}
                    style={{color: '#C5A28E'}}
                >
                    <IconLocation/>
                    <div className={css.textTypography}>
                        <SelectEstate options={city} selectLeft={false}/>
                    </div>
                </div>
                {
                    moc.map(({href, title}, index) => (
                        <Link href={href} key={index} passHref>
                            <div
                                className={css.menuName}
                                onClick={() => setActive(0)}
                                style={{color: active === 0 ? '#C5A28E' : '#3D4550'}}
                            >
                                <Typography size={'default'}>
                                    {title}
                                </Typography>
                            </div>
                        </Link>
                    ))
                }
                {
                    !authorization
                        ? <div className={css.menuName} onClick={() => {
                            setLogin(true)
                            setEdit('login')
                        }}>
                            <LoginIcon/>
                        </div>
                        : <div className={css.menuName}>
                            <Typography size={'default'} color="nude">
                                <SelectUser
                                    params={'housingCondition'}
                                    // options={personalAccount}
                                    options={mocAccountMenu}
                                    onChangeOption={() => setAuthorization(false)}
                                />
                            </Typography>
                        </div>

                }
                {
                    <Modal setActive={() => setLogin(!login)} active={login}>
                        {searchModal(edit)}
                    </Modal>
                }
                <button onClick={()=>searchLoginMoc('agency')}>agency</button>
                <button onClick={()=>searchLoginMoc('agent')}>agent</button>
                <button onClick={()=>searchLoginMoc('owner')}>owner</button>
                <button onClick={()=>searchLoginMoc('developer')}>developer</button>
                <button onClick={()=>searchLoginMoc('admin')}>admin</button>
                <button onClick={()=>searchLoginMoc('bank')}>bank</button>

            </div>
        </div>
    );
};

export default Header;