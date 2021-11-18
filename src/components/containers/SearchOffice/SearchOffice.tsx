import React, {useState} from "react";
import css  from './SearchOffice.module.scss'
import BaseButton from "../../shared/BaseButton/BaseButtons";
import {BaseInput} from "../../shared/BaseInput/Input";
import { IconOption } from "../../../icons/SearchOffice/IconOption";

export const SearchOffice = () => {
    // const [value,setValue]=useState<string>('')
    return(
        <div className={css.search} >
            <div className={css.position}>
                <BaseInput />
                <IconOption />
            </div>
            <BaseButton >Добавить</BaseButton>
        </div>
    )
}