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
import Planning from '../../src/components/containers/Planning/Planning/Plannings'
import PlanningFilter from '../../src/components/containers/PlanningFilter/PlanningFilter'
import Map from '../../src/components/containers/Maps/MapInfrastructure/index'
import { infrastructura } from '../../src/components/containers/Maps/MapInfrastructure/config'
import ObjectDeveloper from '../../src/components/containers/ObjectDeveloper/ObjectDeveloper'
import ConstructProgress from '../../src/components/containers/ConstructProgress/ConstructProgress'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'
import {useStoreResidentialComplex} from "../../src/mobx/residentialСomplex/complex/complex";
import {fullObjectData} from '../../src/pages/config'
import {observer} from "mobx-react-lite";

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

const ResidentialComplex: NextPage = observer(() => {
    const ResidentialComplex = useStoreResidentialComplex()
    const router = useRouter();
    const { id } = router.query;

  const currentObject = Number(router.query.id) ? fullObjectData.filter((fod) => fod.object_id === Number(router.query.id))[0] : fullObjectData[0]

  const breadcrumbs = ['Крым', 'Купить', `${ResidentialComplex.initialData.name}`]
  const views = [ResidentialComplex.initialData.publish, ResidentialComplex.initialData.views, ResidentialComplex.initialData.agency]

  const general = useRef(null)
  const specs = useRef(null)
  const architec = useRef(null)
  const plansec = useRef(null)
  const infra = useRef(null)
  const developer = useRef(null)
  const [refs, setRefs] = useState<any>([])

    useEffect(()=>{
        ResidentialComplex.fetch(id ? id.toString() : '0')
    },[ResidentialComplex,id])

  useEffect(() => {
    setRefs([general.current, specs.current, architec.current, plansec.current, infra.current, developer.current])
  }, [])

  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <Views items={views}/>
        <NameEstate item={ResidentialComplex.initialData.name}/>
        <AdressEstate item={ResidentialComplex.initialData.address}/>
        <HorizontalTabs tabs={tabs} refs={refs}/>
        <div ref={general}>
          <GeneralInfo info={ResidentialComplex.initialData.info_options} price={ResidentialComplex.initialData.price} images={IMAGES_SET} />
        </div>
        <div ref={specs}>
          <ObjectSpecifications specificationsLists={ResidentialComplex.initialData.object_specs} title={"Особенности"}/>
        </div>
        <div ref={architec}>
          <ObjectSpecifications specificationsLists={ResidentialComplex.initialData.object_specs} title={"Архитектурно-планировочные решения"}/>
        </div>
        <div ref={plansec}>
          <Planning FilterComponent={<PlanningFilter />} planningList={ResidentialComplex.initialData.planningList}/>
        </div>
        <div ref={infra}>
          <Map InfrastructureInfo={ResidentialComplex.initialData.infrastructureInfo} currentHouse={ResidentialComplex.initialData} infrastructura={infrastructura} location={'infrastructure'}/>
        </div>
        <div ref={developer}>
          <ObjectDeveloper developerData={ResidentialComplex.initialData.object_developer_info}/>
        </div>
        <ConstructProgress images={IMAGES_SET} info={ResidentialComplex.initialData.schedule}/>
        <Footer color={'accent'}/>
        <ScrollUp refs={refs}/>
    </div>
  )
})

export default ResidentialComplex



