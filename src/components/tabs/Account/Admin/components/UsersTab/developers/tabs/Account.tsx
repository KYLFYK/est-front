import { FC, useEffect } from "react";
import { BaseInput } from "../../../../../../../shared/BaseInput/Input";
import { AvatarSection } from "../../../../../../../shared/AvatarSection";
import { DeveloperProfileStore } from "../../../../../../../../mobx/role/admin/profiles/developer";
import {
  FormController,
  FormInstance,
} from "../../../../../../../containers/FormController";
import { observer } from "mobx-react";

import styles from "../../agency/agency.module.scss";
import dealImg from "../../../../../../../../Pics/card-images/dealCard.jpg";
import {ScrollUp} from "../../../../../../../shared/ScrollUp/ScrollUp";
import Scroll from "../../../../../../../shared/Scroll/Scroll";

export interface IAccountForm {
  companyName?: string;
  developerType?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  cite?: string;
  description?: string;
}

interface Props {
  form: FormInstance<IAccountForm>;
}

export const Account: FC<Props> = observer(({ form }) => {
  const { profileData } = DeveloperProfileStore;

  useEffect(() => {
    form.setValues([
      {
        name: "companyName",
        value: profileData?.developerProperty.name,
      },
      {
        name: "developerType",
        value: profileData?.developerProperty.type,
      },
      {
        name: "address",
        value: profileData?.developerProperty.address,
      },
      {
        name: "phoneNumber",
        value: profileData?.developerProperty.phone[0]
          ? profileData?.developerProperty.phone[0].value
          : undefined,
      },
      {
        name: "email",
        value: profileData?.email,
      },
      {
        name: "cite",
        value: profileData?.developerProperty.site
          ? profileData?.developerProperty.site
          : undefined,
      },
      {
        name: "description",
        value: profileData?.developerProperty.description,
      },
    ]);
  }, [profileData]);

  console.log(JSON.parse(JSON.stringify(profileData)))

  return (
      <Scroll height={'510'} >
        <div
            className={styles.formWrapper}
            style={{padding:"12px 0"}}
        >
          {profileData !== null && (
            <div className={styles.form}>
              <FormController<IAccountForm> form={form}>
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
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Тип застройщика"
                    type="text"
                    name={"developerType"}
                    defaultValue={" "}
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Адрес"
                    type="text"
                    name={"address"}
                    defaultValue={" "}
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Телефон"
                    type="tel"
                    name={"phoneNumber"}
                    defaultValue={" "}
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Email"
                    type="email"
                    name={"email"}
                    defaultValue={" "}
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Сайт"
                    type="text"
                    name={"cite"}
                    defaultValue={" "}
                    onChange={() => {}}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Описание"
                    type="text"
                    name={"description"}
                    defaultValue={" "}
                    textArea
                    onChange={() => {}}
                  />
                </section>
              </FormController>
            </div>
          )}
          {profileData !== null && (
            <AvatarSection
              src={
                profileData.developerProperty.logo
                  ? profileData.developerProperty.logo
                  : dealImg
              }
              changeable
            />
          )}
        </div>
      </Scroll>
  );
});
