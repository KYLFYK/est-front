import React from 'react';
import {SearchOffice} from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import css from "../MyObjectActive/MyObjectActive.module.scss";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import LineV8 from "../../../../../../shared/CardObject/Lines/LineV8";
import LineV9 from 'src/components/shared/CardObject/Lines/LineV9';
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import Typography from "../../../../../../shared/Typography/Typography";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";

const myObjectArchives =[
    {
        id:'1',
        img:'https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg',
        url:'',
        nameObject:'2-этажный коттедж',
        totalArea:' 300м2',
        address:'г.СП-Б, ул.Ленина 18',
        status:'Черновик',
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
        status:'Отклонено',
        rating:[
            {title:'Показов в поиске',value:'0'},
            {title:'Просмотров',value:'509'},
            {title:'Избранное',value:'9'},
        ]
    }
]

const MyObjectArchives = () => {

    const onDelete = (id:string) => {
        console.log(id,'onDelete')
    }
    const onEdit = (id:string) => {
        console.log(id,'onDelete')
    }

    return (
        <div>
            <SearchOffice type={'draft'} />
            <FilterSearch />
            {
                myObjectArchives.map((object)=>(
                    <div key={object.id} className={css.borderCard}>
                        <CardObject
                            img={object.img}
                            className={css.padding}
                        >
                            <LineV8
                                nameObject={object.nameObject}
                                totalArea={object.totalArea}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                id={object.id}
                                status={object.status}
                            />
                            <LineV9 address={object.address} />
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
                                            Архивировать
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

export default MyObjectArchives;