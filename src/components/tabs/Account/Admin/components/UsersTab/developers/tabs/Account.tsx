import { FC } from "react";
import { BaseInput } from "../../../../../../../shared/BaseInput/Input";
import { AvatarSection } from "../../../../../../../shared/AvatarSection";

import styles from "../../agency/agency.module.scss";
import dealImg from "../../../../../../../../Pics/card-images/dealCard.jpg";

export const Account: FC = () => {
  return (
    <div
      className={styles.formWrapper}
      style={{
        paddingTop: 20,
      }}
    >
      <div className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Аккаунт</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Название компании"
            type="text"
            name={"companyName"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Тип застройщика"
            type="text"
            name={"developerType"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Адрес"
            type="text"
            name={"address"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Телефон"
            type="tel"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"email"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Сайт"
            type="text"
            name={"cite"}
            defaultValue={" "}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Описание"
            type="date"
            name={"birthdayDate"}
            defaultValue={" "}
            textArea
            onChange={() => {

            }}
          />
        </section>
      </div>
      <AvatarSection src={dealImg} changeable />
    </div>
  );
};
