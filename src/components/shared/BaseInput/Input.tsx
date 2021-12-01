import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography/Typography';
import s from './Input.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: JSX.Element | string,
    label?: string
}

export const BaseInput: React.FC<Props> = ({ className = '', icon, label, ...props }) => {
    return (
        <div>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.wrapper}>
                <input {...props} className={classNames(s.input, className)} />
                {icon && <span className={s.icon}>{icon}</span>}
            </div>
        </div>
    );
};
