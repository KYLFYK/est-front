import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import css from "./MyObjectActive.module.scss";
import LineV6 from "../../../../../../shared/CardObject/Lines/LineV6";
import LineV7 from "../../../../../../shared/CardObject/Lines/LineV7";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import Typography from "../../../../../../shared/Typography/Typography";

const myObjectActive = [
    {
        id: '1',
        img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        urlObject: '',
        nameObject: '2-этажный коттердж',
        totalArea: '300м2',
        address: 'г.СП-Б , ул.Ленина 18',
        dateUpdate: '31.08.2021',
        datePublish: '31.08.2021',
        params: [
            {title: 'Показов в поиске', value: '0'},
            {title: 'Просмотров', value: '509'},
            {title: 'Избранное', value: '9'},
        ]
    }, {
        id: '2',
        img: 'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        urlObject: '',
        nameObject: '2-этажный коттердж',
        totalArea: '300м2',
        address: 'г.СП-Б , ул.Ленина 18',
        dateUpdate: '31.08.2021',
        datePublish: '31.08.2021',
        params: [
            {title: 'Показов в поиске', value: '0'},
            {title: 'Просмотров', value: '509'},
            {title: 'Избранное', value: '9'},
        ]
    }
]

const MyObjectActive = () => {
    return (
        <div>
            <SearchOffice type={'active'}/>
            <FilterSearch/>
            {
                myObjectActive.map((object) => (
                        <div key={object.id} className={css.borderCard}>
                            <CardObject
                                img={object.img}
                                className={css.padding}
                            >
                                <LineV6
                                    id={object.id}
                                    onDelete={(id) => console.log(id)}
                                    onEdit={(id) => console.log(id)}
                                    nameObject={object.nameObject}
                                    totalArea={object.totalArea}
                                    dateUpdate={object.dateUpdate}
                                />
                                <LineV7
                                    datePublish={object.datePublish}
                                    address={object.address}
                                />
                                <EnumerationColumn>
                                    <div className={css.df_jc}>
                                        <div style={{display: 'flex'}}>
                                            {
                                                object.params.map((param, index) => (
                                                    <ParamsColumn key={index} title={param.title} value={param.value}/>
                                                ))
                                            }
                                        </div>
                                        <div className={css.cursor}>
                                            <Typography color={"nude"}>
                                                Продвинуть
                                            </Typography>
                                        </div>

                                    </div>
                                </EnumerationColumn>
                            </CardObject>
                        </div>
                    )
                )
            }
        </div>
    );
};

export default MyObjectActive;