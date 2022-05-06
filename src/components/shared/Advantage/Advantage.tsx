import React, { ReactNode } from "react";
import css from "./Advantage.module.scss";
import Typography from "../Typography/Typography";
import classNames from "classnames";

type AdvantagePropsType = {
  title: string;
  text?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export const Advantage: React.FC<AdvantagePropsType> = ({
  className,
  title,
  text,
  children,
  variant = "primary",
}) => {
  const titleWeight = variant === "primary" ? "bold" : "regular";
  const titleSize = variant === "primary" ? "medium" : "default";
  const textWeight = variant === "primary" ? "regular" : "light";

  return (
    <div className={css.blockAdvantage}>
      <div className={css.icon}>{children}</div>
      <div
        className={classNames(css.text, className, {
          [css.autoWidth]: variant === "secondary",
        })}
      >
        <Typography weight={titleWeight} size={titleSize}>
          {title}
        </Typography>
        {text && <Typography weight={textWeight}>{text}</Typography>}
      </div>
    </div>
  );
};
