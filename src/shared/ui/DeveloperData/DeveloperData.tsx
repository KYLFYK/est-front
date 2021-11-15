import React from 'react';
import {IconLocation} from '../../icons/Development/IconLocation';
import {IconKey} from "../../icons/Development/IconKey";
import {IconDevelopmentObjects} from "../../icons/Development/IconDevelopmentObjects";
import Typography from "../Typography/Typography";
import css from './DeveloperData.module.scss'

// type DeveloperDataPropsType = {
//
// }

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const DeveloperData = () => {
    return (
        <>
            <img
                src="https://uploads-ssl.webflow.com/5f14a5126f7ca904d71ec160/5f1586ce4fa5ae44b6609443_emaar-in-black.png"
                width='174px' height='60px' alt="emmar"/>
            <Typography size={'default'} color="accent" className={css.title}>
                Инвестиционная компания, основанная в 1997 году
            </Typography>
            <div className={css.gridColumn}>
                <IconLocation/>
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Место расположения
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'regular'}>
                            Дубай, Объединенные Араьские Эмираты
                        </Typography>
                    </div>
                </div>
                <IconKey/>
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Сдано
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'regular'}>
                            54 дома в 6 ЖК
                        </Typography>
                    </div>
                </div>
                <IconDevelopmentObjects/>
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Объекты застройщика
                    </Typography>
                    {
                        nameObject.map((name, index) => (
                            <div key={index} className={css.colorText}>
                                <Typography size={'default'} color="nude">
                                    {name}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

