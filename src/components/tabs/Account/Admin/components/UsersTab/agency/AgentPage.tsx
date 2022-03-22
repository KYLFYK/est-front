import { FC, useEffect, useState } from "react";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import Link from "next/link";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { AgentForm } from "./AgentForm";
import { observer } from "mobx-react-lite";
import { AgentProfileStore } from "../../../../../../../mobx/role/admin/profiles/agency";

import styles from "./agency.module.scss";

interface Props {
  id: string;
}

export const AgentPage: FC<Props> = observer(({ id }) => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);
  const { loaded, errorOnLoad, profile, uploadProfile } = AgentProfileStore;

  useEffect(() => {
    if ((!loaded && !errorOnLoad) || (profile?.id !== id && !errorOnLoad)) {
      uploadProfile(id);
    }
  }, [loaded, errorOnLoad, uploadProfile, id, profile]);

  return profile !== null && profile.id === id ? (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/cabinet"}>
          <a className={styles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование профиля агентства</span>
          </a>
        </Link>
      </div>
      <div className={styles.contentHeader}>
        <span className={styles.title}>{profile.agencyName}</span>
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
        <AgentForm profile={profile} />
      </div>
    </div>
  ) : (
    <>Loading profile</>
  );
});
