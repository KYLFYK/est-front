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
                <div className={css.inputMargin}>
                    <BaseInput  />
                </div>

                <IconOption />
            </div>
            <BaseButton type={"secondary"} isActive className={css.textButton} >Добавить объект</BaseButton>
        </div>
    )
}