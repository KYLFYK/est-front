import React, { FC } from 'react';
import Image from 'next/image'
import css from './PersonalAccountOwner.module.scss'
import BaseButton from "../../../../../../shared/BaseButton/BaseButtons";
import {myLoader} from "../../../../../../../utils/image/image";

type UploadImageType={
    image:string
}

const UploadImage :FC<UploadImageType> = ({image}) => {
    return (
        <div>
            <div >
                {
                    image !== ''
                        ? <Image
                            src={image} width={200} height={200}
                            className={css.image} alt={'photo'}
                            loader={e=>myLoader(e.src,e.width,e.quality)}
                        />
                        : <div className={css.image}></div>
                }
            </div>
            <BaseButton className={css.buttonUpload} >Загрузить фото</BaseButton>
        </div>
    );
};

export default UploadImage;