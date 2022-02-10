import React, {FC, useEffect} from 'react';
import { EstateDeveloper } from '../EstateDeveloper/EstateDeveloper';
import HeadLine from '../../shared/HeadLine/HeadLine';
import css from './developers.module.scss'
import {useStoreMainPage} from "../../../mobx/mainPage/mainPage";
import {observer} from "mobx-react-lite";

type DevelopersContainerType = {
    title:string
    // developersInfo:Array<{
    //     img: string,
    //     title: string,
    //     description:string,
    //     developerInfo:{
    //         title: string,
    //         location:string,
    //         passed:string,
    //         objectsDeveloper:Array<{id:string,nameObject:string}>
    //     }
    // }>
}

export const mockObjects = [{nameObject:'EMAAR1',id:'1'},
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
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: 'EMMAR1',
    description:'lorem ipsum1',
    developerInfo:developerInfo
},{
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: 'EMMAR2',
    description:'lorem ipsum2',
    developerInfo:developerInfo
},{
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: 'EMMAR3',
    description:'lorem ipsum3',
    developerInfo:developerInfo
},{
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: 'EMMAR4',
    description:'lorem ipsum4',
    developerInfo:developerInfo
},{
    img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    title: 'EMMAR5',
    description:'lorem ipsum5',
    developerInfo:developerInfo
},]
// 'Застройщики и агества, которые нам доверяют'
const DevelopersContainer :FC<DevelopersContainerType> = observer(({title}) => {

    const store = useStoreMainPage()

    useEffect(()=>{
        store.fetchDevelopers()
    },[])

    return (
        <div className={css.containerDevelopersBlock}>
            <HeadLine title={title} >
                <div className={css.containerDevelopers}>
                    {
                        store.initialData.developers && store.initialData.developers.map(({developerInfo,title,img,description},index)=>(
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
})

export default DevelopersContainer;