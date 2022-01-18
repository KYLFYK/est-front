import { FC } from "react";
import Image from "next/image";
import { Trash } from "../../../../../../../icons/Trash";
import Link from "next/link";

import cardImage from "../../../../../../../Pics/card-images/dealCard.jpg";
import styles from "./agency.module.scss";

interface Props {
  imgUrl?: string;
  title: string;
  description: string;
  description2?: string;
  id: string;
}

export const AgentCard: FC<Props> = ({
  title,
  imgUrl,
  description,
  id,
  description2,
}) => {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: "/agency/[postId]",
          query: { postId: id },
        }}
        replace
      >
        <a className={styles.cardImage}>
          <Image
            src={imgUrl ? imgUrl : cardImage}
            layout={"fill"}
            alt={"Логотип агенства"}
          />
        </a>
      </Link>
      <div className={styles.cardContent}>
        <div className={styles.head}>
          <span className={styles.title}>{title}</span>
          <Trash className={styles.icon} />
        </div>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
      </div>
    </div>
  );
};
