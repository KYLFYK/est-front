import { ReactNode, useState } from "react";
import css from '../Registration.module.scss'
import classNames from "classnames";
type CheckboxPropsType = {
    children: ReactNode
    className?: string,
    value?: string
    isActive?: boolean,
    onChange?: (value: string) => void
}

export const Checkbox: React.FC<CheckboxPropsType> = ({ children, className, value, isActive, onChange }) => {
    
    const handleEdit = () => {
        onChange && onChange(value || '')
    }

    return (
        <label className={classNames(css.check, className)}>
            <input
                type="checkbox"
                className={css.check_input}
                onClick={handleEdit}
                checked={isActive}
            />
            <span className={css.check_box}></span>
            <div className={css.text}>
                {
                    children
                }
            </div>
        </label>
    );
};