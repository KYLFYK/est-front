import React, {FC, useState} from 'react';
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
import {AddressConfirmation} from "../Login/AddressConfirmation/AddressConfirmation";
import {RecoveryMail} from "../Login/RecoveryMail/RecoveryMail";
import {ThankRegistering} from "../Login/ThankRegistering/ThankRegistering";
import NewPassword from "../Login/NewPassword/NewPassword";
import {ConfirmationNewPassword} from "../Login/ConfirmationNewPassword/ConfirmationNewPassword";
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

    const [edit, setEdit] =useState<string>('')

    const searchModal = (menu:string) => {
        switch (menu){
            case 'login': return <Login onEdit={(e)=>setEdit(e)} />
            case 'recovery':return <Recovery onEdit={(e)=>setEdit(e)} />
            case 'registration':return <Registration  onEdit={(e)=>setEdit(e)}/>
            case 'addressConfirmation':return <AddressConfirmation  onEdit={(e)=>setEdit(e)}/>
            case 'recoveryMail':return <RecoveryMail  onEdit={(e)=>setEdit(e)} email={'vika@mail.ru'} />
            case 'thankRegistering':return <ThankRegistering  onEdit={(e)=>setEdit(e)} email={'vika@mail.ru'}/>
            case 'newPassword':return <NewPassword  onEdit={(e)=>setEdit(e)} account={'vika@Best'}/>
            case 'confirmationNewPassword':return <ConfirmationNewPassword  onEdit={(e)=>setEdit(e)} account={'vika@Best'}/>
            default: return <div>123</div>
        }
    }

    const [active, setActive] = useState<number>(0)
    return (
        <div className={classNames(css.header, className)}>
            <Link href={'/'} passHref>
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
                    <div className={css.textTypography} >
                        <SelectEstate options={city} selectLeft={false} />
                    </div>
                </div>
                {
                    moc.map(({ href, title }, index) => (
                        <Link href={href} key={index} passHref>
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
                        ? <div className={css.menuName} onClick={() => {
                            setLogin(true)
                            setEdit('login')
                        }}>
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
                {
                    <Modal setActive={() => setLogin(!login)} active={login}>
                        {searchModal(edit)}
                    </Modal>
                }

            </div>
        </div>
    );
};

export default Header;