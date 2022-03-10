import React, { useState, useMemo, useEffect } from "react";
import { IconArrowDown } from "./IconArrowDown";
import { useOnOutsideClick } from "./SelectLogic";
import { Checked } from "./Checked";
import { Unchecked } from "./Unchecked";
import { IOption } from "../../../utils/interfaces/general";
import Typography from "../Typography/Typography";

import css from "./select.module.scss";

type SelectPropsType = {
  options: IOption[];
  onChange: (option: any) => void;
  placeholder: string;
  value: any;
  multi?: boolean;
};

export const SelectEstate: React.FC<SelectPropsType> = ({
  options,
  placeholder,
  value,
  onChange,
  multi,
}) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState<Array<number>>([]);

  useEffect(() => {
    if (value && value.split && value.split(", ").length > 0) {
      const values = value.split(", ");
      const newValue: number[] = [];

      options.forEach((opt, index) => {
        if (values.indexOf(opt.label) > -1) {
          newValue.push(index);
        }
      });

      setArray(newValue);
    }
  }, []);

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
    <div className={css.dropdown}>
      <div
        style={{ borderColor: open ? "#C5A28E" : "#CAD1DA" }}
        className={css.dropdown_btn}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={css.ellipsisText}>{renderValue(value)}</div>
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
