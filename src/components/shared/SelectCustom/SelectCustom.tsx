import React, { useState } from 'react';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick';
import Typography from "../Typography/Typography";
import css from './SelectCustom.module.scss'

type SelectPropsType = {
    options: Array<string>
    onChangeOption?: (option: any) => void
    params: string
    selectLeft?: boolean
}

export const SelectEstate: React.FC<SelectPropsType> = ({ options, params, onChangeOption, selectLeft }) => {

    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState<string>('Крым')

    const { innerBorderRef } = useOnOutsideClick(() => setTimeout(() => setOpen(false), 0));

    return (
        <div className={selectLeft ? css.dropdown_left : css.dropdown}>
            <div
                className={selectLeft ? css.dropdown_btn_left : css.dropdown_btn}
                onClick={() => setOpen(!open)}
            >
                <Typography color={'nude'}>
                    {edit}
                </Typography>
            </div>
            {open && (
                <div className={selectLeft ? css.dropdown_content_left : css.dropdown_content}>
                    {options.map(option => {
                        return <div
                            ref={innerBorderRef}
                            key={option}
                            onClick={(e) => {
                                setEdit(option);
                                setOpen(false);
                            }}
                            className={selectLeft ? css.dropdown_item_left : css.dropdown_item}
                        >
                            <Typography>
                                {option}
                            </Typography>
                        </div>
                    })}
                </div>
            )}
        </div>
    )
};
