import {FC, useEffect, useState} from "react";
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
import BaseButton from "../../../../../../../shared/BaseButton/BaseButtons";
import {useRouter} from "next/router";

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
  // form: FormInstance<IAccountForm>;
}

// export const Account: FC<Props> = observer(({ form }) => {
export const Account: FC<Props> = observer(({ }) => {
  const { profileData ,updateAccount} = DeveloperProfileStore;

  const [valueAccount , setValueAccount]=useState<any>({})
  // const [valuePhone, setValuePhone]=useState<any>({})

  const pathDeveloperId = useRouter().query.id as string;
  const editValue = (title:string,value:string) => {
    if(valueAccount[title] === title) {
      valueAccount[title].value = value
    }
    setValueAccount({...valueAccount,[title]:value})
  }
  const saveAccount = async () => {
    await updateAccount(valueAccount,pathDeveloperId)
  }

  useEffect(()=>{
    setValueAccount({
      "name": profileData?.developerProperty.name,
      "type": profileData?.developerProperty.type,
      "address": profileData?.developerProperty.address,
      // "phoneNumber": profileData?.developerProperty.phone[0]    //-
      //       ? profileData?.developerProperty.phone[0].value
      //       : '',
      // "email": profileData?.email,                              //-
      "site": profileData?.developerProperty.site
            ? profileData?.developerProperty.site
            : '',
      "description": profileData?.developerProperty.description, //-
    })
  },[])
  console.log(valueAccount)

  // useEffect(() => {
  //   form.setValues([
  //     {
  //       name: "companyName",
  //       value: profileData?.developerProperty.name,
  //     },
  //     {
  //       name: "developerType",
  //       value: profileData?.developerProperty.type,
  //     },
  //     {
  //       name: "address",
  //       value: profileData?.developerProperty.address,
  //     },
  //     {
  //       name: "phoneNumber",
  //       value: profileData?.developerProperty.phone[0]
  //         ? profileData?.developerProperty.phone[0].value
  //         : undefined,
  //     },
  //     {
  //       name: "email",
  //       value: profileData?.email,
  //     },
  //     {
  //       name: "cite",
  //       value: profileData?.developerProperty.site
  //         ? profileData?.developerProperty.site
  //         : undefined,
  //     },
  //     {
  //       name: "description",
  //       value: profileData?.developerProperty.description,
  //     },
  //   ]);
  // }, []);

  return (
      <Scroll height={'510'} >
        <div
            className={styles.formWrapper}
            style={{padding:"12px 0"}}
        >
          {profileData !== null && (
            <div className={styles.form}>
              {/*<FormController<IAccountForm> form={form}>*/}
                <section>
                  <span className={styles.formSubTitle}>Аккаунт</span>
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Название компании"
                    type="text"
                    // name={"companyName"}
                    name={"name"}
                    defaultValue={" "}
                    // onChange={() => {}}
                    onChange={e=>editValue("name",e.currentTarget.value)}
                    value={valueAccount.name}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Тип застройщика"
                    type="text"
                    // name={"developerType"}
                    name={"type"}
                    defaultValue={" "}
                    onChange={e=>editValue("type",e.currentTarget.value)}
                    value={valueAccount.type}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Адрес"
                    type="text"
                    name={"address"}
                    defaultValue={" "}
                    onChange={e=>editValue("address",e.currentTarget.value)}
                    value={valueAccount.address}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Телефон"
                    type="tel"
                    name={"phoneNumber"}
                    defaultValue={" "}
                    onChange={e=>editValue("phoneNumber",e.currentTarget.value)}
                    value={profileData?.developerProperty.phone[0].value}
                    disabled
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Email"
                    type="email"
                    name={"email"}
                    defaultValue={" "}
                    onChange={e=>editValue("email",e.currentTarget.value)}
                    value={profileData?.email}
                    disabled
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    className={styles.input}
                    errorLabel=""
                    label="Сайт"
                    type="text"
                    name={"site"}
                    defaultValue={" "}
                    onChange={e=>editValue("site",e.currentTarget.value)}
                    value={valueAccount.site}
                  />
                  <BaseInput
                    classNameWrapper={styles.inputWrapper}
                    // classNameWrapper={styles.inputTextAria}
                    className={styles.input}
                    errorLabel=""
                    label="Описание"
                    type="text"
                    name={"description"}
                    defaultValue={profileData?.developerProperty.description}
                    // textArea
                    onChange={e=>editValue("description",e.currentTarget.value)}
                    value={valueAccount.description}
                  />
                </section>
                <BaseButton onClick={saveAccount}>
                  сохранить
                </BaseButton>

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
