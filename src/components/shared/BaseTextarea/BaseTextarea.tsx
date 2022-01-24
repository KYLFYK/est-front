import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography/Typography';
import s from './BaseTextarea.module.scss';

interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    icon?: JSX.Element | string,
    label?: string
    isError?: boolean,
    errorLabel?: string,
    classNameWrapper?:string
}

export const BaseTextarea: React.FC<Props> = ({ className = '', icon, label, isError,classNameWrapper, errorLabel = "Поле должно быть заполнено", ...props }) => {
    return (
        <div className={classNames(s.wrapper,classNameWrapper)}>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.textareaBlock}>
                <textarea {...props} className={classNames(s.textarea, className)} />
                {icon && <span className={s.icon}>{icon}</span>}
                {isError && (<Typography color="red" size="small" className={s.error}>{errorLabel}</Typography>)}
            </div>
        </div>
    );
};
