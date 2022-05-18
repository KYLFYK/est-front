import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "../Typography/Typography";

import css from "./HorizontalTabs.module.scss";
import {makeStyles} from "@material-ui/core";


export interface ITabItem {
  title: string;
  Component?: JSX.Element;
  onClick?: () => void;
}
interface Props {
  setCurrent?: any;
  current?: number;
  tabs: ITabItem[];
  refs?: any[];
  wrapperClassName?: string;
  style?: CSSProperties;
}

export const useStyles = makeStyles(() => ({
  // MuiTabs-indicator css-1aquho2-MuiTabs-indicator
  iconSpan:{
    ">.MuiTabs-indicator":{
      width:"20px !important",
    },
    ">.css-1aquho2-MuiTabs-indicator":{
      width:"20px !important",
    }
  }
}))


export const HorizontalTabs: FC<Props> = ({
  current,
  setCurrent,
  tabs,
  refs,
  wrapperClassName,
  style,
}) => {
  const classes = useStyles()
  const [selectedTabIdx, setSelectedTabIdx] = useState(current ? current : 0);
  const activeTabRef = useRef<HTMLDivElement | null>(null);
  const [activeTabMargin, setActiveTabMargin] = useState(30);
  useEffect(() => {
    if (activeTabRef && activeTabRef.current) {
      setActiveTabMargin((activeTabRef.current.clientWidth - 25) / 2);
    }
  }, [activeTabRef, selectedTabIdx]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (refs) {
      window.scrollTo({
        top: refs[newValue].offsetTop,
        behavior: "smooth",
      });
    }
    setSelectedTabIdx(newValue);
    setCurrent && setCurrent(newValue);
  };

  return (
    <div>
      <div
        className={`${css.menu}${
          wrapperClassName ? ` ${wrapperClassName}` : ""
        }`}
        style={style}
      >
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={selectedTabIdx}
            textColor="primary"
            onChange={handleChange}
            aria-label="wrapped label tabs"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#C5A28E",
                width: "20px",
                marginLeft: activeTabMargin,
                marginBottom:'0px',
                zIndex:'2',
              },
            }}
          >
            {tabs.filter((tab) => tab).map((tab, index) => (
              <Tab
                key={index}
                value={index}
                style={{ textTransform: "none", padding: "12px 12px" }}
                onClick={tab.onClick}
                ref={index === selectedTabIdx ? activeTabRef : null}
                label={
                  <Typography
                    color={
                      tab.Component && index === selectedTabIdx
                        ? "nude"
                        : tab.Component
                        ? "tertiary"
                        : "accent"
                    }
                  >
                    <div
                      style={{
                        color:
                          tab.title === "Записаться на просмотр"
                            ? "#C5A28E"
                            : "",
                      }}
                    >
                      {tab.title}
                    </div>
                  </Typography>
                }
              />
            ))}
          </Tabs>
        </Box>
        <hr color={"#F2F2F2"} className={css.hr} />
      </div>
      {tabs[selectedTabIdx].Component && (
        <div>{tabs[selectedTabIdx].Component}</div>
      )}
    </div>
  );
};
