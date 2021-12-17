import { FC, useState } from "react";
import { BaseInput } from "../../../../../shared/BaseInput/Input";

import styles from "./Account.module.scss";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";

interface FormValues {
  name: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  cite: string;
  description: string;
}

export const ProfileForm: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "Брусника",
    type: "Девелоперская компания",
    address: "5 лет",
    phone: "+7 (123) 456-78-90",
    email: "email@mail.ru",
    cite: "brusnika.ru",
    description:
      "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className={styles.profile}>
      <form>
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Название компании"
          type="text"
          name={"name"}
          value={formValues.name}
          onChange={(e) => {
            handleFieldChange("name", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Тип застройщика"
          type="text"
          name={"type"}
          value={formValues.type}
          onChange={(e) => {
            handleFieldChange("type", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Адрес"
          type="text"
          name={"address"}
          value={formValues.address}
          onChange={(e) => {
            handleFieldChange("address", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Телефон"
          type="tel"
          name={"phone"}
          value={formValues.phone}
          onChange={(e) => {
            handleFieldChange("phone", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Email"
          type="text"
          name={"email"}
          value={formValues.email}
          onChange={(e) => {
            handleFieldChange("email", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Сайт"
          type="text"
          name={"cite"}
          value={formValues.cite}
          onChange={(e) => {
            handleFieldChange("cite", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label="Описание"
          type="text"
          name={"description"}
          value={formValues.description}
          onChange={(e) => {
            handleFieldChange("description", e.currentTarget.value);
          }}
        />
      </form>
      <div>
        <BaseButton isActive type={"secondary"}>
          Пройти идентификацию
        </BaseButton>
      </div>
    </div>
  );
};
