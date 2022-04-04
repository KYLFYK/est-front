import { FC, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { HorizontalTabs } from "../../../../../../shared/HorizontalTabs/HorizontalTabs";
import { Account, IAccountForm } from "./tabs/Account";
import { LegalInfo } from "./tabs/LegalInfo";
import { SMI } from "./tabs/SMI";
import { Statistics } from "./tabs/Statistics";
import { Risk } from "./tabs/Risk";
import { Settings } from "./tabs/Settings";
import { DeveloperProfileStore } from "../../../../../../../mobx/role/admin/profiles/developer";
import { observer } from "mobx-react-lite";
import { useForm } from "../../../../../../containers/FormController";

import styles from "../agency/agency.module.scss";

export const DeveloperPage: FC = observer(() => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);

  const pathDeveloperId = useRouter().query.id as string;

  const {
    loadProfileInfo,
    errorOnLoad,
    profileData,
    loaded,
    developerId,
    changeProfileInfo,
  } = DeveloperProfileStore;

  const [accountForm] = useForm<IAccountForm>({
    companyName: profileData?.developerProperty.name,
    developerType: profileData?.developerProperty.type,
    address: profileData?.developerProperty.address,
    phoneNumber: profileData?.developerProperty.phone[0]
      ? profileData?.developerProperty.phone[0].value
      : undefined,
    email: profileData?.email,
    cite: profileData?.developerProperty.site
      ? profileData?.developerProperty.site
      : undefined,
    description: profileData?.developerProperty.description,
  });

  useEffect(() => {
    if ((!loaded && !errorOnLoad) || developerId !== pathDeveloperId) {
      loadProfileInfo(pathDeveloperId);
    }
  }, [loaded, errorOnLoad, loadProfileInfo, developerId]);

  useEffect(() => {
    if (loaded && developerId === pathDeveloperId) {
      accountForm.setValues([
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
    }
  }, [loaded, errorOnLoad, loadProfileInfo, developerId]);

  const handleChangeData = useCallback(() => {
    const accountData = accountForm.getValues();

    if (profileData !== null) {
      changeProfileInfo({
        ...profileData.developerProperty,
        name: accountData.companyName as any,
        type: accountData.developerType as any,
        address: accountData.address as any,
        site: accountData.companyName as any,
        description: accountData.companyName as any,
        phone: [
          {
            value: accountData.phoneNumber as any,
            ord: 0,
          },
        ],
      });

      setUnsaved(false);
    }
  }, [accountForm, profileData]);

  return profileData !== null ? (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/cabinet"}>
          <a className={styles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование профиля застройщика</span>
          </a>
        </Link>
      </div>
      <div className={`${styles.contentHeader} ${styles.littleMargin}`}>
        <span className={styles.title}>
          {profileData.developerProperty.name}
        </span>
        {haveUnsaved && (
          <div className={styles.rightSide}>
            <span className={styles.unsaved}>Есть несохранённые изменения</span>
            <BaseButton
              onClick={() => {
                handleChangeData();
              }}
              type={"secondary"}
              isActive
            >
              Сохранить
            </BaseButton>
          </div>
        )}
      </div>
      <div className={styles.tabsWrapper}>
        <HorizontalTabs
          wrapperClassName={styles.tabs}
          tabs={[
            {
              title: "Аккаунт",
              Component: <Account form={accountForm} />,
            },
            {
              title: "Юридические сведения",
              Component: <LegalInfo />,
            },
            {
              title: "СМИ о застройщике",
              Component: <SMI />,
            },
            {
              title: "Статистика",
              Component: <Statistics />,
            },
            {
              title: "Риски",
              Component: <Risk />,
            },
            {
              title: "Настройки",
              Component: <Settings />,
            },
          ]}
        />
      </div>
    </div>
  ) : (
    <></>
  );
});
