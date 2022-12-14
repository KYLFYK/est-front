import { FC } from "react";
import Image from "next/image";
import { Trash } from "../../../../../../../icons/Trash";
import Link from "next/link";
import { myLoader } from "../../../../../../../utils/image/image";
import RestoreSharpIcon from '@mui/icons-material/RestoreSharp';
import cardImage from "../../../../../../../Pics/card-images/dealCard.jpg";
import styles from "./agency.module.scss";

interface Props {
  imgUrl?: string;
  title: string;
  description: string;
  description2?: string;
  hrefPrefix?: string;
  id: string | number;
  markAsDeleted?: boolean;
  handleDelete?: (id: number) => void;
  handleRestore?: (id: number) => void;
}

export const AgentCard: FC<Props> = ({
  title,
  imgUrl,
  description,
  id,
  description2,
  hrefPrefix,
  markAsDeleted,
  handleDelete,
  handleRestore,
}) => {
  return (
    <div className={styles.card}>
      <Link
        href={{
          pathname: `${hrefPrefix ? hrefPrefix : "/agencies/"}[postId]`,
          query: { postId: id },
        }}
        replace
      >
        <a className={styles.cardImage}>
          <Image
            loader={(e) => {
              return imgUrl ? imgUrl : myLoader(e.src, e.width, e.quality);
            }}
            src={imgUrl ? imgUrl : cardImage}
            layout={"fill"}
            alt={"Логотип"}
            unoptimized
          />
        </a>
      </Link>
      <div className={styles.cardContent}>
        <div className={styles.head}>
          <span className={styles.title} title={title}>
              {title}
          </span>
          {markAsDeleted ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                onClick={() => {
                  if (handleRestore) {
                    handleRestore(id as number);
                  }
                }}
                className={styles.restore}
              >
                <RestoreSharpIcon/>
              </span>
            </div>
          ) : (
            <Trash
              onClick={() => {
                if (handleDelete) {
                  handleDelete(id as number);
                }
              }}
              className={styles.icon}
            />
          )}
        </div>
        <p>{description}</p>
        {description2 && <p>{description2}</p>}
      </div>
    </div>
  );
};
