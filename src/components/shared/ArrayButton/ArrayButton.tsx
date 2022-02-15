import React, { FC, useState } from 'react';
import css from "./ArrayButton.module.scss";
import BaseButton from "../BaseButton/BaseButtons";

type ArrayButtonType = {
    name: string
    className:string
    onActiveTags:(tag:string)=>void
}

const ArrayButton :React.FC<ArrayButtonType> = ({ name,className,onActiveTags }) => {
    const [active, setActive] = useState<boolean>(false)

    const activeTags = (tags:string) =>{
        let tag = '1'
        if(tags=== "Квартира"){
            tag ='apartment'
            setActive(!active)
        }if(tags=== "Дом"){
            tag ='house'
            setActive(!active)
        }if(tags=== "ЖК"){
            tag ='house'

            setActive(!active)
        }if(tags=== "Участок"){
            tag ='house'
            setActive(!active)
        }
        if(tags=== "Новостройка"){
            tag ='new'

            setActive(!active)
        }if(tags=== "Вторичное жилье"){
            tag ='old'
            setActive(!active)
        }
        onActiveTags(tag)
    }

    return (
        <div onClick={() => activeTags(name)} style={{cursor:'default'}} className={className}>
            <BaseButton
                type={"secondary"}
                className={css.margin}
                isActive={active}
            >
                {name}
            </BaseButton>
        </div>

    );
};

export default ArrayButton;