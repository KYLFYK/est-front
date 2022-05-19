import classNames from "classnames";
import s from "./CompareInput.module.scss";

interface Props {
  Icon?: string | JSX.Element;
  classNameWrapper?: string;
  classNameInputFrom?: string;
  classNameInputTo?: string;
  classNameInput?: string;
  onChangeFrom: (value: string) => void;
  onChangeTo: (value: string) => void;
  valueFrom?: string;
  valueTo?: string;
  placeholderFrom?: string;
  placeholderTo?: string;
  location?: "search" | "planning";
}

export const CompareInput: React.FC<Props> = ({
  classNameWrapper,
  location,
  classNameInput,
  classNameInputFrom,
  classNameInputTo,
  Icon,
  valueFrom = "",
  valueTo = "",
  placeholderFrom,
  placeholderTo,
  onChangeFrom,
  onChangeTo,
}) => {
  return (
    <div className={classNames(s.wrapper, classNameWrapper)}>
      <input
        type="number"
        className={classNames(
          s.input,
          location === "planning" ? classNameInput : classNameInputFrom
        )}
        placeholder={placeholderFrom}
        value={valueFrom}
        onChange={(event) => onChangeFrom(event.target.value)}
      />
      <div className={s.divider} />
      <input
        type="number"
        className={classNames(
          s.input,
          location === "planning" ? classNameInput : classNameInputTo,
          Icon ? s.addMr : ""
        )}
        placeholder={placeholderTo}
        value={valueTo}
        onChange={(event) => onChangeTo(event.target.value)}
      />
      <span className={s.icon}>{Icon}</span>
    </div>
  );
};
