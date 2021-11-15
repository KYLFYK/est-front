import React, {useState} from 'react';
import {ModalPersonal} from "../Modal/Modal";
import {IconWhatsapp} from "../../icons/Agent/IconWhatsapp";
import { IconTelegram } from '../../icons/Agent/IconTelegram';
import {IconMail} from "../../icons/Agent/IconMail";
import css from './AgentBlock.module.scss'
import { AgentData } from '../AgentData/AgentData';
import {AgentName} from "../AgentName/AgentName";
import Typography from "../Typography/Typography";

type AgentBlockPropsType = {
    name: string
    heldPost: string
    img: string
}

export const AgentBlock: React.FC<AgentBlockPropsType> = ({name, heldPost, img}) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.agentBlock}>
            <img className={css.photoAgent} src={img} alt="agent"/>
            <div className={css.dataAgent}>
                <div>
                    <ModalPersonal setActive={() => setEdit(false)} active={edit}>
                        <AgentData />
                    </ModalPersonal>
                    <div onClick={()=>setEdit(true)}>
                        <AgentName name={name}/>
                    </div>
                    <div>
                        <Typography size={'default'} color="accent" >
                            {heldPost}
                        </Typography>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography size={'default'} color="accent" >
                            Связаться
                        </Typography>
                    </div>
                    <div className={css.agentPadding}>
                        <a href="">
                            <IconWhatsapp/>
                        </a>
                        <a href="">
                            <IconTelegram/>
                        </a>
                        <a href="">
                            <IconMail/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
