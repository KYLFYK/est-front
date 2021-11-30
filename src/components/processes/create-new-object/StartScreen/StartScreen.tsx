import React from "react"
import ApartmentsIcon from "../../../../icons/ApartmentsIcon/ApartmentsIcon"
import CalendarIcon from "../../../../icons/CalendarIcon/CalendarIcon"
import HouseIcon from "../../../../icons/HouseIcon/HouseIcon"
import KeyIcon from "../../../../icons/KeyIcon/KeyIcon"
import LandIcon from "../../../../icons/LandIcon/LandIcon"
import NavArrowIcon from "../../../../icons/NavArrow/NavArrow"
import TownhouseIcon from "../../../../icons/TownhouseIcon/TownhouseIcon"
import Typography from "../../../shared/Typography/Typography"
import s from './StartScreen.module.scss'
import Link from 'next/link'

const StartScreen = () => {
    return (
        <div>
            <Link href="/">
                <a className={s.link}>
                    <Typography weight="medium" icon={<NavArrowIcon />}>Новый объект</Typography>
                </a>
            </Link>
            <hr color="#F2F2F2" />
            <div className={s.content}>
                <div className={s.row}>

                    <Typography weight="medium">Новый объект</Typography>

                    <div className={s.cardList}>
                        <div className={s.card}>
                            <div className={s.iconBlock}><KeyIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Продать</Typography>
                        </div>
                        <div className={s.card}>
                            <div className={s.iconBlock}><CalendarIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Сдать</Typography>
                        </div>

                    </div>
                </div>
                <div className={s.row}>
                    <Typography weight="medium">Выберите тип недвижимости</Typography>
                    <div className={s.cardList}>
                        <div className={s.card}>
                            <div className={s.iconBlock}><ApartmentsIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Квартира</Typography>
                        </div>
                        <div className={s.card}>
                            <div className={s.iconBlock}><HouseIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Дом</Typography>
                        </div>
                        <div className={s.card}>
                            <div className={s.iconBlock}><TownhouseIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Таунхаус</Typography>
                        </div>
                        <div className={s.card}>
                            <div className={s.iconBlock}><LandIcon /></div>
                            <Typography size="subheaderBig" weight="medium">Участок</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartScreen