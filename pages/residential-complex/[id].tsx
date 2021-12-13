import type { NextPage } from 'next'
import React, {useRef, useEffect, useState} from 'react'
import Header from '../../src/components/widget/Header/Header'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../src/components/shared/Views/Views'
import {NameEstate} from '../../src/components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../src/components/shared/AdressEstate/AdressEstate'
import { HorizontalTabs } from '../../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET, INFO_OPTIONS} from '../../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import { OBJECT_SPECS_MOCK, OBJECT_SPEC_WITHOUT_TEXT } from '../../src/components/containers/ObjectSpecifications/config'
import Planning from '../../src/components/containers/Planning/Planning/Plannings'
import PlanningFilter from '../../src/components/containers/PlanningFilter/PlanningFilter'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { currentHouse, infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {OBJECT_DEVELOPER_INFO} from '../../src/components/containers/ObjectDeveloper/config'
import ConstructProgress from '../../src/components/containers/ConstructProgress/ConstructProgress'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

const city = ['Москва', 'Санкт-Петербург', 'Крым', 'Сочи', 'Нижний Новгород']
const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
  {title: 'Избранное', href: '/User', message: 0},
  {title: 'Сохраненные поиски', href: '/User', message: 0},
  {title: 'Сообщения', href: '/User', message: 12},
  {title: 'Уведомления', href: '/User', message: 3},
  {title: 'Мои объекты', href: '/User', message: 0},
  {title: 'Проверка объекта', href: '/User', message: 0},
]

const breadcrumbs = ['Крым', 'Купить участок', 'Участок в Троицком 30 соток']
const views = ['12.06.2021', '389', 'Агентство: Лунный свет']
const nameEstate = '1-комнатная квартира в центре Сочи'
const adressEstate = 'Россия, Сочи, ул. Ленина, дом 36, квартира 21'

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

const plan = {
    FilterComponent: <PlanningFilter />,
    planningList: Array(7).fill({
        image: '',
        price: 144444,
        title: "Большой домина",
        housing: 3,
        deadline: "2 квартал 2023г",
        floor: 4 
    })
}

const OPTION_DATA = [
  {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'}, 
  {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'}, 
  {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'}, 
  {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
]

const HousingComplex: NextPage = () => {

  const general = useRef(null)
  const specs = useRef(null)
  const architec = useRef(null)
  const plansec = useRef(null)
  const infra = useRef(null)
  const developer = useRef(null)
  const [refs, setRefs] = useState<any>([])

  useEffect(() => {
    setRefs([general.current, specs.current, architec.current, plansec.current, infra.current, developer.current])
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
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={Array(3).fill(OBJECT_SPECS_MOCK)} title={"Особенности"}/>
        </div>
        <div ref={architec}>
          <ObjectSpecifications specificationsLists={Array(3).fill(OBJECT_SPECS_MOCK)} title={"Особенности"}/>
        </div>
        <div ref={plansec}>
          <Planning FilterComponent={plan.FilterComponent} planningList={plan.planningList}/>
        </div>
        <div ref={infra}>
          <Map currentHouse={currentHouse} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={developer}>
          <ObjectDeveloper developerData={OBJECT_DEVELOPER_INFO}/>
        </div>
        <ConstructProgress images={IMAGES_SET} info={OPTION_DATA}/>
        <Footer color={'accent'}/>
        <ScrollUp refs={refs}/>
    </div>
  )
}

export default HousingComplex



