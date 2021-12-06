import type { NextPage } from 'next'
import React from 'react'
import Header from '../src/components/widget/Header/Header'

import { HorizontalTabs } from '../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET, INFO_OPTIONS} from '../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../src/components/containers/ObjectDescription/ObjectDescription'
import {DESCRIPTION_ITEMS} from '../src/components/containers/ObjectDescription/config'
import ToursContainer from "../src/components/containers/ToursContainer/ToursContainer"
import ObjectSpecifications from '../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import { OBJECT_SPECS_MOCK, OBJECT_SPEC_WITHOUT_TEXT } from '../src/components/containers/ObjectSpecifications/config'
import Map from '../src/components/containers/Maps/MapInfrastructure/index'
import { currentHouse, infrastructura } from '../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import { OBJECT_LEGAL_PURITY_TABS_DATA } from '../src/components/containers/ObjectLegalPurity/config'
import PaybackContainer from '../src/components/containers/PaybackContainer/PaybackContainer'
import ObjectDeveloper from '../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {OBJECT_DEVELOPER_INFO} from '../src/components/containers/ObjectDeveloper/config'
import {Mortgage} from '../src/components/shared/Mortgage/Mortgage'
import {Record} from '../src/components/containers/Record/Record'
import RecordAgent from '../src/components/containers/Record/RecordAgent.json'
import { Footer } from '../src/components/widget/Footer/ui/Footer'

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
  }
]

const Online_tour = {
  '3d_tour': {
      url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
  },
  vr_tour: {
      url: 'https://3d-tur.ru/010/',
  }
}

const legalPurityData = {
  encumbrances: false,
  risks: false,
  tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
}

const averagePrice ={
  price:'150 001 240',
  priceUSD:' 2 025 221.09',
  priceEU:'1 728 447.47',
  priceMetre:'79 000',
  priceMetreUSD:'1 0066.61',
  priceMetreEU:'910.31',
}

const House: NextPage = () => {

  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>

        <HorizontalTabs tabs={tabs}/>
        <GeneralInfo info={INFO_OPTIONS} price={300000} images={IMAGES_SET} />
        <ObjectDescription items={DESCRIPTION_ITEMS}/>
        <ToursContainer Online_tour={Online_tour}/>
        <ObjectSpecifications specificationsLists={Array(3).fill(OBJECT_SPECS_MOCK)} title={"Особенности"}/>
        <Map currentHouse={currentHouse} infrastructura={infrastructura} location={'infrastructure'}/>
        <ObjectLegalPurity legalPurityData={legalPurityData}/>
        <PaybackContainer averagePrice={averagePrice}/>
        <ObjectDeveloper developerData={OBJECT_DEVELOPER_INFO}/>
        <Mortgage/>
        <Record Record={RecordAgent.Record}/>
        <Footer/>
    </div>
  )
}

export default House


