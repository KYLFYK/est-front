import React from 'react';
import Image from 'next/image';
import s from "./Image.module.scss";

export const ImagePlace = ({image}) => {

    return (
        <div className={s.bg}>
            <Image src={image} alt='icon' className={s.image}/>
        </div>
    )
};