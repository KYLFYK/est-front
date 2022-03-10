import React, {useState} from 'react';
import {HorizontalTabs} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import AccountOwnerOptions from "./AccountOwnerOptions/AccountOwnerOptions";
import PersonalAccountOwner from "./PersonalAccountOwner/PersonalAccountOwner";
import PersonalAccountEdit from "./PersonalAccountEdit/PersonalAccountEdit";

const PersonalAccount = () => {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <>
            {
                !edit?<HorizontalTabs tabs={[
                        {title: "Аккаунт", Component: <PersonalAccountOwner onEdit={()=>setEdit(!edit)}/>},
                        {title: "Настройки", Component: <AccountOwnerOptions/>},
                    ]}/>
                    : <PersonalAccountEdit onEdit={()=>setEdit(!edit)}/>
            }
        </>
    );
};

export default PersonalAccount;