import type { NextPage } from 'next'
import React from 'react'
import Header from '../src/components/widget/Header/Header'

import { HorizontalTabs } from '../src/components/shared/HorizontalTabs/HorizontalTabs'
import {IMAGES_SET, INFO_OPTIONS} from '../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectSpecifications from '../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import { OBJECT_SPECS_MOCK, OBJECT_SPEC_WITHOUT_TEXT } from '../src/components/containers/ObjectSpecifications/config'
import Planning from '../src/components/containers/Planning/Planning/Plannings'
import PlanningFilter from '../src/components/containers/PlanningFilter/PlanningFilter'
import Map from '../src/components/containers/Maps/MapInfrastructure/index'
import { currentHouse, infrastructura } from '../src/components/containers/Maps/MapInfrastructure/config'
import ObjectDeveloper from '../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import {OBJECT_DEVELOPER_INFO} from '../src/components/containers/ObjectDeveloper/config'
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

const HousingComplex: NextPage = () => {

  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>

        <HorizontalTabs tabs={tabs}/>
        <GeneralInfo info={INFO_OPTIONS} price={300000} images={IMAGES_SET} />
        <ObjectSpecifications specificationsLists={Array(3).fill(OBJECT_SPECS_MOCK)} title={"Особенности"}/>
        <Planning FilterComponent={plan.FilterComponent} planningList={plan.planningList}/>
        <Map currentHouse={currentHouse} infrastructura={infrastructura} location={'infrastructure'}/>
        <ObjectDeveloper developerData={OBJECT_DEVELOPER_INFO}/>

        <Footer/>
    </div>
  )
}

export default HousingComplex



