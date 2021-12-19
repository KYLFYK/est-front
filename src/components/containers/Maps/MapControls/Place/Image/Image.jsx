import React from 'react';
import Image from 'next/image';
import s from "./Image.module.scss";

export const ImagePlace = ({image}) => {

    return (
        <div className={s.bg}>
            <Image width={290} height={240} src={image} loader={() => image} unoptimized alt='icon' className={s.image}/>
        </div>
    )
};