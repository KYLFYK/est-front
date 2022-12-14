import { FC, useState } from "react";
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

  const { profileData } = DeveloperProfileStore;

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
    <Scroll height={'530'} >
      <div
        className={styles.formWrapper}
        style={{
          paddingTop: 20,
        }}
      >
        {profileData !== null && (
          <FormController form={form} className={styles.form}>
            <section>
              <span className={styles.formSubTitle}>??????????????????</span>
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????? ???????????????? ??????????????????????"
                type="text"
                name={"fullCompanyName"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="??????????"
                type="text"
                name={"address"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????????? ??????????????"
                type="text"
                name={"capital"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="????????"
                type="text"
                name={"okfs"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="??????????"
                type="text"
                name={"okopf"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="??????????"
                type="text"
                name={"okogu"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <div className={styles.subSection}>
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="??????"
                  type="text"
                  name={"inn"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="????????"
                  type="text"
                  name={"ogrn"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="??????"
                  type="text"
                  name={"kpp"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="??????????"
                  type="text"
                  name={"okato"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="????????"
                  type="text"
                  name={"okpo"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.smallWrapper}
                  className={styles.small}
                  errorLabel=""
                  label="??????????"
                  type="text"
                  name={"oktmo"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
              </div>
            </section>
            <section>
              <span className={styles.formSubTitle}>???????????????????? ?? ????????????????</span>
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????? ????????????????"
                type="text"
                name={"companyStatus"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="????????????????????????"
                type="text"
                name={"director"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="????????????????????"
                type="text"
                name={"founder"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <div className={styles.subSection}>
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="???????????? ??????????????????????"
                  type="text"
                  name={"size"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="?????????????????????? ??????????????????"
                  type="text"
                  name={"personal"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="??????????????"
                  type="text"
                  name={"filial"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="??????????????"
                  type="text"
                  name={"revenue"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="???????????? ??????????????"
                  type="text"
                  name={"net"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
                <BaseInput
                  classNameWrapper={styles.mediumWrapper}
                  className={styles.medium}
                  errorLabel=""
                  label="???????????? ????????????"
                  type="text"
                  name={"netActive"}
                  defaultValue={" "}
                  onChange={() => {}}
                />
              </div>
            </section>
            <section className={styles.vertical}>
              <span className={styles.formSubTitle}>
                ???????????????? ?? ?????????????????????????????? ??????????????????????
              </span>
              <BaseInput
                classNameWrapper={styles.mediumWrapper}
                className={styles.medium}
                errorLabel=""
                label="???????? ??????????????????????"
                type="text"
                name={"companyRegistered"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????????????????????? ??????????"
                type="text"
                name={"registeredFrom"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="?????????? ?????????????????????????????? ????????????"
                type="text"
                name={"registeredAdress"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????????????????????? ??????????, ?? ?????????????? ?????????????????? ?????????????????????????????? ????????"
                type="text"
                name={"registeredMember"}
                defaultValue={" "}
                onChange={() => {}}
              />
            </section>
            <section className={styles.vertical}>
              <span className={styles.formSubTitle}>???????? ????????????????????????</span>
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????????? ?????? ???????????????????????? ???? ??????????"
                type="text"
                name={"okved"}
                defaultValue={" "}
                onChange={() => {}}
              />
              <BaseInput
                classNameWrapper={styles.largeWrapper}
                className={styles.large}
                errorLabel=""
                label="???????????????????????????? ???????? ????????????????????????"
                type="text"
                name={"okvedAdditional"}
                defaultValue={" "}
                onChange={() => {}}
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
                + ???????????????? ?????? ????????????????????????
              </span>
            </section>
          </FormController>
        )}
      </div>
    </Scroll>
  );
});
