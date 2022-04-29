import React, {ReactNode} from 'react';
import css from "./Advantage.module.scss";
import classNames from "classnames";
import Typography from "../Typography/Typography";


type AdvantagePropsType = {
    title: string
    text?: string
    children: ReactNode,
    variant?: "primary" | "secondary",
    className?: string,
    wrapperStyle?:string
}

export const AdvantageMobile: React.FC<AdvantagePropsType> = ({ className, title, text, children,wrapperStyle, variant = "primary" }) => {
    const titleWeight = variant === 'primary' ? "bold" : "regular"
    const titleSize = variant === 'primary' ? "medium" : "default"
    const textWeight = variant === 'primary' ? "regular" : "light"

    return (
        <div className={classNames(css.blockAdvantageMobile,wrapperStyle)}>
            <div className={css.iconMobile}>
                {
                    children
                }
            </div>
            <div className={classNames(css.textMobile, className, {[css.autoWidth]: variant === 'secondary'})}>
                <Typography weight={titleWeight} size={titleSize}>
                    {title}
                </Typography>
                {text && <Typography weight={textWeight}>
                    {text}
                </Typography>
                }
            </div>
        </div>
    );
};