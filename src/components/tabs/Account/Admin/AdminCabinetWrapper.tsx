import React, { FC } from "react";
import css from "../../../shared/VerticalTabs/VerticalTabs.module.scss";
import { useRouter } from "next/router";
import Typography from "../../../shared/Typography/Typography";
import Link from "next/link";
import { MainContainer } from "../../../containers/MainContainer/MainContainer";
import "moment/locale/ru";

interface LinkProps {
  href: string;
  additionalPaths?: string[];
}

export const ActiveLink: FC<LinkProps> = ({
  href,
  children,
  additionalPaths,
}) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a
        className={css.menuItem}
        style={{
          color:
            asPath === href ||
            additionalPaths?.includes(`/${asPath.split("/", 2)[1]}`) ||
            additionalPaths?.includes(`/${asPath.split("/")[2]}`) ||
            asPath.indexOf(href.split("/")[1]) > -1
              ? "#C5A28E"
              : "",
        }}
      >
        <Typography
          size={"default"}
          color={
            asPath === href ||
            additionalPaths?.includes(`/${asPath.split("/", 2)[1]}`) ||
            additionalPaths?.includes(`/${asPath.split("/")[2]}`) ||
            asPath.indexOf(href.split("/")[1]) > -1
              ? "nude"
              : "tertiary"
          }
          weight="bold"
        >
          {children}
        </Typography>
      </a>
    </Link>
  );
};

export const AdminCabinetWrapper: FC = ({ children }) => {
  return (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      <div className={css.body}>
        <div className={css.menu}>
          <ActiveLink
            additionalPaths={["/agencies", "/owners", "/developers"]}
            href={"/cabinet"}
          >
            Пользователи
          </ActiveLink>
          <ActiveLink href={"/ads"}>Объявления</ActiveLink>
          <ActiveLink href={"/messages"}>Сообщения</ActiveLink>
          <ActiveLink href={"/editing"}>Редактирование</ActiveLink>
        </div>
        <div className={css.information}>{children}</div>
      </div>
    </MainContainer>
  );
};
