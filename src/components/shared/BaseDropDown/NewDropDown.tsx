import React, { ReactElement, useMemo, useState, useRef } from "react";
import { IOption } from "../../../utils/interfaces/general";
import classNames from "classnames";
import { Checked } from "../SelectEstate/Checked";
import { Unchecked } from "../SelectEstate/Unchecked";
import Typography from "../Typography/Typography";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";
import { IconExclamAlt } from "../../../icons/Login/IconExclamAlt";
import { Card } from "../Mortgage/Card";

import css from "./dropdown.module.scss";

interface Props<ValueType, OptionType> {
  options: IOption<string, OptionType>[];
  onChange: (option: ValueType) => void;
  placeholder: string;
  value: ValueType;
  multi?: boolean;
  location?: string;
  label?: string;
  className?: string;
  classNameWrapper?: string;
  isError?: boolean;
  required?: boolean;
  errorLabel?: string | number | "123";
  name?: string;
}

type ValueVariants = number | string;

export const NewDropDown: <T extends ValueVariants | Array<ValueVariants>>(
  props: Props<T, ValueVariants>
) => ReactElement = ({
  options,
  onChange,
  placeholder,
  value,
  multi,
  className,
  isError,
  required = false,
  errorLabel = "Поле должно быть заполнено",
}) => {
  type valueType = typeof value;
  type optionType = typeof options[number]["value"];

  const [opened, setOpen] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() =>
    setTimeout(() => setOpen(false), 0)
  );
  const refInput = useRef<any>(null);
  const [hover, setHover] = useState<boolean>(false);
  console.log(placeholder, isError);
  const handleChange = (newValue: optionType) => {
    if (newValue !== value) {
      if (Array.isArray(value)) {
        if (value) {
          if (value.indexOf(newValue) > -1) {
            onChange(value.filter((el) => el !== newValue) as valueType);
          } else {
            onChange([...value, newValue] as valueType);
          }
        } else {
          onChange([newValue] as valueType);
        }
      } else {
        onChange(newValue as valueType);
      }
    }
  };

  const renderValue = useMemo(() => {
    if (value) {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          return options
            .filter((el) => value.indexOf(el.value) > -1)
            .map((el) => el.label)
            .join(", ");
        } else {
          return placeholder;
        }
      } else {
        return options.filter((el) => el.value === value)[0].label;
      }
    } else {
      return placeholder;
    }
  }, [value]);

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div className={classNames(className ? className : "", css.dropdown)}>
        <div
          style={{
            borderColor: opened ? "#C5A28E" : isError ? "#FF0000" : "#CAD1DA",
          }}
          className={classNames(css.dropdown_btn, css.border)}
          onClick={() => {
            setOpen(!opened);
          }}
        >
          <div className={classNames(css.ellipsisText)}>{renderValue}</div>
        </div>
        {opened && (
          <div className={css.dropdown_content}>
            {options.map((opt, index) => {
              const isSelected = multi
                ? Array.isArray(value)
                  ? value.indexOf(opt.value) > -1
                  : false
                : value === opt.value;

              return (
                <div
                  style={{ color: isSelected ? "#C5A28E" : "" }}
                  ref={innerBorderRef}
                  key={index}
                  onClick={() => {
                    handleChange(opt.value);
                    multi
                      ? setTimeout(() => setOpen(true), 0)
                      : setOpen(!opened);
                  }}
                  className={css.dropdown_item}
                >
                  {multi && (
                    <div className={css.checkIcon}>
                      {isSelected ? <Checked /> : <Unchecked />}
                    </div>
                  )}
                  <Typography>{opt.label}</Typography>
                </div>
              );
            })}
          </div>
        )}
        <div className={css.icon}>
          <IconArrowDown open={opened} setOpen={() => setOpen(!opened)} />
        </div>
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
            zIndex: 15,
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
