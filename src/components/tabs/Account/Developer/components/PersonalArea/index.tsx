import {FC, useEffect, useState} from "react";
import {
    HorizontalTabs,
    ITabItem,
} from "../../../../../shared/HorizontalTabs/HorizontalTabs";
import {Account} from "./Account";
import {Settings} from "./Settings";

import styles from "./Account.module.scss";
import {observer} from "mobx-react-lite";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import AccountEditDeveloper from "./AccountEditDeveloper";

export const PersonalArea: FC = observer(() => {

    const [edit, setEdit] = useState<boolean>(false)

    const store = useStoreDeveloperCabinet()

    useEffect(() => {
        store.fetch()
    }, [store])

    return (
        <>
            {
                !edit
                    ? <HorizontalTabs
                        wrapperClassName={styles.tabsWrapper}
                        tabs={[
                            {
                                title: "Аккаунт застройщика",
                                Component: <Account onEdit={()=>setEdit(true)}/>,
                            },
                            {
                                title: "Настройки",
                                Component: <Settings/>,
                            },
                        ]}
                    />
                    : <AccountEditDeveloper onEdit={()=>setEdit(false)} />
            }
        </>
    )
})
