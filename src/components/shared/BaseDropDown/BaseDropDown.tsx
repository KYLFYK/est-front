import React, { useState, useMemo } from "react";
import classNames from "classnames";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";
import { Checked } from "../SelectEstate/Checked";
import { Unchecked } from "../SelectEstate/Unchecked";
import { IOption } from "../../../utils/interfaces/general";
import Typography from "../Typography/Typography";

import css from "./dropdown.module.scss";

type SelectPropsType = {
  // пропсы нового дропдауна
  options: IOption[];
  onChange: (option: any) => void;
  placeholder: string;
  value?: any;
  multi?: boolean;
  location?: string;
  // оставшиеся пропсы от прежнего дропдауна, нужно будет перебрать их
  label?: string;
  className?: string;
  classNameWrapper?: string;
  isError?: boolean;
  errorLabel?: string;
  name?: string;
};

export const BaseDropDown: React.FC<SelectPropsType> = ({
  options,
  placeholder,
  value,
  onChange,
  multi,
  location,
  label,
  className,
  classNameWrapper,
  isError,
  errorLabel,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState<Array<number>>([]);

  const { innerBorderRef } = useOnOutsideClick(() =>
    setTimeout(() => setOpen(false), 0)
  );

  const optionsMapMemo = useMemo(() => {
    const map = new Map<any, string>();
    for (const option of options) map.set(option.value, option.label);
    return map;
  }, [options]);

  const renderValue = (value: any) => {
    const _value = optionsMapMemo.get(value);
    return _value ? _value : placeholder;
  };

  const addRemoveArray = (index: number) => {
    let tr = array.some((ar) => ar === index);
    if (!tr) {
      array.push(index);
      setArray(array);
    } else {
      let ar = array.filter((ar) => ar !== index);
      setArray(ar);
    }
  };

  return (
    <div className={classNames(className ? className : "", css.dropdown)}>
      <div
        style={{ borderColor: open ? "#C5A28E" : "#CAD1DA" }}
        className={classNames(
          css.dropdown_btn,
          location === "bank" ? "" : css.border
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          className={classNames(
            css.ellipsisText,
            renderValue(value) === "Новая заявка" ? css.green : ""
          )}
        >
          {renderValue(value)}
        </div>
      </div>
      {open && (
        <div className={css.dropdown_content}>
          {options.map(({ value, label }, index) => {
            let result = array.some((ar) => ar === index);
            return (
              <div
                style={{ color: result ? "#C5A28E" : "" }}
                ref={innerBorderRef}
                key={index}
                onClick={() => {
                  addRemoveArray(index);
                  onChange(value);
                  multi ? setTimeout(() => setOpen(true), 0) : setOpen(!open);
                }}
                className={css.dropdown_item}
              >
                {multi && (
                  <div className={css.checkIcon}>
                    {result ? <Checked /> : <Unchecked />}
                  </div>
                )}
                <Typography>{label}</Typography>
              </div>
            );
          })}
        </div>
      )}
      <div className={css.icon}>
        <IconArrowDown open={open} setOpen={() => setOpen(!open)} />
      </div>
    </div>
  );
};
