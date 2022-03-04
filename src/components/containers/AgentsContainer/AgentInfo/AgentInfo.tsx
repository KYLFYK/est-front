import React from 'react';
import { IconMail } from '../../../../icons/Agent/IconMail';
import { IconTelegram } from '../../../../icons/Agent/IconTelegram';
import { IconWhatsapp } from '../../../../icons/Agent/IconWhatsapp';
import Typography from '../../../shared/Typography/Typography';
import {IconPhone} from "../../../../icons/Agent/IconPhone";
import Image from 'next/image'
import css from "./AgentInfo.module.scss";
import {years} from "../../../../utils/years/years";

type AgentDataPropsType = {
    img: string
    connection:{
        whatsApp:string,
        telegram:string,
        email:string
        phone:string
    },
    infoAgent:{
        fullName:string,
        heldPost:string,
        professionalExperience:string,
        completed:string,
        inWork:string,
        whatsApp:string,
        telegram:string,
        phone:string,
        email:string
    }
}

export const AgentInfo: React.FC<AgentDataPropsType> = ({ img,connection,infoAgent }) => {
    const myLoader = ( src:string, width:number, quality?:number ) => {
        return ` https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=${quality || 75}`
    }
    return (
        <>
            <Image
                unoptimized
                className={css.photoAgent}
                src={img}
                alt="agent"
                width={150}
                height={150}
                loader={e=>myLoader(e.src,e.width,e.quality)}
            />
            <Typography size={'default'} color="accent" weight={'medium'} className={css.marginTop} >
                {infoAgent.fullName}
            </Typography>
            <Typography size={'default'} color="accent" >
                {infoAgent.heldPost}
            </Typography>
            <div className={css.gridConnection}>
                <div className={css.marginData}>
                    {
                        infoAgent.whatsApp !== '' &&
                        <a href={`https://wa.me/${infoAgent.whatsApp}`} rel='noopener' className={css.linkStyle}>
                            <div style={{display:'flex'}}>
                                <IconWhatsapp />
                                <Typography size={'default'} color="accent"  >
                                    {infoAgent.whatsApp}
                                </Typography>
                            </div>
                        </a>
                    }
                </div>

                <div className={css.marginData}>
                    {
                        infoAgent.telegram !== '' &&
                        // <a href={`tg://resolve?domain=${infoAgent.telegram}`} rel='noopener' className={css.linkStyle}>
                        <a href={`https://t.me/${infoAgent.telegram}`} rel='noopener' className={css.linkStyle}>
                            <div style={{display:'flex'}}>
                                <IconTelegram/>
                                <Typography size={'default'} color="accent"  >
                                    {infoAgent.telegram}
                                </Typography>
                            </div>
                        </a>
                    }
                </div>

                <div className={css.marginData}>
                    {
                        infoAgent.phone !== '' &&
                        <a href={`tel:+${infoAgent.phone}`} rel='noopener' className={css.linkStyle}>
                            <div style={{display:'flex'}}>
                                <IconPhone/>
                                <Typography size={'default'} color="accent"  >
                                    {infoAgent.phone}
                                </Typography>
                            </div>
                        </a>
                    }
                </div>

                <div className={css.marginData}>
                    {
                        infoAgent.email !== '' &&
                        <a href={`mailto:blog@${infoAgent.email}`} rel='noopener' className={css.linkStyle} >
                            <div style={{display:'flex'}}>
                                <IconMail />
                                <Typography size={'default'} color="accent"  >
                                    {infoAgent.email}
                                </Typography>
                            </div>
                        </a>
                    }
                </div>
            </div>
        </>
    );
};

