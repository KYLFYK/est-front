import React, { useState } from 'react';
import css from './EstateDevelopers.module.scss'
import Typography from "../../shared/Typography/Typography";
import { DeveloperDataModal } from '../DeveloperDataModal/DeveloperDataModal';
import Image from 'next/image'

type EstateDevelopersPropsType = {
    img: string
    title: string
    description:string
    developerInfo:{
        title: string
        location:string
        passed:string
        objectsDeveloper:Array<{nameObject:string,id:string}>
    }
}

export const EstateDeveloper: React.FC<EstateDevelopersPropsType> = ({ title,description, img,developerInfo }) => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={css.containerEstate}>
            <DeveloperDataModal
                img={img}
                developer={developerInfo}
                setActive={setEdit}
                isActive={edit}
            />
            <div onClick={() => setEdit(true)}>
                <Image
                    width={200}
                    height={80}
                    className={css.img}
                    src={img}
                    alt="emmar"
                />
            </div>
            <div>
                <div className={css.infoCompany}>
                    <Typography size={'default'} color="accent" >{title} </Typography>
                    <Typography size={'small'} >{description} </Typography>
                </div>
            </div>
        </div>
    );
};