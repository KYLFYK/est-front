import { FC, useState } from "react";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import Link from "next/link";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { AgentForm } from "./AgentForm";

import styles from "./agency.module.scss";

interface Props {}

export const AgentPage: FC<Props> = () => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/"}>
          <a className={styles.link}>
            <BackIcon width={24} height={24} color={"#3D4550"} />
            <span>Редактирование профиля агентства</span>
          </a>
        </Link>
      </div>
      <div className={styles.contentHeader}>
        <span className={styles.title}>DEAL</span>
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
        <AgentForm />
      </div>
    </div>
  );
};
