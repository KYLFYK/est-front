import { FC, useState } from "react";
import styles from "../agency/agency.module.scss";
import Link from "next/link";
import { BackIcon } from "../../../../../../../icons/BackIcon";
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import { OwnerForm } from "./OwnerForm";

export const OwnerPage: FC = () => {
  const [haveUnsaved, setUnsaved] = useState<boolean>(true);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.header}>
        <Link href={"/"}>
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
  );
};
