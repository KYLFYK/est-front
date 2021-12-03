import classNames from "classnames"
import { IPropsGeneral } from "../../../utils/interfaces/general"
import s from './Typography.module.scss'

interface Props extends IPropsGeneral {
    color?: "default" | "nude" | "accent" | "secondary" | "tertiary" | "red" | "green",
    size?: "default" | "subheader" | "header" | "small" | "medium" | "big" | "headerLow" | "subheaderBig",
    weight?: "light" | "regular" | "medium" | "bold",
    icon?: JSX.Element | string,
    iconPosition?: "start" | "end"
    inline?: boolean,
}

const Typography: React.FC<Props> = ({onClick, className, color = 'default', size = 'default', weight = 'regular', iconPosition = 'start', icon, inline, children }) => {
    return (
        <p onClick={onClick} className={classNames(s.general, s[`color_${color}`], s[`weight_${weight}`], s[`size_${size}`], className)} style={{display: inline ? 'inline-flex' : 'flex'}}>
            {(icon && iconPosition === 'start') && <span className={s.icon}>{icon}</span>}
            {children}
            {(icon && iconPosition === 'end') && <span className={s.icon}>{icon}</span>}
        </p>
    )
}

export default Typography