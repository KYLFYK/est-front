import React, {FC, useState} from 'react';
import Link from 'next/link';
import LogoMain from "../../Icons/Header/LogoMain";
import IconLocation from '../../Icons/Header/IconLocation';
import {LoginIcon} from "../../Icons/Header/LoginIcon";
import css from './Header.module.scss'
import classNames from 'classnames';
import FavoriteIcon from "../../../icons/Favorite/Favorite";
import Typography from "../../Typography/Typography";

type HeaderPropsType = {
    className?:string
}


export const Header:FC<HeaderPropsType> = ({className}) => {
    const [active, setActive] = useState<number>(0)
    return (
        <div className={classNames(css.header,className)}>
            <Link href={'/'}>
                <div style={{cursor: 'pointer'}}>
                    <LogoMain/>
                </div>
            </Link>
            <div className={css.menu}>
                <Link href={'/'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(0)}
                        style={{color: active === 0 ? '#C5A28E' : '#3D4550'}}
                    >
                        <IconLocation />
                        <Typography size={'default'} color="nude">
                            Крым
                        </Typography>
                    </div>
                </Link>
                <Link href={'/Buy'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(1)}
                        style={{color: active === 1 ? '#C5A28E' : '#3D4550'}}
                    >
                        <Typography size={'default'} color="accent">
                            Купить
                        </Typography>
                    </div>
                </Link>
                <Link href={'/Take'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(2)}
                        style={{color: active === 2 ? '#C5A28E' : '#3D4550'}}
                    >
                        <Typography size={'default'} color="accent">
                            Снять
                        </Typography>
                    </div>
                </Link>
                <Link href={'/Mortgage'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(3)}
                        style={{color: active === 3 ? '#C5A28E' : '#3D4550'}}
                    >
                        <Typography size={'default'} color="accent">
                           Ипотека
                        </Typography>
                    </div>
                </Link>
                <Link href={'/Сonstruction'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(4)}
                        style={{color: active === 4 ? '#C5A28E' : '#3D4550'}}
                    >
                        <Typography size={'default'} color="accent">
                            Строящиеся дома
                        </Typography>
                    </div>
                </Link>
                <Link href={'/Contact'}>
                    <div
                        className={css.menuName}
                        onClick={() => setActive(5)}
                        style={{color: active === 5 ? '#C5A28E' : '#3D4550'}}
                    >
                        <Typography size={'default'} color="accent">
                            Контакты
                        </Typography>
                    </div>
                </Link>
                <Link href={'/User'}>
                    <div className={css.menuName}>
                        <LoginIcon/>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;