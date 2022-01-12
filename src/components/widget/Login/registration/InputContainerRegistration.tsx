import css from './Registration.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import {InputOptional} from "../input/InputOptional";
import {BaseDropDown} from "../../../shared/BaseDropDown/BaseDropDown";
import {FC, useState} from "react";

type InputContainerRegistrationType={
    valueLogin:string
    valueEmail:string
    valuePassword:string
    valueName:string
    valuePhone:string
    onValueLogin:(e:string)=>void
    onValueEmail:(e:string)=>void
    onValuePassword:(e:string)=>void
    onValueName:(e:string)=>void
    onValuePhone:(e:string)=>void
    option:Array<{value:string,label:string}>
    selectChange:string
    onSelectChange:(e:string)=>void
}

export const InputContainerRegistration :FC<InputContainerRegistrationType> = ({
                                                                                   valueLogin,
                                                                                   valueEmail,
                                                                                   valuePassword,
                                                                                   valueName,
                                                                                   valuePhone,
                                                                                   onValueLogin,
                                                                                   onValueEmail,
                                                                                   onValuePassword,
                                                                                   onValueName,
                                                                                   onValuePhone,
                                                                                   option,
                                                                                   selectChange,
                                                                                   onSelectChange
                                                                               }) => {

    return (
        <div className={css.lForm}>
            <div className={css.form} >
                <BaseDropDown className={css.selectStyle} value={selectChange} options={option} placeholder={selectChange} onChange={e=>onSelectChange(e)}/>
                <InputAlways  value={valueLogin} onChange={onValueLogin} title={'Логин *'}/>
                <InputAlways value={valueEmail} onChange={onValueEmail} title={'Email *'}/>
                <InputPassword value={valuePassword} onChange={onValuePassword}  />
                <InputOptional value={valueName} onChange={onValueName} title={'Имя'} />
                <InputOptional value={valuePhone} onChange={onValuePhone} title={'Телефон'} />
            </div>
        </div>
    );
};