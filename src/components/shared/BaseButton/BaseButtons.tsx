import classNames from "classnames";
import { IPropsGeneral } from "../../../utils/interfaces/general";
import s from "./BaseButtons.module.scss";
import { FC } from "react";

export type TBaseButtonType =
  | "primary"
  | "secondary"
  | "blank"
  | "tags"
  | "primary_light"
  | "toggleButtonWithIcons"
  | "danger";
interface Props extends IPropsGeneral {
  type?: TBaseButtonType;
  icon?: JSX.Element | string;
  iconActive?: JSX.Element | string;
  isActive?: boolean;
  iconPosition?: "start" | "end";
  buttonHTMLType?: "button" | "submit" | "reset";
}

interface IStyles {
  basebutton: string;
  primary: string;
  secondary: string;
  blank: string;
  iconWrapper: string;
  iconSpace: string;
  active: string;
  [key: string]: string;
}

const BaseButton: FC<Props> = ({
  children,
  type = "blank",
  className,
  icon,
  iconActive,
  isActive,
  iconPosition = "end",
  onClick,
  buttonHTMLType,
}) => {
  const styles = s as IStyles;
  return (
    <button
      type={buttonHTMLType}
      onClick={onClick}
      className={classNames(
        styles.basebutton,
        styles[type],
        isActive && styles.active,
        className
      )}
    >
      {((icon && iconPosition === "start") || iconActive) && (
        <span
          className={classNames(
            { [styles.iconSpace]: children },
            styles.iconWrapper,
            styles.startIcon
          )}
        >
          {isActive && iconActive ? iconActive : icon}
        </span>
      )}
      {children}
      {((icon && iconPosition === "end") || iconActive) && (
        <span
          className={classNames(
            { [styles.iconSpace]: children },
            styles.iconWrapper
          )}
        >
          {isActive && iconActive ? iconActive : icon}
        </span>
      )}
    </button>
  );
};

export default BaseButton;
