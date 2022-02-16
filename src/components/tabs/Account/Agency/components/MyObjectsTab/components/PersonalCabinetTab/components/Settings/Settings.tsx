// тут описываем горизонтальный подтаб "Аккаунт агенства", который является частью таба "Заявки на просмотр"
import css from './Settings.module.scss'
import Typography from "../../../../../../../../../shared/Typography/Typography";
import {BaseInput} from "../../../../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../../../../shared/BaseButton/BaseButtons";
import {FC, useState} from "react";

type PersonalCabinetSettingsType123 = {
    personalCabinet: {
        phones: Array<string>
        login: string
        passwordOld: string
        passwordNew: string
        messagePhone: string
        messageEmail: string
    }
}

const PersonalCabinetSettings: FC<PersonalCabinetSettingsType123> = ({personalCabinet}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [valuePhones, setValuePhones] = useState<Array<string>>(personalCabinet.phones)
    const [valueLogin, setValueLogin] = useState<string>(personalCabinet.login)
    const [valuePasswordOld, setValuePasswordOld] = useState<string>(personalCabinet.passwordOld)
    const [valuePasswordNew, setValuePasswordNew] = useState<string>(personalCabinet.passwordNew)
    const [valueMessagePhone, setValueMessagePhone] = useState<string>(personalCabinet.messagePhone)
    const [valueMessageEmail, setValueMessageEmail] = useState<string>(personalCabinet.messageEmail)

    const createPhone = () => {
        const newPhone = [...personalCabinet.phones]
        newPhone.push('')
        setValuePhones(newPhone)
    }

    const changePhone = (index: number, e: string) => {
        const phone = [...valuePhones]
        phone[index] = e
        setValuePhones(phone)
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <div style={{display: 'flex', justifyContent: "space-between"}}>*/}
            {/*        <Typography weight={"bold"} className={css.marginSubTitle}>*/}
            {/*            Телефоны*/}
            {/*        </Typography>*/}
            {/*        <div style={{display: 'flex', alignItems: 'center'}}>*/}
            {/*            <div style={{cursor: edit ? 'pointer' : '', padding: "0 15px"}} onClick={() => {*/}
            {/*                if (edit) createPhone()*/}
            {/*            }}>*/}
            {/*                <Typography>*/}
            {/*                    + Добавить телефон*/}
            {/*                </Typography>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <BaseButton*/}
            {/*                    onClick={() => setEdit(!edit)}*/}
            {/*                    className={edit ? css.redact_border : css.redact}*/}
            {/*                >*/}
            {/*                    Редактировать настройки*/}
            {/*                </BaseButton>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div style={{display: 'flex', flexWrap: "wrap"}}>*/}
            {/*        {*/}
            {/*            valuePhones.map((p, index) => (*/}
            {/*               <InputArray*/}
            {/*                   value={p}*/}
            {/*                   index={index}*/}
            {/*                   edit={edit}*/}
            {/*                   key={index}*/}
            {/*                   onChange={(e)=>changePhone(index,e)}*/}
            {/*               />*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div>
                <div className={css.df_jc_ai}>
                    <Typography weight={"bold"} className={css.marginSubTitle}>
                        Данные регистрации
                    </Typography>
                    {
                        !edit &&
                        <BaseButton onClick={()=>setEdit(!edit)} className={css.styleButton}>
                            Редактировать настройки
                        </BaseButton>
                    }
                </div>
                <div className={css.marginColumn} style={{display: 'flex'}} >
                    <div style={{marginRight:"20px"}}>
                        <Typography color={"tertiary"} className={css.marginTypo}>
                            Телефон
                        </Typography>
                        <BaseInput
                            value={valueMessagePhone}
                            onChange={e => setValueMessagePhone(e.currentTarget.value)}
                            disabled={!edit}
                            className={css.marginInput}
                        />
                    </div>
                    <div >
                        <Typography color={"tertiary"} className={css.marginTypo}>
                            E-mail
                        </Typography>
                        <BaseInput
                            value={valueMessageEmail}
                            onChange={e => setValueMessageEmail(e.currentTarget.value)}
                            disabled={!edit}
                            className={css.marginInput}
                        />
                    </div>
                </div>

                {/*<div style={{display: 'flex'}}>*/}
                {/*    <div className={css.marginColumn}>*/}
                {/*        <Typography color={"tertiary"} className={css.marginTypo}>*/}
                {/*            Логин*/}
                {/*        </Typography>*/}
                {/*        <BaseInput*/}
                {/*            value={valueLogin}*/}
                {/*            onChange={(e) => setValueLogin(e.currentTarget.value)}*/}
                {/*            disabled={!edit}*/}
                {/*            className={css.marginInput}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex'}}>
                        <div className={css.marginColumn}>
                            <Typography color={"tertiary"} className={css.marginTypo}>
                                {
                                    !edit ? 'Пароль'
                                        : 'Старый пароль'
                                }
                            </Typography>
                            <BaseInput
                                type={'password'}
                                value={valuePasswordOld}
                                onChange={e => setValuePasswordOld(e.currentTarget.value)}
                                disabled={!edit}
                                className={css.marginInput}
                            />
                        </div>
                    </div>
                    {
                        edit &&
                        <div style={{display: 'flex'}}>
                            <div className={css.marginColumn}>
                                <Typography color={"tertiary"} className={css.marginTypo}>
                                    Новый пароль
                                </Typography>
                                <BaseInput
                                    type={'password'}
                                    value={valuePasswordNew}
                                    onChange={e => setValuePasswordNew(e.currentTarget.value)}
                                    disabled={!edit}
                                    className={css.marginInput}
                                />
                            </div>
                        </div>
                    }

                    <div style={{display: 'flex'}}>
                        {/*<div className={css.marginColumn}>*/}
                        {/*    <Typography color={"tertiary"} className={css.marginTypo}>*/}
                        {/*        Новый пароль*/}
                        {/*    </Typography>*/}
                        {/*    <BaseInput*/}
                        {/*        value={valuePasswordNew}*/}
                        {/*        onChange={e => setValuePasswordNew(e.currentTarget.value)}*/}
                        {/*        disabled={!edit}*/}
                        {/*        className={css.marginInput}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                    {/*<BaseButton className={css.marginButton} type={"secondary"}>Сохранить</BaseButton>*/}
                </div>
            </div>

            {/*<div>*/}
            {/*    <Typography weight={"bold"} className={css.marginSubTitle}>*/}
            {/*        Уведомления*/}
            {/*    </Typography>*/}
            {/*    <div style={{display: 'flex'}}>*/}


            {/*    </div>*/}
            {/*</div>*/}

            {
                edit &&
                <div className={css.marginColumn}>
                    <BaseButton type={"secondary"} onClick={() => setEdit(false)} isActive>Сохранить</BaseButton>
                </div>
            }

        </div>
    )
}

type InputArrayType = {
    index: number
    edit: boolean
    value: string
    onChange: (e: string) => void
}

const InputArray: FC<InputArrayType> = ({index, edit, value, onChange}) => {
    return (
        <div className={css.marginColumn}>
            <Typography color={"tertiary"} className={css.marginTypo}>
                Телефон {index + 1}
            </Typography>
            <BaseInput
                disabled={!edit}
                value={value}
                onChange={e => onChange(e.currentTarget.value)}
                className={css.marginInput}
            />
        </div>
    )
}


export default PersonalCabinetSettings