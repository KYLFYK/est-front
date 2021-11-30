import React, { useState } from 'react';
import { Modal } from "../../../shared/Modal/Modal";
import { AgentInfo } from '../AgentInfo/AgentInfo';
import Typography from "../../../shared/Typography/Typography";
import { IconWhatsapp } from '../../../../icons/Agent/IconWhatsapp';
import { IconTelegram } from '../../../../icons/Agent/IconTelegram';
import { IconMail } from '../../../../icons/Agent/IconMail';
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

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.agentBlock}>
            <img className={css.photoAgent} src={img} alt="agent" />
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
