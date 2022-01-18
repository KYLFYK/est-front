import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash } from "../../../../../../../icons/Trash";

import styles from "./OwnerCard.module.scss";

interface Props {
  avatar: StaticImageData;
  name: string;
  link: string;
  email: string;
  phone: string;
}

export const OwnerCard: FC<Props> = ({ avatar, email, phone, name, link }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={avatar} alt={""} width={80} height={80} />
      </div>
      <div className={styles.content}>
        <Link href={link}>
          <a className={styles.name}>{name}</a>
        </Link>
        <span className={styles.des}>{email}</span>
        <span className={styles.des}>{phone}</span>
        <div className={styles.button}>
          <Trash />
        </div>
      </div>
    </div>
  );
};
