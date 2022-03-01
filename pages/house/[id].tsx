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
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer"
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import {infrastructura} from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import {useBreadcrumbsStore} from '../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import {UrlObj} from '../../src/api/instance'
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS} from '../../src/components/containers/Filter/config'
import {sortGuide, sortObject_specsTypeGuide} from "../../src/utils/conversionIcons/conversionIcons";
import {conversionDate} from "../../src/utils/conversionDate/conversionDate";
import PaybackContainer from "../../src/components/containers/PaybackContainer/PaybackContainer";
import {plusUnitMeasurement} from "../../src/utils/plusUnitMeasurement/plusUnitMeasurement";

const city = ['Москва', 'Крым', 'Сочи']

const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
    {title: 'Избранное', href: '/User', message: 0},
    {title: 'Сохраненные поиски', href: '/User', message: 0},
    {title: 'Сообщения', href: '/User', message: 12},
    {title: 'Уведомления', href: '/User', message: 3},
    {title: 'Мои объекты', href: '/User', message: 0},
    {title: 'Проверка объекта', href: '/User', message: 0},
]

const averagePrice = {
    price: '150 001 240',
    priceUSD: ' 2 025 221.09',
    priceEU: '1 728 447.47',
    priceMetre: '79 000',
    priceMetreUSD: '1 0066.61',
    priceMetreEU: '910.31',
}

const infrastructureInfo = 'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.'

const sortInfoOptions = (option: {}) => {                             // сортировка в нужный формат - info_options
    const infoOptions = []
    const keysOption = Object.keys(option)

    for (let n = 0; n < keysOption.length; n++) {
        //@ts-ignore
        if (keysOption[n] === 'total_floor') infoOptions.push({label: 'Этажи', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'total_area') infoOptions.push({label: 'Общая площадь', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'area') infoOptions.push({label: 'Прощадь дома', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'land_area') infoOptions.push({label: 'Участок', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'bathroom_area') infoOptions.push({label: 'Ванная комната', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'kitchen_area') infoOptions.push({label: 'Кухня', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'total_rooms') infoOptions.push({label: 'Комнат в доме', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
        //@ts-ignore
        if (keysOption[n] === 'living_area') infoOptions.push({label: 'Жилая площадь', value: option[keysOption[n]] !== null ? option[keysOption[n]] : ''
        })
    }
    return infoOptions
}

const House = observer((props: any) => {

    const tabs = [
        {title: "Общая информация",},
        {title: "Онлайн-тур",},
        {title: "Архитектура",},
        {title: "Инфраструктура",},
        props.legalPurityData && {title: "Юридическая чистота"},
        {title: "Окупаемость",},
        props.object_developer_info && {title: "Застройщик"},
        {title: "Записаться на просмотр",},
    ]

    let floors = props.info_options.floors ? props.info_options.floors : [{floor: '', value: ''}]
    const construction_feat = props.info_options.construction_features ? props.info_options.construction_features : [{title: '', value: ''}]
    const construction_features = [...construction_feat]
    // delete props.info_options.floors
    // delete props.info_options.construction_features
    const infoOptions = sortInfoOptions(props.info_options)
    const optionFloors = floors ? floors.map((floo: any) => ({label: floo.floor, value: floo.value})) : [{
        label: '1',
        value: '2'
    }]
    const construction_featuresFilter = construction_features.map((construction, index) => (
        {
            value: index % 2 ? 'construction_features2' : 'construction_features1',
            label: {title: construction.title, text: ''}
        }
    ))

    infoOptions.push(...optionFloors)
    const construction_featuresSpec = {
        subtitle: "Особенности строительства",
        specificationsItems: construction_featuresFilter
    }
    let object_specsGuide: Array<{ value: string, label: { title: string, text: string } }> = props.object_specs.map((guid: any) => sortGuide(guid, guid.subtitle_ru)).filter((f: any) => f !== undefined)
    const object_specs = sortObject_specsTypeGuide(object_specsGuide)
    object_specs.splice(2, 0, construction_featuresSpec)

    const legalPurityData={
        encumbrances: false,
        risks: props.legalPurityData.risks,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            "title": "Адрес",
                            "text": props.legalPurityData.address
                        },
                        {
                            "title": "Кадастровый номер",
                            "text": props.legalPurityData.cadastalNumber
                        },
                        {
                            "title": "Кадастровая стоимость",
                            "text": props.legalPurityData.cadastralPrice,
                        },
                        {
                            "title": "Общая площадь",
                            "text": props.legalPurityData.areaValue + ' ' + props.legalPurityData.areaUnits
                        }
                    ]
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        {
                            title: "Единоличный собственник",
                            text: props.legalPurityData.currentOwnerName
                        },
                        {
                            title: "77-77-08/011/2021-0308",
                            text: conversionDate(props.legalPurityData.currentOwnerStartDate),
                        }
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    description: "Всплывающая подсказка предыдущих владельцев",
                    label: [
                        {
                            title: `${props.legalPurityData.previewOwners.owners.length} владельца`,
                            text: props.legalPurityData.previewOwners.owners.join(''),
                        },
                        {
                            title: "77-77-08/011/2021-0308",
                            text: conversionDate(props.legalPurityData.previewOwners.startDate) + " - " + conversionDate(props.legalPurityData.previewOwners.finishDate)
                        }
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    "encumbrances": props.legalPurityData.encumbrances ?
                        props.legalPurityData.encumbrances.map((encum: any) => (
                            {
                                status: encum.status ? 0 : 1,
                                description: encum.description,
                                text: encum.title
                            }
                        ))
                        : []
                },
            ],
            recomendations:
                props.legalPurityData.recomendations ?
                    props.legalPurityData.recomendations.map((rec: any) => (
                        {
                            value: rec.title,
                            label: rec.description
                        }
                    ))
                    : []
        }
    }

    const breadCrumbsStore = useBreadcrumbsStore()
    const general = useRef(null)
    const tours = useRef(null)
    const architec = useRef(null)
    const infra = useRef(null)
    const legal = useRef(null)
    const payback = useRef(null)
    const developer = useRef(null)
    const record = useRef(null)
    const [refs, setRefs] = useState<any>([])

    const router = useRouter()

    const views = [conversionDate(props.publish), props.views, props.agency]

    useEffect(() => {
        setRefs([general.current, tours.current, architec.current, infra.current, props.legalPurityData && legal.current, 
            payback.current, props.object_developer_info && developer.current, record.current])

        breadCrumbsStore.addBreadCrumbs(`${FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value) ? FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)[0].label : 'нет сделки'} ${FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0] ? FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0].label : 'нет типа'}`, 1)
        breadCrumbsStore.addBreadCrumbs(props.name, 2)
    }, [router.query.id])

    return (
        <MainContainer
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
                {
                    infoOptions &&
                    <GeneralInfo
                        info={plusUnitMeasurement(infoOptions)}
                        price={props.price}
                        images={props.images}
                    />
                }
            </div>
                {
                    props.description && <ObjectDescription items={[props.description]}/>
                }
            <div ref={tours}>
                {
                    props.online_tour && <ToursContainer Online_tour={props.online_tour}/>
                }
            </div>
            <div ref={architec}>
                {
                    object_specs &&
                    <ObjectSpecifications
                        specificationsLists={object_specs}
                        title={"Архитектурно-планировочные решения"}/>
                }
            </div>
            <div ref={infra}>
                <Map currentHouse={JSON.parse(JSON.stringify(props))} infrastructura={infrastructura}
                     location={'infrastructure'} InfrastructureInfo={props.description_items ? props.description_items : ''}/>
            </div>
            <div ref={legal}>
                {
                    legalPurityData &&
                    <ObjectLegalPurity legalPurityData={legalPurityData}/>
                }
            </div>
            <div ref={payback}>
                <PaybackContainer averagePrice={averagePrice}/>
            </div>
            <div ref={developer}>
                {/*<ObjectDeveloper developerData={store.initialData.object_developer_info}/>*/}
            </div>
            <Mortgage/>
            <div ref={record}>
                <Record Record={RecordAgent.Record} title={'дом'}/>
            </div>
        </MainContainer>
    )
})

export default House

export async function getServerSideProps({params}: any) {
    const res = await fetch(`https://estatum.f-case.ru/api/${UrlObj.house}/${params.id}`)

    const house = await res.json()
    return {
        props: house,
    }
}
