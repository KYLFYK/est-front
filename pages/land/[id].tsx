import {observer} from "mobx-react-lite"
import React, {useRef, useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {MainContainer} from '../../src/components/containers/MainContainer/MainContainer'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../src/components/shared/Views/Views'
import {NameEstate} from '../../src/components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../src/components/shared/AdressEstate/AdressEstate'
import {HorizontalTabs} from '../../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET} from '../../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../../src/components/containers/ObjectDescription/ObjectDescription'
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import {infrastructura} from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import {UrlObj} from '../../src/api/instance'
import {IgetLandIdSSPType, ObjectLandType} from "../../src/api/obj/land";
import {conversionDate} from "../../src/utils/conversionDate/conversionDate";
import {sortObject_specsTypeGuide, sortGuide} from "../../src/utils/conversionIcons/conversionIcons";
import {useBreadcrumbsStore} from '../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS} from '../../src/components/containers/Filter/config'
import ErrorPage from "../404";

const city = ['Москва', 'Крым', 'Сочи']
const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
    {title: 'Избранное', href: '/User', message: 0},
    {title: 'Сохраненные поиски', href: '/User', message: 0},
    {title: 'Сообщения', href: '/User', message: 12},
    {title: 'Уведомления', href: '/User', message: 3},
    {title: 'Мои объекты', href: '/User', message: 0},
    {title: 'Проверка объекта', href: '/User', message: 0},
]

const tabs = [{
    title: "Общая информация",
},
    {
        title: "Об участке",
    },
    {
        title: "Инфраструктура",
    },
    {
        title: "Юридическая чистота",
    },
    {
        title: "Записаться на просмотр",
    },
]

const Land = observer((props: ObjectLandType) => {

    const breadCrumbsStore = useBreadcrumbsStore()
    const general = useRef(null)
    const specs = useRef(null)
    const infra = useRef(null)
    const legal = useRef(null)
    const record = useRef(null)
    const [refs, setRefs] = useState<any>([])

    const router = useRouter()

    // if( props.name === undefined  &&
    //     props.address === undefined  &&
    //     props.info_options === undefined
    //     ) router.push('https://estatum.f-case.ru/')

    const views = [props.publish ? props.publish : '', props.views?.toString() ? props.views?.toString() : '', props.agency ? props.agency : '']

    useEffect(() => {
        setRefs([general.current, specs.current, infra.current, legal.current, record.current])
        breadCrumbsStore.addBreadCrumbs(`${FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value) ? FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)[0].label : 'нет сделки'} ${FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0] ? FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0].label : 'нет типа'}`, 1)
        breadCrumbsStore.addBreadCrumbs(props.name, 2)
    }, [router.query.id])


    return (
        <>
            {
                !props.name === undefined &&
                !props.address === undefined &&
                !props.info_options === undefined
                    ? <ErrorPage/>
                    : <MainContainer
                        keywords={props.name}
                        title={props.name}
                        city={city}
                        personalAccount={personalAccount}
                        footerColor={'nude'}
                        refs={refs}
                    >
                        <Breadcrumbs location={'object'}/>
                        <Views items={views}/>
                        <NameEstate item={props.name}/>
                        <AdressEstate item={props.address}/>
                        <HorizontalTabs tabs={tabs} refs={refs}/>
                        <div ref={general}>
                            <GeneralInfo info={props.info_options} price={props.price} images={props.images}/>
                        </div>
                        <ObjectDescription items={props.description_items}/>
                        <div ref={specs}>
                            {
                                props.object_specs && <ObjectSpecifications specificationsLists={props.object_specs} title={"Об участке"}/>
                            }
                        </div>
                        <div ref={infra}>
                            <Map currentHouse={props} infrastructura={infrastructura} location={'infrastructure'}
                                 InfrastructureInfo={props.description_Info.toString()}/>
                        </div>
                        <div ref={legal}>
                            {
                                props.legalPurityData && <ObjectLegalPurity legalPurityData={props.legalPurityData}/>
                            }

                        </div>
                        <Mortgage/>
                        <div ref={record}>
                            <Record Record={RecordAgent.Record} title={'участок'}/>
                        </div>
                    </MainContainer>
            }
        </>
    )
})

export default Land

// need fix
// 1 images
// 2 map infrastructura
// 3 legalPurityData

export async function getServerSideProps({params}: any) {

    const res = await fetch(`https://estatum.f-case.ru/api/${UrlObj.land}/${params.id}`)
    // const objectPlatApi: IgetLandIdSSPType = await res.json()
    const objectPlatApi = await res.json()

    //@ts-ignore
    const object_specsGuide: Array<{ value: string, label: { title: string, text: string } }> | [] = objectPlatApi?.object_specs?.map(guid => sortGuide(guid, guid.subtitle_ru)).filter(f => f !== undefined)

    const objectPlat = {
        "images": [ // нету
            {"url": "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "id": 0},
            {
                "url": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                "id": 1
            },
            {
                "url": "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
                "id": 2
            }
        ],
        "object_id": objectPlatApi.object_id,
        "lang": "ru",
        "name": objectPlatApi.name,
        "type": objectPlatApi.type,
        "category": objectPlatApi.category,
        "address": objectPlatApi.address,
        "city": objectPlatApi.city ? objectPlatApi.city : '',
        "lat": +objectPlatApi.lat,
        "lng": +objectPlatApi.lng,
        "price": objectPlatApi.price,
        "sort": objectPlatApi.sort ? objectPlatApi.sort : 0,
        "planning": objectPlatApi.planning,
        "favorite": false,
        "orderType": objectPlatApi.orderType,
        "publish": conversionDate(objectPlatApi.publish),
        "views": objectPlatApi.views,
        "agency": objectPlatApi.agency ? objectPlatApi.agency : '',
        "info_options": objectPlatApi.info_options,
        "description_items": [objectPlatApi.description_items],
        "description_Info": [objectPlatApi.description_Info],
        "object_specs": sortObject_specsTypeGuide(object_specsGuide),
        "legalPurityData": { //fail
            "encumbrances": false,
            "risks": objectPlatApi.legalPurityData.risks,
            "tabsData": {
                "general":
                    [
                        {
                            "value": "Данные из ЕГРН",
                            "description": "Это всплывающая подсказка о данных из ЕГРН",
                            "label": [
                                {
                                    "title": "Адрес",
                                    "text": objectPlatApi.legalPurityData.address
                                },
                                {
                                    "title": "Кадастровый номер",
                                    "text": objectPlatApi.legalPurityData.cadastalNumber
                                },
                                {
                                    "title": "Кадастровая стоимость",
                                    "text": objectPlatApi.legalPurityData.cadastralPrice,
                                },
                                {
                                    "title": "Общая площадь",
                                    "text": objectPlatApi.legalPurityData.areaValue + ' ' + objectPlatApi.legalPurityData.areaUnits
                                }
                            ]
                        }
                    ]
                ,
                "founders": [
                    {
                        "value": "Текущие владельцы",
                        "label": [
                            {
                                title: "Единоличный собственник",
                                text: objectPlatApi.legalPurityData.currentOwnerName
                            },
                            {
                                title: "77-77-08/011/2021-0308",
                                text: conversionDate(objectPlatApi.legalPurityData.currentOwnerStartDate),
                            }
                        ]
                    },
                    {
                        "value": "Предыдущие владельцы",
                        "description": "Всплывающая подсказка предыдущих владельцев",
                        "label": [
                            {
                                title: `${objectPlatApi.legalPurityData.previewOwners.owners.length} владельца`,
                                text: objectPlatApi.legalPurityData.previewOwners.owners.join(''),
                            },
                            {
                                title: "77-77-08/011/2021-0308",
                                text: conversionDate(objectPlatApi.legalPurityData.previewOwners.startDate) + " - " + conversionDate(objectPlatApi.legalPurityData.previewOwners.finishDate)
                            }
                        ]
                    }
                ],
                "encumbrances": [
                    {
                        title: "Текущие владельцы",
                        "encumbrances": objectPlatApi.legalPurityData.encumbrances ?
                            objectPlatApi.legalPurityData.encumbrances.map((encum: any) => (
                                {
                                    status: encum.status ? 0 : 1,
                                    description: encum.description,
                                    text: encum.title
                                }
                            ))
                            : [{

                                "status": 0,
                                "description": "Записи не найдены",
                                "text": "Записи не найдены"
                            }]
                    },
                ],
                "recomendations":
                    objectPlatApi.legalPurityData.recomendations ?
                        objectPlatApi.legalPurityData.recomendations.map((rec: any) => (
                            {
                                value: rec.title,
                                label: rec.description
                            }
                        ))
                        : [{
                            value: "Записи не найдены",
                            label: "Записи не найдены"
                        }]
            }
        }

    }
    return {
        props: objectPlat
    }
}


