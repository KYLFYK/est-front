import classNames from 'classnames';
import { IPropsGeneral } from '../../lib/interfaces/general';
import s from './BaseButtons.module.scss';


export type TBaseButtonType = "primary" | "secondary" | "blank"
interface Props extends IPropsGeneral {
    type?: TBaseButtonType,
    icon?: JSX.Element | string,
    iconActive?: JSX.Element | string,
    isActive?: boolean,
}

interface IStyles {
    basebutton: string,
    primary: string;
    secondary: string,
    blank: string,
    iconWrapper: string,
    iconSpace: string,
    active: string,
    [key: string]: string
}


const BaseButton: React.FC<Props> = ({ children, type = 'blank', className, icon, iconActive, isActive, onClick }) => {
    const styles = s as IStyles
    return (
        <button onClick={onClick} className={classNames(styles.basebutton, styles[type], isActive && styles.active, className)}>
            {children}
            {(icon || iconActive) && <span className={classNames({ [styles.iconSpace]: children }, styles.iconWrapper)}>{(isActive && iconActive) ? iconActive : icon}</span>}
        </button>
    )
}

export default BaseButton