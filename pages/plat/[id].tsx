import { observer } from "mobx-react-lite"
import React, {useRef, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../src/components/shared/Views/Views'
import {NameEstate} from '../../src/components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../src/components/shared/AdressEstate/AdressEstate'
import { HorizontalTabs } from '../../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET} from '../../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../../src/components/containers/ObjectDescription/ObjectDescription'
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import { UrlObj} from '../../src/api/instance'
import {
    IgetLandIdSSPType,
    ObjectLandType,
    sortGuide,
    sortObject_specsTypeGuide
} from "../../src/api/obj/land";

const city = ['Москва', 'Санкт-Петербург', 'Крым', 'Сочи', 'Нижний Новгород']
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

const Plat = observer((props: ObjectLandType) => {

  // console.log('getServerSideProps',props)
  const general = useRef(null)
  const specs = useRef(null)
  const infra = useRef(null)
  const legal = useRef(null)
  const record = useRef(null)
  const [refs, setRefs] = useState<any>([])
  
  const router = useRouter()

  const breadcrumbs = ['Крым', 'Купить участок', `${props.name}`]
  const views = [props.publish,props.views.toString(), props.agency]

  useEffect(() => {
    setRefs([general.current, specs.current, infra.current, legal.current, record.current])
  }, [router.query.id])

  return (
     <MainContainer keywords={props.name} title={props.name} city={city} personalAccount={personalAccount} footerColor={'nude'} refs={refs}>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={props.name}/>
        <AdressEstate item={props.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={props.info_options} price={props.price} images={IMAGES_SET} />
        </div>
        <ObjectDescription items={props.description_items}/>
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={props.object_specs} title={"Об участке"}/>
        </div>
        <div ref={infra}>
          <Map currentHouse={props} infrastructura={infrastructura} location={'infrastructure'} InfrastructureInfo={props.description_Info.toString()}/>
        </div>
        <div ref={legal}>
          <ObjectLegalPurity legalPurityData={props.legalPurityData}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record} title={'участок'}/>
        </div>
    </MainContainer>
  )
})

export default Plat

// need fix
// 1 images
// 2 map infrastructura
// 3 legalPurityData

export async function getServerSideProps({params}: any) {
  const res  = await fetch(`https://estatum.f-case.ru/api/${UrlObj.land}/${params.id}`)
  const objectPlatApi :IgetLandIdSSPType  = await res.json()

    //@ts-ignore
  const object_specsGuide :Array<{value:string,label:{title:string, text:string}}> | [] = objectPlatApi.object_specs.map(guid=>sortGuide(guid,guid.subtitle_ru)).filter(f=>f !== undefined)
  const objectPlat  = {
        "images":[ // нету
            {"url":"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", "id":0},
            {"url":"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", "id":1},
            {"url":"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", "id":2}
        ],
        "object_id": objectPlatApi.object_id,
        "lang": "ru",
        "name": objectPlatApi.name,
        "type": objectPlatApi.type,
        "category": objectPlatApi.category,
        "address": objectPlatApi.address,
        "city": objectPlatApi.city ? objectPlatApi.city : '' ,
        "lat": +objectPlatApi.lat,
        "lng": +objectPlatApi.lng,
        "price": objectPlatApi.price,
        "sort": objectPlatApi.sort?objectPlatApi.sort:0,
        "planning": objectPlatApi.planning,
        "favorite": false,
        "publish": objectPlatApi.publish.substr(0,10).split('-').reverse().join('.'),
        "views": objectPlatApi.views,
        "agency": objectPlatApi.agency?objectPlatApi.agency:'',
        "info_options":objectPlatApi.info_options,
        "description_items":[objectPlatApi.description_items],
        "description_Info":[objectPlatApi.description_Info],
        "object_specs": sortObject_specsTypeGuide(object_specsGuide),
        "legalPurityData":{ //fail
            "encumbrances":false,
            "risks":false,
            "tabsData":{
                "general":
                    [
                        {
                            "value":"Данные из ЕГРН",
                            "description":"Это всплывающая подсказка о данных из ЕГРН",
                            "label":[
                                {
                                    "title":"Адрес",
                                    "text":"Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К"
                                },
                                {
                                    "title":"Кадастровый номер",
                                    "text":"77:06:0009005:4567"
                                },
                                // {
                                //     "title":"Кадастровая стоимость",
                                //     "text":"150 000 000 ₽",
                                //     "description":"Это всплывающая подсказка о данных кадастровой стоимости"
                                // },
                                {
                                    "title":"Общая площадь",
                                    "text":"615 м²"
                                },
                                {
                                    "title":"Этажность",
                                    "text":"3"
                                }
                            ]
                        }
                    ]
                ,
                "founders":[
                    // {
                    //     "value":"Текущие владельцы",
                    //     "label":[
                    //         {
                    //             "title":"Единоличный собственник",
                    //             "text":"Иванов Филипп Васильевич"
                    //         },
                    //         {
                    //             "title":"77-77-08/011/2021-0308",
                    //             "text":"03.08.2021"
                    //         }
                    //     ]
                    // },
                    {
                        "value":"Предыдущие владельцы",
                        "description":"Всплывающая подсказка предыдущих владельцев",
                        "label":[
                            {
                                "title":"2 владельца",
                                "text":"Иванов Филипп Васильевич, Иванов Филипп Васильевич"
                            },
                            {
                                "title":"77-77-08/011/2021-0308",
                                "text":"03.08.2021"
                            }
                        ]
                    }
                ],
                "encumbrances":[
                    {
                        "title":"Текущие владельцы",
                        "encumbrances":[
                            {
                                "status":0,
                                "description":"Description",
                                "text":"Дом в ипотеке"
                            },
                            {
                                "status":1,
                                "description":"Description",
                                "text":"Записей об аренде не найдено"
                            }
                        ]
                    }
                ],
                "recomendations":[
                    {
                        "value":"Квартира меняла владельцев несколько раз за последние 3 года",
                        "label":"Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки."
                    },
                    {
                        "value":"Квартира в собственности менее 5 лет",
                        "label":"При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры."
                    }
                ]
            }
        }
    }
  return {
      props: objectPlat,
  }
}

