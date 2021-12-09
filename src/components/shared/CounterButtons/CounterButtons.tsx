import classNames from 'classnames'
import React, { useEffect } from 'react'
import Typography from '../Typography/Typography'
import s from './CounterButton.module.scss'


interface Props {
    initValue: number,
    label?: string,
    className?: string,
    onChange: (value: number) => void,
    isError?: boolean,
    errorLabel?: string
}

const CounterButtons: React.FC<Props> = ({ onChange, initValue, label, className, isError, errorLabel = "Значение должно быть выше 0" }) => {
    const [value, setValue] = React.useState<number>(0)

    useEffect(() => {
        setValue(initValue)
    }, [initValue])

    const increaseValue = () => {
        setValue(value + 1)
        onChange(value + 1)
    
    }
    const decreaseValue = () => {
        const newValue = value === 0 ? 0 : value - 1
        setValue(newValue)
        onChange(newValue)
    }

    return (
        <div className={classNames(s.wrapper, className)}>
            <Typography className={s.label}>{label}</Typography>
            <div className={s.buttonsGroup}>
                <button className={s.button} onClick={decreaseValue}>—</button>
                <Typography>{value}</Typography>
                <button className={s.button} onClick={increaseValue}>+</button>
            </div>
            {isError && <Typography color="red" size="small" className={s.error}>{errorLabel}</Typography>}
        </div>
    )
}

export default CounterButtons