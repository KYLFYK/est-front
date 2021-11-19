import React, { FC } from 'react';
import css from './AdvantageList.module.scss'
import HeadLine from '../../shared/HeadLine/HeadLine';
import { Advantage } from '../../shared/Advantage/Advantage';
import { IOption } from '../../../utils/interfaces/general';
import { searchIconByValue } from '../../../utils/general/icons';
import { IconTypes } from '../../../utils/interfaces/icons';

export interface IAdvantage {
    title: IOption<IconTypes | string>,
    text?: string
}

type AdvantagesType = {
    advantages: IAdvantage[],
}

export const Advantages: FC<AdvantagesType> = ({ advantages }) => {

    return (
        <div className={css.allAdvantages}>
            <HeadLine title={'Наши преимущества'}>
                <div className={css.advantages}>
                    {
                        advantages.map(({ title, text }, index) => (
                            <Advantage
                                key={index}
                                title={title.label}
                                text={text}
                            >
                                {
                                    searchIconByValue(title.value)
                                }
                            </Advantage>
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

