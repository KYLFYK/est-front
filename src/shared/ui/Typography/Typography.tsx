import classNames from "classnames"
import { IPropsGeneral } from "../../lib/interfaces/general"
import s from './Typography.module.scss' 

interface Props extends IPropsGeneral {
    color?: "default" | "nude" | "accent" | "secondary" | "tertiary",
    size?: "default" | "subheader" | "header" | "small" | "medium" | "big",
    weight?: "light" | "regular" | "medium" | "bold" 
}

const Typography:React.FC<Props> = ({className, color = 'default', size = 'default', weight = 'regular', children}) => {
    return (
        <p className={classNames(s.general, s[`color_${color}`], s[`weight_${weight}`], s[`size_${size}`], className)}>
           {children}
        </p>
    )
}

export default Typography