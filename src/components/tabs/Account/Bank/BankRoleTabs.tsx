import React, { FC } from "react";
import { MainContainer } from "../../../containers/MainContainer/MainContainer";
import { ActiveLink } from "../Admin/AdminCabinetWrapper";

import css from "../../../shared/VerticalTabs/VerticalTabs.module.scss";

export const BankRoleTabs: FC = ({ children }) => {
  return (
    <MainContainer footerColor={"accent"} cabinetStyle={true}>
      <div className={css.body}>
        <div className={css.menu}>
          <ActiveLink additionalPaths={["/edit"]} href={"/cabinet"}>
            Личный кабинет
          </ActiveLink>
          <ActiveLink href={"/mortgage-orders"}>Заявки на ипотеку</ActiveLink>
        </div>
        <div className={css.information}>{children}</div>
      </div>
    </MainContainer>
  );
};
