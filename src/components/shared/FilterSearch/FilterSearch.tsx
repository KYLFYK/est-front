import React, { FC, useState } from "react";
import { BaseDropDown } from "../BaseDropDown/BaseDropDown";
import { makeStyles } from "@material-ui/core";
import BaseButton from "../BaseButton/BaseButtons";
import FavoriteIcon from "../../../icons/Favorite/Favorite";
import css from "./FilterSearch.module.scss";

//label - Отображение
const option = [
  { value: "По умолчанию", label: "По умочанию" },
  { value: "Цене - убыванию", label: "Цене - убыванию" },
  { value: "Цене - возрастанию", label: "Цене - возрастанию" },
];

export const useStyles = makeStyles(() => ({
  select: {
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 6,
    height: 40,
  },
}));

interface Props {
  type?: "agent" | "professional" | "owner";
  className?: string;
}

const FilterSearch: FC<Props> = ({ type = "agent", className }) => {
  const classes = useStyles();
  const [value, setValue] = useState<string>(option[0].value);
  const [active, setActive] = useState<"map" | "table">("table");

  const printer = () => {
    console.log("printer");
  };
  const upload = () => {
    console.log("upload");
  };
  const oval = () => {
    console.log("oval");
  };
  const onClickMap = () => {
    console.log("onClickMap");
    setActive("map");
  };
  const onClickTable = () => {
    console.log("onClickTable");
    setActive("table");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0",
      }}
      className={className}
    >
      <BaseDropDown
        options={option}
        placeholder={`Сортировать:${value}`}
        onChange={setValue}
        className={classes.select}
      />
      <div style={{ display: "flex" }}>
        {type === "professional" && (
          <BaseButton
            type={"secondary"}
            icon={<FavoriteIcon />}
            className={css.buttonStyle}
          >
            Сохранить поиск
          </BaseButton>
        )}
        <PrinterIcon onClick={printer} />
        <Upload onClick={upload} />
        {type === "professional" && (
          <>
            <Oval onClick={oval} />
            <VidMenu
              onClickMap={onClickMap}
              onClickTable={onClickTable}
              active={active}
            />
          </>
        )}
        {type === "owner" && (
          <>
            <VidMenu
              onClickMap={onClickMap}
              onClickTable={onClickTable}
              active={active}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FilterSearch;

type VidMenuType = {
  onClickMap: () => void;
  onClickTable: () => void;
  active: "table" | "map";
};

const VidMenu: FC<VidMenuType> = ({ onClickMap, onClickTable, active }) => {
  return (
    <div
      style={{
        border: "1px solid #f2f2f2",
        borderRadius: "8px",
        height: "38px",
        margin: "0 4px",
        minWidth: "83px",
      }}
    >
      <button
        style={{
          border: "none",
          background: "rgba(0,0,0,0)",
          padding: "6px 8px",
        }}
        onClick={onClickTable}
      >
        <FilterIconTable active={active} />
      </button>
      <VerticalIcon />
      <button
        style={{
          border: "none",
          background: "rgba(0,0,0,0)",
          padding: "6px 8px",
        }}
        onClick={onClickMap}
      >
        <FilterIconMap active={active} />
      </button>
    </div>
  );
};

type ActiveColorType = {
  active: "table" | "map";
};
const FilterIconTable: FC<ActiveColorType> = ({ active }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z"
          fill={active === "table" ? "#C5A28E" : "#3D4550"}
        />
      </svg>
    </>
  );
};
const VerticalIcon = () => {
  return (
    <>
      <svg
        width="1"
        height="20"
        viewBox="0 0 1 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1" height="20" fill="#F2F2F2" />
      </svg>
    </>
  );
};
const FilterIconMap: FC<ActiveColorType> = ({ active }) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 3L20.34 3.03L15 5.1L9 3L3.36 4.9C3.15 4.97 3 5.15 3 5.38V20.5C3 20.78 3.22 21 3.5 21L3.66 20.97L9 18.9L15 21L20.64 19.1C20.85 19.03 21 18.85 21 18.62V3.5C21 3.22 20.78 3 20.5 3ZM10 5.47L14 6.87V18.53L10 17.13V5.47ZM5 6.46L8 5.45V17.15L5 18.31V6.46ZM19 17.54L16 18.55V6.86L19 5.7V17.54Z"
          fill={active === "map" ? "#C5A28E" : "#3D4550"}
        />
      </svg>
    </>
  );
};

type OnClickType = {
  onClick: () => void;
};
const PrinterIcon: FC<OnClickType> = ({ onClick }) => {
  return (
    <span onClick={onClick}>
      <svg
        style={{ margin: "0px 4px", cursor: "pointer" }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="7.5"
          fill="white"
          stroke="#F2F2F2"
        />
        <path
          d="M27 16H26V11H14V16H13C11.34 16 10 17.34 10 19V25H14V29H26V25H30V19C30 17.34 28.66 16 27 16ZM16 13H24V16H16V13ZM24 25V27H16V23H24V25ZM26 23V21H14V23H12V19C12 18.45 12.45 18 13 18H27C27.55 18 28 18.45 28 19V23H26Z"
          fill="#3D4550"
        />
        <path
          d="M26 20.5C26.5523 20.5 27 20.0523 27 19.5C27 18.9477 26.5523 18.5 26 18.5C25.4477 18.5 25 18.9477 25 19.5C25 20.0523 25.4477 20.5 26 20.5Z"
          fill="#3D4550"
        />
      </svg>
    </span>
  );
};
const Upload: FC<OnClickType> = ({ onClick }) => {
  return (
    <span onClick={onClick}>
      <svg
        style={{ margin: "0px 4px", cursor: "pointer" }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="7.5"
          fill="white"
          stroke="#F2F2F2"
        />
        <path
          d="M26 23V26H14V23H12V26C12 27.1 12.9 28 14 28H26C27.1 28 28 27.1 28 26V23H26ZM25 19L23.59 17.59L21 20.17V12H19V20.17L16.41 17.59L15 19L20 24L25 19Z"
          fill="#3D4550"
        />
      </svg>
    </span>
  );
};
const Oval: FC<OnClickType> = ({ onClick }) => {
  return (
    <span onClick={onClick}>
      <svg
        style={{ margin: "0px 4px", cursor: "pointer" }}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="39"
          height="39"
          rx="7.5"
          fill="white"
          stroke="#F2F2F2"
        />
        <path
          d="M11.9 20C11.9 18.29 13.29 16.9 15 16.9H19V15H15C12.24 15 10 17.24 10 20C10 22.76 12.24 25 15 25H19V23.1H15C13.29 23.1 11.9 21.71 11.9 20ZM16 21H24V19H16V21ZM25 15H21V16.9H25C26.71 16.9 28.1 18.29 28.1 20C28.1 21.71 26.71 23.1 25 23.1H21V25H25C27.76 25 30 22.76 30 20C30 17.24 27.76 15 25 15Z"
          fill="#3D4550"
        />
      </svg>
    </span>
  );
};
