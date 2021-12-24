import type { NextPage } from 'next'
import { observer } from "mobx-react-lite"
import React, {useRef, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Header from '../../src/components/widget/Header/Header'
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
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

import {fullObjectData} from '../../src/pages/config'
import {useStore} from '../../src/mobx/stores/ApartamentStore/ApartmentStore'

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

const Apartment: NextPage =  observer(() => {
  const store = useStore()

  const router = useRouter()
  const currentObject = Number(router.query.id) ? fullObjectData.filter((fod) => fod.object_id === Number(router.query.id))[0] : fullObjectData[0]

  const breadcrumbs = ['Крым', 'Купить участок', store.initialData.name]
  const views = [store.initialData.publish, store.initialData.views, store.initialData.agency]

  const general = useRef(null)
  const tours = useRef(null)
  const architec = useRef(null)
  const infra = useRef(null)
  const legal = useRef(null)
  const develop = useRef(null)
  const record = useRef(null)
  const [refs, setRefs] = useState<any>([])

  useEffect(() => {
    setRefs([general.current, tours.current, architec.current, infra.current, legal.current, develop.current, record.current]);
    setTimeout(() => store.fetch(router.query.id), 5000);
  }, [router.query.id])

  return (
    !store.fetching ?
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={store.initialData.name}/>
        <AdressEstate item={store.initialData.address}/>
        <HorizontalTabs refs={refs} tabs={tabs}/>
        <div ref={general}>
          <GeneralInfo info={store.initialData.info_options} price={store.initialData.price} images={IMAGES_SET} />
        </div>
        <ObjectDescription items={store.initialData.description_items}/>
        <div ref={tours}>
          <ToursContainer Online_tour={store.initialData.online_tour}/>
        </div>
        <div ref={architec}>
          <ObjectSpecifications specificationsLists={store.initialData.object_specs} title={"Особенности"}/>
        </div>
        <div ref={infra}>
          <Map currentHouse={JSON.parse(JSON.stringify(store.initialData))} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={legal}>
          <ObjectLegalPurity legalPurityData={store.initialData.legalPurityData}/>
        </div>
        <div ref={develop}>
          <ObjectDeveloper developerData={store.initialData.object_developer_info}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record}/>
        </div>
        <Footer color={'nude'}/>
        <ScrollUp/>
    </div>
    : <h1>Loading...</h1>
  )
})

export default Apartment



