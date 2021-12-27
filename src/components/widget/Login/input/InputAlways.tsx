import React, {useState} from "react";
import css from './input.module.scss'
import classNames from "classnames";
import Typography from "../../../shared/Typography/Typography";
import { IconExclam } from "../../../../icons/Login/IconExclam";
type InputAlwaysPropsType = {
    title:string
    className?:string
    value:string
    onChange:(e:string)=>void
}

export const InputAlways :React.FC<InputAlwaysPropsType>  = ({title,className,value,onChange}) => {

    const [error, setError] = useState<boolean>(false)
    // const [value, setValue] = useState<string>('')

    return (

        <div className={classNames(css.form__div,className)}>
            <input
                style={{borderColor: error && !value ? 'red' : ''}}
                type='text'
                className={css.form__input}
                placeholder=" "
                onBlur={() => setError(true)}
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
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
