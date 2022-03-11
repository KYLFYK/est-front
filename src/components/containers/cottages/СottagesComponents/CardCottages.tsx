import React, {FC} from 'react';
import {Card} from "../../../shared/Mortgage/Card";
import css from "./cottages.module.scss";
import Image from "next/image";
import {myLoader} from "../../../../utils/image/image";
import Typography from "../../../shared/Typography/Typography";

type CardVillageType = {
    id: string
    img: string
    totalArea: string
    price: string
    onClick: () => void
}

const CardCottages: FC<CardVillageType> = ({id, img, totalArea, price, onClick}) => {
    return (
        <div onClick={onClick}>
            <Card className={css.cardPadding}>
                <Image
                    src={img}
                    loader={e => myLoader(e.src, e.width, e.quality)}
                    width='120px'
                    height='95px'
                    className={css.image}
                />

                <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography size={"small"}>
                        {totalArea} м²
                    </Typography>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Typography color={"nude"} size={"small"}>
                        {+price / 1000000} млн ₽
                    </Typography>
                </div>
            </Card>
        </div>
    )
};

export default CardCottages;