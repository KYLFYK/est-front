import classNames from "classnames"
import { IPropsGeneral } from "../../lib/interfaces/general"
import s from './Typography.module.scss'

interface Props extends IPropsGeneral {
    color?: "default" | "nude" | "accent" | "secondary" | "tertiary" | 'red',
    size?: "default" | "subheader" | "header" | "small" | "medium" | "big",
    weight?: "light" | "regular" | "medium" | "bold",
    icon?: JSX.Element | string,
    iconPosition?: "start" | "end"
    inline?: boolean,
}

const Typography: React.FC<Props> = ({ className, color = 'default', size = 'default', weight = 'regular', iconPosition = 'start', icon, inline, children }) => {
    return (
        <p className={classNames(s.general, s[`color_${color}`], s[`weight_${weight}`], s[`size_${size}`], className)} style={{display: inline ? 'inline-block' : 'block'}}>
            {(icon && iconPosition === 'start') && <span className={s.icon}>{icon}</span>}
            {children}
            {(icon && iconPosition === 'end') && <span className={s.icon}>{icon}</span>}
        </p>
    )
}

export default Typography