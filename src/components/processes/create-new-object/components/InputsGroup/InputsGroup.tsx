import React from 'react'
import Typography from '../../../../shared/Typography/Typography'
import s from './InputsGroup.module.scss'

interface Props {
    title: string
    dropdownAndText?: boolean
    style?: any
}

const InputsGroup: React.FC<Props> = ({ children, title, dropdownAndText=false, style }) => {
    return (
        <div >
            <Typography weight="medium" className={s.title}> {title}</Typography>
            <div style={style ? style : {}} className={dropdownAndText ? s.groupWithText : s.group}>
                {children}
            </div>
        </div>
    )
}

export default InputsGroup