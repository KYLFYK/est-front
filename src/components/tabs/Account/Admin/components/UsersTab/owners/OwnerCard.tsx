import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash } from "../../../../../../../icons/Trash";

import styles from "./OwnerCard.module.scss";
import { myLoader } from "../../../../../../../utils/image/image";

interface Props {
  avatar: StaticImageData;
  name: string;
  id: string;
  email: string;
  phone: string;
  hrefPrefix: string;
}

export const OwnerCard: FC<Props> = ({
  avatar,
  email,
  phone,
  name,
  id,
  hrefPrefix,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link
        href={{
          pathname: `${hrefPrefix ? hrefPrefix : "/owners/"}[postId]`,
          query: { postId: id },
        }}
      >
        <a className={styles.image}>
          <Image
            loader={(e) => myLoader(e.src, e.width, e.quality)}
            src={avatar}
            alt={""}
            width={80}
            height={80}
          />
        </a>
      </Link>
      <div className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.des}>{email}</span>
        <span className={styles.des}>{phone}</span>
        <div className={styles.button}>
          <Trash />
        </div>
      </div>
    </div>
  );
};
