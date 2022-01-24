import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, {useState} from 'react'
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer'
import {Breadcrumbs} from '../../src/components/shared/Breadcrumbs/Breadcrumbs'
import { Filter } from '../../src/components/containers/Filter/Filter'
import CardContainer from '../../src/components/containers/CardContainer/CardContainer'
import Map from '../../src/components/containers/Maps/MapFinder/index'
import { mapData } from '../../src/components/containers/Maps/MapFinder/config';

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

const center = {lat: 45.16, lng: 36.90}

const Finder: NextPage = () => {

  const router = useRouter()
  const [view, setView] = useState('mapView')

  return (
    <MainContainer keywords={"Поиск"} title={"Поиск"} city={city} personalAccount={personalAccount} >
        <Breadcrumbs items={breadcrumbs}/>
        <div style={{margin: '20px 0 0 0'}}>
          <Filter location={'search'} initialValues={router.query}/>
        </div>
        <div style={{display: 'flex', width: '100%', margin: '20px 0 0 0'}}>
          <Map mapData={mapData} location={'finder'} center={center} view={view} setView={setView}/>
          <CardContainer mapData={mapData} view={view} setView={setView}/>
        </div>
    </MainContainer>
  )
}

export default Finder



