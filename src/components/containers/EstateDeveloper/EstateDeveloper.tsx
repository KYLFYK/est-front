import React, { useState } from 'react';
import { Modal } from '../../shared/Modal/Modal';
import css from './EstateDevelopers.module.scss'
import Typography from "../../shared/Typography/Typography";
import { DeveloperDataModal } from '../DeveloperDataModal/DeveloperDataModal';


type EstateDevelopersPropsType = {
    title: string
    img: string
}

const nameObject = ['ЖК Космический-7', 'ЖК Космический-2', 'ЖК Космический-3', 'ЖК Космический-4', 'ЖК Космический-5']

export const EstateDeveloper: React.FC<EstateDevelopersPropsType> = ({ title, img }) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.containerEstate}>
            <DeveloperDataModal
                img={img}
                title={'Инвестиционная компания, основанная в 1997 году'}
                location={'Дубай, Объединенные Арабские Эмираты'}
                passed={'54 дома в 6 ЖК'}
                objectDeveloper={nameObject}
                setActive={setEdit}
                isActive={edit}
            />
            <div onClick={() => setEdit(true)}>
                <img
                    className={css.img}
                    src={img}
                    alt="emmar"
                />
            </div>
            <div>
                <div className={css.infoCompany}>
                    <Typography size={'default'} color="accent" >{title} </Typography>
                    <Typography size={'small'} >lorem ipsum </Typography>
                </div>
            </div>
        </div>
    );
};