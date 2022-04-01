import type { NextPage } from 'next'
import React, {useRef, useEffect, useState} from 'react'
import Header from '../../components/widget/Header/Header'
import {Breadcrumbs} from '../../components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../components/shared/Views/Views'
import {NameEstate} from '../../components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../components/shared/AdressEstate/AdressEstate'
import { HorizontalTabs } from '../../components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET, INFO_OPTIONS} from '../../components/containers/GeneralInfo/config'
import GeneralInfo from '../../components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../../components/containers/ObjectDescription/ObjectDescription'
import {DESCRIPTION_ITEMS} from '../../components/containers/ObjectDescription/config'
import ObjectSpecifications from '../../components/containers/ObjectSpecifications/ObjectSpecifications'
import { OBJECT_SPECS_MOCK } from '../../components/containers/ObjectSpecifications/config'
import Map from '../../components/containers/Maps/MapInfrastructure/index'
import { currentHouse, infrastructura } from '../../components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../components/containers/ObjectLegalPurity/ObjectLegalPurity'
import { OBJECT_LEGAL_PURITY_TABS_DATA } from '../../components/containers/ObjectLegalPurity/config'
import {Mortgage} from '../../components/shared/Mortgage/Mortgage'
import {Record} from '../../components/containers/Record/Record'
import RecordAgent from '../../components/containers/Record/RecordAgent.json'
import { Footer } from '../../components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../components/shared/ScrollUp/ScrollUp'

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
    title: "Об уастке",
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

const legalPurityData = {
  encumbrances: false,
  risks: false,
  tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
}

const breadcrumbs = ['Крым', 'Купить участок', 'Участок в Троицком 30 соток']
const views = ['12.06.2021', '389', 'Агентство: Лунный свет']
const nameEstate = '1-комнатная квартира в центре Сочи'
const adressEstate = 'Россия, Сочи, ул. Ленина, дом 36, квартира 21'

const Plot: NextPage = () => {

  const general = useRef(null)
  const specs = useRef(null)
  const infra = useRef(null)
  const legal = useRef(null)
  const record = useRef(null)
  const [refs, setRefs] = useState<any>([])

  useEffect(() => {
    setRefs([general.current, specs.current, infra.current, legal.current, record.current])
  }, [])

  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={nameEstate}/>
        <AdressEstate item={adressEstate}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={INFO_OPTIONS} price={300000} images={IMAGES_SET} />
        </div>
        <ObjectDescription items={DESCRIPTION_ITEMS}/>
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={Array(3).fill(OBJECT_SPECS_MOCK)} title={"Особенности"}/>
        </div>
        <div ref={infra}>
          <Map InfrastructureInfo={'asd;kj'} currentHouse={currentHouse} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={legal}>
          <ObjectLegalPurity legalPurityData={legalPurityData}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record} nameObject={nameEstate}/>
        </div>
        <Footer color={'nude'}/>
        <ScrollUp/>
    </div>
  )
}

export default Plot



