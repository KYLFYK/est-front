import React, {useState} from "react";
import css from './input.module.scss'
import {IconExclam} from "../../../shared/icons/Login/IconExclam";
import Typography from "../../../shared/ui/Typography/Typography";
import classNames from "classnames";
type InputAlwaysPropsType = {
    title:string
    className?:string
}

export const InputAlways :React.FC<InputAlwaysPropsType>  = ({title,className}) => {

    const [error, setError] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    return (

        <div className={classNames(css.form__div,className)}>
            <input
                style={{borderColor: error && !value ? 'red' : ''}}
                type='text'
                className={css.form__input}
                placeholder=" "
                onBlur={() => setError(true)}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <label htmlFor=""  className={css.form__label}>
                <Typography size={'small'} color={error && !value ? 'red' : 'default'} >
                    {title}
                </Typography>
            </label>

            {
                error && !value && <div style={{position:'relative',right:'33px'}}> <IconExclam/> </div>
            }
        </div>
    );
};
