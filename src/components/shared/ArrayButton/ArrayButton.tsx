import React, { FC, useState } from 'react';
import css from "./ArrayButton.module.scss";
import BaseButton from "../BaseButton/BaseButtons";

type ArrayButtonType = {
    name: string
    index:number
    className:string
    onActiveTags:(tags:string)=>void
}

const ArrayButton: FC<ArrayButtonType> = ({ name,index,className,onActiveTags }) => {
    const [active, setActive] = useState<boolean>(false)

    const activeTags = (tags:string) =>{
        if(tags=== "Квартира"){
            onActiveTags('apartment')
            setActive(!active)
        }if(tags=== "Дом"){
            onActiveTags('house')
            setActive(!active)
        }if(tags=== "ЖК"){
            onActiveTags('residential-complex')
            setActive(!active)
        }if(tags=== "Участок"){
            onActiveTags('land')
            setActive(!active)
        }
        if(tags=== "Новостройка"){
            onActiveTags('apartment')
            setActive(!active)
        }if(tags=== "Вторичное жилье"){
            onActiveTags('apartment')
            setActive(!active)
        }


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