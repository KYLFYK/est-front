import classNames from "classnames";
import React from "react";
import CircledCheckIcon from "../../../../../icons/LegalPurity/CircledCheck";
import Typography from "../../../../shared/Typography/Typography";
import s from "./MultipleHorizontalTab.module.scss";

export interface ICreateObjectTabs {
  isDone: boolean;
  label: string;
  Components: JSX.Element[];
}

interface Props {
  activeTabIdx: number;
  activeSubTabIdx: number;
  tabs: ICreateObjectTabs[];
}

const MultipleHorizontalTab: React.FC<Props> = ({
  activeSubTabIdx,
  activeTabIdx,
  tabs,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.nav}>
        <div className={s.navContent}>
          {tabs.map((item, idx) => {
            const underlineWidth = 100 / item.Components.length;
            const UnderlineComponent = item.Components.map((item, idx) => (
              <div
                className={classNames(s.underlineItem, {
                  [s.active]: activeSubTabIdx >= idx,
                })}
                key={idx}
                style={{ width: `${underlineWidth}%` }}
              />
            ));

            return (
              <div key={idx} className={s.navItem}>
                <Typography
                  color={"default"}
                  className={activeTabIdx < idx ? s.disabledTab : ""}
                >
                  {" "}
                  {item.label}{" "}
                </Typography>
                {item.isDone && <CircledCheckIcon className={s.doneIcon} />}
                <div className={s.navUnderline}>
                  {activeTabIdx === idx && UnderlineComponent}
                </div>
              </div>
            );
          })}
        </div>
        <div className={s.divider} />
      </div>
      <div className={s.content}>
        {!!tabs.length && tabs[activeTabIdx].Components[activeSubTabIdx]}
      </div>
    </div>
  );
};

export default MultipleHorizontalTab;
