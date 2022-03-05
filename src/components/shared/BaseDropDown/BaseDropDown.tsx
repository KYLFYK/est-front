import React, { useState, useMemo } from "react";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";
import { Checked } from "../SelectEstate/Checked";
import { Unchecked } from "../SelectEstate/Unchecked";
import { IOption } from "../../../utils/interfaces/general";
import Typography from "../Typography/Typography";

import css from "../SelectEstate/select.module.scss";

type SelectPropsType = {
  // пропсы нового дропдауна
  options: IOption[];
  onChange: (option: any) => void;
  placeholder: string;
  value?: any;
  multi?: boolean;

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

  label,
  className,
  classNameWrapper,
  isError,
  errorLabel,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState<Array<number>>([]);
  console.log(value)
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

/*
import { MenuItem, Select } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { SmallArrowIcon } from "../../../icons/SmallArrow/SmallArrow";
import { IOption } from "../../../utils/interfaces/general";
import Typography from "../Typography/Typography";
import { useStyles } from "./styles";

interface Props {
  options: IOption[];
  value?: any;
  label?: string;
  placeholder: any;
  className?: string;
  classNameWrapper?: string;
  isError?: boolean;
  errorLabel?: string;
  onChange: (value: string) => void;
  name?: string;
}

export const BaseDropDown: React.FC<Props> = ({
  isError,
  errorLabel = "Выберите значение",
  options,
  value,
  placeholder,
  className,
  label,
  classNameWrapper,
  onChange,
  name,
}) => {
  const classes = useStyles();
  const handleOnChange = (
    event: React.ChangeEvent<{ name?: string | unknown; value: unknown }>
  ) => {
    onChange(event.target.value as string);
  };
  const optionsMapMemo = React.useMemo(() => {
    const map = new Map<any, string>();
    for (const option of options) map.set(option.value, option.label);
    return map;
  }, [options]);
  const renderValue = (value: any) => {
    const _value = optionsMapMemo.get(value);
    return _value ? _value : placeholder;
  };
  return (
    <div className={classNames(classes.wrapper, classNameWrapper)}>
      {label && <Typography className={classes.label}>{label}</Typography>}
      <Select
        IconComponent={({ className }) => (
          <SmallArrowIcon className={classNames(className, classes.icon)} />
        )}
        className={classNames(classes.root, className)}
        renderValue={renderValue}
        displayEmpty={true}
        value={value === undefined || value === null ? "" : value}
        onChange={handleOnChange}
        name={name}
      >
        {options.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {isError && (
        <Typography size="small" color="red" className={classes.error}>
          {errorLabel}
        </Typography>
      )}
    </div>
  );
};
*/