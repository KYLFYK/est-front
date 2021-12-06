import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import s from './InputsGroup.module.scss'

interface Props {
    title: string
}

const InputsGroup: React.FC<Props> = ({ children, title }) => {
    return (
        <div >
            <Typography weight="medium" className={s.title}> {title}</Typography>
            <div className={s.group}>
                {children}
            </div>
        </div>
    )
}

export default InputsGroup