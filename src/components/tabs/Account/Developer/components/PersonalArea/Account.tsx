import { FC } from "react";
import { AvatarSection } from "../../../../../shared/AvatarSection";
import { ProfileForm } from "./ProfileForm";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import styles from "./Account.module.scss";

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

export const Account: FC = () => {
  const store = useStoreDeveloperCabinet()
  return (
    <div className={styles.wrapper}>
      <AvatarSection
        src={store.initialData.account.src}
        changeable
      />
      <ProfileForm profileForm={store.initialData.account.profileForm} />
    </div>
  );
};
