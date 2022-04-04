import React, { useState, useRef } from "react";
import css from "./input.module.scss";
import classNames from "classnames";
import Typography from "../../../shared/Typography/Typography";
import { IconExclamAlt } from "../../../../icons/Login/IconExclamAlt";
import { Card } from "../../../shared/Mortgage/Card";
type InputAlwaysPropsType = {
  title: string;
  className?: string;
  value: string;
  onChange: (e: string) => void;
  errorLabel?: string;
};

export const InputAlways: React.FC<InputAlwaysPropsType> = ({
  title,
  className,
  value,
  onChange,
  errorLabel = "Поле должно быть заполнено",
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const refInput = useRef<any>(null);
  const [error, setError] = useState<boolean>(false);
  // const [value, setValue] = useState<string>('')

  return (
    <div className={classNames(css.form__div, className)}>
      <input
        ref={refInput}
        style={{ borderColor: error && !value ? "red" : "" }}
        type="text"
        className={css.form__input}
        placeholder=" "
        onBlur={() => setError(true)}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <label
        htmlFor=""
        className={css.form__label}
        style={{ color: error && !value ? "red" : "" }}
      >
        {title}
      </label>

      {error && !value ? (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "relative",
            float: "right",
            left: "64px",
            top: "12px",
          }}
        >
          <IconExclamAlt />
        </div>
      ) : (
        <div
          style={{
            margin: "0 30px 0 0",
            position: "relative",
            right: "-10px",
            top: "10px",
          }}
        ></div>
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
          <Typography className={css.wrapWidth}>{errorLabel}</Typography>
        </Card>
      )}
    </div>
  );
};
