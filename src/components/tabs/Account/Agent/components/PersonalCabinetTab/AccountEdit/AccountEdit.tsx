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


type AccountEditType ={
    onEdit:()=>void
    infoAgency:{name:string,status:string,address:string,phone:string,email:string,website:string,description:string}
}

const image ="data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' " +
    "xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'240px\' height=\'240px\' rx=\'6px\'" +
    " style=\'fill: none; stroke: rgb(26, 72, 98); stroke-width: 1; stroke-dasharray: 9 9\'/></svg>"

const AccountEdit :FC<AccountEditType>= observer(({onEdit,infoAgency}) => {

    const store = useStoreAgentCabinet()

    const copyAgency = {...infoAgency}

    const [valueName,setValueName]=useState(copyAgency.name)
    const [valueStatus,setValueStatus]=useState(copyAgency.status)
    const [valueAddress,setValueAddress]=useState(copyAgency.address)
    const [valuePhone,setValuePhone]=useState(copyAgency.phone)
    const [valueEmail,setValueEmail]=useState(copyAgency.email)
    const [valueWebsite,setValueWebsite]=useState(copyAgency.website)
    const [valueDescription,setValueDescription]=useState(copyAgency.description)

    const [comparison, setComparison] =useState<boolean>(false)

    const backPage = () => {
        if ( infoAgency.name === valueName
            &&infoAgency.status === valueStatus
            &&infoAgency.address === valueAddress
            &&infoAgency.phone === valuePhone
            &&infoAgency.email === valueEmail
            &&infoAgency.website === valueWebsite
            &&infoAgency.description === valueDescription){
            onEdit()
        }
        setComparison(true)
    }

    const save = () =>{
        const updateValue:UpdateAgentCabinetType ={
            // name:valueName,
            // status:valueStatus,
            // address:valueAddress,
            // site:valueWebsite,
            // description:valueDescription,
            phone:valuePhone,
            email:valueEmail,
            markAsDelete: true,
            role:'agent'
        }
        store.update(store.initialData.id,updateValue)
    }
    const saveBack = () => {
        console.log('save')
        setComparison(false)
        onEdit()
    }
    const backPageNoSave = () => {
        console.log('backPageNoSave')
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
                        <div>
                            <div className={css.df}>
                                <div className={css.marginColumn}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Наименование
                                    </Typography>
                                    <BaseInput
                                        value={valueName}
                                        onChange={(e)=>setValueName(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Статус
                                    </Typography>
                                    <BaseInput
                                        value={valueStatus}
                                        onChange={(e)=>setValueStatus(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                            </div>
                            <div className={css.marginColumn}>
                                <Typography color={'tertiary'} className={css.marginTypo}>
                                    Адрес
                                </Typography>
                                <BaseInput
                                    value={valueAddress}
                                    onChange={(e)=>setValueAddress(e.currentTarget.value)}
                                    className={css.styleButton}
                                />
                            </div>
                            <div  className={css.df}>
                                <div className={css.marginColumn}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Телефон
                                    </Typography>
                                    <BaseInput
                                        value={valuePhone}
                                        onChange={(e)=>setValuePhone(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        E-mail
                                    </Typography>
                                    <BaseInput
                                        value={valueEmail}
                                        onChange={(e)=>setValueEmail(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                                <div className={css.marginColumn}>
                                    <Typography color={'tertiary'} className={css.marginTypo}>
                                        Сайт
                                    </Typography>
                                    <BaseInput
                                        value={valueWebsite}
                                        onChange={(e)=>setValueWebsite(e.currentTarget.value)}
                                        className={css.styleButton}
                                    />
                                </div>
                            </div>
                            <div className={css.marginColumn}>
                                <Typography color={'tertiary'} className={css.marginTypo}>
                                    Описание
                                </Typography>
                                <BaseTextarea
                                    value={valueDescription}
                                    onChange={(e)=>setValueDescription(e.currentTarget.value)}
                                    className={css.textArea}
                                />
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