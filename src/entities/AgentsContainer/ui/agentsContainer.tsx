import React from 'react';
import css from './agentsContainer.module.scss'
import {AgentBlock} from './AgentBlock/AgentBlock';
import HeadLine from "../../../shared/ui/HeadLine/HeadLine";


const moc = [{
    name: 'Василий Сидоров',
    heldPost: 'Старший агент',
    img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
},
    {
        name: 'Семён Панкратов ',
        heldPost: 'Старший агент',
        img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
    },
    {name: 'Петр Петрович', heldPost: 'Старший агент', img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'},
]

export const AgentsContainer = () => {

    return (
        <div className={css.containerAgentsBlock}>
            <HeadLine title={'Наши агенты к вашим услугам'}>
                <div className={css.block}>
                    {
                        moc.map(({name, heldPost, img}, index) => (
                            <AgentBlock
                                key={index}
                                name={name}
                                heldPost={heldPost}
                                img={img}
                            />
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};
