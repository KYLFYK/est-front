import { FC } from "react";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { AvatarSection } from "../../../../../../shared/AvatarSection";

import styles from "../agency/agency.module.scss";
import dealImg from "../../../../../../../Pics/card-images/dealCard.jpg";

export const OwnerForm: FC = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
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
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Фамилия"
            type="text"
            name={"lastName"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Дата рождения"
            type="date"
            name={"birthdayDate"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
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
            label="Email"
            type="email"
            name={"password"}
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
            name={"email"}
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
            name={"email"}
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
      </div>
      <AvatarSection src={dealImg} changeable />
    </div>
  );
};
