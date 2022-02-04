import React, {FC, useState} from 'react';
import Image from 'next/image'
import importImage from './ImportImage.svg'
import css from './AccountEdit.module.scss'
import BackPage from '../../Others/BackPage/BackPage';
import Typography from "../../../../../../shared/Typography/Typography";
import {BaseInput} from "../../../../../../shared/BaseInput/Input";
import {BaseTextarea} from "../../../../../../shared/BaseTextarea/BaseTextarea";
import {myLoader} from "../../../../../../../utils/image/image";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { Modal } from 'src/components/shared/Modal/Modal';
import {LogoIcon} from "../../../../../../../icons/Header/LogoIcon";
import {observer} from "mobx-react-lite";
import {useStoreAgentCabinet} from "../../../../../../../mobx/role/agent/cabinet/AgentCabinet";
import {UpdateAgentCabinetType} from "../../../../../../../api/cabinet/cabinet";


export type infoAgentType={
    name:string,
    status:string,
    experience:string,
    phone:string,
    email:string,
    telegram:string,
    whatsApp:string,
    viber:string
}

type AccountEditType ={
    onEdit:()=>void
    // infoAgency:infoAgentType
}

const image ="data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' " +
    "xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'240px\' height=\'240px\' rx=\'6px\'" +
    " style=\'fill: none; stroke: rgb(26, 72, 98); stroke-width: 1; stroke-dasharray: 9 9\'/></svg>"

const AccountEdit :FC<AccountEditType>= observer(({onEdit}) => {

    const store = useStoreAgentCabinet()

    const infoAgency = {
        name: store.initialData.name,
        status: store.initialData.status,
        experience: store.initialData.experience,
        phone: store.initialData.phone,
        email: store.initialData.email,
        telegram: store.initialData.telegram,
        whatsApp: store.initialData.whatsApp,
        viber: store.initialData.viber
    }

    const [agentInfo ,setAgentInfo]=useState<infoAgentType>(infoAgency)

    // for input date user
    const date = new Date()
    const dateReal =  date.toISOString().substr(0,4) // year
    const mountAndDay = agentInfo.experience.substr(5,5)// save for api ( mountAndDay )
    const yearsExperience = agentInfo.experience.substr(0,4)// start years Experience

    const [valueName,setValueName]=useState(agentInfo.name)
    const [valueStatus,setValueStatus]=useState(agentInfo.status)
    const [valueExperience,setValueExperience]=useState<number>(+dateReal- +yearsExperience )
    const [valuePhone,setValuePhone]=useState(agentInfo.phone)
    const [valueEmail,setValueEmail]=useState(agentInfo.email)
    const [valueWhatsApp,setValueWhatsApp]=useState(agentInfo.whatsApp)
    const [valueTelegram,setValueTelegram]=useState(agentInfo.telegram)
    const [valueViber,setValueViber]=useState(agentInfo.viber)

    const [comparison, setComparison] =useState<boolean>(false)

    const backPage = () => {
        if ( agentInfo.name === valueName
            && agentInfo.status === valueStatus
            && +dateReal- +yearsExperience === +valueExperience
            && agentInfo.phone === valuePhone
            && agentInfo.email === valueEmail
            && agentInfo.whatsApp === valueWhatsApp
            && agentInfo.telegram === valueTelegram
            && agentInfo.viber === valueViber){
            onEdit()
        }else{
            setComparison(true)
        }
    }

    const save = async () =>{
        const updateValue:UpdateAgentCabinetType ={
            "phone": [{"ord": 1,"value": valuePhone, }],
            "name": valueName,
            "position": valueStatus,
            "experience": (+dateReal-valueExperience)+'-'+mountAndDay,
            "rating": 0,
            "inviteLink": 'string',
            "messengers": {
                "whatsApp": valueWhatsApp,
                "telegram": valueTelegram,
            },
        }
        await store.update(store.initialData.id,updateValue)
        setAgentInfo({ name:valueName,
            status:valueStatus,
            experience:(+dateReal-valueExperience)+'-'+mountAndDay,
            phone:valuePhone,
            email:valueEmail,
            telegram:valueTelegram,
            whatsApp:valueWhatsApp,
            viber:valueViber})
        setTimeout(()=>{
             store.fetch()
        },100)

    }
    const saveBack = async () => {
        const updateValue:UpdateAgentCabinetType ={
            "phone": [{"ord": 1,"value": valuePhone, }],
            "name": valueName,
            "position": valueStatus,
            "experience":(+dateReal-valueExperience)+'-'+mountAndDay,
            "rating": 0,
            "inviteLink": 'string',
            "messengers": {
                "whatsApp": valueWhatsApp,
                "telegram": valueTelegram,
            },
        }
        await store.update(store.initialData.id,updateValue)
        setTimeout(()=>{
            store.fetch()
        },100)
        setComparison(false)
        onEdit()
    }
    const backPageNoSave = () => {
        setComparison(false)
        onEdit()
    }

    return (
        <div>
            <BackPage onBackPage={backPage} title={'Редактирование аккаунта агентства'} />
            <div className={css.df_jc}>
                <div>
                    <Typography weight={'bold'}>Аккаунт</Typography>
                    <div className={css.df_jc}>
                        <div style={{width:'50vw'}}>
                            <div className={css.df}>
                                <div className={css.marginColumn} style={{width:"80%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Имя
                                    </Typography>
                                    <BaseInput
                                        value={valueName}
                                        onChange={(e)=>setValueName(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn} style={{width:"40%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Статус
                                    </Typography>
                                    <BaseInput
                                        value={valueStatus}
                                        onChange={(e)=>setValueStatus(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn} style={{width:"40%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Стаж
                                    </Typography>
                                    <BaseInput
                                        value={valueExperience}
                                        type={"number"}
                                        onChange={ (e)=>{
                                                if(+e.currentTarget.value < 60){
                                                    setValueExperience( +e.currentTarget.value)
                                                }
                                        }}
                                        className={css.styleButton}
                                    />
                                </div>
                            </div>
                            <div  className={css.df}>
                                <div className={css.marginColumn} style={{width:"25%"}} >
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Телефон
                                    </Typography>
                                    <BaseInput
                                        value={valuePhone}
                                        onChange={(e)=>setValuePhone(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn} style={{width:"40%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        E-mail
                                    </Typography>
                                    <BaseInput
                                        value={valueEmail}
                                        onChange={(e)=>setValueEmail(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>

                            </div>
                            <div className={css.df}>
                                <div className={css.marginColumn} style={{width:"25%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Telegram
                                    </Typography>
                                    <BaseInput
                                        value={valueTelegram}
                                        onChange={(e)=> setValueTelegram(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn} style={{width:"25%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                       WhatsApp
                                    </Typography>
                                    <BaseInput
                                        value={valueWhatsApp}
                                        onChange={(e)=>setValueWhatsApp(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn} style={{width:"25%"}}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Viber
                                    </Typography>
                                    <BaseInput
                                        value={valueViber}
                                        onChange={(e)=>setValueViber(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <Typography weight={"bold"} >
                        Логотип
                    </Typography>
                    <div style={{backgroundImage:image}} className={css.dashed}>
                        <div className={css.marginImage}>
                            <Image
                                loader={e=>myLoader(e.src,e.width,e.quality)}
                                src={importImage}
                                width={200}
                                height={200}
                                alt={'photo'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:'flex',width:"100%",flexDirection:'row-reverse'}}>
                <BaseButton
                    type={"secondary"}
                    isActive className={css.marginButton}
                    onClick={save}
                >
                    Сохранить
                </BaseButton>
            </div>
            {
                <Modal setActive={() => setComparison(!comparison)} active={comparison}>
                    <div className={css.modal}>
                        <LogoIcon/>
                        <Typography className={css.modalTypo} >
                            В аккаунте агентсва остались несохраненные изменения.Сохранить?
                        </Typography>
                        <BaseButton onClick={saveBack} isActive type={"secondary"} className={css.widthButton} >
                            <Typography weight={"medium"} color={"secondary"}  >
                                Да, сохранить
                            </Typography>
                        </BaseButton>
                        <BaseButton onClick={backPageNoSave} className={css.widthButton}>
                            <Typography weight={"medium"}>
                                Не сохранять, покинуть страницу
                            </Typography>
                        </BaseButton>
                    </div>
                </Modal>
            }
        </div>

    );
})

export default AccountEdit;