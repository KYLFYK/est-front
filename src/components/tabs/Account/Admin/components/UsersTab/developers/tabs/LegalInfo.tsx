import {FC, useEffect, useState} from "react";
import { BaseInput } from "../../../../../../../shared/BaseInput/Input";
import { DeveloperProfileStore } from "../../../../../../../../mobx/role/admin/profiles/developer";
import {
  FormController,
  useForm,
} from "../../../../../../../containers/FormController";

import styles from "../../agency/agency.module.scss";
import { observer } from "mobx-react";
import Scroll from "../../../../../../../shared/Scroll/Scroll";

export interface ILegalForm {
  fullCompanyName?: string;
  address?: string;
  capital?: string;
  okfs?: string;
  okopf?: string;
  okogu?: string;
  inn?: string;
  ogrn?: string;
  kpp?: string;
  okato?: string;
  okpo?: string;
  oktmo?: string;
  companyStatus?: string;
  director?: string;
  founder?: string;
  size?: string;
  personal?: string;
  filial?: string;
  revenue?: string;
  net?: string;
  netActive?: string;
  companyRegistered?: string;
  registeredFrom?: string;
  registeredAdress?: string;
  registeredMember?: string;
  okved?: string;
  okvedAdditional?: string;
}

export const LegalInfo: FC = observer(() => {
  const [activityKinds, setActivityKinds] = useState<string[]>([""]);

  const { profileData  ,legalInfo} = DeveloperProfileStore;

  const [valueLegalInfo, setValueLegalInfo]=useState<any>({})


  useEffect(()=>{
    setValueLegalInfo({
      legalFullName: profileData?.developerProperty.legalFullName,
      legalAddress: profileData?.developerProperty.legalAddress,
      authorizedCapital: profileData?.developerProperty.authorizedCapital // number
          ? profileData?.developerProperty.authorizedCapital
          : 'undefined',
      OKFS: profileData?.developerProperty.OKFS,
      OKOPF: profileData?.developerProperty.OKOPF,
      OKOGU: profileData?.developerProperty.OKOGU,
      INN: profileData?.developerProperty.INN,
      OGRN: profileData?.developerProperty.OGRN,
      KPP: profileData?.developerProperty.KPP,
      OKATO: profileData?.developerProperty.OKATO,
      OKPO: profileData?.developerProperty.OKPO,
      OKTMO: profileData?.developerProperty.OKTMO,
      status: profileData?.developerProperty.status
          ? profileData?.developerProperty.status
          : '',
      leaderName: profileData?.developerProperty.leaderName,
      founders: profileData?.developerProperty.founders,
      enterpriseSize: profileData?.developerProperty.enterpriseSize // number
          ? profileData?.developerProperty.enterpriseSize
          : 'undefined',
      numberOfStaff: profileData?.developerProperty.numberOfStaff // number
          ? profileData?.developerProperty.numberOfStaff
          : 'undefined',





      filial: '',
      revenue: profileData?.developerProperty.revenue
          ? profileData?.developerProperty.revenue.toString()
          : undefined,
      netAssets: profileData?.developerProperty.netAssets
          ? profileData?.developerProperty.netAssets.toString()
          : undefined,
      netProfit: profileData?.developerProperty.netProfit
          ? profileData?.developerProperty.netProfit.toString()
          : undefined,
      registrationDate: profileData?.developerProperty.registrationDate
          ? profileData?.developerProperty.registrationDate
          : undefined,


      registrationAuthorityName: profileData?.developerProperty.registrationAuthorityName
          ? profileData?.developerProperty.registrationAuthorityName
          : undefined,
      registrationAuthorityAddress: profileData?.developerProperty
          .registrationAuthorityAddress
          ? profileData?.developerProperty.registrationAuthorityAddress
          : undefined,
      registeringAuthorityLocated: profileData?.developerProperty.registeringAuthorityLocated
          ? profileData?.developerProperty.registeringAuthorityLocated
          : undefined,
      okved: "",
      okvedAdditional: "",
    })
  },[])

  const editValueLegalInfo = (title:string,value:string) => {
    setValueLegalInfo({...valueLegalInfo,[title]:value})
  }
  const updateValueLegal = async () => {
    await legalInfo(valueLegalInfo)
  }

  const [form] = useForm<ILegalForm>({
    fullCompanyName: profileData?.developerProperty.legalFullName,
    address: profileData?.developerProperty.legalAddress,
    capital: profileData?.developerProperty.authorizedCapital
      ? profileData?.developerProperty.authorizedCapital.toString()
      : undefined,
    okfs: profileData?.developerProperty.OKFS,
    okopf: profileData?.developerProperty.OKOPF,
    okogu: profileData?.developerProperty.OKOGU,
    inn: profileData?.developerProperty.INN,
    ogrn: profileData?.developerProperty.OGRN,
    kpp: profileData?.developerProperty.KPP,
    okato: profileData?.developerProperty.OKATO,
    okpo: profileData?.developerProperty.OKPO,
    oktmo: profileData?.developerProperty.OKTMO,
    companyStatus: profileData?.developerProperty.status
      ? profileData?.developerProperty.status
      : undefined,
    director: profileData?.developerProperty.leaderName,
    founder: profileData?.developerProperty.founders,
    size: profileData?.developerProperty.enterpriseSize
      ? profileData?.developerProperty.enterpriseSize.toString()
      : undefined,
    personal: profileData?.developerProperty.numberOfStaff
      ? profileData?.developerProperty.numberOfStaff.toString()
      : undefined,
    filial: undefined,
    revenue: profileData?.developerProperty.revenue
      ? profileData?.developerProperty.revenue.toString()
      : undefined,
    net: profileData?.developerProperty.netAssets
      ? profileData?.developerProperty.netAssets.toString()
      : undefined,
    netActive: profileData?.developerProperty.netProfit
      ? profileData?.developerProperty.netProfit.toString()
      : undefined,
    companyRegistered: profileData?.developerProperty.registrationDate
      ? profileData?.developerProperty.registrationDate
      : undefined,
    registeredFrom: profileData?.developerProperty.registrationAuthorityName
      ? profileData?.developerProperty.registrationAuthorityName
      : undefined,
    registeredAdress: profileData?.developerProperty
      .registrationAuthorityAddress
      ? profileData?.developerProperty.registrationAuthorityAddress
      : undefined,
    registeredMember: profileData?.developerProperty.registeringAuthorityLocated
      ? profileData?.developerProperty.registeringAuthorityLocated
      : undefined,
    okved: "",
    okvedAdditional: "",
  });

  return (
    <Scroll height={'510'} >
      <div
        className={styles.formWrapper}
        style={{
          paddingTop: 20,
        }}
      >
        {profileData !== null && (
          <FormController form={form} className={styles.form}>
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
                onChange={(e) => editValueLegalInfo("legalFullName",e.currentTarget.value)}
                value={valueLegalInfo.legalFullName}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Адрес"
                type="text"
                name={"address"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("legalAddress",e.currentTarget.value)}
                value={valueLegalInfo.legalAddress}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Уставный капитал"
                type="text"
                name={"capital"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("authorizedCapital",e.currentTarget.value)}
                value={valueLegalInfo.authorizedCapital}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="ОКФС"
                type="text"
                name={"okfs"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("OKFS",e.currentTarget.value)}
                value={valueLegalInfo.OKFS}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="ОКОПФ"
                type="text"
                name={"okopf"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("OKOPF",e.currentTarget.value)}
                value={valueLegalInfo.OKOPF}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="ОКОГУ"
                type="text"
                name={"okogu"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("OKOPF",e.currentTarget.value)}
                value={valueLegalInfo.OKOPF}
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
                  onChange={(e) => editValueLegalInfo("INN",e.currentTarget.value)}
                  value={valueLegalInfo.INN}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="ОГРН"
                  type="text"
                  name={"ogrn"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("OGRN",e.currentTarget.value)}
                  value={valueLegalInfo.OGRN}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="КПП"
                  type="text"
                  name={"kpp"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("KPP",e.currentTarget.value)}
                  value={valueLegalInfo.KPP}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="ОКАТО"
                  type="text"
                  name={"okato"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("OKATO",e.currentTarget.value)}
                  value={valueLegalInfo.OKATO}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="ОКПО"
                  type="text"
                  name={"okpo"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("OKPO",e.currentTarget.value)}
                  value={valueLegalInfo.OKPO}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="ОКТМО"
                  type="text"
                  name={"oktmo"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("OKTMO",e.currentTarget.value)}
                  value={valueLegalInfo.OKTMO}
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
                onChange={(e) => editValueLegalInfo("status",e.currentTarget.value)}
                value={valueLegalInfo.status}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Руководитель"
                type="text"
                name={"director"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("leaderName",e.currentTarget.value)}
                value={valueLegalInfo.leaderName}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Учредители"
                type="text"
                name={"founder"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("founders",e.currentTarget.value)}
                value={valueLegalInfo.founders}
              />
              <div className={styles.subSection}>
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Размер предприятия"
                  type="text"
                  name={"size"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("enterpriseSize",e.currentTarget.value)}
                  value={valueLegalInfo.enterpriseSize}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Численность персонала"
                  type="text"
                  name={"personal"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("numberOfStaff",e.currentTarget.value)}
                  value={valueLegalInfo.numberOfStaff}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Филиалы"
                  type="text"
                  name={"filial"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("filial",e.currentTarget.value)}
                  value={valueLegalInfo.filial}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Выручка"
                  type="text"
                  name={"revenue"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("revenue",e.currentTarget.value)}
                  value={valueLegalInfo.revenue}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Чистая прибыль"
                  type="text"
                  name={"net"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("netAssets",e.currentTarget.value)}
                  value={valueLegalInfo.netAssets}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="Чистые активы"
                  type="text"
                  name={"netActive"}
                  defaultValue={" "}
                  onChange={(e) => editValueLegalInfo("netProfit",e.currentTarget.value)}
                  value={valueLegalInfo.netProfit}
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
                name={"companyRegistered"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("registrationDate",e.currentTarget.value)}
                value={valueLegalInfo.registrationDate}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Регистрирующий орган"
                type="text"
                name={"registeredFrom"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("registrationAuthorityName",e.currentTarget.value)}
                value={valueLegalInfo.registrationAuthorityName}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Адрес регистрирующего органа"
                type="text"
                name={"registeredAdress"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("registrationAuthorityAddress",e.currentTarget.value)}
                value={valueLegalInfo.registrationAuthorityAddress}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Регистрирующий орган, в котором находится регистрационное дело"
                type="text"
                name={"registeredMember"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("registeringAuthorityLocated",e.currentTarget.value)}
                value={valueLegalInfo.registeringAuthorityLocated}
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
                name={"okved"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("okved",e.currentTarget.value)}
                value={valueLegalInfo.okved}
                disabled
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="Дополнительные виды деятельности"
                type="text"
                name={"okvedAdditional"}
                defaultValue={" "}
                onChange={(e) => editValueLegalInfo("okvedAdditional",e.currentTarget.value)}
                value={valueLegalInfo.okved}
                disabled
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
                  onChange={() => {}}
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
          </FormController>
        )}
      </div>
    </Scroll>
  );
});
