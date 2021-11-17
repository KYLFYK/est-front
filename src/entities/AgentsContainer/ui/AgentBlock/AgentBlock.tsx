import React, {useState} from 'react';
import {Modal} from "../../../Modal/Modal";
import {IconWhatsapp} from "../../../../shared/icons/Agent/IconWhatsapp";
import { IconTelegram } from '../../../../shared/icons/Agent/IconTelegram';
import {IconMail} from "../../../../shared/icons/Agent/IconMail";
import { AgentInfo } from '../AgentInfo/AgentInfo';
import Typography from "../../../../shared/ui/Typography/Typography";
import css from './AgentBlock.module.scss'

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
                    <Modal setActive={() => setEdit(false)} active={edit}>
                        <AgentInfo name={name} heldPost={heldPost} />
                    </Modal>
                    <div onClick={()=>setEdit(true)}>
                        <Typography size={'default'} color="accent" weight={'medium'} className={css.cursor}>
                            {name}
                        </Typography>
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
