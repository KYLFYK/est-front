import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { OwnerForm } from "./OwnerForm";
import { AdminOwnerProfileStore } from "../../../../../../../mobx/role/admin/profiles/owner";
import { observer } from "mobx-react-lite";

import styles from "../agency/agency.module.scss";

export const OwnerPage: FC = observer(() => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);
  const { loaded, errorOnLoad, loadProfileInfo, profileData } =
    AdminOwnerProfileStore;

  useEffect(() => {
    if (!loaded && !errorOnLoad) {
      loadProfileInfo();
    }
  }, [loaded, errorOnLoad, loadProfileInfo]);

  return profileData !== null ? (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/cabinet"}>
          <a className={styles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование профиля собственника</span>
          </a>
        </Link>
      </div>
      <div className={styles.contentHeader}>
        <span className={styles.title}>Иван Иванов</span>
        {haveUnsaved && (
          <div className={styles.rightSide}>
            <span className={styles.unsaved}>Есть несохранённые изменения</span>
            <BaseButton
              onClick={() => {
                setUnsaved(false);
              }}
              type={"secondary"}
              isActive
            >
              Сохранить
            </BaseButton>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <OwnerForm />
      </div>
    </div>
  ) : (
    <></>
  );
});
