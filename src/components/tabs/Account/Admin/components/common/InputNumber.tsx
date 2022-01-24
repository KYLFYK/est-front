import { FC, useState } from "react";

import styles from "./InputNumber.module.scss";

interface Props {
  labelWidth?: number;
  label: string;
  className?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
  minValue?: number;
  maxValue?: number;
}

export const InputNumber: FC<Props> = ({
  labelWidth,
  label,
  className,
  defaultValue = 0,
  onChange,
  minValue = 0,
  maxValue,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (type: "inc" | "dec") => {
    if (type === "inc") {
      if (maxValue !== value) {
        if (onChange) {
          onChange(value + 1);
        }
        setValue(value + 1);
      }
    } else {
      if (minValue !== value) {
        if (onChange) {
          onChange(value - 1);
        }
        setValue(value - 1);
      }
    }
  };

  return (
    <div className={`${styles.wrapper}${className ? ` ${className}` : ""}`}>
      <span
        className={styles.label}
        style={{
          width: labelWidth,
        }}
      >
        {label}
      </span>
      <div className={styles.calc}>
        <div
          className={styles.button}
          onClick={() => {
            handleChange("dec");
          }}
        >
          -
        </div>
        <span className={styles.value}>{value}</span>
        <div
          className={styles.button}
          onClick={() => {
            handleChange("inc");
          }}
        >
          +
        </div>
      </div>
    </div>
  );
};
