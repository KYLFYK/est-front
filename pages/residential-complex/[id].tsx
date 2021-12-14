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
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import { OBJECT_SPECS_MOCK } from '../../src/components/containers/ObjectSpecifications/config'
import Planning from '../../src/components/containers/Planning/Planning/Plannings'
import PlanningFilter from '../../src/components/containers/PlanningFilter/PlanningFilter'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import ConstructProgress from '../../src/components/containers/ConstructProgress/ConstructProgress'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

import {fullObjectData} from '../../src/pages/config'

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
  const router = useRouter()
  const currentObject = Number(router.query.id) ? fullObjectData.filter((fod) => fod.object_id === Number(router.query.id))[0] : fullObjectData[0]

  const breadcrumbs = ['Крым', 'Купить участок', `${currentObject.name}`]
  const views = ['12.06.2021', '389', 'Агентство: Лунный свет']

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
        <NameEstate item={currentObject.name}/>
        <AdressEstate item={currentObject.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={currentObject.INFO_OPTIONS} price={currentObject.price} images={IMAGES_SET} />
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
          <Map currentHouse={currentObject} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={developer}>
          <ObjectDeveloper developerData={currentObject.OBJECT_DEVELOPER_INFO}/>
        </div>
        <ConstructProgress images={IMAGES_SET} info={OPTION_DATA}/>
        <Footer color={'accent'}/>
        <ScrollUp refs={refs}/>
    </div>
  )
}

export default HousingComplex



