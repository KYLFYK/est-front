import { FC } from "react";
import { AvatarSection } from "../../../../../shared/AvatarSection";
import { ProfileForm } from "./ProfileForm";

import styles from "./Account.module.scss";

export const Account: FC = () => {
  return (
    <div className={styles.wrapper}>
      <AvatarSection
        src={
          "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
        }
        changeable
      />
      <ProfileForm />
    </div>
  );
};
