import React, { FC } from "react";
import BaseLink from "../../shared/BaseLink/BaseLink";
import { BaseInput } from "../../shared/BaseInput/Input";
import Typography from "src/components/shared/Typography/Typography";
import BaseButton from "../../shared/BaseButton/BaseButtons";

import css from "./SearchOffice.module.scss";
import classNames from "classnames";

interface Props {
  type?: "active" | "archive" | "draft" | "owner";
  hideButton?: boolean;
  placeholder?: string;
  buttonText?: string;
  inputIcon?: JSX.Element | string;
  inputIconPlacement?: "right" | "left";
  className?: string;
  altPadding?: boolean;
  value?: string;
  onChange?: any;
  wrapperClassName?:string
}

export const SearchOffice: FC<Props> = ({
  type = "active",
  hideButton,
  placeholder,
  buttonText,
  inputIcon,
  inputIconPlacement,
  className,
  value,
  onChange,
  wrapperClassName
}) => {
  
  const searchTitle = (type: string) => {
    switch (type) {
      case "archive":
        return "Восстановить все";
      case "draft":
        return "Добавить объект";
      case "active":
        return "Добавить объект";
    }
  };
  const searchColorText = (type: string) => {
    switch (type) {
      case "archive":
        return "nude";
      case "draft":
        return "secondary";
      case "active":
        return "secondary";
    }
  };
  const searchLinkColor = (type: string) => {
    switch (type) {
      case "archive":
        return "primary_light";
      case "draft":
        return "secondary";
      case "active":
        return "secondary";
    }
  };

  return (
    <div className={classNames(css.search,wrapperClassName)}>
      <div className={css.position}>
        <div className={css.inputMargin}>
          <BaseInput
            icon={inputIcon}
            iconPlacement={inputIconPlacement}
            placeholder={placeholder}
            className={className}
            onChange={onChange && onChange}
            value={value && value}
          />
        </div>
        {/*<IconOption />*/}
      </div>
      {type === "archive" ? (
        <BaseButton type={searchLinkColor(type)} isActive>
          {buttonText ? buttonText : searchTitle(type)}
        </BaseButton>
      ) : (
        type !== "owner" &&
        !hideButton && (
          <BaseLink
            href="/ads/new-object"
            // type={type === "active" ? "secondary" : "primary_light"}
            type={searchLinkColor(type)}
            isActive
          >
            <Typography size="small" color={searchColorText(type)}>
              {buttonText ? buttonText : searchTitle(type)}
            </Typography>
          </BaseLink>
        )
      )}
    </div>
  );
};
