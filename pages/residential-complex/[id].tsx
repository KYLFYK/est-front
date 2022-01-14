import type { NextPage } from 'next'
import Head from "next/head"
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
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Planning from '../../src/components/containers/Planning/Planning/Plannings'
import PlanningFilter from '../../src/components/containers/PlanningFilter/PlanningFilter'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import ConstructProgress from '../../src/components/containers/ConstructProgress/ConstructProgress'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

import {useStore} from '../../src/mobx/stores/ComplexStore/ComplexStore'
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

const infrastructureInfo = 'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.'

const ResidentialComplex: NextPage = observer((props: any) => {

  const store = useStore()
  const router = useRouter()

  const general = useRef(null)
  const specs = useRef(null)
  const architec = useRef(null)
  const plansec = useRef(null)
  const infra = useRef(null)
  const developer = useRef(null)
  const [refs, setRefs] = useState<any>([])

  const breadcrumbs = ['Крым', 'Купить участок', `${props.name}`]
  const views = [props.createAt, props.views]

  useEffect(() => {
    setRefs([general.current, specs.current, architec.current, plansec.current, infra.current, developer.current])
    store.fetch(router.query.id)
  }, [router.query.id, store])

  return (
    <div >
        <Head>
          <meta name="keywords" content={props.name}></meta>
          <title>{props.name}</title>
        </Head>
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={props.name}/>
        <AdressEstate item={props.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={store.initialData.info_options} price={store.initialData.price} images={IMAGES_SET} />
        </div>
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={store.initialData.object_specs} title={"Особенности"}/>
        </div>
        <div ref={architec}>
          <ObjectSpecifications specificationsLists={store.initialData.object_specs} title={"Архитектурно-планировочные решения"}/>
        </div>
        <div ref={plansec}>
          <Planning FilterComponent={<PlanningFilter />} planningList={props.planningList}/>
        </div>
        <div ref={infra}>
          <Map currentHouse={store.initialData} infrastructura={infrastructura} location={'infrastructure'} InfrastructureInfo={props.property.infrastructure}/>
        </div>
        <div ref={developer}>
          <ObjectDeveloper developerData={store.initialData.object_developer_info}/>
        </div>
        <ConstructProgress images={IMAGES_SET} info={store.initialData.schedule}/>
        <Footer color={'accent'}/>
        <ScrollUp refs={refs}/>
    </div>
  )
})

export default ResidentialComplex

export async function getServerSideProps({params}: any) {
  const res = await fetch(`https://estatum.f-case.ru/api/${UrlObj.complex}/${params.id}`)
  const object = await res.json()
  return {
      props: object,
  }
}