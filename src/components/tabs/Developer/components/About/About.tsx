import React from "react"
import Typography from "../../../../shared/Typography/Typography"
import s from './About.module.scss'

interface Props {
    paragraphs: string[]
}

const DeveloperAbout: React.FC<Props> = ({ paragraphs }) => {
    return (
        <div className={s.wrapper}>
            {paragraphs.map((paragraph, idx) => <Typography key={idx}>{paragraph}</Typography>)}
        </div>
    )
}

export default DeveloperAbout