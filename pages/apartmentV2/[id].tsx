import type {NextPage} from "next";
import {observer} from "mobx-react-lite";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {MainContainer} from "../../src/components/containers/MainContainer/MainContainer";
import {Breadcrumbs} from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import {Views} from "../../src/components/shared/Views/Views";
import {NameEstate} from "../../src/components/shared/NameEstate/NameEstate";
import {AdressEstate} from "../../src/components/shared/AdressEstate/AdressEstate";
import GeneralInfo from "../../src/components/containers/GeneralInfo/GeneralInfo";
import ObjectDescription from "../../src/components/containers/ObjectDescription/ObjectDescription";
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer";
import ObjectSpecifications from "../../src/components/containers/ObjectSpecifications/ObjectSpecifications";
import Map from "../../src/components/containers/Maps/MapInfrastructure/index";
import ObjectLegalPurity from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity";
import ObjectDeveloper from "../../src/components/containers/ObjectDeveloper/ObjectDeveloper";
import {Mortgage} from "../../src/components/shared/Mortgage/Mortgage";
import {Record} from "../../src/components/containers/Record/Record";
import RecordAgent from "../../src/components/containers/Record/RecordAgent.json";
import {MappingDescription, MappingGeneralInfo, MappingLegalPurity,} from "src/lib/mapping/Apartment/apartmentMapping";
import {MappingDeveloperInfo} from "src/lib/mapping/ResidentComplex/residentComplexMapping";
import {datetoDayFormat} from "src/lib/mapping/objectDates";
import {sortGuide, sortObject_specsTypeGuide,} from "../../src/utils/conversionIcons/conversionIcons";
import {useStore} from "../../src/mobx/stores/ApartamentStore/ApartmentStore";
import {useBreadcrumbsStore} from "../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import {UrlObj} from "../../src/api/instance";
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS,} from "../../src/components/containers/Filter/config";
import {MobileOnly} from "../../src/components/containers/Adaptive/MobileOnly";
import {DesktopOnly} from "../../src/components/containers/Adaptive/DesktopOnly";
import css from "../../styles/slider.module.scss";
import ObjectLegalPurityMobile from "../../src/components/containers/ObjectLegalPurity/ObjectLegalPurityMobile";
import {GeneralInfoMobile} from "../../src/components/containers/GeneralInfo/GeneralInfoMobile";
import {HorizontalTabsObjects} from "../../src/components/shared/HorizontalTabs/HorizontalTabsObjects";
import {instanceV2} from "../../src/api/instancev2";
import {
    convertInfoColumn, convertInfoColumnApartment,
    convertSpecificationsIcons,
    convertSpecificationsIconsText
} from "../../src/utils/convertPagesData/convertPagesData";

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

const infrastructureInfo =
    "В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.";

const Apartment: NextPage = observer((props: any) => {
    const store = useStore();
    const breadCrumbsStore = useBreadcrumbsStore();


    const [name,setName]=useState('')
    const [description_items,setDescription_items]=useState('')
    const [price,setPrice]=useState<any>(0)
    const [views,setViews]=useState<any>([])
    const [address,setAddress]=useState('')
    const [images,setImages]=useState<any>([])
    const [info,setInfo]=useState<any>()


    const [objectExpert,setObjectExpert]=useState<any>([])
    const [objectInjener,setObjectInjener]=useState<any>([])
    const [objectInterer,setObjectInterer]=useState<any>([])
    const [objectMebel,setObjectMebel]=useState<any>([])

    const [allHarakteristic,setAllHarakteristic]=useState<any>([])
    const getApartmentId = async () => {
        // const res =  await instanceV2.get(`https://estat.101bot.ru/api/v1/reality-objects/${router.query.id}`)
        const id = router.query.id
        const res =  await instanceV2.get(`https://estat.101bot.ru/api/v1/reality-objects/${id}`).then(e=>e.data)

        setName(res.name)
        setViews( ['11.04.2022', res.views])
        setAddress(res.address.full_address)
        setPrice(res.price)
        setDescription_items(res.infrastructure_desc)
        const img = res.images.map((img:any)=>({
            id:img.id,
            url:img.image_file
        }))

        setImages(img)

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
            info: convertInfoColumnApartment(res.params, "Основные характеристики")
        }
        const houseInfo = {
            info: convertInfoColumnApartment(res.params, "О доме")
        }
        const allHarakteristic = [
            // {label:res.name,value:''},
            {label:'Адрес',value:res.address.full_address},
            // {label:'Срок сдачи',value:res.params.find((f:any)=>f.reality_object_param.name_rus === 'Срок сдачи').value_text},
            // {label:"Общая информация",value:''},
            ...allInformation.info,
            // {label:"О доме",value:''},
            ...houseInfo.info]
        setAllHarakteristic(allHarakteristic)


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

        const objectInterer = {
            subtitle: "Интерьер и экстерьер",
            specificationsItems:convertSpecificationsIconsText(res.params,"Интерьер и экстерьер" )
        }
        setObjectInterer(objectInterer)

        const objectMebel = {
            subtitle: "Мебель",
            specificationsItems:convertSpecificationsIconsText(res.params,"Мебель" )
        }
        setObjectMebel(objectMebel)
    }

    useEffect(()=>{
        if (router.query.id !== undefined){
            getApartmentId()
        }
    },[])





    const tabs = [
        { title: "Общая информация" },
        (props?.online_tour?.threeD_tour?.url ||
            props?.online_tour?.vr_tour?.url) && { title: "Онлайн-тур" },
        { title: "Архитектура" },
        { title: "Инфраструктура" },
        props.object_developer_info && { title: "Застройщик" },
        props.legalPurityData && { title: "Юридическая чистота" },
        { title: "Записаться на просмотр" },
    ];
    const general = useRef(null);
    const tours = useRef(null);
    const architec = useRef(null);
    const infra = useRef(null);
    const legal = useRef(null);
    const develop = useRef(null);
    const record = useRef(null);
    const [refs, setRefs] = useState<any>([]);

    const router = useRouter();

    // const views = [datetoDayFormat(props.publish), props.views, props?.agency];

    // useEffect(() => {
    //     setRefs([
    //         general.current,
    //         props.online_tour && tours.current,
    //         architec.current,
    //         infra.current,
    //         props.object_developer_info && develop.current,
    //         props.legalPurityData && legal.current,
    //         record.current,
    //     ]);
    //     store.fetch(router.query.id);
    //     breadCrumbsStore.addBreadCrumbs(
    //         `${
    //             FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)
    //                 ? FILTER_ACTIONS_OPTIONS.filter(
    //                     (a: any) => props.orderType === a.value
    //                 )[0].label
    //                 : "нет сделки"
    //         } ${
    //             FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0]
    //                 ? FILTER_HOUSE_TYPE_OPTIONS.filter(
    //                     (a: any) => props.type === a.value
    //                 )[0].label
    //                 : "нет типа"
    //         }`,
    //         1
    //     );
    //     breadCrumbsStore.addBreadCrumbs(props.name, 2);
    // }, [router.query.id, store]);

    return (
        <MainContainer
            keywords={name}
            title={name}
            city={city}
            personalAccount={personalAccount}
            refs={refs}
            footerColor={"accent"}
        >
            <div className={css.vh_wh}>

                <Breadcrumbs location={"object"} />
                <Views items={views} />
                <NameEstate item={name} />
                <DesktopOnly>
                    <AdressEstate item={props.address} />
                    <HorizontalTabsObjects refs={refs} tabs={tabs} />
                    <div ref={general}>
                        <GeneralInfo
                            info={allHarakteristic}
                            price={price}
                            images={images}
                            classSlider={css.image}
                        />
                    </div>
                </DesktopOnly>
                {/*<MobileOnly>*/}
                {/*    <GeneralInfoMobile*/}
                {/*        info={MappingGeneralInfo(props.info_options, props.object_specs)}*/}
                {/*        images={props.images}*/}
                {/*        price={props.price}*/}
                {/*    />*/}
                {/*</MobileOnly>*/}
                <ObjectDescription items={[description_items]} />


                {/*{(props?.online_tour?.threeD_tour?.url ||*/}
                {/*    props?.online_tour?.vr_tour?.url) && (*/}
                {/*    <div ref={tours}>*/}
                {/*        <ToursContainer Online_tour={props.online_tour} />*/}
                {/*    </div>*/}
                {/*)}*/}
                <div ref={architec}>
                    <ObjectSpecifications
                        specificationsLists={[
                            objectExpert !== undefined && objectExpert,
                            objectInjener !== undefined && objectInjener,
                            objectInterer !== undefined && objectInterer,
                            objectMebel !== undefined &&objectMebel]}
                        title={"Архитектурно-планировочные решения"}
                    />
                </div>
                {/*<div ref={infra}>*/}
                {/*    <Map*/}
                {/*        currentHouse={props}*/}
                {/*        location={"infrastructure"}*/}
                {/*        InfrastructureInfo={infrastructureInfo}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*{props.object_developer_info && (*/}
                {/*    <div ref={develop}>*/}
                {/*        <ObjectDeveloper*/}
                {/*            developerData={MappingDeveloperInfo(props.object_developer_info)}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*)}*/}


                {/*<MobileOnly>*/}
                {/*    <div ref={legal}>*/}
                {/*        {props.legalPurityData && (*/}
                {/*            <ObjectLegalPurityMobile legalPurityData={props.legalPurityData} />*/}
                {/*        )}*/}
                {/*    </div>*/}
                {/*</MobileOnly>*/}
                {/*<DesktopOnly>*/}
                {/*    {props.legalPurityData && (*/}
                {/*        <div ref={legal}>*/}
                {/*            {props.legalPurityData && (*/}
                {/*                <ObjectLegalPurity*/}
                {/*                    legalPurityData={MappingLegalPurity(props.legalPurityData)}*/}
                {/*                />*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    )}*/}
                {/*</DesktopOnly>*/}
                {/*<Mortgage />*/}
            </div>
            {/*<div ref={record} style={{backgroundColor:'#1A4862'}} >*/}
            {/*    <Record*/}
            {/*        Record={RecordAgent.Record}*/}
            {/*        title={"квартиру"}*/}
            {/*        nameObject={props.name}*/}
            {/*    />*/}
            {/*</div>*/}
        </MainContainer>
    );
});

export default Apartment;

// export async function getServerSideProps({ params }: any) {
//     const res = await fetch(
//         `${process.env.HOST}${UrlObj.apartment}/${params.id}`
//     );
//     const object = await res.json();
//     return {
//         props: object,
//     };
// }
