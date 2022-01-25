import { FC } from "react";
import Image from "next/image";
import { EditIcon } from "../../../../../../../icons/Edit/EditIcon";
import { Trash } from "../../../../../../../icons/Trash";

import styles from "./AgencyTab.module.scss";
import image from "../../../../../../../Pics/VillaTour.png";
import { myLoader } from "../../../../../../../utils/image/image";

export interface IObject {
  name: string;
  address: string;
  textButton?: string;
  additionalSmall?: boolean;
  altHeadKeys?: boolean;
  footerMainElems?: {
    key: string;
    value: string | number;
  }[];
  footerElems?: {
    key: string;
    value: string;
  }[];
  headerElems?: {
    key: string;
    value: string;
  }[];
  footerButton?: string;
}

interface Props extends IObject {
  any?: string;
}

export const AdItem: FC<Props> = ({
  textButton,
  additionalSmall,
  altHeadKeys,
  footerElems,
  headerElems,
  footerMainElems,
  name,
  address,
  footerButton,
}) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          loader={(e) => myLoader(e.src, e.width, e.quality)}
          src={image}
          alt={""}
          layout={"fill"}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div
            className={`${styles.mainInfo}${
              additionalSmall ? ` ${styles.lg}` : ""
            }`}
          >
            <span className={styles.name}>{name}</span>
            <div>
              <span className={styles.key}>Адрес: </span>
              <span className={styles.value}>{address}</span>
            </div>
          </div>
          <div
            className={`${styles.additionalInfo}${
              additionalSmall ? ` ${styles.sm}` : ""
            }`}
          >
            {headerElems && (
              <div
                className={`${styles.keys}${
                  altHeadKeys ? ` ${styles.alt}` : ""
                }`}
              >
                {headerElems.map((el, index) => (
                  <div key={index}>
                    <span className={styles.key}>{el.key} </span>
                    <span className={styles.value}>{el.value}</span>
                  </div>
                ))}
              </div>
            )}
            <div className={styles.buttons}>
              {textButton ? (
                <span className={styles.textButton}>{textButton}</span>
              ) : (
                <>
                  <EditIcon fill={"#3D4550"} className={styles.icon} />
                  <Trash className={styles.icon} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.keys}>
            {footerMainElems?.map((el, index) => (
              <div className={styles.elem} key={index}>
                <span className={styles.key}>{el.key}</span>
                <span className={styles.value}>{el.value}</span>
              </div>
            ))}
          </div>
          {footerElems && (
            <div className={styles.footerInfo}>
              {footerElems.map((el, index) => (
                <div key={index} className={styles.infoElem}>
                  <span className={styles.key}>{el.key} </span>
                  <span className={styles.value}>{el.value}</span>
                </div>
              ))}
            </div>
          )}
          {footerButton && (
            <div className={styles.footerBtn}>
              <span className={styles.btn}>{footerButton}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
