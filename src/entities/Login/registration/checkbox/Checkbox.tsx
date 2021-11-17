import {ReactNode, useState} from "react";
import css from '../Registration.module.scss'
import classNames from "classnames";
type CheckboxPropsType = {
    children: ReactNode
    className?:string
}

export const Checkbox: React.FC<CheckboxPropsType> = ({children,className}) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <label className={classNames(css.check,className)}>
            <input
                type="checkbox"
                className={css.check_input}
                onClick={() => setEdit(!edit)}
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