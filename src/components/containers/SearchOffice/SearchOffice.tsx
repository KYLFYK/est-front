import React, { FC } from "react";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { BaseInput } from "../../shared/BaseInput/Input";
import { IconOption } from "../../../icons/SearchOffice/IconOption";

import css from "./SearchOffice.module.scss";

interface Props {
  type?: "active" | "archive" | "draft" | "owner";
  hideButton?: boolean;
  placeholder?: string;
}

export const SearchOffice: FC<Props> = ({ type, hideButton, placeholder }) => {
  // const [value,setValue]=useState<string>('')

  return (
    <div className={css.search}>
      <div className={css.position}>
        <div className={css.inputMargin}>
          <BaseInput placeholder={placeholder} />
        </div>
        <IconOption />
      </div>
      {type !== "owner" && !hideButton && (
        <BaseButton
          type={type !== "archive" ? "secondary" : "primary_light"}
          isActive
          className={css.textButton}
        >
          {type !== "archive" ? "Добавить объект" : "Восстановить все"}
        </BaseButton>
      )}
    </div>
  );
};
