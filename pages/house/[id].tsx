import type { NextPage } from 'next'
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
import PaybackContainer from '../../src/components/containers/PaybackContainer/PaybackContainer'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

import {fullObjectData} from '../../src/pages/config'

import { useStores } from 'src/hooks/useStores'

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

const House: NextPage = () => {

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
  const currentObject = Number(router.query.id) ? fullObjectData.filter((fod) => fod.object_id === Number(router.query.id))[0] : fullObjectData[0]

  const breadcrumbs = ['Крым', 'Купить участок', `${currentObject.name}`]
  const views = [currentObject.publish, currentObject.views, currentObject.agency]

  useEffect(() => {
    setRefs([general.current, tours.current, architec.current, infra.current, legal.current, payback.current, developer.current, record.current])

  }, [])

  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={currentObject.name}/>
        <AdressEstate item={currentObject.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={currentObject.info_options} price={currentObject.price} images={IMAGES_SET} />
        </div>
        <ObjectDescription items={currentObject.description_items}/>
        <div ref={tours}>
          <ToursContainer Online_tour={currentObject.online_tour}/>
        </div>
        <div ref={architec}>
          <ObjectSpecifications specificationsLists={currentObject.object_specs} title={"Особенности"}/>
        </div>
        <div ref={infra}>
          <Map currentHouse={currentObject} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={legal}>
          <ObjectLegalPurity legalPurityData={currentObject.legalPurityData}/>
        </div>
        <div ref={payback}>
          <PaybackContainer averagePrice={averagePrice}/>
        </div>
        <div ref={developer}>
          <ObjectDeveloper developerData={currentObject.object_developer_info}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record}/>
        </div>
        <Footer color={'nude'}/>
        <ScrollUp/>
    </div>
  )
}

export default House


