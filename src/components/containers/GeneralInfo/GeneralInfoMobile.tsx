import { FC, useMemo } from "react";
import { observer } from "mobx-react-lite";
import { IOption } from "../../../utils/interfaces/general";
import { IMAGES_SET } from "./config";
import Image from "next/image";
import { myLoader } from "../../../utils/image/image";

import styles from "./GeneralInfo.mobile.module.scss";

interface Props {
  images: string[] | { url: string; id: number }[];
  price?: number;
  info: IOption[];
  classSlider?: string;
}

export const GeneralInfoMobile: FC<Props> = observer(({ images, info }) => {
  const imagesUrl = useMemo(
    () =>
      images.length === 0
        ? IMAGES_SET
        : images.map((i: any) =>
            i.url && i.url.includes("public") ? IMAGES_SET[0] : i.url || i
          ),
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.images}>
        {imagesUrl.map((el, index) =>
          index <= 3 ? (
            <div key={el} className={styles.image}>
              <Image
                unoptimized
                layout={"fill"}
                objectFit={"cover"}
                loader={(e) => myLoader(e.src, e.width, e.quality)}
                src={el}
                alt={"Image"}
                className={styles.img}
              />
            </div>
          ) : null
        )}
      </div>
      <div className={styles.description}>
        {info.map((el, index) =>
          el.value !== "" && el.value !== null ? (
            <div className={styles.descriptionItem} key={index}>
              <div className={styles.descriptionSub}>
                <span className={styles.subTitle}>{el.label}</span>
                <span className={styles.text}>{el.value}</span>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
});
