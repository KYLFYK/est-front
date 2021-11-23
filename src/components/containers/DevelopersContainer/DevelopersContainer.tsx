import React, {FC} from 'react';
import { EstateDeveloper } from '../EstateDeveloper/EstateDeveloper';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './developers.module.scss'

type DevelopersContainerType = {
    title:string
    developersInfo:Array<{
        img: string,
        title: string,
        description:string,
        developerInfo:{
            title: string,
            location:string,
            passed:string,
            objectsDeveloper:Array<{id:string,nameObject:string}>
        }
    }>
}

const mockObjects = [{nameObject:'EMAAR1',id:'1'},
    {nameObject:'EMAAR2',id:'1'},
    {nameObject:'EMAAR3',id:'1'},
    {nameObject:'EMAAR4',id:'1'},
    {nameObject:'EMAAR5',id:'1'},]
const developerInfo = {
    title: 'EMAAR date of foundation 1997',
    location:'xianjos',
    passed:'50 in 50',
    objectsDeveloper:mockObjects
}
export  const mockDevelopers = [{
    img: "https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title: 'EMMAR1',
    description:'lorem ipsum1',
    developerInfo:developerInfo
},{
    img: "https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title: 'EMMAR2',
    description:'lorem ipsum2',
    developerInfo:developerInfo
},{
    img: "https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title: 'EMMAR3',
    description:'lorem ipsum3',
    developerInfo:developerInfo
},{
    img: "https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title: 'EMMAR4',
    description:'lorem ipsum4',
    developerInfo:developerInfo
},{
    img: "https://hasadalingaz.com/wp-content/uploads/2020/03/client16-min.png",
    title: 'EMMAR5',
    description:'lorem ipsum5',
    developerInfo:developerInfo
},]
// 'Застройщики и агества, которые нам доверяют'
const DevelopersContainer :FC<DevelopersContainerType> = ({title,developersInfo}) => {
    return (
        <div className={css.containerDevelopersBlock}>
            <HeadLine title={title} >
                <div className={css.containerDevelopers}>
                    {
                        developersInfo.map(({developerInfo,title,img,description},index)=>(
                            <EstateDeveloper
                                key={index}
                                developerInfo={developerInfo}
                                title={title}
                                description={description}
                                img={img}/>
                        ))
                    }
                </div>
            </HeadLine>
        </div>
    );
};

export default DevelopersContainer;