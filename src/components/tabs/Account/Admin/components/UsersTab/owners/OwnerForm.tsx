import { FC } from "react";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { AvatarSection } from "../../../../../../shared/AvatarSection";
import {
  FormController,
  useForm,
} from "../../../../../../containers/FormController";

import styles from "../agency/agency.module.scss";
import dealImg from "../../../../../../../Pics/card-images/dealCard.jpg";

interface IForm {
  name?: string;
  lastName?: string;
  birthdayDate?: string;
  phoneNumber?: string;
  email?: string;
  login?: string;
  password?: string;
  accountEmail?: string;
  accountPhoneNumber?: string;
}

export const OwnerForm: FC = () => {
  const [Form] = useForm<IForm>({
    name: "name",
    lastName: "What",
  });

  const handleConfirm = () => {

  };

  const setValue = () => {
    Form.setValues([
      {
        name: "name",
        value: "Иван",
      },
      {
        name: "lastName",
        value: "Иванов",
      },
      {
        name: "birthdayDate",
        value: "2022-02-17",
      },
    ]);
  };

  const resetValue = () => {
    Form.resetValues();
  };

  return (
    <div className={styles.formWrapper}>
      <FormController<IForm> form={Form} className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Личные данные</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Имя"
            type="text"
            name={"name"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Фамилия"
            type="text"
            name={"lastName"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Дата рождения"
            type="date"
            name={"birthdayDate"}
            style={{
              resize: "none",
            }}
          />
        </section>
        <section>
          <span className={styles.formSubTitle}>Контактные данные</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Номер телефона"
            type="tel"
            name={"phoneNumber"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"email"}
          />
        </section>
        <section>
          <span className={styles.formSubTitle}>Настройки</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Логин"
            type="tel"
            name={"login"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Пароль"
            type="email"
            name={"password"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"accountEmail"}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Номер телефона"
            type="email"
            name={"accountPhoneNumber"}
          />
        </section>
        <section>
          <div className={styles.buttons}>
            <BaseButton type={"danger"}>Заблокировать</BaseButton>
          </div>
        </section>
        <button type={"button"} onClick={handleConfirm}>
          Получить данные
        </button>
        <button type={"button"} onClick={setValue}>
          Изменить данные
        </button>
        <button type={"button"} onClick={resetValue}>
          Удалить данные
        </button>
      </FormController>
      <AvatarSection src={dealImg} changeable />
    </div>
  );
};
