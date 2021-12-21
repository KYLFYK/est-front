import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import LineV10 from "../../../../../../shared/CardObject/Lines/LineV10";
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV9 from 'src/components/shared/CardObject/Lines/LineV9';
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import Typography from "../../../../../../shared/Typography/Typography";

const myObjectDraft =[
    {
        id:'1',
        img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        url:'',
        nameObject:'2-этажный коттедж',
        totalArea:' 300м2',
        address:'г.СП-Б, ул.Ленина 18',
        dateArchive:'31.02.2021',
        rating:[
            {title:'Показов в поиске',value:'0'},
            {title:'Просмотров',value:'509'},
            {title:'Избранное',value:'9'},
        ]
    },{
        id:'2',
        img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        url:'',
        nameObject:'3-этажный коттедж',
        totalArea:' 400м2',
        address:'г.СП-Б, ул.Ленина 28',
        dateArchive:'31.02.2021',
        rating:[
            {title:'Показов в поиске',value:'0'},
            {title:'Просмотров',value:'509'},
            {title:'Избранное',value:'9'},
        ]
    }
]

const MyObjectDraft = () => {
    const onDelete = (id: string) => {
        console.log(id, 'onDelete')
    }
    return (
        <div>
            <SearchOffice type={'archive'}/>
            <FilterSearch/>
            {
                myObjectDraft.map((object)=>(
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <LineV10
                                id={object.id}
                                onDelete={onDelete}
                                nameObject={object.nameObject}
                                totalArea={object.totalArea}
                                dateArchive={object.dateArchive}
                            />
                            <LineV9
                                address={object.address}
                            />
                            <EnumerationColumn>
                                <div className={css.df_jc}>
                                    <div style={{display:'flex'}}>
                                        {
                                            object.rating.map((param, index) => (
                                                <ParamsColumn key={index} title={param.title} value={param.value}/>
                                            ))
                                        }
                                    </div>
                                    <div className={css.cursor}>
                                        <Typography color={"nude"}>
                                            Восстановить
                                        </Typography>
                                    </div>
                                </div>
                            </EnumerationColumn>
                        </CardObject>
                    </div>
                ))

            }
        </div>
    );
};

export default MyObjectDraft;