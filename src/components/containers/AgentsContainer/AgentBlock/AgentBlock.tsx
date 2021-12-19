import React, { useState } from 'react';
import { Modal } from "../../../shared/Modal/Modal";
import { AgentInfo } from '../AgentInfo/AgentInfo';
import Typography from "../../../shared/Typography/Typography";
import { IconWhatsapp } from '../../../../icons/Agent/IconWhatsapp';
import { IconTelegram } from '../../../../icons/Agent/IconTelegram';
import { IconMail } from '../../../../icons/Agent/IconMail';
import Image from 'next/image'
import css from './AgentBlock.module.scss'

type AgentBlockPropsType = {
    img: string
    connection:{
        whatsApp:string,
        telegram:string,
        email:string,
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

type infoAgent = {
    fullName:string,
    heldPost:string,
    professionalExperience:string,
    completed:string,
    inWork:string,
}

export const AgentBlock: React.FC<AgentBlockPropsType> = ({ img,connection,infoAgent }) => {

    const myLoader = ( src:string, width:number, quality?:number ) => {
        return ` https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=${quality || 75}`
    }

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.agentBlock}>
            <Image
                className={css.photoAgent}
                src={img}
                alt="agent"
                height={200}
                width={200}
                loader={e=>myLoader(e.src,e.width,e.quality)}
            />
            <div className={css.dataAgent}>
                <div>
                    <Modal setActive={() => setEdit(false)} active={edit}>
                        <AgentInfo infoAgent={infoAgent} connection={connection} img={img} />
                    </Modal>
                    <div onClick={() => setEdit(true)}>
                        <Typography size={'default'} color="accent" weight={'medium'} className={css.cursor}>
                            {infoAgent.fullName}
                        </Typography>
                    </div>
                    <div>
                        <Typography size={'default'}  >
                            {infoAgent.heldPost}
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography size={'default'}  >
                            Связаться
                        </Typography>
                    </div>
                    <div className={css.agentPadding}>
                        <a href={connection.whatsApp}  >
                                <IconWhatsapp />
                        </a>
                        <a href={connection.telegram}>
                            <IconTelegram />
                        </a>
                        <a href={connection.email} >
                            <IconMail />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
