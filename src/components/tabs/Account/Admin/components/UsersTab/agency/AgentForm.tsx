import { FC, useState } from "react";
import { AvatarSection } from "../../../../../../shared/AvatarSection";
import { BaseInput } from "../../../../../../shared/BaseInput/Input";
import { BaseDropDown } from "../../../../../../shared/BaseDropDown/BaseDropDown";
import { CheckBox } from "../../common/CheckBox";
import { Table } from "../../common/Table";
import { IconDocument } from "../../../../../../../icons/Document/IconDocument";
import { IconDownload } from "../../../../../../../icons/Download/IconDownload";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import {
  IAgentProfile,
  IIdentStatus,
  IPayment,
  IPlan,
} from "../../../../../../../mobx/role/admin/profiles/agency";
import Link from "next/link";

import dealImg from "../../../../../../../Pics/card-images/dealCard.jpg";
import styles from "./agency.module.scss";

const Options = {
  pack: [
    {
      label: "Премиум",
      value: "premium",
    },
    {
      label: "Стандарт",
      value: "standard",
    },
    {
      label: "Эконом",
      value: "economy",
    },
  ],
  pay: [
    {
      label: "Банковская карта",
      value: "card",
    },
    {
      label: "Наличные",
      value: "cash",
    },
  ],
  status: [
    {
      label: "Готово к проверке",
      value: "readyToIdent",
    },
  ],
};

interface Props {
  profile: IAgentProfile;
}

export const AgentForm: FC<Props> = ({ profile }) => {
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>(
    profile.phoneNumbers
  );
  const [accordion, setAccordion] = useState(true);

  const [selectedObj, setSelectedObj] = useState(profile.tariff.plan);
  const [selectedPay, setSelectedPay] = useState(profile.tariff.paymentMethod);
  const [selectedStatus, setSelectedStatus] = useState(
    profile.identification.status
  );

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
            defaultValue={profile.agencyName}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Статус"
            type="text"
            name={"lastName"}
            defaultValue={profile.status}
            onChange={() => {

            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Стаж"
            type="text"
            name={"birthdayDate"}
            defaultValue={profile.experience}
            onChange={() => {
   
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Email"
            type="email"
            name={"birthdayDate"}
            defaultValue={profile.agencyEmail}
            onChange={() => {
   
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Сайт"
            type="url"
            name={"birthdayDate"}
            defaultValue={profile.citeUrl}
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
            defaultValue={profile.description}
            textArea
            onChange={() => {
    
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
            defaultValue={profile.login}
            onChange={() => {
     
            }}
          />
          <BaseInput
            classNameWrapper={styles.inputWrapper}
            className={styles.input}
            errorLabel=""
            label="Пароль"
            type="password"
            name={"password"}
            defaultValue={profile.password}
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
            defaultValue={profile.email}
            onChange={() => {

            }}
          />
          {phoneNumbers.map((number, index) => (
            <BaseInput
              classNameWrapper={styles.inputWrapper}
              className={styles.input}
              errorLabel=""
              label={`Номер телефона ${index + 1}`}
              type="tel"
              name={`phoneNumber${index + 1}`}
              defaultValue={profile.phoneNumbers[index]}
              key={index}
              icon={
                index === phoneNumbers.length - 1 && index !== 0 ? (
                  <>-</>
                ) : undefined
              }
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
          <span className={styles.formSubTitle}>Тарифный план</span>
          <div className={styles.selectDiv}>
            <div className={styles.selectElem}>
              <div className={styles.selectRow}>
                <span className={styles.selectTitle}>Подключенный пакет:</span>
                <BaseDropDown
                  onChange={(obj) => {
                    setSelectedObj(obj as IPlan);
                  }}
                  className={styles.select}
                  options={Options.pack}
                  placeholder="Выберите пакет"
                  value={selectedObj}
                />
              </div>
              <CheckBox
                defaultChecked={profile.tariff.autoResume}
                text="Автовозобновление"
              />
            </div>
            <div className={styles.selectElem}>
              <div className={styles.selectRow}>
                <span className={styles.selectTitle}>Тип оплаты:</span>
                <BaseDropDown
                  onChange={(obj) => {
                    setSelectedPay(obj as IPayment);
                  }}
                  className={styles.select}
                  options={Options.pay}
                  placeholder="Выберите способ оплаты"
                  value={selectedPay}
                />
              </div>
              <CheckBox
                defaultChecked={profile.tariff.autoPayment}
                text="Автоплатеж"
              />
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
          <Table paymentHistory={profile.paymentHistory} />
        </section>
        <section>
          <span className={styles.formSubTitle}>Идентификация</span>
          <div className={styles.ident}>
            <div className={styles.identSelect}>
              <span className={styles.identSelectTitle}>Статус:</span>
              <BaseDropDown
                onChange={(obj) => {
                  setSelectedStatus(obj as IIdentStatus);
                }}
                className={styles.select}
                options={Options.status}
                placeholder="Выберите статус"
                value={selectedStatus}
              />
            </div>
            <div className={styles.identList}>
              {profile.identification.documents.map((el, index) => (
                <div className={styles.identItem} key={index}>
                  <IconDocument />
                  <span className={styles.name}>
                    {`${el.name}.${el.format}`}
                  </span>
                  <Link href={el.url}>
                    <a>
                      <IconDownload className={styles.icon} />
                    </a>
                  </Link>
                </div>
              ))}
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
