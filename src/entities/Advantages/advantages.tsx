import React from 'react';
import Typography from "../../shared/ui/Typography/Typography";
import {Advantage} from "../../shared/ui/Advantage/Advantage";
import Mortgage from "../../shared/icons/Advantages/Mortage";
import InfrastructureAnalysis from "../../shared/icons/Advantages/InfrastructureAnalysis";
import Tours from "../../shared/icons/Advantages/Tours";
import AnalysisLegalPurity from "../../shared/icons/Advantages/AnalysisLegalPurity";
import css from './advantages.module.scss'

const moc = [{title:'Ипотека от РКНБ',text:'Используйте ипотечный калькулятор  для расчета своей ставки'},
    {title:'Анализ инфраструктуры',text:'Оцените главные преимущества выбранного дома'},
    {title:'VR и 3D туры',text:'Оцените главные преимущества выбранного дома'},
    {title:'Анализ юридической чистоты',text:'Проверьте дом или квартиру в нашей базе'},
]


const searchIcon = (title:string) => {
    switch (title){
        case 'Ипотека от РКНБ':return <Mortgage />
        case 'Анализ инфраструктуры':return <InfrastructureAnalysis />
        case 'VR и 3D туры':return <Tours />
        case 'Анализ юридической чистоты':return <AnalysisLegalPurity />
        default:return <Mortgage/>
    }
}


export const Advantages = () => {

    return (
        <div className={css.allAdvantages}>
            <Typography size={'medium'} weight="bold" className={css.margin}>
                Наши преимущества
            </Typography>
            <div className={css.advantages}>
                {
                    moc.map(({title,text},index)=>(
                        <Advantage
                            key={index}
                            title={title}
                            text={text}
                        >
                            {
                                searchIcon(title)
                            }
                        </Advantage>
                    ))
                }
            </div>
        </div>
    );
};

