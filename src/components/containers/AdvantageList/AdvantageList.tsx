import React, { FC, useEffect, useState } from 'react';
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
    advantagesMobile: IAdvantage[],
}

export const Advantages: FC<AdvantagesType> = ({ advantages, advantagesMobile }) => {
    const [adv, setAdvantages] = useState(advantages)

    const HandleResize = () => {
        if (window.innerWidth < 768) {
            setAdvantages(advantagesMobile)
        } else {
            setAdvantages(advantages)
        }
    }

    useEffect(() => {
        if (window.innerWidth < 768) {
            setAdvantages(advantagesMobile)
        }
        window.addEventListener("resize", HandleResize);
        return () => {
            window.removeEventListener("resize", HandleResize);
        }
    }, [adv])

    return (
        <div className={css.allAdvantages}>
            <HeadLine title={'Наши преимущества'} className={css.margin}>
                <div className={css.advantages}>
                    {
                        adv.map(({ title, text }, index) => (
                            <Advantage
                                key={index}
                                title={title.label}
                                text={text}
                                classWrapper={index %2==1 ? css.mL_5 : ''}
                            >
                                {
                                    searchIconByValue(title.value as string)
                                }
                            </Advantage>
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

