import React, { FC } from "react";
import Link from "next/link";
import css from "./Footer.module.scss";
import classNames from "classnames";
import FooterCopyRight from "../../../../icons/Footer/FooterCopyRight";
import LogoMain from "../../../../icons/Header/LogoMain";
import FaceBook from "../../../../icons/Footer/FaceBook";
import Vk from "../../../../icons/Footer/Vk";
import Twitter from "../../../../icons/Footer/Twitter";
import Youtube from "../../../../icons/Footer/Youtube";
import Typography from "src/components/shared/Typography/Typography";
import { MobileOnly } from "src/components/containers/Adaptive/MobileOnly";
import { DesktopOnly } from "src/components/containers/Adaptive/DesktopOnly";

type FooterPropsType = {
  color: "nude" | "accent";
  className?: string;
};

export const Footer: FC<FooterPropsType> = ({ color, className }) => {
  return (
    <div
      style={{ backgroundColor: `${color === "nude" ? "#C5A28E" : "#1B3243"}` }}
      className={classNames(css.footer, className)}
    >
      <div className={css.container}>
        <div>
          <LogoMain color={"#FCFCFC"} />
          <div className={css.margin}></div>
          <FooterCopyRight />
        </div>
        <div>
          <Typography color={"altWhite"} weight={"medium"}>
            ИНН 7707832969
          </Typography>
          <div className={css.margin}></div>
          <Typography color={"altWhite"} weight={"medium"}>
            ОГРН 1147746472180
          </Typography>
        </div>
        <div>
          <Link href="/">
            <Typography
              className={css.underline}
              color={"nude"}
              weight={"medium"}
            >
              Политика конфиденциальности
            </Typography>
          </Link>
          <div className={css.margin}></div>
          <Link href="/">
            <Typography
              className={css.underline}
              color={"nude"}
              weight={"medium"}
            >
              Пользовательское соглашение
            </Typography>
          </Link>
        </div>
        <MobileOnly></MobileOnly>
        <DesktopOnly></DesktopOnly>
        <div>
          <Typography color={"nude"} weight={"medium"}>
            8 (800) 600-20-94
          </Typography>
          <div className={css.margin}></div>
          <Link href="/">
            <Typography
              className={css.underline}
              color={"nude"}
              weight={"medium"}
            >
              estatum@f-case.ru
            </Typography>
          </Link>
        </div>
        <div className={css.icons}>
          {/*<FaceBook/>*/}
          <Vk />
          {/*<Twitter/>*/}
          <Youtube />
        </div>
      </div>
    </div>
  );
};
