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
      id={"contact"}
      style={{ backgroundColor: `${color === "nude" ? "#C5A28E" : "#1B3243"}` }}
      className={classNames(css.footer, className)}
    >
      <div className={css.container}>
        <div style={{ width: "176px" }}>
          <LogoMain color={"#FCFCFC"} />
          <div className={css.margin}></div>
          <FooterCopyRight />
        </div>
        <div className={css.padding_5}>
          <Typography color={"altWhite"} weight={"medium"}>
            ИНН 7707832969
          </Typography>
          <div className={css.margin}></div>
          <Typography color={"altWhite"} weight={"medium"}>
            ОГРН 1147746472180
          </Typography>
        </div>
        <div>
          <Link href="https://estatum.f-case.ru/models/Policy.pdf">
            <a
              href="https://estatum.f-case.ru/models/Policy.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              <Typography
                className={css.underline}
                color={"nude"}
                weight={"medium"}
              >
                Политика конфиденциальности
              </Typography>
            </a>
          </Link>
          <div className={css.margin}></div>
          <Link href="https://estatum.f-case.ru/models/UserAgreement.pdf">
            <a
              href="https://estatum.f-case.ru/models/UserAgreement.pdf"
              target={"_blank"}
              rel="noreferrer"
            >
              <Typography
                className={css.underline}
                color={"nude"}
                weight={"medium"}
              >
                Пользовательское соглашение
              </Typography>
            </a>
          </Link>
        </div>
        <MobileOnly></MobileOnly>
        <DesktopOnly></DesktopOnly>
        <div>
          <Typography color={"nude"} weight={"medium"}>
            8 (800) 600-20-94
          </Typography>
          <div className={css.margin}></div>
          <Link href="mailto:estatum@f-case.ru">
            <a href="mailto:estatum@f-case.ru">
              <Typography
                className={css.underline}
                color={"nude"}
                weight={"medium"}
              >
                estatum@f-case.ru
              </Typography>
            </a>
          </Link>
        </div>
        <div className={css.icons}>
          {/*<FaceBook/>*/}
          <Link href="https://vk.com/estatum_re">
            <a
              href="https://vk.com/estatum_re"
              target={"_blank"}
              rel="noreferrer"
            >
              <Vk />
            </a>
          </Link>
          {/*<Twitter/>*/}
          <Link href="https://www.youtube.com/channel/UC5Xs06qv6uI3ty2dvaAhSPA/featured">
            <a
                href="https://www.youtube.com/channel/UC5Xs06qv6uI3ty2dvaAhSPA/featured"
                target={'_blank'}
                rel="noreferrer"
            >
              <Youtube />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
