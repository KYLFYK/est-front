import React, {FC, useState} from 'react';
import { IconExclam } from '../../../../icons/Login/IconExclam';
import { IconEye } from '../../../../icons/Login/IconEye';
import Typography from '../../../shared/Typography/Typography';
import css from "../registration/Registration.module.scss";

type InputPasswordType={
    value:string
    onChange:(e:string)=>void
}

export const InputPassword :FC<InputPasswordType> = ({value, onChange}) => {

    const [error, setError] = useState<boolean>(false)
    const [type, setType] = useState<boolean>(true)
    // const [value, setValue] = useState<string>('')

    return (

        <div className={css.form__div}>
            <input
                style={{borderColor: error && !value ? 'red' : ''}}
                type={type ? "password" : 'text'}
                className={css.form__input}
                placeholder=" "
                onBlur={() => setError(true)}
                value={value}
                onChange={(e) => onChange(e.currentTarget.value)}
            />
            <label htmlFor="" className={css.form__label} style={{ color:error && !value ? 'red' : ''}}>
                    Пароль*
            </label>
            <button
                onClick={() => setType(!type)}
                style={
                    {
                        position: 'relative', zIndex: 2, float: 'right',
                        right: "-34px", top: '12px', border: '0px solid', backgroundColor: "rgba(0,0,0,0)"
                    }}>
                <IconEye/>
            </button>
            {
                error && !value && <IconExclam/>
            }
        </div>
    );
};