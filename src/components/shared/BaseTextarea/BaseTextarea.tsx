import classNames from 'classnames';
import React from 'react';
import Typography from '../Typography/Typography';
import s from './BaseTextarea.module.scss';

interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    icon?: JSX.Element | string,
    label?: string
}

export const BaseTextarea: React.FC<Props> = ({ className = '', icon, label, ...props }) => {
    return (
        <div className={s.wrapper}>
            {label && <Typography className={s.label}>{label}</Typography>}
            <div className={s.textareaBlock}>
                <textarea {...props} className={classNames(s.textarea, className)} />
                {icon && <span className={s.icon}>{icon}</span>}
            </div>
        </div>
    );
};
