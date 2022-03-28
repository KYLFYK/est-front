import React, { useState, useMemo, useRef } from "react";
import classNames from "classnames";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";
import { Checked } from "../SelectEstate/Checked";
import { Unchecked } from "../SelectEstate/Unchecked";
import { IOption } from "../../../utils/interfaces/general";
import Typography from "../Typography/Typography";
import { IconExclamAlt } from "../../../icons/Login/IconExclamAlt";
import { Card } from "../Mortgage/Card";

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
  required?: boolean;
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
  required = false,
  errorLabel = "Поле должно быть заполнено",
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState<Array<number>>([]);
  const { innerBorderRef } = useOnOutsideClick(() =>
    setTimeout(() => setOpen(false), 0)
  );
  const refInput = useRef<any>(null);
  const [hover, setHover] = useState<boolean>(false);
  console.log(placeholder, isError);
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
    <div style={{ display: "flex", position: "relative" }}>
      <div
        ref={refInput}
        className={classNames(className ? className : "", css.dropdown)}
      >
        <div
          style={{
            borderColor: open ? "#C5A28E" : isError ? "#FF0000" : "#CAD1DA",
          }}
          className={classNames(
            css.dropdown_btn,
            (location === "bank" || location === "unionDropdown") ? "" : css.border
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
