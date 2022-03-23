import React, { FC, useState } from "react";
import { IOption } from "../../../utils/interfaces/general";
import classNames from "classnames";
import Typography from "../Typography/Typography";
import { IconArrowDown } from "../SelectEstate/IconArrowDown";
import { useOnOutsideClick } from "../SelectEstate/SelectLogic";

import css from "../BaseDropDown/dropdown.module.scss";

interface Props {
  onSearch?: (query: string) => void;
  onChange?: (newValue: string) => void;
  value?: string;
  options?: IOption<string, string>[];
  placeholder: string;
  className?: string;
  classNameWrapper?: string;
  isError?: boolean;
  errorLabel?: string | number | "123";
  name?: string;
}

export const SearchDropDown: FC<Props> = ({
  className,
  options,
  value,
  onChange,
  placeholder,
  onSearch,
}) => {
  const [opened, setOpen] = useState(false);
  const [fieldValue, setFieldValue] = useState<string>(value ? value : "");

  const { innerBorderRef } = useOnOutsideClick(() =>
    setTimeout(() => setOpen(false), 0)
  );

  return (
    <div
      className={classNames(className ? className : "", css.dropdown)}
      ref={innerBorderRef}
    >
      <div
        style={{ borderColor: opened ? "#C5A28E" : "#CAD1DA" }}
        className={classNames(css.dropdown_btn, css.border)}
        onClick={() => {
          setOpen(true);
        }}
      >
        <input
          value={fieldValue}
          placeholder={placeholder}
          className={classNames(css.searchInput)}
          onInput={(e) => {
            setFieldValue(e.currentTarget.value);
            if (onSearch) {
              onSearch(e.currentTarget.value);
            }
          }}
          onFocus={() => {
            setOpen(true);
          }}
        />
      </div>
      {opened && options && options.length > 0 && (
        <div className={css.dropdown_content}>
          {options.map((opt, index) => {
            const isSelected = value === opt.value;

            return (
              <div
                style={{ color: isSelected ? "#C5A28E" : "" }}
                key={index}
                onClick={() => {
                  if (onChange) {
                    onChange(opt.value);
                  }
                  setFieldValue(opt.label);
                  setOpen(false);
                }}
                className={css.dropdown_item}
              >
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
