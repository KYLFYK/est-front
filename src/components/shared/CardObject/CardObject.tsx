import React, { FC, ReactNode, useCallback } from "react";
import Image, { ImageLoaderProps } from "next/image";
import css from "./CardObject.module.scss";
import { myLoader } from "../../../utils/image/image";

type CardObjectType = {
  children: ReactNode;
  img: any;
  className?: string;
};

const CardObject: FC<CardObjectType> = ({ children, img, className }) => {
  const loaderResult = useCallback(
    (e: ImageLoaderProps) => {
      // @ts-ignore
      if (img.src) {
        return myLoader(e.src, e.width, e.quality);
      } else return img;
    },
    [img]
  );

  return (
    <div className={css.card}>
      <Image
        src={img}
        height={"126px"}
        width={"229px"}
        className={css.image}
        alt={"photo"}
        loader={loaderResult}
      />
      <div style={{ width: "100%" }} className={className}>
        {children}
      </div>
    </div>
  );
};

export default CardObject;
