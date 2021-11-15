import React from 'react';
import css from './agentsContainer.module.scss'
import Typography from "../../shared/ui/Typography/Typography";
import { AgentBlock } from '../../shared/ui/AgentBlock/AgentBlock';

export const AgentsContainer = () => {

    return (
        <div className={css.containerAgentsBlock}>
            <div className={css.margin}>
                <Typography size={'medium'} weight="bold"> Застройщики и агества, которые нам доверяют </Typography>
            </div>
            <div className={css.block}>
                <AgentBlock
                    name={'Василий Сидоров'}
                    heldPost={'Старший агент'}
                    img={'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'}
                />
                <AgentBlock
                    name={'Виталий Панкратов'}
                    heldPost={'Старший агент'}
                    img={'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'}
                />
                <AgentBlock
                    name={'Дарья Веселовская'}
                    heldPost={'Старший агент'}
                    img={'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'}
                />
            </div>
        </div>
    );
};
