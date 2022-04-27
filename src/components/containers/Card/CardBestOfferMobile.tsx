import React from 'react';
import css from './styles.module.scss'
import Image from "next/image";
import {myLoader} from "../../../utils/image/image";
import Typography from "../../shared/Typography/Typography";
import Link from "next/link";

type AgentBlockPropsType = {
    bestOffer:any
    img: string
    // connection: {
    //     whatsApp: string,
    //     telegram: string,
    //     email: string,
    //     phone: string
    // },
    // infoAgent: {
    //     fullName: string,
    //     heldPost: string,
    //     professionalExperience: string,
    //     completed: string,
    //     inWork: string,
    //     whatsApp: string,
    //     telegram: string,
    //     phone: string,
    //     email: string
    // }
}

const CardBestOfferMobile: React.FC<AgentBlockPropsType> = ({img,bestOffer}) => {

    function numberWithSpaces(price: any) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <div className={css.agentBlock}>
            <Image
                unoptimized
                className={css.photoAgent}
                src={img}
                alt="agent"
                height={130}
                width={195}
                loader={e => myLoader(e.src, e.width, e.quality)}
            />
            <div className={css.dataAgent}>
                <Link href={`/${bestOffer.type}/${bestOffer.id}`} >
                    <a className={css.link}>
                        <div>
                            <p className={css.price}>{numberWithSpaces(bestOffer.price)} ₽</p>
                        </div>
                        <div>
                            <Typography size={'default'} className={css.cursorName}>
                                {bestOffer.address}
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                size={'default'}
                                color={bestOffer.type ==="residential-complex" ? 'nude' : "accent"}
                                className={css.cursorName}
                            >
                                {bestOffer.name}
                            </Typography>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default CardBestOfferMobile;