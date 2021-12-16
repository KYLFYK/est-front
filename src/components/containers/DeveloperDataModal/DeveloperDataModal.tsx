import React, { FC } from 'react';
import Typography from "../../shared/Typography/Typography";
import { Modal } from '../../shared/Modal/Modal';
import { IconLocation } from '../../../icons/Development/IconLocation';
import { IconKey } from '../../../icons/Development/IconKey';
import { IconDevelopmentObjects } from '../../../icons/Development/IconDevelopmentObjects';
import Image from 'next/image'
import css from './DeveloperData.module.scss'

type DeveloperDataPropsType = {
    img: string
    developer: {
        title: string
        location:string
        passed:string
        objectsDeveloper:Array<{nameObject:string,id:string}>
    }
    setActive: (value: boolean) => void,
    isActive: boolean,
}

export const DeveloperDataModal: FC<DeveloperDataPropsType> = ({ img,  developer,isActive, setActive }) => {

    const myLoader = ( src:string, width:number, quality?:number ) => {
        return ` https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=${quality || 75}`
    }
    return (

        <Modal setActive={() => setActive(false)} active={isActive}>
            <Image
                src={img}
                width='174px' height='60px' alt="emmar" className={css.img}
                loader={e=>myLoader(e.src,e.width,e.quality)}
            />
            <Typography size={'default'} color="accent" className={css.title}>
                {developer.title}
            </Typography>
            <div className={css.gridColumn}>
                <IconLocation />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Место расположения
                    </Typography>
                    <div>
                        <Typography size={'default'} color="accent" weight={'regular'}>
                            {developer.location}
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
                            {developer.passed}
                        </Typography>
                    </div>
                </div>
                <IconDevelopmentObjects />
                <div className={css.marginInfo}>
                    <Typography size={'default'} color="accent">
                        Объекты застройщика
                    </Typography>
                    {
                        developer.objectsDeveloper.map(({ nameObject,id}, index) => (
                            <div key={index} className={css.colorText}>
                                <Typography size={'default'} color="nude">
                                    {nameObject}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Modal>
    );
};

