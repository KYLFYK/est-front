import React from "react"
import ExclamationMarkIcon from "../../../icons/Development/ExclamationMark"
import { Advantage } from "../../shared/Advantage/Advantage"
import HeadLine from "../../shared/HeadLine/HeadLine"
import DeveloperTabs, { IDeveloperTabsData } from "../../tabs/Developer"
import s from './ObjectDeveloper.module.scss'
import Image from 'next/image'
import CircledKeyIcon from "../../../icons/Development/CircledKey"
import CircledSawIcon from "../../../icons/Development/CircledSaw"

interface IObjectDeveloperInfo {
    name: string,
    developerType: string
    logo: string,
    risks: boolean,
    leasedAmmount: string,
    inProgressAmmount: string,
}

interface Props {
    developerInfo: IObjectDeveloperInfo
    tabsData: IDeveloperTabsData
}

const ObjectDeveloper: React.FC<Props> = ({ tabsData, developerInfo }) => {
    return (
        <HeadLine title="Застройщик">
            <div className={s.infoBlock}>
                <Advantage title="Брусника" text="Kомпания" className={s.iconItem}>
                    <div className={s.imgContainer}>
                        <Image className={s.img} src="https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg" alt="logo" layout="fill" />
                    </div>
                </Advantage>

                <Advantage title="Риски" text="Нет" className={s.iconItem}>
                    <ExclamationMarkIcon />
                </Advantage>
                <Advantage title="Сдано" text="183 дома в 103 ЖК" className={s.iconItem}>
                    <CircledKeyIcon />
                </Advantage>

                <Advantage title="Строится" text="5 домов в 3 ЖК" className={s.iconItem}>
                    <CircledSawIcon />
                </Advantage>
            </div>
            <DeveloperTabs tabsData={tabsData} />
        </HeadLine>
    )
}

export default ObjectDeveloper