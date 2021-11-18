import React, { FC, useState } from 'react';
import css from './EditingProfile.module.scss'
import Typography from "../Typography/Typography";
import BaseButton from "../BaseButton/BaseButtons";

type EditingProfileType = {
    title: string
}

const EditingProfile: FC<EditingProfileType> = ({ title, }) => {
    const [save, setSave] = useState<boolean>(false)
    return (
        <div className={css.position}>
            <Typography className={css.margin} size={'medium'} weight={'medium'} > {title} </Typography>
            <div style={{ display: 'flex' }}>
                {
                    !save
                    && <Typography
                        className={css.margin}
                        size={'default'}
                        color={'tertiary'}
                    >
                        Есть несохраненые изменения
                    </Typography>
                }
                <BaseButton type="secondary" isActive>Сохранить</BaseButton>
            </div>
        </div>
    );
};

export default EditingProfile;