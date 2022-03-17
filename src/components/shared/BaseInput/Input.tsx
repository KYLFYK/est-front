import classNames from "classnames";
import React from "react";
import Typography from "../Typography/Typography";
import s from "./Input.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: JSX.Element | string;
  label?: string;
  classNameWrapper?: string;
  isError?: boolean;
  errorLabel?: string;
  iconPlacement?: "right" | "left";
  textArea?: boolean;
  iconClassName?: string;
  altPadding?: boolean;
  iconOnClick?: () => void;
}

export const BaseInput: React.FC<Props> = ({
  className = "",
  icon,
  label,
  classNameWrapper,
  isError,
  errorLabel = "Поле должно быть заполнено",
  iconPlacement,
  textArea,
  iconClassName,
  iconOnClick,
  ...props
}) => {
  
  return (
    <div className={classNameWrapper}>
      {label && (
        <Typography className={`${s.label}${textArea ? ` ${s.textArea}` : ""}`}>
          {label}
        </Typography>
      )}
      <div
        className={`${s.wrapper}${
          iconPlacement === "right" ? ` ${s.altIcon}` : ""
        }${textArea ? ` ${s.textAreaWrapper}` : ""}`}
      >
        {iconPlacement === "right" && icon && (
          <span className={s.icon}>{icon}</span>
        )}
        {textArea ? (
          <textarea
            className={classNames(
              s.input,
              { [s.iconPadding]: !!icon },
              className,
              s.textArea
            )}
            onChange={(ev) => {
              if (props.onChange) {
                props.onChange(ev as any);
              }
            }}
            name={props.name}
          >
            {props.value}
          </textarea>
        ) : (
          <input
            {...props}
            className={classNames(
              s.input,
              { [s.iconPadding]: !!icon },
              className
            )}
          />
        )}
        {iconPlacement !== "right" && icon && (
          <span
            className={`${s.icon}${iconClassName ? ` ${iconClassName}` : ""}`}
            onClick={iconOnClick}
          >
            {icon}
          </span>
        )}
        {isError && (
          <Typography color="red" size="small" className={s.error}>
            {errorLabel}
          </Typography>
        )}
      </div>
    </div>
  );
};
