import React from "react"
import NavArrowIcon from "../../../../../icons/NavArrow/NavArrow"
import BaseButton from "../../../../shared/BaseButton/BaseButtons"
import Typography from "../../../../shared/Typography/Typography"
import s from './ButtonsPanel.module.scss'

export interface ICreateObjectControls {
    onPrevTab: () => void;
    onNextTab: () => void;
    onPublish?: () => void;
    onPreview?: () => void;
}

const ButtonPanel: React.FC<ICreateObjectControls> = ({ children, onNextTab, onPrevTab, onPreview, onPublish }) => {
    return (
        <div className={s.wrapper}>
            <div>
                {children}
            </div>
            <div className={s.buttonsBlock}>
                <BaseButton iconPosition="start" onClick={onPrevTab} type="secondary" icon={<NavArrowIcon />}>
                    <Typography size="small"> К предыдущему этапу </Typography>
                </BaseButton>
                <div className={s.buttonsGroup}>
                    {onPreview && <Typography color="accent" size="small">Предпросмотр перед публикацией</Typography>}
                    <BaseButton type="secondary">
                        <Typography size="small"> В черновик </Typography>
                    </BaseButton>
                    {onPublish ? (
                        <BaseButton type="primary" onClick={onPublish}>
                            <Typography size="small" color="secondary"> Опубликовать </Typography>
                        </BaseButton>
                    ) : (
                        <BaseButton type="secondary" onClick={onNextTab} isActive icon={<NavArrowIcon className={s.nextArrow} />}>
                            <Typography size="small" color="secondary"> Продолжить </Typography>
                        </BaseButton>
                    )}

                </div>
            </div>
        </div>
    )
}

export default ButtonPanel