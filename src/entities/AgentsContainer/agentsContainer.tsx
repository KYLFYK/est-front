import React from 'react';
import css from './agentsContainer.module.scss'
import Typography from "../../shared/ui/Typography/Typography";
import { AgentBlock } from '../../shared/ui/AgentBlock/AgentBlock';


const moc = [{name:'Василий Сидоров',heldPost:'Старший агент', img:'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'},
    {name:'Семён Панкратов ',heldPost:'Старший агент', img:'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'},
    {name:'Петр Петрович',heldPost:'Старший агент', img:'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'},
]

export const AgentsContainer = () => {

    return (
        <div className={css.containerAgentsBlock}>
            <div className={css.margin}>
                <Typography size={'medium'} weight="bold"> Застройщики и агества, которые нам доверяют </Typography>
            </div>
            <div className={css.block}>
                {
                    moc.map(({name,heldPost,img},index)=>(
                        <AgentBlock
                            key={index}
                            name={name}
                            heldPost={heldPost}
                            img={img}
                        />
                    ))
                }
            </div>
        </div>
    );
};
