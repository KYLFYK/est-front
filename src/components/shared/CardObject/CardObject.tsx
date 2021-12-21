import React, { FC, ReactNode } from "react";
import Image from "next/image";
import css from "./CardObject.module.scss";

type CardObjectType = {
  children: ReactNode;
  img: string;
  className?:string
};

const CardObject: FC<CardObjectType> = ({ children, img,className }) => {
  return (
    <div className={css.card}>
      <Image
        src={img}
        height={"126px"}
        width={"229px"}
        className={css.image}
        alt={"photo"}
      />
      <div style={{ width: "100%" }} className={className}>{children}</div>
    </div>
  );
};

export default CardObject;
