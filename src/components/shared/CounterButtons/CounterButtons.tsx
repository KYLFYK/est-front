import classNames from "classnames";
import React, { useEffect, useState, useRef } from "react";
import Typography from "../Typography/Typography";
import s from "./CounterButton.module.scss";
import { IconExclamAlt } from "../../../icons/Login/IconExclamAlt";
import { Card } from "../Mortgage/Card";

interface Props {
  initValue: number;
  amountValue?: number;
  floorValue?: number;
  label?: string;
  className?: string;
  onChange: (value: number) => void;
  required?: boolean;
  isError?: boolean;
  errorLabel?: string;
  location?: string;
}

const CounterButtons: React.FC<Props> = ({
  onChange,
  initValue,
  amountValue,
  floorValue,
  label,
  className,
  required = false,
  isError,
  errorLabel = "Значение должно быть выше 0",
  location,
}) => {
  const [value, setValue] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const refInput = useRef<any>(null);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  const increaseValue = () => {
    if (location === "floorsAmmount") {
      setValue(value + 1);
      onChange(value + 1);
    } else if (amountValue && amountValue > 0 && amountValue > value) {
      setValue(value + 1);
      onChange(value + 1);
    } else if (!location) {
      setValue(value + 1);
      onChange(value + 1);
    }
  };
  const decreaseValue = () => {
    const newValue = value === 0 ? 0 : value - 1;
    if (location === "floor") {
      setValue(newValue);
      onChange(newValue);
    } else if (
      location === "floorsAmmount" &&
      ((floorValue && floorValue < value) || !floorValue)
    ) {
      setValue(newValue);
      onChange(newValue);
    } else if (!location) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className={classNames(s.wrapper, className)}>
      <Typography className={s.label}>{label}</Typography>
      <div style={{ display: "flex" }}>
        <div className={s.buttonsGroup}>
          <button type={"button"} className={s.button} onClick={decreaseValue}>
            —
          </button>
          <Typography>{value}</Typography>
          <button type={"button"} className={s.button} onClick={increaseValue}>
            +
          </button>
        </div>

        {required &&
          (isError ? (
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                margin: "0 10px 0 0",
                cursor: "pointer",
                position: "relative",
                zIndex: 100,
                right: "-10px",
                top: "10px",
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
          ))}
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

export default CounterButtons;
