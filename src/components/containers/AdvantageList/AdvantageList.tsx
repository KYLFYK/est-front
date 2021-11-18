import React, { FC } from 'react';
import Mortgage from "../../../icons/Advantages/Mortage";
import InfrastructureAnalysis from "../../../icons/Advantages/InfrastructureAnalysis";
import Tours from "../../../icons/Advantages/Tours";
import AnalysisLegalPurity from "../../../icons/Advantages/AnalysisLegalPurity";
import css from './AdvantageList.module.scss'
import HeadLine from '../../shared/HeadLine/HeadLine';
import { Advantage } from '../../shared/Advantage/Advantage';

const searchIcon = (title: string) => {
    switch (title) {
        case 'Ипотека от РКНБ':
            return <Mortgage />
        case 'Анализ инфраструктуры':
            return <InfrastructureAnalysis />
        case 'VR и 3D туры':
            return <Tours />
        case 'Анализ юридической чистоты':
            return <AnalysisLegalPurity />
        default:
            return <Mortgage />
    }
}

type AdvantagesType = {
    advantages: Array<{ title: string, text: string }>
    title: string
}

export const Advantages: FC<AdvantagesType> = ({ advantages, title }) => {

    return (
        <div className={css.allAdvantages}>
            <HeadLine title={'Наши преимущества'}>
                <div className={css.advantages}>
                    {
                        advantages.map(({ title, text }, index) => (
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
            </HeadLine>
        </div>
    );
};

