import React, { FC } from 'react';
import Image from 'next/image'
import css from './PersonalAccount.module.scss'
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";

type UploadImageType={
    image:string
}

const UploadImage :FC<UploadImageType> = ({image}) => {
    return (
        <div>
            <div >
                {
                    image !== ''
                        ? <Image src={image} width={200} height={200} className={css.image} alt={'photo'}/>
                        : <div className={css.image}></div>
                }
            </div>
            <BaseButton className={css.buttonUpload} >Загрузить фото</BaseButton>
        </div>
    );
};

export default UploadImage;