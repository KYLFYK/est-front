import React, {useState} from 'react';
import { Modal } from '../../../entities/Modal/Modal';
import css from './EstateDevelopers.module.scss'
import Typography from "../Typography/Typography";
import { DeveloperData } from '../DeveloperData/DeveloperData';


type EstateDevelopersPropsType = {
    title: string
    img?: string
}

export const EstateDevelopers: React.FC<EstateDevelopersPropsType> = ({title, img}) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.containerEstate}>
            <Modal setActive={() => setEdit(false)} active={edit}>
                <DeveloperData />
            </Modal>
            <div onClick={() => setEdit(true)}>
                <img
                    className={css.img}
                    src="https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png"
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