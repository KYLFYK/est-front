import React, { FC } from 'react';
import Typography from "../../shared/Typography/Typography";
import css from './DeveloperData.module.scss'
import { Modal } from '../../shared/Modal/Modal';
import { IconLocation } from '../../../icons/Development/IconLocation';
import { IconKey } from '../../../icons/Development/IconKey';
import { IconDevelopmentObjects } from '../../../icons/Development/IconDevelopmentObjects';

type DeveloperDataPropsType = {
    img: string
    title: string
    location: string
    passed: string
    objectDeveloper: Array<string>,
    setActive: (value: boolean) => void,
    isActive: boolean,
}

export const DeveloperDataModal: FC<DeveloperDataPropsType> = ({ img, title, location, passed, objectDeveloper, isActive, setActive }) => {
    return (

        <Modal setActive={() => setActive(false)} active={isActive}>
            <img
                src={img}
                width='174px' height='60px' alt="emmar" className={css.img}/>
            <Typography size={'default'} color="accent" className={css.title}>
                {title}
            </Typography>
            <div className={css.gridColumn}>
                <IconLocation />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Место расположения
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'regular'}>
                            {location}
                        </Typography>
                    </div>
                </div>
                <IconKey />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Сдано
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'regular'}>
                            {passed}
                        </Typography>
                    </div>
                </div>
                <IconDevelopmentObjects />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Объекты застройщика
                    </Typography>
                    {
                        objectDeveloper.map((name, index) => (
                            <div key={index} className={css.colorText}>
                                <Typography size={'default'} color="nude">
                                    {name}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};
