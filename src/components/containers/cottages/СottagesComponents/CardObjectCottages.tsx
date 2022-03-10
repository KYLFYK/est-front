import React, {FC, useState} from 'react';
import Image from "next/image";
import {myLoader} from "../../../../utils/image/image";
import css from "./cottages.module.scss";
import {ToggleButtons} from "../../../shared/ToggleButtons/ToggleButtons";

type CardObjectCottages = {
    data: {
        id: string,
        img: string
        totalArea: string
        price: string
        url: string
        info: {
            planning: {
                img: string
                options: Array<{
                    icon: string
                    title: string
                    value: string
                }>
            }
        }
    }
}

const CardObjectVillage: FC<CardObjectCottages> = ({data}) => {
    const [active, setActive] = useState<string>('Планировка')

    return (
        <div style={{display: 'flex'}}>
            <div style={{margin: '20px 80px',display:'flex',justifyContent:"space-between",flexDirection:"column"}}>
                <Image
                    src={data.img}
                    loader={e => myLoader(e.src, e.width, e.quality)}
                    width='426px'
                    height='359px'
                    className={css.imagePlaning}
                />
                <div style={{marginTop: '20px', height: "40px"}}>
                    <ToggleButtons
                        items={[
                            {label: 'Планировка', value: 'Планировка'},
                            {label: 'Отделка', value: 'Отделка'},
                            {label: 'Фасад', value: 'Фасад'},
                            {label: '3D-тур', value: '3D-тур'}]}
                        onChange={setActive}
                        activeValue={active}
                        classNameButton={css.buttonToggle}
                    />
                </div>

            </div>



        </div>
    )
};

export default CardObjectVillage;