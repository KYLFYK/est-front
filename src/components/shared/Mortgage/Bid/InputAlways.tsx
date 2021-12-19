import React, {useState} from "react";
import css from './input.module.scss'
import classNames from "classnames";
import Typography from "../../../shared/Typography/Typography";
import { IconExclam } from "../../../../icons/Login/IconExclam";

type InputAlwaysPropsType = {
    id: number
    title: string
    error: boolean
    value: string
    inputs: any
    setInputs: any
    className?: string
}

export const InputAlways :React.FC<InputAlwaysPropsType>  = ({id, title, error, value, inputs, setInputs, className}) => {

    return (

        <div className={classNames(css.form__div,className)}>
            <input
                style={{borderColor: error && !value ? 'red' : ''}}
                type='text'
                className={css.form__input}
                placeholder=" "
                onBlur={() => {
                    setInputs(inputs.map((i: any, idx: number) => idx !== id ? i : {title: i.title, error: true, value: i.value}))
                }}
                value={value}
                onChange={(e) => {
                    setInputs(inputs.map((i: any, idx: number) => idx !== id ? i : {title: i.title, error: i.error, value: e.currentTarget.value}))
                }}
            />
            <label htmlFor=""  className={css.form__label}>
                <Typography color={error && !value ? 'red' : 'tertiary'} >
                    {title}
                </Typography>
            </label>

            {
                error && !value && <div style={{position:'relative',right:'33px'}}> <IconExclam/> </div>
            }
        </div>
    );
};
