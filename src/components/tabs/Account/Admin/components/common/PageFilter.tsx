import { FC } from "react";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import { SearchIcon } from "../../../../../../icons/SearchIcon";

interface Props {
  buttonText?: string;
  placeHolder?: string;
}

export const PageFilter: FC<Props> = ({ buttonText, placeHolder }) => {
  return (
    <SearchOffice
      inputIcon={<SearchIcon />}
      inputIconPlacement={"right"}
      buttonText={buttonText ? buttonText : "Добавить"}
      placeholder={placeHolder ? placeHolder : "Поиск"}
      type={"active"}
    />
  );
};
