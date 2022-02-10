import {FC, useEffect} from "react";
import { AvatarSection } from "../../../../../shared/AvatarSection";
import { ProfileForm } from "./ProfileForm";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import styles from "./Account.module.scss";
import {observer} from "mobx-react-lite";

const profileForm={
    name: "Брусника",
    type: "Девелоперская компания",
    address: "5 лет",
    phone: "+7 (123) 456-78-90",
    email: "email@mail.ru",
    site: "brusnika.ru",
    description:
        "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
}

type AccountDeveloperType={
    onEdit:()=>void
}

export const Account: FC<AccountDeveloperType> = observer(({onEdit}) => {
  const store = useStoreDeveloperCabinet()

  return (
    <div className={styles.wrapper}>
        {
            store.initialData.loading
                ?<> <AvatarSection
                    src={store.initialData.account.src}
                    changeable
                />
                <ProfileForm profileForm={store.initialData.account.profileForm} onEdit={onEdit} />
                </>
            : <h2>loader </h2>
        }

    </div>
  );
})
