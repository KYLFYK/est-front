import React, { useState, useEffect } from 'react';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick';
import { useBreadcrumbsStore } from 'src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore';
import css from './SelectCustom.module.scss'

type SelectPropsType = {
    options: Array<string>
    onChangeOption?: (option: any) => void
    selectLeft?: boolean
}

export const SelectEstate: React.FC<SelectPropsType> = ({ options, selectLeft }) => {
  
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState<string>('Крым')
    
    const { innerBorderRef } = useOnOutsideClick(() => setTimeout(() => setOpen(false), 0));
    const breadCrumbs = useBreadcrumbsStore()
    useEffect(() => {
        breadCrumbs.addBreadCrumbs(edit, 0)
    }, [edit])
    return (
        <div className={selectLeft ? css.dropdown_left : css.dropdown}>
            <div
                className={selectLeft ? css.dropdown_btn_left : css.dropdown_btn}
                onClick={() => setOpen(!open)}
            >
                <div className={css.textTypography}>
                    {edit}
                </div>
            </div>
            {open && (
                <div className={selectLeft ? css.dropdown_content_left : css.dropdown_content}>
                    {options.map((option,index) => {
                        return <div
                            ref={innerBorderRef}
                            key={index}
                            onClick={(e) => {
                                setEdit(option);
                                setOpen(false);
                            }}
                            className={selectLeft ? css.dropdown_item_left : css.dropdown_item}
                        >
                            <div>
                                {option}
                            </div>


                        </div>
                    })}
                </div>
            )}
        </div>
    )
};
