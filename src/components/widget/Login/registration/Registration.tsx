import css from './Registration.module.scss'
import React, {useState} from "react";
import {Checkbox} from "./checkbox/Checkbox";
import {InputContainerRegistration} from "./InputContainerRegistration";
import { LogoIcon } from '../../../../icons/Header/LogoIcon';
import Typography from '../../../shared/Typography/Typography';
import BaseButton from '../../../shared/BaseButton/BaseButtons';
import {AuthApi} from "../../../../api/auth/auth";

type RegistrationPropsType ={
    enterLogin?:()=>void
    onEdit:(menu:string)=>void
    onEmail:(email:string)=>void
}

export const Registration :React.FC<RegistrationPropsType>= ({enterLogin,onEdit,onEmail}) => {

    const option = [{value:'Выберите роль *', label:'Выберите роль *'},
        {value:'agency', label:'Агентство'},
        {value:'customer', label:'Собственник'},
        {value:'developer', label:'Застройщик'},
        {value:'bank', label:'Банк'},
    ]
    const [selectChange , setSelectChange]=useState<string>(option[0].value)
    const [confirmation, setConfirmation]=useState<boolean>(false)
    const [valueLogin, setValueLogin]=useState<string>('')
    const [valueEmail, setValueEmail]=useState<string>('')
    const [valuePassword, setValuePassword]=useState<string>('')
    const [valueName, setValueName]=useState<string>('')
    const [valuePhone, setValuePhone]=useState<string>('')


    const infoRegistration = async () =>{
        console.log(valueLogin,valueEmail,valuePassword,valueName,valuePhone,confirmation,selectChange)
        const res = await AuthApi.registration({
            privateKey:valuePassword,
            publicKey:valueEmail,
            role:selectChange
            // publicKey:valueLogin,
            // email:valueEmail,
            // name:valueName,
            // phone:valuePhone,
        })
        onEmail(valueEmail)
        onEdit('thankRegistering')

    }



    return (
        <div className={css.registrationContainer}>
            <LogoIcon/>
            <InputContainerRegistration
                option={option}
                selectChange={selectChange}
                onSelectChange={setSelectChange}
                valueLogin={valueLogin}
                valueEmail={valueEmail}
                valuePassword={valuePassword}
                valueName={valueName}
                valuePhone={valuePhone}
                onValueLogin={setValueLogin}
                onValueEmail={setValueEmail}
                onValuePassword={setValuePassword}
                onValueName={setValueName}
                onValuePhone={setValuePhone}
            />
            <Checkbox className={css.checkBoxMargin} isActive={confirmation} onChange={()=>setConfirmation(!confirmation)}>
                    <Typography size={'small'} color={'nude'} >
                        <div>
                            <span className={css.highlighting}>Принимаю </span>
                            Пользовательское соглашение, Политику конфеденциальности,
                            <span className={css.highlighting}> даю </span>
                            согласие на обработку персоальных данных.
                        </div>
                    </Typography>
            </Checkbox>

            <div style={{width:'100%',display:"flex",justifyContent:'center',margin:'20px 0'}}>
                <BaseButton onClick={infoRegistration} className={css.marginButton} type={'secondary'} isActive>Зарегистрироваться</BaseButton>
            </div>

            <div className={css.marginFooter}>
                <div>
                    <Typography size={'small'}  >
                        Уже есть аккаунт?
                    </Typography>
                </div>
                <div onClick={()=>onEdit('login')}>
                    <Typography size={'small'} color={'nude'} >Войти</Typography>
                </div>
            </div>
        </div>
    );
};