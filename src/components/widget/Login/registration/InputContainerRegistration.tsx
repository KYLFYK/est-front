import css from './Registration.module.scss'
import {InputAlways} from "../input/InputAlways";
import {InputPassword} from "../input/InputPassword";
import {InputOptional} from "../input/InputOptional";
import {BaseDropDown} from "../../../shared/BaseDropDown/BaseDropDown";
import {useState} from "react";

export const InputContainerRegistration = () => {
    const option = [{value:'Выберите роль *', label:'Выберите роль *'},
        {value:'Агентство', label:'Агентство'},
        {value:'Собственник', label:'Собственник'},
        {value:'Застройщик', label:'Застройщик'},
        {value:'Банк', label:'Банк'},
    ]
    const [selectChange , setSelectChange]=useState<string>(option[0].value)


    return (
        <div className={css.lForm}>
            <div className={css.form}>
                <BaseDropDown className={css.selectStyle} options={option} placeholder={selectChange} onChange={e=>setSelectChange(e)}/>
                <InputAlways title={'Логин *'}/>
                <InputAlways title={'Email *'}/>
                <InputPassword />
                <InputOptional title={'Имя'} />
                <InputOptional title={'Телефон'} />
            </div>
        </div>
    );
};