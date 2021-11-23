import React, { FC, useState } from 'react';
import Link from 'next/link';
import { SelectUser } from "./SelectUser/SelectUser";
import LogoMain from '../../../icons/Header/LogoMain';
import IconLocation from '../../../icons/Header/IconLocation';
import Typography from '../../shared/Typography/Typography';
import { SelectEstate } from '../../shared/SelectCustom/SelectCustom';
import { LoginIcon } from '../../../icons/Header/LoginIcon';
import { Modal } from '../../shared/Modal/Modal';
import { Login } from '../Login/login/Login';
import { Recovery } from '../Login/recovery/Recovery';
import { Registration } from '../Login/registration/Registration';
import classNames from 'classnames';
import css from './Header.module.scss'

type HeaderPropsType = {
    className?: string
    city:Array<string>
    personalAccount:Array<{title:string, href:string,message:number}>
    auth?:boolean
}

const moc = [{ href: '/Buy', title: 'Купить' },
{ href: '/Take', title: 'Снять' },
{ href: '/Mortgage', title: 'Ипотека' },
{ href: '/Сonstruction', title: 'Строящиеся дома' },
{ href: '/Contact', title: 'Контакты' }
]

export const Header: FC<HeaderPropsType> = ({ className,city,personalAccount,auth = false }) => {

    const [authorization,setAuthorization] =useState<boolean>(auth)

    const [login, setLogin] = useState<boolean>(false)
    const [registration, setRegistration] = useState<boolean>(false)
    const [newUser, setNewUser] = useState<boolean>(false)

    const [active, setActive] = useState<number>(0)
    return (
        <div className={classNames(css.header, className)}>
            <Link href={'/'}>
                <div style={{ cursor: 'pointer' }}>
                    <LogoMain />
                </div>
            </Link>
            <div className={css.menu}>
                <div
                    className={css.menuName}
                    onClick={() => setActive(0)}
                    style={{ color: '#C5A28E' }}
                >
                    <IconLocation />
                    <Typography size={'default'} color="nude">
                        <SelectEstate params={'housingCondition'} options={city} />
                    </Typography>
                </div>
                {
                    moc.map(({ href, title }, index) => (
                        <Link href={href} key={index}>
                            <div
                                className={css.menuName}
                                onClick={() => setActive(0)}
                                style={{ color: active === 0 ? '#C5A28E' : '#3D4550' }}
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
                        ? <div className={css.menuName} onClick={() => setLogin(true)}>
                            <LoginIcon />
                        </div>
                        : <div className={css.menuName} >
                            <Typography size={'default'} color="nude">
                                <SelectUser
                                    params={'housingCondition'}
                                    options={personalAccount}
                                    onChangeOption={()=>setAuthorization(false)}
                                />
                            </Typography>
                        </div>
                }
                <Modal setActive={() => setLogin(!login)} active={login}>
                    <Login
                        recoveryPass={() => {
                            setLogin(!login)
                            setRegistration(!registration)
                        }}
                        registration={() => {
                            setLogin(!login)
                            setNewUser(!newUser)
                        }}
                    />
                </Modal>
                <Modal setActive={() => setRegistration(!registration)} active={registration}>
                    <Recovery
                        recoveryPassword={() => {
                            setLogin(!login)
                            setRegistration(!registration)
                        }}
                    />
                </Modal>
                <Modal setActive={() => setNewUser(!newUser)} active={newUser}>
                    <Registration
                        enterLogin={() => {
                            setLogin(!login)
                            setNewUser(!newUser)
                        }}
                    />
                </Modal>

            </div>
        </div>
    );
};

export default Header;