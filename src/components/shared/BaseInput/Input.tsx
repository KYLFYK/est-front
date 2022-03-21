import classNames from "classnames";
import React, { useState, useRef } from "react";
import Typography from "../Typography/Typography";
import { IconExclamAlt } from "../../../icons/Login/IconExclamAlt";
import s from "./Input.module.scss";
import { Card } from "../Mortgage/Card";

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
  const refInput = useRef<any>(null);
  const refText = useRef<any>(null);
  const [hover, setHover] = useState<boolean>(false);

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
            ref={refInput}
            {...props}
            className={classNames(
              s.input,
              { [s.iconPadding]: !!icon },
              className,
              isError && s.error
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
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              cursor: "pointer",
              position: "relative",
              right: "-10px",
              top: "10px",
            }}
          >
            <IconExclamAlt />
          </div>
        )}
        {hover && (
          <Card
            style={{
              backgroundColor: "#FFFFFF",
              position: "absolute",
              top: `30px`,
              left: `${refInput.current?.offsetWidth + 34}px`,
              padding: "10px",
              border: "1px solid #F2F2F2",
              borderRadius: "6px",
              boxShadow: "0px 0px 16px rgba(26, 72, 98, 0.15)",
            }}
          >
            <Typography className={s.wrapWidth}>{errorLabel}</Typography>
          </Card>
          )}
      </div>
    </div>
  );
};
