import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography/Typography';
import s from './Input.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: JSX.Element | string,
    label?: string,
    classNameWrapper?: string,
    isError?: boolean
    errorLabel?: string,
}

export const BaseInput: React.FC<Props> = ({ className = '', icon, label, classNameWrapper, isError, errorLabel = "Поле должно быть заполнено", ...props }) => {
    return (
        <div className={classNameWrapper}>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.wrapper}>
                <input {...props} className={classNames(s.input, { [s.iconPadding]: !!icon }, className)} />
                {icon && <span className={s.icon}>{icon}</span>}
                {isError && (<Typography color="red" size="small" className={s.error}>{errorLabel}</Typography>)}
            </div>
        </div>
    );
};
