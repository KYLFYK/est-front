import React, { ReactNode } from "react";
import css from "./Advantage.module.scss";
import Typography from "../Typography/Typography";
import classNames from "classnames";

type AdvantagePropsType = {
  title: string;
  text?: string;
  children: ReactNode;
  titleWeight: "bold" | "light" | "regular" | "medium" | undefined;
  titleSize: "medium" | "big" | "small" | "header" | "default" | "subheader" | "headerLow" | "subheaderBig" | undefined;
  textWeight: "bold" | "light" | "regular" | "medium" | undefined;
  className?: string;
  classWrapper?: string;
  classNameMargin?: string;
};

export const Advantage: React.FC<AdvantagePropsType> = ({
  classWrapper,
  className,
  title,
  text,
  children,
  titleWeight,
  titleSize, 
  textWeight,
  classNameMargin,
}) => {
  //const titleWeight = variant === "primary" ? "bold" : "regular";
  //const titleSize = variant === "primary" ? "medium" : "default";
  //const textWeight = variant === "primary" ? "regular" : "light";
  console.log(classNameMargin, text)
  return (
    <div className={classNames(css.blockAdvantage, classWrapper)}>
      <div className={css.icon}>
        {children}
      </div>
      <div
        className={classNames(css.text, className, {
          [css.autoWidth]: titleWeight === "regular" && titleSize === "default",
        })}
      >
        <Typography weight={titleWeight} color={"accent"} size={titleSize}>
          {title}
        </Typography>
        {text && (
          <div>
            <div className={classNameMargin ? classNameMargin : ''}></div>
            <div>
              <Typography weight={textWeight}>{text}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
