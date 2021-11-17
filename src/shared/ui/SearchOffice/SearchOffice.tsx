import {useState} from "react";
import {IconOption} from "../../icons/SearchOffice/IconOption";
import css  from './SearchOffice.module.scss'
import BaseButton from "../BaseButton/BaseButtons";
import {BaseInput} from "../BaseInput/Input";

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