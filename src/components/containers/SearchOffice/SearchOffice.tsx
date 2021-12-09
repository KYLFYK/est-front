import React, {FC, useState} from "react";
import css  from './SearchOffice.module.scss'
import BaseButton from "../../shared/BaseButton/BaseButtons";
import {BaseInput} from "../../shared/BaseInput/Input";
import { IconOption } from "../../../icons/SearchOffice/IconOption";

type SearchOfficeType ={
    type?:'active' | 'archive' | 'draft'
    title?:string
}

export const SearchOffice :FC<SearchOfficeType> = ({type}) => {
    // const [value,setValue]=useState<string>('')

    return(
        <div className={css.search} >
            <div className={css.position}>
                <div className={css.inputMargin}>
                    <BaseInput  />
                </div>

                <IconOption />
            </div>
            <BaseButton
                type={type!== 'archive' ? "secondary" : 'primary_light'}
                isActive
                className={css.textButton}
            >
                {type !== 'archive' ? 'Добавить объект' : 'Восстановить все'  }
            </BaseButton>
        </div>
    )
}