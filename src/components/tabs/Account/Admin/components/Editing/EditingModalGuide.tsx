import React, {FC} from "react";
import css from "./editing.module.scss";
import Typography from "../../../../../shared/Typography/Typography";
import BaseButton from "../../../../../shared/BaseButton/BaseButtons";

type EditModalGuideType = {
    text: string
    editText: string
    onRemove: () => void
    onBack: () => void
    textRemove: string
}

export const EditModalGuide: FC<EditModalGuideType> = ({text, editText, onRemove, onBack, textRemove}) => {
    return (
        <div className={css.styleModalRemove}>
            <Typography>
                {text}
            </Typography>
            <Typography color={"nude"}>
                {
                    editText
                }
            </Typography>
            <div className={css.df_mT_20}>
                <BaseButton
                    type={'secondary'}
                    isActive
                    className={css.m_RL_10}
                    onClick={onRemove}
                >
                    {textRemove}
                </BaseButton>
                <BaseButton
                    onClick={onBack}
                >
                    отмена
                </BaseButton>
            </div>

        </div>
    )
}