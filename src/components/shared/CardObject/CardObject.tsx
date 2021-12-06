import React, {FC, ReactNode} from 'react';
import Image from 'next/image'
import css from './CardObject.module.scss'

type CardObjectType={
    children:ReactNode
    img:string
}

const CardObject :FC<CardObjectType> = ({children,img}) => {
    return (
        <div className={css.card}>
            <Image src={img} height={126} width={229} className={css.image} />
                <div>
                    {
                        children
                    }
                </div>
        </div>
    );
};

export default CardObject;