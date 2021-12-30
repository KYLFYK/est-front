import React, { FC } from "react";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import BaseLink from "../../shared/BaseLink/BaseLink";
import { BaseInput } from "../../shared/BaseInput/Input";
import { IconOption } from "../../../icons/SearchOffice/IconOption";

import css from "./SearchOffice.module.scss";
import Typography from "src/components/shared/Typography/Typography";

interface Props {
  type?: "active" | "archive" | "draft" | "owner";
  hideButton?: boolean;
  placeholder?: string;
}

export const SearchOffice: FC<Props> = ({ type = 'active', hideButton, placeholder }) => {
  
  const searchTitle = (type:string) =>{
    switch(type){
      case 'archive':return "Восстановить все"
      case 'draft':return "Добавить объект"
      case 'active':return "Добавить объект"
    }
  }

  return (
    <div className={css.search}>
      <div className={css.position}>
        <div className={css.inputMargin}>
          <BaseInput placeholder={placeholder} />
        </div>
        <IconOption />
      </div>
      {type !== "owner" && !hideButton && (
        <BaseLink
          href="/ads/new-object"
          type={type === "active" ? "secondary" : "primary_light"}
          isActive
        >
          <Typography size="small">
            {
              searchTitle(type)
            }
          </Typography>
        </BaseLink>
      )}
    </div>
  );
};
