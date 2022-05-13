import React, {useState} from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import AccountOwnerOptions from "./AccountOwnerOptions/AccountOwnerOptions";
import PersonalAccountOwner from "./PersonalAccountOwner/PersonalAccountOwner";
import PersonalAccountEdit from "./PersonalAccountEdit/PersonalAccountEdit";
import AccountEditAgent from "../../../Agent/components/PersonalCabinetTab/AccountEditAgent/AccountEditAgent";
import {SettingsEditAgent} from "../../../Agent/components/PersonalCabinetTab/Settings/SettingsEditAgent";

const style={
    margin:'0 18px'
}


const PersonalAccount = () => {
    const [edit, setEdit] = useState<boolean>(false)
    const [current, setCurrent] = useState<number>(1)

    const changeCurrent = (id:number) => {
        setCurrent(id)
        setEdit(false)
    }

    return (
        <>
            {
                !edit?<HorizontalTabs
                        style={style}
                        tabs={[
                        {title: "Аккаунт", Component: <PersonalAccountOwner onEdit={()=>setEdit(!edit)}/>},
                        {title: "Настройки", Component: <AccountOwnerOptions onEdit={()=>setEdit(!edit)} />},
                    ]}/>
                    :
                    (
                        (current === 0 && <PersonalAccountEdit current={0} onCurrent={changeCurrent}/>) ||
                        (current === 1 && <PersonalAccountEdit current={1} onCurrent={changeCurrent}/>)
                    )
            }
        </>
    );
};

export default PersonalAccount;