import classNames from 'classnames';
import s from './BaseButtons.module.scss';
interface Props {
    className?: string,
    type?: "primary" | "secondary" | "blank",
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


const BaseButton: React.FC<Props> = ({ children, type = 'blank', className, icon, iconActive, isActive }) => {
    const styles = s as IStyles
    return (
        <button className={classNames(styles.basebutton, styles[type], isActive && styles.active, className)}>
            {children}
            {(icon || iconActive) && <span className={classNames({ [styles.iconSpace]: children }, styles.iconWrapper)}>{isActive ? iconActive : icon}</span>}
        </button>
    )
}

export default BaseButton