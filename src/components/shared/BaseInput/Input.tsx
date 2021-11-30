import classNames from 'classnames';
import React from 'react';
import s from './Input.module.scss';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    icon?: JSX.Element | string,
}

export const BaseInput:React.FC<Props> = ({ className = '', icon, ...props }) => {
    return (
        <div className={s.wrapper}>
            <input {...props} className={classNames(s.input, className)}/>
            {icon && <span className={s.icon}>{icon}</span>}
        </div>
    );
};
