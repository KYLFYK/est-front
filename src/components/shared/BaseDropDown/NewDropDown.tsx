import React, { ReactElement, useMemo, useState } from "react";
import { IOption } from "../../../utils/interfaces/general";
import classNames from "classnames";
import { Checked } from "../SelectEstate/Checked";
import { Unchecked } from "../SelectEstate/Unchecked";
import Typography from "../Typography/Typography";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";

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
}) => {
  type valueType = typeof value;
  type optionType = typeof options[number]["value"];

  const [opened, setOpen] = useState(false);

  const { innerBorderRef } = useOnOutsideClick(() =>
    setTimeout(() => setOpen(false), 0)
  );

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
    console.log(value);

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
    <div className={classNames(className ? className : "", css.dropdown)}>
      <div
        style={{ borderColor: opened ? "#C5A28E" : "#CAD1DA" }}
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
                  multi ? setTimeout(() => setOpen(true), 0) : setOpen(!opened);
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
  );
};
