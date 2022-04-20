import React, {useEffect, useState} from 'react';
import {Modal} from "../../../shared/Modal/Modal";
import {AgentInfo} from '../AgentInfo/AgentInfo';
import Typography from "../../../shared/Typography/Typography";
import {IconWhatsapp} from '../../../../icons/Agent/IconWhatsapp';
import {IconTelegram} from '../../../../icons/Agent/IconTelegram';
import {IconMail} from '../../../../icons/Agent/IconMail';
import Image from 'next/image'
import css from './AgentBlock.module.scss'
import {myLoader} from "../../../../utils/image/image";

type AgentBlockPropsType = {
    img: string
    connection: {
        whatsApp: string,
        telegram: string,
        email: string,
        phone: string
    },
    infoAgent: {
        fullName: string,
        heldPost: string,
        professionalExperience: string,
        completed: string,
        inWork: string,
        whatsApp: string,
        telegram: string,
        phone: string,
        email: string
    }
}

type infoAgent = {
    fullName: string,
    heldPost: string,
    professionalExperience: string,
    completed: string,
    inWork: string,
}

export const AgentBlock: React.FC<AgentBlockPropsType> = ({img, connection, infoAgent}) => {

    const [edit, setEdit] = useState<boolean>(false)
    const [width,setWidth]=useState<number>(200)
    const [height,setHeight]=useState<number>(200)
    useEffect(()=>{
        if (window.innerWidth >319 && window.innerWidth <= 576){
            setWidth(195)
            setHeight(130)
        }
        if(window.innerWidth >576){
            setWidth(200)
            setHeight(200)
        }
    },[])
    return (
        <div className={css.agentBlock}>
            <Image
                unoptimized
                className={css.photoAgent}
                src={img}
                alt="agent"
                height={height}
                width={width}
                loader={e => myLoader(e.src, e.width, e.quality)}
            />
            <div className={css.dataAgent}>
                <div>
                    <Modal setActive={() => setEdit(false)} active={edit}>
                        <AgentInfo infoAgent={infoAgent} connection={connection} img={img}/>
                    </Modal>
                    <div onClick={() => setEdit(true)}>
                        <Typography size={'default'} color="accent" weight={'medium'} className={css.cursorName}>
                            {infoAgent.fullName}
                        </Typography>
                    </div>
                    <div>
                        <Typography size={'default'} className={css.cursor}>
                            {infoAgent.heldPost}
                        </Typography>
                    </div>
                </div>
                <div className={css.info} >
                    <div>
                        <Typography size={'default'}>
                            Связаться
                        </Typography>
                    </div>
                    <div className={css.agentPadding}>
                        {
                            connection.whatsApp !== '' &&
                            <a href={`https://wa.me/${connection.whatsApp}`} rel='noopener'>
                                <IconWhatsapp/>
                            </a>
                        }
                        {
                            connection.telegram !== '' &&
                            // <a href={`tg://resolve?domain=${connection.telegram}`} rel='noopener'>
                            <a href={`https://t.me/${connection.telegram}`} rel='noopener'>
                                <IconTelegram/>
                            </a>
                        }
                        {
                            connection.email !== '' &&
                            <a href={`mailto:blog@${connection.email}`} rel='noopener'>
                                <IconMail/>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
