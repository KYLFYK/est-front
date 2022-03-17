import { FC, useState } from "react";
import { BaseInput } from "../../../../../shared/BaseInput/Input";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import {observer} from "mobx-react-lite";
import styles from "../../../Admin/components/UsersTab/agency/agency.module.scss";
import Typography from '../../../../../shared/Typography/Typography';

export const LegalInfo: FC = () => {
  const [activityKinds, setActivityKinds] = useState<string[]>([""]);
  const store = useStoreDeveloperCabinet()
  return (
    <div
      className={styles.formWrapper}
      style={{
        paddingTop: 20,
      }}
    >
      <div className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Реквизиты</span>
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Полное название организации"
            type="text"
            name={"fullCompanyName"}
            defaultValue={" "}
            onChange={(e) => {
              
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Адрес"
            type="text"
            name={"address"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Уставный капитал"
            type="text"
            name={"capital"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="ОКФС"
            type="text"
            name={"okfs"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="ОКОПФ"
            type="text"
            name={"okopf"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="ОКОГУ"
            type="text"
            name={"okogu"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <div className={styles.subSection}>
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ИНН"
              type="text"
              name={"inn"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОГРН"
              type="text"
              name={"ogrn"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="КПП"
              type="text"
              name={"kpp"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКАТО"
              type="text"
              name={"okato"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКПО"
              type="text"
              name={"okpo"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКТМО"
              type="text"
              name={"oktmo"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
          </div>
        </section>
        <section>
          <span className={styles.formSubTitle}>Информация о компании</span>
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Статус компании"
            type="text"
            name={"companyStatus"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Руководитель"
            type="text"
            name={"companyStatus"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Учредители"
            type="text"
            name={"companyStatus"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <div className={styles.subSection}>
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Размер предприятия"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Численность персонала"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Филиалы"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Выручка"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Чистая прибыль"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              errorLabel=""
              label="Чистые активы"
              type="text"
              name={"phoneNumber"}
              defaultValue={" "}
              onChange={() => {
                console.log("sd");
              }}
            />
          </div>
        </section>
        <section className={styles.vertical}>
          <span className={styles.formSubTitle}>
            Сведения о государственной регистрации
          </span>
          <BaseInput
            classNameWrapper={styles.mediumWrapper}
            className={styles.medium}
            errorLabel=""
            label="Дата регистрации"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Регистрирующий орган"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Адрес регистрирующего органа"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Регистрирующий орган, в котором находится регистрационное дело"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
        </section>
        <section className={styles.vertical}>
          <span className={styles.formSubTitle}>Виды деятельности</span>
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Основной вид деятельности по ОКВЭД"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Дополнительные виды деятельности"
            type="text"
            name={"phoneNumber"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          {activityKinds.map((active, index) => (
            <BaseInput
              key={index}
              classNameWrapper={styles.largeWrapper}
              className={styles.large}
              errorLabel=""
              type="text"
              name={"phoneNumber"}
              defaultValue={active}
              icon={index === activityKinds.length - 1 ? <>-</> : undefined}
              iconClassName={styles.iconDelete}
              iconOnClick={() => {
                if (index === activityKinds.length - 1) {
                  setActivityKinds([
                    ...activityKinds.filter(
                      (v, i) => i !== activityKinds.length - 1
                    ),
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
              setActivityKinds([...activityKinds, ""]);
            }}
          >
            + Добавить вид деятельности
          </span>
        </section>
      </div>
    </div>
  );
};
