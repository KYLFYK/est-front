import { FC, useState } from "react";
import { BaseInput } from "../../../../../../../shared/BaseInput/Input";
import { BaseDropDown } from "../../../../../../../shared/BaseDropDown/BaseDropDown";
import { IconDocument } from "../../../../../../../../icons/Document/IconDocument";
import { IconDownload } from "../../../../../../../../icons/Download/IconDownload";
import BaseButton from "../../../../../../../shared/BaseButton/BaseButtons";

import styles from "../../agency/agency.module.scss";
import Scroll from "../../../../../../../shared/Scroll/Scroll";

const Options = {
  status: [
    {
      label: "Готово к проверке",
      value: "Готово к проверке",
    },
  ],
};

export const Settings: FC = () => {

  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState("Готово к проверке");

  return (
    <Scroll height={'530'} >
      <div
        style={{
          paddingTop: 20,
        }}
      >
        <div className={styles.form}>
          <section>
            <span className={styles.formSubTitle}>Настройки</span>
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label="Логин"
              type="text"
              name={"login"}
              defaultValue={" "}
              onChange={() => {

              }}
            />
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label="Пароль"
              type="text"
              name={"password"}
              defaultValue={" "}
              onChange={() => {

              }}
            />
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label="Email"
              type="text"
              name={"email"}
              defaultValue={" "}
              onChange={() => {

              }}
            />
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label="Номер телефона 1"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {

              }}
            />
            {phoneNumbers.map((number, index) => (
              <BaseInput
                classNameWrapper={styles.inputWrapper}
                className={styles.input}
                errorLabel=""
                label={`Номер телефона ${index + 2}`}
                type="tel"
                name={`phoneNumber${index + 2}`}
                defaultValue={""}
                key={index}
                icon={index === phoneNumbers.length - 1 ? <>-</> : undefined}
                iconClassName={styles.iconDelete}
                iconOnClick={() => {
                  if (index === phoneNumbers.length - 1) {
                    setPhoneNumbers([
                      ...phoneNumbers.filter((v, i) => i !== index),
                    ]);
                  }
                }}
                onChange={() => {

                }}
              />
            ))}
            <span
              className={styles.addNumber}
              onClick={() => {
                setPhoneNumbers([...phoneNumbers, ""]);
              }}
            >
              + Добавить номер телефона
            </span>
          </section>
          <section>
            <span className={styles.formSubTitle}>Идентификация</span>
            <div className={styles.ident}>
              <div className={styles.identSelect}>
                <span className={styles.identSelectTitle}>Статус:</span>
                <BaseDropDown
                  onChange={(obj) => {
                    setSelectedStatus(obj);
                  }}
                  className={styles.select}
                  options={Options.status}
                  placeholder="Выберите статус"
                  value={selectedStatus}
                />
              </div>
              <div className={styles.identList}>
                <div className={styles.identItem}>
                  <IconDocument fill={"#17A2B8"} />
                  <span className={styles.name}>
                    Лицензия на ведение деятельности 08.08.2021.pdf
                  </span>
                  <IconDownload fill={"#17A2B8"} className={styles.icon} />
                </div>
                <div className={styles.identItem}>
                  <IconDocument fill={"#17A2B8"} />
                  <span className={styles.name}>Государственная регистрация</span>
                  <IconDownload fill={"#17A2B8"} className={styles.icon} />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className={styles.buttons}>
              <BaseButton type={"danger"}>Заблокировать</BaseButton>
            </div>
          </section>
        </div>
      </div>
    </Scroll>
  );
};
