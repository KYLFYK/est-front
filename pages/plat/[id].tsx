import type { NextPage } from 'next'
import React, {useRef, useEffect, useState, FC} from 'react'
import { useRouter } from 'next/router'
import Header from '../../src/components/widget/Header/Header'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import {Views} from '../../src/components/shared/Views/Views'
import {NameEstate} from '../../src/components/shared/NameEstate/NameEstate'
import {AdressEstate} from '../../src/components/shared/AdressEstate/AdressEstate'
import { HorizontalTabs } from '../../src/components/shared/HorizontalTabs/HorizontalTabs'
import GeneralInfo from '../../src/components/containers/GeneralInfo/GeneralInfo'
import ObjectDescription from '../../src/components/containers/ObjectDescription/ObjectDescription'
import ObjectSpecifications from '../../src/components/containers/ObjectSpecifications/ObjectSpecifications'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectLegalPurity from '../../src/components/containers/ObjectLegalPurity/ObjectLegalPurity'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import {Record} from '../../src/components/containers/Record/Record'
import RecordAgent from '../../src/components/containers/Record/RecordAgent.json'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'
import {observer} from "mobx-react-lite";
import { useStoreLang} from "../../src/mobx/lang/storeLand/storeLang";

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

const Plat: NextPage =  observer(() => {
    // enableStaticRendering(true)
    const PlatStore = useStoreLang()
    const router = useRouter();
    const { id } = router.query;

  const breadcrumbs = ['Крым', 'Купить участок', `${PlatStore.initialData.name}`]
  const views = [PlatStore.initialData.publish, PlatStore.initialData.views, PlatStore.initialData.agency]

  const general = useRef(null)
  const specs = useRef(null)
  const infra = useRef(null)
  const legal = useRef(null)
  const record = useRef(null)
  const [refs, setRefs] = useState<any>([])

    useEffect(()=>{
        PlatStore.fetch(id ? id.toString() : '0')
    },[PlatStore,id])

  useEffect(() => {
    setRefs([general.current, specs.current, infra.current, legal.current, record.current])
  }, [])

    console.log(PlatStore.initialData)
  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={PlatStore.initialData.name}/>
        <AdressEstate item={PlatStore.initialData.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo
              info={PlatStore.initialData.info_options}
              price={PlatStore.initialData.price}
              images={PlatStore.initialData.images} />
        </div>
        <ObjectDescription items={PlatStore.initialData.description_items}/>
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={PlatStore.initialData.object_specs} title={"Особенности"}/>
        </div>
        <div ref={infra}>
          <Map
              currentHouse={PlatStore.initialData}
              InfrastructureInfo={PlatStore.initialData.infrastructureInfo}
              infrastructura={infrastructura}
              location={'infrastructure'}
          />
        </div>
        <div ref={legal}>
          <ObjectLegalPurity legalPurityData={PlatStore.initialData.legalPurityData}/>
        </div>
        <Mortgage/>
        <div ref={record}>
          <Record Record={RecordAgent.Record}/>
        </div>
        <Footer color={'nude'}/>
        <ScrollUp/>
    </div>
  )
})

export default Plat



