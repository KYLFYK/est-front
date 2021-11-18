import React, { FC, useState } from 'react';
import css from "./ArrayButton.module.scss";
import BaseButton from "../BaseButton/BaseButtons";

type ArrayButtonType = {
    name: string
}

const ArrayButton: FC<ArrayButtonType> = ({ name }) => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <div onClick={() => setActive(!active)}>
            <BaseButton
                type="secondary"
                className={css.margin}
                isActive={active}
            >
                {name}
            </BaseButton>
        </div>

    );
};

export default ArrayButton;