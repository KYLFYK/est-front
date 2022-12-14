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
    classWrapper?: string;
};

export const AdvantageMain: React.FC<AdvantagePropsType> = ({
                                                            classWrapper,
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
        <div className={classNames(css.blockAdvantage,classWrapper)}>
            <div className={css.icon}>{children}</div>
            <div
                className={classNames(css.textMain, className, {
                    [css.autoWidth]: variant === "secondary",
                })}
            >
                <Typography weight={titleWeight} size={titleSize}>
                    {title}
                </Typography>
                {
                    text && <div  style={{marginTop:'8px'}}>
                        <Typography weight={textWeight}>
                            {text}
                        </Typography>
                    </div>
                }
            </div>
        </div>
    );
};
