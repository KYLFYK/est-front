import { FC, useState } from "react";
import { BaseInput } from "../../../../../shared/BaseInput/Input";
import { useStoreDeveloperCabinet } from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import { observer } from "mobx-react-lite";
import styles from "../../../Admin/components/UsersTab/agency/agency.module.scss";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import css from "./AccountEditDeveloper.module.scss";

export const LegalInfoEditDeveloper: FC = observer(() => {
  const [activityKinds, setActivityKinds] = useState<string[]>([""]);

  const store = useStoreDeveloperCabinet();

  const errorFields =
    !(
      (store.get().legal.authorizedCapital instanceof Number ||
        typeof store.get().legal.authorizedCapital === "number") &&
      !isNaN(store.get().legal.authorizedCapital) &&
      store.get().legal.authorizedCapital >= 0
    ) ||
    !(
      `${store.get().legal.INN}`.length === 12 &&
      `${store.get().legal.INN}`
        .split("")
        .filter((n: any) => n >= 0 && n <= 9)
        .join("").length === 12
    ) ||
    !(
      `${store.get().legal.OGRN}`.length === 13 &&
      `${store.get().legal.OGRN}`
        .split("")
        .filter((n: any) => n >= 0 && n <= 9)
        .join("").length === 13
    ) ||
    !(
      `${store.get().legal.KPP}`.length === 9 &&
      `${store.get().legal.KPP}`
        .split("")
        .filter((n: any) => n >= 0 && n <= 9)
        .join("").length === 9
    ) ||
    !(
      (store.get().legal.enterpriseSize instanceof Number ||
        typeof store.get().legal.enterpriseSize === "number") &&
      !isNaN(store.get().legal.enterpriseSize) &&
      store.get().legal.enterpriseSize >= 0
    ) ||
    !(
      (store.get().legal.numberOfStaff instanceof Number ||
        typeof store.get().legal.numberOfStaff === "number") &&
      !isNaN(store.get().legal.numberOfStaff) &&
      store.get().legal.numberOfStaff >= 0
    ) ||
    !(
      (store.get().legal.branch instanceof Number ||
        typeof store.get().legal.branch === "number") &&
      !isNaN(store.get().legal.branch) &&
      store.get().legal.branch >= 0
    ) ||
    !(
      (store.get().legal.revenue instanceof Number ||
        typeof store.get().legal.revenue === "number") &&
      !isNaN(store.get().legal.revenue) &&
      store.get().legal.revenue >= 0
    ) ||
    !(
      (store.get().legal.netProfit instanceof Number ||
        typeof store.get().legal.netProfit === "number") &&
      !isNaN(store.get().legal.netProfit)
    ) ||
    !(
      (store.get().legal.netAssets instanceof Number ||
        typeof store.get().legal.netAssets === "number") &&
      !isNaN(store.get().legal.netAssets)
    );
  const save = () => {
    store.updateDeveloper(store.initialData.account.id, {
      ...store.get().legal,
    });
  };

  return (
    <div
      className={styles.formWrapper}
      style={{padding: "0 20px"}}
    >
      <div className={styles.form}>
        <section>
          <span className={styles.formSubTitle}>Реквизиты</span>
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="Полное название организации"
            type="text"
            name={"fullCompanyName"}
            value={store.get().legal.legalFullName}
            onChange={(e) => {
              store.setlegalfullName(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="Адрес"
            type="text"
            name={"address"}
            value={store.get().legal.legalAddress}
            onChange={(e) => {
              store.setlegalAddress(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            isError={
              !(
                (store.get().legal.authorizedCapital instanceof Number ||
                  typeof store.get().legal.authorizedCapital === "number") &&
                !isNaN(store.get().legal.authorizedCapital) &&
                store.get().legal.authorizedCapital >= 0
              )
            }
            errorLabel="Необходимо положительное число"
            label="Уставный капитал"
            type="text"
            name={"capital"}
            value={store.get().legal.authorizedCapital}
            onChange={(e) => {
              store.setauthorizedCapital(+e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="ОКФС"
            type="text"
            name={"okfs"}
            value={store.get().legal.OKFS}
            onChange={(e) => {
              store.setOKFS(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="ОКОПФ"
            type="text"
            name={"okopf"}
            value={store.get().legal.OKOPF}
            onChange={(e) => {
              store.setOKOPF(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="ОКОГУ"
            type="text"
            name={"okogu"}
            value={store.get().legal.OKOGU}
            onChange={(e) => {
              store.setOKOGU(e.target.value);
            }}
          />
          <div className={styles.subSection}>
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              isError={
                !(
                  `${store.get().legal.INN}`.length === 12 &&
                  `${store.get().legal.INN}`
                    .split("")
                    .filter((n: any) => n >= 0 && n <= 9)
                    .join("").length === 12
                )
              }
              errorLabel="Необходимо 12-ть цифр"
              label="ИНН"
              type="text"
              name={"inn"}
              value={store.get().legal.INN}
              onChange={(e) => {
                store.setINN(e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              isError={
                !(
                  `${store.get().legal.OGRN}`.length === 13 &&
                  `${store.get().legal.OGRN}`
                    .split("")
                    .filter((n: any) => n >= 0 && n <= 9)
                    .join("").length === 13
                )
              }
              errorLabel="Необходимо 13-ть цифр"
              label="ОГРН"
              type="text"
              name={"ogrn"}
              value={store.get().legal.OGRN}
              onChange={(e) => {
                store.setOGRN(e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              isError={
                !(
                  `${store.get().legal.KPP}`.length === 9 &&
                  `${store.get().legal.KPP}`
                    .split("")
                    .filter((n: any) => n >= 0 && n <= 9)
                    .join("").length === 9
                )
              }
              errorLabel="Необходимо 9-ть цифр"
              label="КПП"
              type="text"
              name={"kpp"}
              value={store.get().legal.KPP}
              onChange={(e) => {
                store.setKPP(e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКАТО"
              type="text"
              name={"okato"}
              value={store.get().legal.OKATO}
              onChange={(e) => {
                store.setOKATO(e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКПО"
              type="text"
              name={"okpo"}
              value={store.get().legal.OKPO}
              onChange={(e) => {
                store.setOKPO(e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.smallWrapper}
              className={styles.small}
              errorLabel=""
              label="ОКТМО"
              type="text"
              name={"oktmo"}
              value={store.get().legal.OKTMO}
              onChange={(e) => {
                store.setOKTMO(e.target.value);
              }}
            />
          </div>
        </section>
        <section>
          <span className={styles.formSubTitle}>Информация о компании</span>
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="Статус компании"
            type="text"
            name={"companyStatus"}
            value={store.get().legal.status}
            onChange={(e) => {
              store.setstatus(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="Руководитель"
            type="text"
            name={"companyStatus"}
            value={store.get().legal.leaderName}
            onChange={(e) => {
              store.setleaderName(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumPlusWrapper}
            className={styles.mediumPlus}
            errorLabel=""
            label="Учредители"
            type="text"
            name={"companyStatus"}
            value={store.get().legal.founders}
            onChange={(e) => {
              store.setfounders(e.target.value);
            }}
          />
          <div className={styles.subSection}>
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.enterpriseSize instanceof Number ||
                    typeof store.get().legal.enterpriseSize === "number") &&
                  !isNaN(store.get().legal.enterpriseSize) &&
                  store.get().legal.enterpriseSize >= 0
                )
              }
              errorLabel="Необходимо положительное число"
              label="Размер предприятия"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.enterpriseSize}
              onChange={(e) => {
                store.setenterpriseSize(+e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.numberOfStaff instanceof Number ||
                    typeof store.get().legal.numberOfStaff === "number") &&
                  !isNaN(store.get().legal.numberOfStaff) &&
                  store.get().legal.numberOfStaff >= 0
                )
              }
              errorLabel="Необходимо положительное число"
              label="Численность персонала"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.numberOfStaff}
              onChange={(e) => {
                store.setnumberOfStaff(+e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.branch instanceof Number ||
                    typeof store.get().legal.branch === "number") &&
                  !isNaN(store.get().legal.branch) &&
                  store.get().legal.branch >= 0
                )
              }
              errorLabel="Необходимо положительное число"
              label="Филиалы"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.branch}
              onChange={(e) => {
                store.setbranch(+e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.revenue instanceof Number ||
                    typeof store.get().legal.revenue === "number") &&
                  !isNaN(store.get().legal.revenue) &&
                  store.get().legal.revenue >= 0
                )
              }
              errorLabel="Необходимо положительное число"
              label="Выручка"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.revenue}
              onChange={(e) => {
                store.setrevenue(+e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.netProfit instanceof Number ||
                    typeof store.get().legal.netProfit === "number") &&
                  !isNaN(store.get().legal.netProfit)
                )
              }
              errorLabel="Необходимо число"
              label="Чистая прибыль"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.netProfit}
              onChange={(e) => {
                store.setnetProfit(+e.target.value);
              }}
            />
            <BaseInput
              classNameWrapper={styles.mediumWrapper}
              className={styles.medium}
              isError={
                !(
                  (store.get().legal.netAssets instanceof Number ||
                    typeof store.get().legal.netAssets === "number") &&
                  !isNaN(store.get().legal.netAssets)
                )
              }
              errorLabel="Необходимо число"
              label="Чистые активы"
              type="text"
              name={"phoneNumber"}
              value={store.get().legal.netAssets}
              onChange={(e) => {
                store.setnetAssets(+e.target.value);
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
            type='date'
            name={"phoneNumber"}
            value={store.get().legal.registrationDate}
            onChange={(e) => {
              store.setregistrationDate(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Регистрирующий орган"
            type="text"
            name={"phoneNumber"}
            value={store.get().legal.registrationAuthorityName}
            onChange={(e) => {
              store.setregistrationAuthorityName(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Адрес регистрирующего органа"
            type="text"
            name={"phoneNumber"}
            value={store.get().legal.registrationAuthorityAddress}
            onChange={(e) => {
              store.setregistrationAuthorityAddress(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Регистрирующий орган, в котором находится регистрационное дело"
            type="text"
            name={"phoneNumber"}
            value={store.get().legal.registeringAuthorityLocated}
            onChange={(e) => {
              store.setregisteringAuthorityLocated(e.target.value);
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
            value={store.get().legal.mainOccupation}
            onChange={(e) => {
              store.setmainOccupation(e.target.value);
            }}
          />
          {store
            .get()
            .legal.extraOccupations?.map(
              (d: { ord: number; value: string }, index: number) => {
                return (
                  <BaseInput
                    key={index}
                    icon={<>-</>}
                    iconClassName={styles.iconDelete}
                    iconOnClick={() => {
                      store.setextraOccupations(
                        store
                          .get()
                          .legal.extraOccupations.filter(
                            (dd: { ord: number; value: string }) =>
                              dd.ord !== d.ord
                          )
                      );
                    }}
                    classNameWrapper={styles.largeWrapper}
                    className={styles.large}
                    errorLabel=""
                    label={
                      index === 0
                        ? "Дополнительные виды деятельности"
                        : undefined
                    }
                    type="text"
                    name={"phoneNumber"}
                    value={d.value}
                    onChange={(e) => {
                      store.setextraOccupations([
                        ...store
                          .get()
                          .legal.extraOccupations.filter(
                            (dd: { ord: number; value: string }) =>
                              dd.ord < d.ord
                          ),
                        { ord: d.ord, value: e.target.value },
                        ...store
                          .get()
                          .legal.extraOccupations.filter(
                            (dd: { ord: number; value: string }) =>
                              dd.ord > d.ord
                          ),
                      ]);
                    }}
                  />
                );
              }
            )}
          <span
            className={styles.addNumber}
            onClick={() => {
              store.setextraOccupations([
                ...store.get().legal.extraOccupations,
                {
                  ord: store.get().legal.extraOccupations?.length
                    ? Math.max(
                        ...store
                          .get()
                          .legal.extraOccupations?.map((eo: any) => eo.ord)
                      ) + 1
                    : 1,
                  value: "",
                },
              ]);
            }}
          >
            + Добавить вид деятельности
          </span>
        </section>
        <BaseButton
          type={"secondary"}
          isActive
          className={css.marginButton}
          onClick={errorFields ? () => {} : save}
        >
          {errorFields ? "Исправьте значения" : "Сохранить"}
        </BaseButton>
      </div>
    </div>
  );
});
