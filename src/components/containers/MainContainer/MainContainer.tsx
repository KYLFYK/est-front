import Head from "next/head";
import Header from "../../widget/Header/Header";
import { ScrollUp } from "../../shared/ScrollUp/ScrollUp";
import { Footer } from "../../widget/Footer/ui/Footer";
import classNames from "classnames";
import css from "./MainContainer.module.scss";
type MainContainerType = {
  children?: any;
  keywords?: any;
  title?: any;
  city?: any;
  personalAccount?: any;
  footerColor?: "nude" | "accent";
  refs?: any;
  cabinetStyle?: boolean;
  className?: string;
};
const cityMoc = ['Москва', 'Крым', 'Сочи']

export const MainContainer = ({
  children,
  keywords,
  title,
  city,
  personalAccount,
  footerColor,
  refs,
  cabinetStyle,
  className,
}: MainContainerType) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="%PUBLIC_URL%/LogoIcon.svg"
        />
      </Head>
      <Header city={city ? city : cityMoc} personalAccount={personalAccount} />
      <div className={classNames(cabinetStyle ? css.cabinet : "", className)}>
        {children}
      </div>
      {footerColor && <Footer color={footerColor} />}
    </>
  );
};
