import React, {FC, useState} from 'react';
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

    const myLoader = ( src:string, width:number, quality?:number ) => {
       return ` https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=&q=${quality || 75}`
    }

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
                    loader={e=>myLoader(e.src,e.width,e.quality)}
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