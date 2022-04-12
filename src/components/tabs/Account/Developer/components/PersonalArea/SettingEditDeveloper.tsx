import React, {FC, useState} from 'react';
import jwtDecode from 'jwt-decode';
import {Modal} from 'src/components/shared/Modal/Modal';
import {observer} from "mobx-react-lite";
import BackPage from "../../../Agent/components/Others/BackPage/BackPage";
import Typography from "../../../../../shared/Typography/Typography";
import {BaseInput} from "../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {LogoIcon} from "../../../../../../icons/Header/LogoIcon";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";

import styles from "../../../Admin/components/UsersTab/agency/agency.module.scss";
import css from './AccountEditDeveloper.module.scss'


export type infoDeveloperType = {
    name: string,
    type: string,
    address: string,
    phone: string,
    email: string,
    site: string,
    description: string,
}

type SettingDeveloperType={
    onEdit:(tabId: number)=>void
  }

const image = "data:image/svg+xml;utf8,<svg width=\'100%\' height=\'100%\' " +
    "xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'240px\' height=\'240px\' rx=\'6px\'" +
    " style=\'fill: none; stroke: rgb(26, 72, 98); stroke-width: 1; stroke-dasharray: 9 9\'/></svg>"

export const SettingsEditDeveloper: FC<SettingDeveloperType> = observer(({onEdit}) => {

    const store = useStoreDeveloperCabinet()
    const infoAgency = {
        name: store.initialData.account.profileForm.name,
        type: store.initialData.account.profileForm.type,
        address: store.initialData.account.profileForm.address,
        phone: store.initialData.account.profileForm.phone,
        email: store.initialData.account.profileForm.email,
        site: store.initialData.account.profileForm.site,
        description: store.initialData.account.profileForm.description,
    }

    const [agentInfo, setAgentInfo] = useState<infoDeveloperType>(infoAgency)

    const [valueName, setValueName] = useState<string>(agentInfo.name)
    const [valueType, setValueType] = useState<string>(agentInfo.type)
    const [valueAddress, setValueAddress] = useState<string>(agentInfo.address)
    const [valuePhone, setValuePhone] = useState<string>(agentInfo.phone)
    const [valueEmail, setValueEmail] = useState<string>(agentInfo.email)
    const [valueSite, setValueSite] = useState<string>(agentInfo.site)
    const [valueDescription, setValueDescription] = useState<string>(agentInfo.description)

    const [comparison, setComparison] = useState<boolean>(false)

    const backPage = () => {
        if (agentInfo.name === valueName
            && agentInfo.type === valueType
            && agentInfo.address === valueAddress
            && agentInfo.phone === valuePhone
            && agentInfo.email === valueEmail
            && agentInfo.site === valueSite
            && agentInfo.description === valueDescription) {
            onEdit(1)
        } else {
            setComparison(true)
        }
    }

    const save = () => {
        store.updatePass(store.get().setting.newPassword, store.get().account.id, localStorage.getItem('accessEstatum') as string)
        store.updateDeveloper(store.initialData.account.id, {
            "phone": [{"ord": 1, "value": store.get().setting.noticePhone,}],
            "email": store.get().setting.noticeEmail,
        })
    }
    const saveBack = async () => {
        
        
        setTimeout(() => {
            store.fetch()
        }, 100)
        setComparison(false)
        onEdit(1)
    }
    const backPageNoSave = () => {
        setComparison(false)
        onEdit(1)
    }

    return (
        <div style={{margin:"15px 20px 20px 20px"}}>
            <BackPage onBackPage={backPage} title={'Редактирование настроек'}/>
            <div className={css.df_jc}>
                <div>
                    <Typography weight={'bold'}>Данные регистрации</Typography>
                    <div className={css.df} style={{width:'150%',marginTop:"20px"}}>
                        <div style={{width:'50%'}} >
                            <BaseInput
                                classNameWrapper={styles.largeWrapper}
                                className={styles.large}
                                errorLabel=""
                                label="Телефон"
                                type="text"
                                name={"phoneNumber"}
                                value={store.get().setting.noticePhone}
                                onChange={(e) => {
                                    store.setsettingsPhone(e.target.value);
                                }}
                            />
                        </div>
                        <div style={{marginLeft:"10px",width:'50%'}}>
                            <BaseInput
                                classNameWrapper={styles.largeWrapper}
                                className={styles.large}
                                errorLabel=""
                                label="E-mail"
                                type="text"
                                name={"phoneNumber"}
                                value={store.get().setting.noticeEmail}
                                onChange={(e) => {
                                    store.setsettingsMail(e.target.value);
                                }}
                            />
                        </div>

                    </div>

                    {/*<BaseInput
                        classNameWrapper={styles.largeWrapper}
                        className={styles.large}
                        errorLabel=""
                        label="Старый пароль"
                        type="text"
                        name={"phoneNumber"}
                        value={store.get().setting.oldPassword}
                        onChange={(e) => {
                           
                        }}
                    />*/}
                    <div style={{marginTop:"20px"}}>
                        <BaseInput
                            classNameWrapper={styles.largeWrapper}
                            className={styles.large}
                            errorLabel=""
                            label="Новый пароль"
                            type="text"
                            name={"phoneNumber"}
                            value={store.get().setting.newPassword}
                            onChange={(e) => {
                                store.setsettingsPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                
            </div>
            <div style={{marginTop:"60px",display: 'flex', width: "100%", flexDirection: 'row-reverse'}}>
                <BaseButton
                    type={"secondary"}
                    isActive className={css.marginButton}
                    onClick={save}
                >
                    Сохранить
                </BaseButton>

                {
                    (agentInfo.name !== valueName
                    || agentInfo.type !== valueType
                    || agentInfo.address !== valueAddress
                    || agentInfo.phone !== valuePhone
                    || agentInfo.email !== valueEmail
                    || agentInfo.site !== valueSite
                    || agentInfo.description !== valueDescription) &&
                    <div style={{display:"flex",alignItems:"center",marginRight:'10px'}}>
                        <Typography color={"tertiary"}>
                            Есть несохраненные изменения
                        </Typography>
                    </div>
                }

            </div>
            {
                <Modal setActive={() => setComparison(!comparison)} active={comparison}>
                    <div className={css.modal}>
                        <LogoIcon/>
                        <Typography className={css.modalTypo}>
                            В аккаунте агентсва остались несохраненные изменения.Сохранить?
                        </Typography>
                        <BaseButton onClick={saveBack} isActive type={"secondary"} className={css.widthButton}>
                            <Typography weight={"medium"} color={"secondary"}>
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