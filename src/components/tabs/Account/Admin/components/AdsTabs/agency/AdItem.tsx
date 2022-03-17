import { FC } from "react";
import Image from "next/image";
import { EditIcon } from "../../../../../../../icons/Edit/EditIcon";
import { Trash } from "../../../../../../../icons/Trash";
import { myLoader } from "../../../../../../../utils/image/image";
import Link from "next/link";
import { ObjectTypes } from "../../../../../../../utils/interfaces/objects";
import { createEditLink } from "../../../../../../../utils/routes/createEditLink";

import styles from "./AgencyTab.module.scss";
import imageStatic from "../../../../../../../Pics/VillaTour.png";
import { AllAdsStore } from "../../../../../../../mobx/role/admin/ads";

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
  image?: string;
  objType?: ObjectTypes;
  objId?: number;
  complexId?: number;
  markedAsDeleted: boolean;
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
  image,
  objId,
  objType,
  complexId,
  markedAsDeleted,
}) => {
  const handleSetDeleted = async () => {
    if (objId !== undefined && objType !== undefined) {
      await AllAdsStore.setMarkAsDeleted(objId, objType, !markedAsDeleted);
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          loader={(e) => myLoader(e.src, e.width, e.quality)}
          src={image ? image : imageStatic}
          alt={""}
          layout={"fill"}
          unoptimized
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
                <span onClick={handleSetDeleted} className={styles.textButton}>
                  {textButton}
                </span>
              ) : (
                <>
                  {objId !== undefined && objType !== undefined && (
                    <Link
                      href={createEditLink("edit", objId, objType, complexId)}
                    >
                      <a>
                        <EditIcon fill={"#3D4550"} className={styles.icon} />
                      </a>
                    </Link>
                  )}
                  <Trash onClick={handleSetDeleted} className={styles.icon} />
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
