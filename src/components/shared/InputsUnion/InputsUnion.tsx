import classNames from 'classnames'
import React from 'react'
import s from './InputsUnion.module.scss'

interface Props {
    children: JSX.Element[],
    className?: string
}

const InputsUnion: React.FC<Props> = ({ children, className }) => {
    return (
        <div className={classNames(s.unionInput, className)}>
            {children.map((Input, idx) => {
                return (
                    <React.Fragment key={idx}> {Input}
                        {((children.length - 1) !== idx) && <div className={s.divider}></div>}
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default InputsUnion