import type { NextPage } from 'next'
import { observer } from "mobx-react-lite"
import React, {useRef, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { MainContainer } from '../../src/components/containers/MainContainer/MainContainer'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../src/components/shared/Views/Views'
import {NameEstate} from '../../src/components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../src/components/shared/AdressEstate/AdressEstate'
import { HorizontalTabs } from '../../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET} from '../../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../../src/components/containers/ObjectDescription/ObjectDescription'
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer"
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import PaybackContainer from '../../src/components/containers/PaybackContainer/PaybackContainer'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import {useStore} from '../../src/mobx/stores/HouseStore/HouseStore'
import {useBreadcrumbsStore} from '../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import { UrlObj} from '../../src/api/instance'
import {FILTER_ACTIONS_OPTIONS, FILTER_HOUSE_TYPE_OPTIONS} from '../../src/components/containers/Filter/config'

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
    title: "Онлайн-тур",
  },
  {
    title: "Архитектура",
  },
  {
    title: "Инфраструктура",
  },
  {
    title: "Юридическая чистота",
  },
  {
    title: "Окупаемость",
  },
  {
    title: "Застройщик",
  },
  {
    title: "Записаться на просмотр",
  },
]

const averagePrice ={
  price:'150 001 240',
  priceUSD:' 2 025 221.09',
  priceEU:'1 728 447.47',
  priceMetre:'79 000',
  priceMetreUSD:'1 0066.61',
  priceMetreEU:'910.31',
}

const infrastructureInfo = 'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.'

const House: NextPage = observer((props: any) => {

  const store = useStore()
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

  const breadcrumbs = ['Крым', 'Купить участок', `${store.initialData.name}`]
  const views = [store.initialData.publish,store.initialData.views, store.initialData.agency]

  useEffect(() => {
    setRefs([general.current, tours.current, architec.current, infra.current, legal.current, payback.current, developer.current, record.current])
    store.fetch( Number(router.query.id))
    breadCrumbsStore.addBreadCrumbs(`${FILTER_HOUSE_TYPE_OPTIONS.filter((a: any) => props.type === a.value)[0].label} ${FILTER_ACTIONS_OPTIONS.filter((a: any) => props.orderType === a.value)[0].label}`, 1)
    breadCrumbsStore.addBreadCrumbs(props.name, 2)
  }, [router.query.id, store])

  if( store.initialData.status === 404) router.push('/500')

  return (
    <MainContainer keywords={props.name} title={props.name} city={city} personalAccount={personalAccount} footerColor={'nude'} refs={refs}>
        {
            store.initialData.status  === 404
                ? router.push('/500')
                :<>
                    <Breadcrumbs items={breadcrumbs}/>
                    <Views items={views}/>
                    <NameEstate item={props.name}/>
                    <AdressEstate item={props.address}/>
                    <HorizontalTabs tabs={tabs} refs={refs}/>
                    <div ref={general}>
                        <GeneralInfo info={store.initialData.info_options} price={store.initialData.price} images={IMAGES_SET} />
                    </div>
                    <ObjectDescription items={store.initialData.description_items}/>
                    <div ref={tours}>
                        <ToursContainer  Online_tour={store.initialData.online_tour}/>
                    </div>
                    <div ref={architec}>
                        <ObjectSpecifications specificationsLists={store.initialData.object_specs} title={"Архитектурно-планировочные решения"}/>
                    </div>
                    <div ref={infra}>
                        <Map currentHouse={JSON.parse(JSON.stringify(store.initialData))} infrastructura={infrastructura} location={'infrastructure'} InfrastructureInfo={infrastructureInfo}/>
                    </div>
                    <div ref={legal}>
                        <ObjectLegalPurity legalPurityData={store.initialData.legalPurityData}/>
                    </div>
                    <div ref={payback}>
                        <PaybackContainer averagePrice={averagePrice}/>
                    </div>
                    <div ref={developer}>
                        <ObjectDeveloper developerData={store.initialData.object_developer_info}/>
                    </div>
                    <Mortgage/>
                    <div ref={record}>
                        <Record Record={RecordAgent.Record} title={'дом'}/>
                    </div>
                </>
        }
    </MainContainer>
  )
})

export default House

export async function getServerSideProps({params}: any) {
  const res  = await fetch(`https://estatum.f-case.ru/api/${UrlObj.house}/${params.id}`)

  const object = await res.json()

  return {
      props: object ,
  }
}
