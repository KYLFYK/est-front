import React, {useState} from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import AccountOwnerOptions from "./AccountOwnerOptions/AccountOwnerOptions";
import PersonalAccountOwner from "./PersonalAccountOwner/PersonalAccountOwner";
import PersonalAccountEdit from "./PersonalAccountEdit/PersonalAccountEdit";
import AccountEditAgent from "../../../Agent/components/PersonalCabinetTab/AccountEditAgent/AccountEditAgent";
import {SettingsEditAgent} from "../../../Agent/components/PersonalCabinetTab/Settings/SettingsEditAgent";
import AccountOwnerEdit from "./AccountOwnerOptions/AccountOwnerEdit";
import {observer} from "mobx-react-lite";

const style={
    margin:'0 18px'
}


const PersonalAccount = observer(() => {
    const [edit, setEdit] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(0)

    const changeCurrentBack = (id:number) => {
        setEdit(false)
        setCurrent(id)
    }
    const changeCurrent1 = () => {
        setEdit(true)
        setCurrent(0)
    }
    const changeCurrent2 = () => {
        setEdit(true)
        setCurrent(1)
    }

    return (
        <>
            {
                !edit?<HorizontalTabs
                        style={style}
                        tabs={[
                        {title: "Аккаунт", Component: <PersonalAccountOwner onEdit={changeCurrent1}/>},
                        {title: "Настройки", Component: <AccountOwnerOptions onEdit={changeCurrent2} />},
                    ]}/>
                    :
                    (
                        current === 0 && <PersonalAccountEdit onCurrent={changeCurrentBack}/> ||
                        current === 1 && <AccountOwnerEdit onCurrent={changeCurrentBack}/>
                    )
            }
        </>
    );
})

export default PersonalAccount;