import React from 'react';
import { IconMail } from '../../../../icons/Agent/IconMail';
import { IconTelegram } from '../../../../icons/Agent/IconTelegram';
import { IconWhatsapp } from '../../../../icons/Agent/IconWhatsapp';
import Typography from '../../../shared/Typography/Typography';
import {IconPhone} from "../../../../icons/Agent/IconPhone";
import Image from 'next/image'
import css from "./AgentInfo.module.scss";

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
            <div className={css.gridWork}>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent" className={css.cursor}  >
                        Работает
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        {infoAgent.professionalExperience}
                    </Typography>
                </div>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent"  >
                        Завершенных
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        {infoAgent.completed}
                    </Typography>
                </div>
                <div className={css.marginWork}>
                    <Typography size={'default'} color="accent"  >
                        В работе
                    </Typography>
                    <Typography size={'default'} color="accent" weight={'medium'} >
                        {infoAgent.inWork}
                    </Typography>
                </div>
            </div>
            <div className={css.gridConnection}>
                <div className={css.marginData}>
                    <IconWhatsapp />
                    <Typography size={'default'} color="accent"  >
                        {/*{connection.whatsApp}*/}
                        {infoAgent.whatsApp}
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconTelegram />
                    <Typography size={'default'} color="accent"  >
                        {/*{connection.telegram}*/}
                        {infoAgent.telegram}
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconPhone/>
                    <Typography size={'default'} color="accent"  >
                        {/*{connection.phone}*/}
                        {infoAgent.phone}
                    </Typography>
                </div>
                <div className={css.marginData}>
                    <IconMail />
                    <Typography size={'default'} color="accent"  >
                        {/*{connection.email}*/}
                        {infoAgent.email}
                    </Typography>
                </div>
            </div>
        </>
    );
};

