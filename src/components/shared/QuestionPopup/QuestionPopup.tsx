import React from "react"
import QuestionMarkIcon from "../../../icons/QuestionMark/QuestionMarkIcon"
import Typography from "../Typography/Typography"
import s from './QuestionPopup.module.scss'

interface Props {
    text: string
 }

const QuestionPopup: React.FC<Props> = ({text}) => {
    return (
        <div className={s.root}>
            <div className={s.paper}>
                <Typography>{text}</Typography>
            </div>
            <QuestionMarkIcon />
        </div>
    )
}

export default QuestionPopup