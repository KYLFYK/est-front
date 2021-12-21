import React from 'react';
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV9 from "../../../../../../shared/CardObject/Lines/LineV9";
import LineV1 from "../../../../../../shared/CardObject/Lines/LineV1";
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import LineArray from "../../../../../../shared/CardObject/Lines/LineArray";
import Typography from "../../../../../../shared/Typography/Typography";

const myObjectApplications = [
    {
        id: '1',
        img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        urlObject: '',
        nameObject: '2-этажный коттердж',
        address: 'г.СП-Б , ул.Ленина 18',
        dateBook: '31.08.2021',
        price: '100 000 P/mec',
        agentObject: 'Виталий Панкратов',
        mainSpecifications: ['600m2', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20м2']
    }, {
        id: '2',
        img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        urlObject: '',
        nameObject: '2-этажный коттердж',
        address: 'г.СП-Б , ул.Ленина 18',
        dateBook: '31.08.2021',
        price: '100 000 P/mec',
        agentObject: 'Виталий Панкратов',
        mainSpecifications: ['600m2', '3 этажа', 'Бассейн', 'Гараж 50м2', 'Терраса 20м2']
    }
]

const MyObjectApplications = () => {
    const onBook = (id: string) => {
        console.log(id, 'onBook')
    }
    return (
        <div>
            <SearchOffice type={'owner'}/>
            <FilterSearch/>
            {
                myObjectApplications.map(object => (
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <div>
                                <LineV1
                                    type={'Забронировать'}
                                    id={object.id}
                                    name={object.nameObject}
                                    typeObject={'Аренда'}
                                    onBook={onBook}
                                    price={object.price}
                                />
                            </div>
                            <LineV9
                                address={object.address}
                            />
                            <LineArray mainSpecifications={object.mainSpecifications}/>
                            <div style={{display: 'flex'}}>
                                <div style={{display: 'flex'}}>
                                    <Typography weight={"light"} color={"tertiary"}>
                                        Агент:
                                    </Typography>
                                    <Typography color={"tertiary"}>
                                        {object.agentObject}
                                    </Typography>
                                </div>
                                <div style={{display: 'flex', marginLeft: "20px"}}>
                                    <Typography weight={"light"} color={"tertiary"}>
                                        От:
                                    </Typography>
                                    <Typography color={"tertiary"}>
                                        {object.dateBook}
                                    </Typography>
                                </div>
                            </div>

                        </CardObject>
                    </div>
                ))
            }
        </div>
    );
};

export default MyObjectApplications;