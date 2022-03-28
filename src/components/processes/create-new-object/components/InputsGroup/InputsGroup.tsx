import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import s from './InputsGroup.module.scss'

interface Props {
    title: string
    dropdownAndText?: boolean
}

const InputsGroup: React.FC<Props> = ({ children, title, dropdownAndText=false }) => {
    return (
        <div >
            <Typography weight="medium" className={s.title}> {title}</Typography>
            <div className={dropdownAndText ? s.groupWithText : s.group}>
                {children}
            </div>
        </div>
    )
}

export default InputsGroup