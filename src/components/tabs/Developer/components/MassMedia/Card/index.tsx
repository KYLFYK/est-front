import React from 'react'
import BaseButton from '../../../../../shared/BaseButton/BaseButtons'
import Typography from '../../../../../shared/Typography/Typography'
import s from './index.module.scss'
import Image from 'next/image'

interface Props {
    link: string,
    title: string,
    date: Date,
    icon: string,
    description: string,
}

const DeveloperMassMediaCard: React.FC<Props> = ({ link, title, date, icon, description }) => {

    const onOpenExternalLink = () => {
        const url = link.includes('http') ? link : `https://${link}`
        window.open(url, "_blank")
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header} >
                <div className={s.icon}>
                    <Image alt="icon" src={icon} loader={() => icon} layout="fill" />
                </div>
                <Typography size="small" color="tertiary" > {date.toLocaleDateString()} </Typography>
            </div>
            <Typography className={s.title} weight="medium" color="accent">
                {title}
            </Typography>
            <Typography className={s.description} weight="light">
                {description}
            </Typography>
            <BaseButton type="secondary" className={s.button} onClick={onOpenExternalLink}> Читать статью</BaseButton>
        </div>
    )
}

export default DeveloperMassMediaCard