import React from 'react';
import { IconMail } from '../../../../icons/Agent/IconMail';
import { IconTelegram } from '../../../../icons/Agent/IconTelegram';
import { IconWhatsapp } from '../../../../icons/Agent/IconWhatsapp';
import Typography from '../../../shared/Typography/Typography';
import css from "./AgentInfo.module.scss";
import {IconPhone} from "../../../../icons/Agent/IconPhone";


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
    return (
        <>
            <img className={css.photoAgent} src={img} alt="agent" />
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

