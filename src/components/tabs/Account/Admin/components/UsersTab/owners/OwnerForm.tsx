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
    console.log(Form.getValues());
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
      <FormController form={Form} className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Личные данные</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Имя"
            type="text"
            name={"name"}
            defaultValue={""}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Фамилия"
            type="text"
            name={"lastName"}
            defaultValue={""}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Дата рождения"
            type="date"
            name={"birthdayDate"}
            defaultValue={""}
          />
          <button type={"button"} onClick={handleConfirm}>
            Получить данные
          </button>
          <button type={"button"} onClick={setValue}>
            Изменить данные
          </button>
          <button type={"button"} onClick={resetValue}>
            Удалить данные
          </button>
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
            defaultValue={"deal"}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"email"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
            }}
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
            defaultValue={"deal"}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Пароль"
            type="email"
            name={"password"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"accountEmail"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Номер телефона"
            type="email"
            name={"accountPhoneNumber"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
            }}
          />
        </section>
        <section>
          <div className={styles.buttons}>
            <BaseButton type={"danger"}>Заблокировать</BaseButton>
          </div>
        </section>
      </FormController>
      <AvatarSection src={dealImg} changeable />
    </div>
  );
};
