import { FC } from "react";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import { SearchIcon } from "../../../../../../icons/SearchIcon";

interface Props {
  buttonText?: string;
  placeHolder?: string;
  value?: string;
  onChange?: (e: any) => void;
  hideButton?: boolean;
  wrapperClassName?:string
}

export const PageFilter: FC<Props> = ({
  buttonText,
  placeHolder,
  value,
  onChange,
  hideButton,
  wrapperClassName
}) => {
  return (
    <SearchOffice
      inputIcon={<SearchIcon />}
      inputIconPlacement={"right"}
      buttonText={buttonText ? buttonText : "Добавить"}
      placeholder={placeHolder ? placeHolder : "Поиск"}
      type={"active"}
      value={value}
      onChange={onChange}
      hideButton={hideButton}
      className={wrapperClassName}
    />
  );
};
