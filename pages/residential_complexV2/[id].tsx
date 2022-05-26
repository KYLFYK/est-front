import React, {useEffect, useRef, useState} from 'react';
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {instanceV2} from "../../src/api/instancev2";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {HorizontalTabsObjects} from "../../src/components/shared/HorizontalTabs/HorizontalTabsObjects";
import GeneralInfoV2 from "../../src/components/containers/GeneralInfo/GeneralInfoV2";
import ObjectSpecificationsV2 from "../../src/components/containers/ObjectSpecifications/ObjectSpecificationsV2";
import {
    convertSpecificationsIconsText,
    convertSpecificationsIcons, convertInfoColumn
} from "../../src/utils/convertPagesData/convertPagesData";
import {useRouter} from "next/router";
import ObjectDescription from "../../src/components/containers/ObjectDescription/ObjectDescription";
import css from "../../styles/slider.module.scss";

const city = ["Москва", "Санкт-Петербург", "Крым", "Сочи", "Нижний Новгород"];
const personalAccount = [
    { title: "Личный кабинет", href: "/User", message: 0 },
    { title: "Избранное", href: "/User", message: 0 },
    { title: "Сохраненные поиски", href: "/User", message: 0 },
    { title: "Сообщения", href: "/User", message: 12 },
    { title: "Уведомления", href: "/User", message: 3 },
    { title: "Мои объекты", href: "/User", message: 0 },
    { title: "Проверка объекта", href: "/User", message: 0 },
];
const tabs = [
    {
        title: "Об объекте",
    },
    {
        title: "Особенности",
    },
    {
        title: "Архитектура",
    },
    {
        title: "Квартиры",
    },
    {
        title: "Инфраструктура",
    },
    {
        title: "Застройщик",
    },
];
const ResidentComplexV2= () => {

    const router = useRouter()
    const [refs, setRefs] = useState<any>([]);


    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    const [views,setViews]=useState<any>([])
    const [info,setInfo]=useState<any>()
    const [images,setImages]=useState<any>([])

    const [objectTeritori,setObjectTeritori]=useState<any>([])
    const [objectBesopasnost,setObjectBesopasnost]=useState<any>([])

    const [objectExpert,setObjectExpert]=useState<any>([])
    const [objectInjener,setObjectInjener]=useState<any>([])
    const [allHarakteristic,setAllHarakteristic]=useState<any>([])

    const [description_items,setDescription_items]=useState('')


    const general = useRef(null);
    const specs = useRef(null);
    const architec = useRef(null);



    const getObjectId = async () => {
        const id = router.query.id
        const res =  await instanceV2.get(`https://estat.101bot.ru/api/v1/reality-objects/${id}`).then(e=>e.data)
        console.log('objectId',res)

        setName(res.name)
        setViews( ['11.04.2022', res.views])
        setAddress(res.address.full_address)

        const img = res.images.map((img:any)=>({
            id:img.id,
            url:img.image_file
        }))

        setImages(img)
        setDescription_items(res.infrastructure_desc)
        const newInfo = res.params.map((general:any)=>{
            if(general.reality_object_param.reality_object_param_group.name_rus === "Основные характеристики" ){
                return  ({
                    label:general.reality_object_param.name_rus,
                    value:general.value_text
                })
            }
        }).filter((t:any)=>t !== undefined)

        setInfo(newInfo)
        const objectComplex = {
            address:res.address.full_name,
            city:res.address.city, // crimea
            lat:res.address.lat,
            lng:res.address.lon,
            images:res.images.map((img:any)=>({
                id:img.id,
                ult:img.image_file
            })),
            name:res.name,
            infrastructure:res.infrastructure_desc,
            info:res.params.map((general:any)=>{
                if(general.reality_object_param.reality_object_param_group.name_rus === "Основные характеристики" ){
                    return  ({
                        label:general.reality_object_param.name_rus,
                        value:general.value_text
                    })
                }
            }).filter((t:any)=>t !== undefined)
        }
        const allInformation = {
            info: convertInfoColumn(res.params, "Общая информация")
        }
        const houseInfo = {
            info: convertInfoColumn(res.params, "О доме")
        }
         const allHarakteristic = [
             {label:res.name,value:''},
             {label:'Адрес',value:res.address.full_address},
             {label:'Срок сдачи',value:res.params.find((f:any)=>f.reality_object_param.name_rus === 'Срок сдачи').value_text},
             {label:"Общая информация",value:''},
             ...allInformation.info,
             {label:"О доме",value:''},
             ...houseInfo.info]
        setAllHarakteristic(allHarakteristic)

        const objectTeritori = {
            subtitle: "Объекты на территории жилого комплекса",
            specificationsItems:convertSpecificationsIcons(res.params,"Объекты на территории жилого комплекса" )
        }
        setObjectTeritori(objectTeritori)

        const objectBesopasnost = {
            subtitle: "Безопасность",
            specificationsItems:convertSpecificationsIcons(res.params,"Безопасность" )
        }
        setObjectBesopasnost(objectBesopasnost)
        const objectExpert = {
            subtitle: 'Строительно-техническая экспертиза',
            specificationsItems:convertSpecificationsIconsText(res.params,'Строительно-техническая экспертиза' )
        }

        setObjectExpert(objectExpert)

        const objectInjener = {
            subtitle: 'Инженерные коммуникации',
            specificationsItems:convertSpecificationsIconsText(res.params,'Инженерные коммуникации')
        }
        setObjectInjener(objectInjener)

        // console.log("objectTeritori",objectTeritori,objectBesopasnost,objectExpert,objectInjener)
        console.log("objectComplex",objectComplex)
    }

    useEffect(()=>{
        if(router.query.id !== undefined){
            getObjectId()
        }
    },[])

    return (
        <MainContainer
            keywords={name}
            title={name}
            city={city}
            personalAccount={personalAccount}
            footerColor={"accent"}
            refs={refs}
        >
            <div className={css.vh_wh}>
                <Breadcrumbs location={"object"} />
                <Views items={views} />
                <NameEstate item={name} />
                <HorizontalTabsObjects tabs={tabs} refs={refs} />
                <div ref={general}>
                    <GeneralInfoV2
                        // info={[
                        //     {label:name,value:''},
                        //     {label:'Адрес',value:address},
                        //     {label:'Срок сдачи',value:''},
                        //     {label:name,value:''},
                        //     {label:name,value:''},
                        //
                        // ]}
                        // info={info}
                        info={allHarakteristic}
                        images={images}
                        // classSlider={css.image}
                    />
                </div>
                <div ref={specs}>
                    <ObjectSpecificationsV2
                        specificationsLists={[objectTeritori,objectBesopasnost]}
                        title={"Особенности"}
                    />
                </div>
                <div ref={architec}>
                    <ObjectSpecificationsV2
                        specificationsLists={[objectExpert,objectInjener]}
                        title={"Архитектурно-планировочные решения"}
                    />
                </div>
                <ObjectDescription items={[description_items]} />
            </div>

        </MainContainer>
    );
};

export default ResidentComplexV2