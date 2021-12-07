import { ReactNode, useState } from "react";
import css from '../Registration.module.scss'
import classNames from "classnames";
type CheckboxPropsType = {
    children: ReactNode
    className?: string,
    onChange?: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxPropsType> = ({ children, className, onChange }) => {

    const [edit, setEdit] = useState<boolean>(false)
    
    const handleEdit = () => {
        const newValue = !edit
        setEdit(newValue)
        onChange && onChange(newValue)
    }

    return (
        <label className={classNames(css.check, className)}>
            <input
                type="checkbox"
                className={css.check_input}
                onClick={handleEdit}
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