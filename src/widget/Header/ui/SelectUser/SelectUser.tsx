import React, {useState} from 'react';
import {useOnOutsideClick} from "../../../../shared/ui/SelectCastom/SelectCastomLogic";
import Typography from "../../../../shared/ui/Typography/Typography";
import {LoginIconNude} from "../../../../shared/icons/Header/LoginIcon";
import CountMessage from "../../../../shared/icons/Header/CountMessage";
import ExitIcon from "../../../../shared/icons/Header/ExitIcon";
import Link from 'next/link'
import css from './SelectUser.module.scss'

type SelectPropsType = {
    options: Array<{ title: string, message: number, href: string }>
    onChangeOption?: (option: any) => void
    params: string
    selectLeft?: boolean
}

export const SelectUser: React.FC<SelectPropsType> = ({options, params, onChangeOption, selectLeft}) => {

    const [open, setOpen] = useState(false);
    const {innerBorderRef} = useOnOutsideClick(() => setTimeout(() => setOpen(false), 0));

    return (
        <div className={css.dropdown_left}>
            <div
                className={css.dropdown_btn_left}
                onClick={() => setOpen(!open)}
            >
                <Typography className={css.heightIcon}>
                    <LoginIconNude/>
                </Typography>
            </div>
            {open && (
                <div className={css.dropdown_content_left}>
                    {options.map(option => {
                        return <div
                            ref={innerBorderRef}
                            key={option.title}
                            onClick={(e) => {
                                setOpen(false);
                            }}
                            className={css.dropdown_item_left}
                        >
                            <Link href={option.href}>
                                <div>
                                    <Typography>
                                        <div style={{display: 'flex', justifyContent: "space-between", width: '190px'}}>
                                            <div>
                                                {option.title}
                                            </div>
                                            <div>
                                                {option.message > 0 && <CountMessage messageCount={option.message}/>}
                                            </div>
                                        </div>

                                    </Typography>

                                </div>
                            </Link>
                        </div>
                    })}
                    {
                        <div
                            ref={innerBorderRef}
                            onClick={(e) => {
                                setOpen(false);
                            }}
                            className={css.dropdown_item_left}
                        >
                            <ExitIcon/>
                            <Typography color={'red'} className={css.textCenter}>
                                Выйти
                            </Typography>

                        </div>
                    }
                </div>
            )}
            {/*<IconArrowDown open={open} setOpen={() => setOpen(!open)}/>*/}
        </div>
    )
};
