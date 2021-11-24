import React from "react"
import Typography from "../../../../shared/Typography/Typography"
import s from './DeveloperActivity.module.scss'

interface Props {
    primaryActivities: string[]
    secondaryActivities: string[]
}

const DeveloperActivity: React.FC<Props> = ({ primaryActivities, secondaryActivities }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.group}>
                <Typography weight="light">Основной вид деятельности по ОКВЭД</Typography>
                {primaryActivities.map((activity) => (
                    <Typography key={activity} weight="medium">{activity}</Typography>
                ))}
            </div>
            <div className={s.group}>
                <Typography weight="light">Дополнительные виды деятельности</Typography>
                {secondaryActivities.map((activity) => (
                    <Typography key={activity} weight="medium">{activity}</Typography>
                ))}
            </div>
        </div>
    )
}

export default DeveloperActivity