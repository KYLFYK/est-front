import React, { FC, useState, useRef } from "react";
import { IconExclamAlt } from "../../../../icons/Login/IconExclamAlt";
import { IconEye } from "../../../../icons/Login/IconEye";
import Typography from "../../../shared/Typography/Typography";
import { Card } from "../../../shared/Mortgage/Card";
import css from "../registration/Registration.module.scss";

type InputPasswordType = {
  value: string;
  onChange: (e: string) => void;
  errorLabel?: string;
};

export const InputPassword: FC<InputPasswordType> = ({
  value,
  onChange,
  errorLabel = "Поле должно быть заполнено",
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const refInput = useRef<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [type, setType] = useState<boolean>(true);
  // const [value, setValue] = useState<string>('')

  return (
    <div className={css.form__div}>
      <input
        ref={refInput}
        style={{ borderColor: error && !value ? "red" : "" }}
        type={type ? "password" : "text"}
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
        Пароль*
      </label>
      <button
        onClick={() => setType(!type)}
        style={{
          position: "relative",
          zIndex: 2,
          float: "right",
          right: "-34px",
          top: "12px",
          border: "0px solid",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <IconEye />
      </button>
      {error && !value ? (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: "relative",
            float: "right",
            left: "98px",
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
