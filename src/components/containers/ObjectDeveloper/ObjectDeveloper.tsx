import React from "react"
import ExclamationMarkIcon from "../../../icons/Development/ExclamationMark"
import { Advantage } from "../../shared/Advantage/Advantage"
import HeadLine from "../../shared/HeadLine/HeadLine"
import DeveloperTabs, { IDeveloperTabsData } from "../../tabs/Developer"
import s from './ObjectDeveloper.module.scss'
import Image from 'next/image'
import CircledKeyIcon from "../../../icons/Development/CircledKey"
import CircledSawIcon from "../../../icons/Development/CircledSaw"

export interface IObjectDeveloperInfo {
    name: string,
    developerType: string
    logo: string,
    risks: boolean,
    leasedAmmount: string,
    inProgressAmmount: string,
    tabsData: IDeveloperTabsData
}

interface Props {
    developerData: IObjectDeveloperInfo
}

const ObjectDeveloper: React.FC<Props> = ({ developerData }) => {
    return (
        <div className={s.container}>
        <HeadLine title="Застройщик">
            <div className={s.infoBlock}>
                <Advantage title={developerData.name} text={developerData.developerType} className={s.iconItem}>
                    <div className={s.imgContainer}>
                        <Image className={s.img} src={developerData.logo} alt="logo" layout="fill" loader={() => developerData.logo} />
                    </div>
                </Advantage>

                <Advantage title="Риски" text={developerData.risks ? "Да" : "Нет"} className={s.iconItem}>
                    <ExclamationMarkIcon />
                </Advantage>
                <Advantage title="Сдано" text={developerData.leasedAmmount} className={s.iconItem}>
                    <CircledKeyIcon />
                </Advantage>

                <Advantage title="Строится" text={developerData.inProgressAmmount} className={s.iconItem}>
                    <CircledSawIcon />
                </Advantage>
            </div>
            <DeveloperTabs tabsData={developerData.tabsData} />
        </HeadLine>
        </div>
    )
}

export default ObjectDeveloper