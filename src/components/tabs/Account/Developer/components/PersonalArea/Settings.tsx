import { FC, useState } from "react";
import { BaseInput } from "../../../../../shared/BaseInput/Input";

import styles from "./Account.module.scss";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import {observer} from "mobx-react-lite";

interface IForm {
  phoneNumber: string;
  login: string;
  oldPassword: string;
  newPassword: string;
  noticePhone: string;
  noticeEmail: string;
  [key: string]: string;
}

interface IPasswordsVis {
  oldPassword: boolean;
  newPassword: boolean;
}

interface IconVisProps {
  passwordVis: IPasswordsVis;
  setPasswordVis: (state: IPasswordsVis) => void;
  type: "oldPassword" | "newPassword";
}

const IconVis: FC<IconVisProps> = ({ passwordVis, setPasswordVis, type }) => {
  return (
    <svg
      width="22"
      height="15"
      viewBox="0 0 22 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        setPasswordVis({
          ...passwordVis,
          [type]: !passwordVis[type],
        });
      }}
      style={{
        cursor: "pointer",
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM8 7.5C8 5.84 9.34 4.5 11 4.5C12.66 4.5 14 5.84 14 7.5C14 9.16 12.66 10.5 11 10.5C9.34 10.5 8 9.16 8 7.5Z"
        fill="#CAD1DA"
      />
    </svg>
  );
};

export const Settings: FC = observer(() => {

  const store = useStoreDeveloperCabinet()

  const [formValues, setFormValues] = useState<IForm>({
    phoneNumber: store.initialData.setting.phoneNumber,
    login: store.initialData.setting.login,
    oldPassword: store.initialData.setting.oldPassword,
    newPassword: store.initialData.setting.newPassword,
    noticePhone: store.initialData.setting.noticePhone,
    noticeEmail: store.initialData.setting.noticeEmail,
  });

  const [numbersCount, setNumbersCount] = useState<string[]>(["phoneNumber"]);

  const [passwordVis, setPasswordVis] = useState<IPasswordsVis>({
    oldPassword: false,
    newPassword: false,
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form className={styles.settings}>
      <section className={styles.settingsSec}>
        <span className={styles.title}>Телефоны</span>
        {numbersCount.map((num, index) => (
          <div className={styles.phoneNumber} key={index}>
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label={`Номер телефона ${index + 1}`}
              type="tel"
              name={num}
              value={formValues[num]}
              onChange={(e) => {
                handleFieldChange("phoneNumber", e.currentTarget.value);
              }}
            />
            {index === numbersCount.length - 1 && index !== 0 && (
              <span
                className={styles.delete}
                onClick={() => {
                  setFormValues({
                    ...formValues,
                    [num]: "",
                  });
                  setNumbersCount([
                    ...numbersCount.filter(
                      (val, index) => index !== numbersCount.length - 1
                    ),
                  ]);
                }}
              >
                -
              </span>
            )}
          </div>
        ))}
        <span
          className={styles.add}
          onClick={() => {
            setNumbersCount([
              ...numbersCount,
              `phoneNumber${numbersCount.length + 1}`,
            ]);
          }}
        >
          + Добавить номер телефона
        </span>
      </section>
      <section className={styles.settingsSec}>
        <span className={styles.title}>Регистрационные данные</span>
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label={"Логин"}
          type="text"
          name={"login"}
          value={formValues.login}
          onChange={(e) => {
            handleFieldChange("login", e.currentTarget.value);
          }}
        />
        {/*<BaseInput*/}
        {/*  classNameWrapper={styles.inputWrapper}*/}
        {/*  className={styles.input}*/}
        {/*  errorLabel=""*/}
        {/*  label={"Старый пароль"}*/}
        {/*  type={passwordVis.oldPassword ? "text" : "password"}*/}
        {/*  name={"oldPassword"}*/}
        {/*  value={formValues.oldPassword}*/}
        {/*  onChange={(e) => {*/}
        {/*    handleFieldChange("oldPassword", e.currentTarget.value);*/}
        {/*  }}*/}
        {/*  icon={*/}
        {/*    <IconVis*/}
        {/*      setPasswordVis={setPasswordVis}*/}
        {/*      passwordVis={passwordVis}*/}
        {/*      type={"oldPassword"}*/}
        {/*    />*/}
        {/*  }*/}
        {/*/>*/}
        {/*<BaseInput*/}
        {/*  classNameWrapper={styles.inputWrapper}*/}
        {/*  className={styles.input}*/}
        {/*  errorLabel=""*/}
        {/*  label={"Новый пароль"}*/}
        {/*  type={passwordVis.newPassword ? "text" : "password"}*/}
        {/*  name={"newPassword"}*/}
        {/*  value={formValues.newPassword}*/}
        {/*  onChange={(e) => {*/}
        {/*    handleFieldChange("newPassword", e.currentTarget.value);*/}
        {/*  }}*/}
        {/*  icon={*/}
        {/*    <IconVis*/}
        {/*      setPasswordVis={setPasswordVis}*/}
        {/*      passwordVis={passwordVis}*/}
        {/*      type={"newPassword"}*/}
        {/*    />*/}
        {/*  }*/}
        {/*/>*/}
        {/*<BaseButton*/}
        {/*  buttonHTMLType={"button"}*/}
        {/*  className={styles.save}*/}
        {/*  type={"blank"}*/}
        {/*>*/}
        {/*  Сохранить*/}
        {/*</BaseButton>*/}
      </section>
      <section className={styles.settingsSec}>
        <span className={styles.title}>Уведомления</span>
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label={"Номер телефона"}
          type="tel"
          name={"noticePhone"}
          value={formValues.noticePhone}
          onChange={(e) => {
            handleFieldChange("noticePhone", e.currentTarget.value);
          }}
        />
        <BaseInput
          classNameWrapper={styles.inputWrapper}
          className={styles.input}
          errorLabel=""
          label={"Email"}
          type="tel"
          name={"noticeEmail"}
          value={formValues.noticeEmail}
          onChange={(e) => {
            handleFieldChange("noticeEmail", e.currentTarget.value);
          }}
        />
      </section>
    </form>
  );
})
