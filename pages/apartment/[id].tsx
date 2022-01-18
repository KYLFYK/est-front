import type { NextPage } from 'next'
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
import ToursContainer from "../../src/components/containers/ToursContainer/ToursContainer"
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'

import {useStore} from '../../src/mobx/stores/ApartamentStore/ApartmentStore'
import {instance, UrlObj} from '../../src/api/instance'

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
    title: "Застройщик",
  },
  {
    title: "Записаться на просмотр",
  }
]

const infrastructureInfo = 'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.'

const Apartment: NextPage =  observer((props: any) => {
  const store = useStore()

  const general = useRef(null)
  const tours = useRef(null)
  const architec = useRef(null)
  const infra = useRef(null)
  const legal = useRef(null)
  const develop = useRef(null)
  const record = useRef(null)
  const [refs, setRefs] = useState<any>([])

  const router = useRouter()

  const breadcrumbs = ['Крым', 'Купить участок', props.name]
  const views = [props.publish, props.views, store.initialData.agency]

  useEffect(() => {
    setRefs([general.current, tours.current, architec.current, infra.current, legal.current, develop.current, record.current]);
    store.fetch(router.query.id)
  }, [router.query.id, store])

  return (
    <MainContainer keywords={props.name} title={props.name} city={city} personalAccount={personalAccount} refs={refs}>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={props.name}/>
        <AdressEstate item={props.address}/>
        <HorizontalTabs refs={refs} tabs={tabs}/>
        <div ref={general}>
          <GeneralInfo info={store.initialData.info_options} price={store.initialData.price} images={IMAGES_SET} />
        </div>
        <ObjectDescription items={store.initialData.description_items}/>
        <div ref={tours}>
          <ToursContainer Online_tour={store.initialData.online_tour}/>
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
        <div ref={develop}>
          <ObjectDeveloper developerData={store.initialData.object_developer_info}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record} title={'квартиру'}/>
        </div>
        <Footer color={'nude'}/>
    </MainContainer>
  )
})

export default Apartment

export async function getServerSideProps({params}: any) {
  const res = await fetch(`https://estatum.f-case.ru/api/${UrlObj.apartment}/${params.id}`)
  const object = await res.json()
  return {
      props: object,
  }
}

