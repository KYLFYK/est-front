import type { NextPage } from 'next'
import { observer } from "mobx-react-lite"
import {useBreadcrumbsStore} from '../../src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore'
import React, {useState} from 'react'
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import { Filter } from '../../src/components/containers/Filter/Filter'
import CardContainer from '../../src/components/containers/CardContainer/CardContainer'
import Map from '../../src/components/containers/Maps/MapFinder/index'
import { mapData } from '../../src/components/containers/Maps/MapFinder/config'
import {useSearchStore} from "../../src/mobx/stores/SearchStore/SearchStore";


const city = ['Москва', 'Крым', 'Сочи']

const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
  {title: 'Избранное', href: '/User', message: 0},
  {title: 'Сохраненные поиски', href: '/User', message: 0},
  {title: 'Сообщения', href: '/User', message: 12},
  {title: 'Уведомления', href: '/User', message: 3},
  {title: 'Мои объекты', href: '/User', message: 0},
  {title: 'Проверка объекта', href: '/User', message: 0},
]

const center = {lat: 45.16, lng: 36.90}

const Finder: NextPage = observer(() => {
  const searchStore = useSearchStore();
  const [view, setView] = useState('mapView')

  return (
    <MainContainer keywords={"Поиск"} title={"Поиск"} city={city} personalAccount={personalAccount} >
        <Breadcrumbs/>
        {
          searchStore.activeFilter && <div style={{margin: '20px 0 0 0'}} >
            <Filter location={'search'} onFilter={()=>searchStore.onActiveFilter()} />
          </div>
        }
        <div style={{display: 'grid', gridTemplateColumns: view==='mapView' ? '1fr 1fr' : '1fr', width: '100%', margin: '20px 0 0 0'}}>
          <div style={{display: view==='mapView' ? 'flex' : 'none'}}>
            <Map mapData={mapData} location={'finder'} center={center} view={view} setView={setView}/>
          </div>
          {
           !searchStore.activeFilter && <CardContainer mapData={mapData} onActiveFilter={()=>searchStore.onActiveFilter()} view={view} setView={setView}/>
          }
        </div>
    </MainContainer>
  )
})

export default Finder



