import React, { FC, useState } from 'react';
import css from "./ArrayButton.module.scss";
import BaseButton from "../BaseButton/BaseButtons";

type ArrayButtonType = {
    name: string
    index:number
    className:string
}

const ArrayButton: FC<ArrayButtonType> = ({ name,index,className }) => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div onClick={() => setActive(!active)} style={{cursor:'default'}} className={className}>
            <BaseButton
                type={index > 1 ? "tags" : "secondary"}
                className={css.margin}
                isActive={active}
            >
                {name}
            </BaseButton>
        </div>

    );
};

export default ArrayButton;