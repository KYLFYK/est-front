import { FC, useState } from "react";
import { BaseInput } from "../../../../../shared/BaseInput/Input";
import {useStoreDeveloperCabinet} from "../../../../../../mobx/role/developer/cabinet/DeveloperCabinet";
import {observer} from "mobx-react-lite";
import styles from "../../../Admin/components/UsersTab/agency/agency.module.scss";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";
import css from './AccountEditDeveloper.module.scss';

export const LegalInfoEditDeveloper: FC = observer(() => {
  const [activityKinds, setActivityKinds] = useState<string[]>([""]);
  const store = useStoreDeveloperCabinet()
  console.log(store.get())
  const save = () => {
    const updateValue = {
      ...store.get().legal
    }
    store.updateDeveloper(store.initialData.account.id, updateValue)
  }
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
            value={store.get().legal.legalFullName}
            onChange={(e) => {
              store.setlegalfullName(e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Уставный капитал"
            type="text"
            name={"capital"}
            value={store.get().legal.authorizedCapital}
            onChange={(e) => {
              store.setauthorizedCapital(+e.target.value);
            }}
          />
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
              errorLabel=""
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
              errorLabel=""
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
              errorLabel=""
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
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
              errorLabel=""
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
              errorLabel=""
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
              errorLabel=""
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
              errorLabel=""
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
              errorLabel=""
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
              errorLabel=""
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
            type="text"
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
          <BaseInput
            classNameWrapper={styles.largeWrapper}
            className={styles.large}
            errorLabel=""
            label="Дополнительные виды деятельности"
            type="text"
            name={"phoneNumber"}
            value={store.get().legal.extraOccupations}
            onChange={(e) => {
              store.setextraOccupations(e.target.value);
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
      <BaseButton
                    type={"secondary"}
                    isActive className={css.marginButton}
                    onClick={save}
      >
                    Сохранить
      </BaseButton>
    </div>
  );
});
