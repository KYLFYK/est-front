import { FC, useState } from "react";
import { AvatarSection } from "../../../../../../shared/AvatarSection";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import { BaseDropDown } from "../../../../../../shared/BaseDropDown/BaseDropDown";
import { CheckBox } from "../../common/CheckBox";
import { Table } from "../../common/Table";

import dealImg from "../../../../../../../Pics/card-images/dealCard.jpg";
import styles from "./agency.module.scss";
import { IconDocument } from "../../../../../../../icons/Document/IconDocument";
import { IconDownload } from "../../../../../../../icons/Download/IconDownload";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";

const Options = {
  pack: [
    {
      label: "Премиум",
      value: "Премиум",
    },
    {
      label: "Стандарт",
      value: "Стандарт",
    },
    {
      label: "Эконом",
      value: "Эконом",
    },
  ],
  pay: [
    {
      label: "Банковская карта",
      value: "Банковская карта",
    },
    {
      label: "Наличные",
      value: "Наличные",
    },
  ],
  status: [
    {
      label: "Готово к проверке",
      value: "Готово к проверке",
    },
  ],
};

export const AgentForm: FC = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);
  const [accordion, setAccordion] = useState(true);

  const [selectedObj, setSelectedObj] = useState("Премиум");
  const [selectedPay, setSelectedPay] = useState("Банковская карта");
  const [selectedStatus, setSelectedStatus] = useState("Готово к проверке");

  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Аккаунт</span>
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Наименование"
            type="text"
            name={"name"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Статус"
            type="text"
            name={"lastName"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Стаж"
            type="date"
            name={"birthdayDate"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="date"
            name={"birthdayDate"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Сайт"
            type="date"
            name={"birthdayDate"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
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
            type="text"
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
            type="password"
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
            defaultValue={"email@mail.ru"}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Номер телефона 1"
            type="tel"
            name={"phoneNumber1"}
            defaultValue={""}
            onChange={() => {
              console.log("sd");
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
                console.log("sd");
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
          <span className={styles.formSubTitle}>Тарифный план</span>
          <div className={styles.selectDiv}>
            <div className={styles.selectElem}>
              <div className={styles.selectRow}>
                <span className={styles.selectTitle}>Подключенный пакет:</span>
                <BaseDropDown
                  onChange={(obj) => {
                    setSelectedObj(obj);
                  }}
                  className={styles.select}
                  options={Options.pack}
                  placeholder="Выберите пакет"
                  value={selectedObj}
                />
              </div>
              <CheckBox defaultChecked text="Автовозобновление" />
            </div>
            <div className={styles.selectElem}>
              <div className={styles.selectRow}>
                <span className={styles.selectTitle}>Тип оплаты:</span>
                <BaseDropDown
                  onChange={(obj) => {
                    setSelectedPay(obj);
                  }}
                  className={styles.select}
                  options={Options.pay}
                  placeholder="Выберите способ оплаты"
                  value={selectedPay}
                />
              </div>
              <CheckBox defaultChecked text="Автоплатеж" />
            </div>
          </div>
        </section>
        <section>
          <div
            className={styles.accordion}
            onClick={() => {
              setAccordion(!accordion);
            }}
          >
            <span className={styles.formSubTitle}>Таблица платежей</span>
            <span className={`${!accordion ? styles.revert : ""}`}>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.89528 1.59352C9.03491 1.44853 9.03491 1.21073 8.89528 1.06573L7.9682 0.108748C7.82858 -0.0362494 7.60518 -0.0362494 7.46556 0.108748L4.5 3.1885L1.53444 0.108748C1.39482 -0.0362494 1.17142 -0.0362494 1.0318 0.108748L0.104716 1.06573C-0.0349054 1.21073 -0.0349054 1.44853 0.104716 1.59352L4.24868 5.89125C4.3883 6.03625 4.6117 6.03625 4.75132 5.89125L8.89528 1.59352Z"
                  fill="#D5D5D5"
                />
              </svg>
            </span>
          </div>
          <Table />
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
                <IconDocument />
                <span className={styles.name}>
                  Лицензия на ведение деятельности 08.08.2021.pdf
                </span>
                <IconDownload className={styles.icon} />
              </div>
              <div className={styles.identItem}>
                <IconDocument />
                <span className={styles.name}>Государственная регистрация</span>
                <IconDownload className={styles.icon} />
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
      <AvatarSection src={dealImg} changeable />
    </div>
  );
};
