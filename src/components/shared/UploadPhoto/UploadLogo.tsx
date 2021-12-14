import React, {FC} from 'react';
import Image from 'next/image'
import BaseButton from "../BaseButton/BaseButtons";
import Typography from "../Typography/Typography";
import css from './UploadPhoto.module.scss'

type UploadPhotoType = {
    title?: string
}

const UploadPhoto: FC<UploadPhotoType> = ({title}) => {
    return (
        <div className={css.block}>
            <div className={css.block_img}>
                <Image src="" alt="avatar" className={css.img}/>
            </div>
            <BaseButton type="secondary" className={css.button}>
                <Typography size={'small'}>
                    {title ? title : 'Загрузить Лого'}
                </Typography>
            </BaseButton>
        </div>
    );
};

export default UploadPhoto;