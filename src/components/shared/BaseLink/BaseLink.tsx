import classNames from "classnames";
import Link from 'next/link';
import { IPropsGeneral } from "../../../utils/interfaces/general";
import s from "./BaseLink.module.scss";

export type TBaseButtonType =
  | "primary"
  | "secondary"
  | "blank"
  | "tags"
  | "primary_light"
  | "toggleButtonWithIcons";
interface Props extends IPropsGeneral {
  href: string;
  type?: TBaseButtonType;
  icon?: JSX.Element | string;
  iconActive?: JSX.Element | string;
  isActive?: boolean;
  iconPosition?: "start" | "end";
  buttonHTMLType?: "button" | "submit" | "reset";
}

interface IStyles {
  baseLink: string;
  primary: string;
  secondary: string;
  blank: string;
  iconWrapper: string;
  iconSpace: string;
  active: string;
  [key: string]: string;
}

const BaseLink: React.FC<Props> = ({
  children,
  href,
  type = "blank",
  className,
  icon,
  iconActive,
  isActive,
  iconPosition = "end",
}) => {
  const styles = s as IStyles;
  return (
    <Link href={href} passHref>
      <div className={classNames(
        styles.baseLink,
        styles[type],
        isActive && styles.active,
        className
      )}>
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
      </div>
    </Link>
  );
};

export default BaseLink;
