import type { NextPage } from 'next'
import React, {useState} from 'react'
import Header from '../../components/widget/Header/Header'
import {Breadcrumbs} from '../../components/shared/Breadcrumbs/Breadcrumbs'
import { Filter } from '../../components/containers/Filter/Filter'
import CardContainer from '../../components/containers/CardContainer/CardContainer'
import Map from '../../components/containers/Maps/MapFinder/index'
import { mapData } from '../../components/containers/Maps/MapFinder/config';

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

  const [view, setView] = useState({filter: false, map: true, grid: false})

  return (
    <div>
        <Header city={city} personalAccount={personalAccount}/>
        <Breadcrumbs items={breadcrumbs}/>
        <div style={{margin: '20px 0 0 0'}}>
          <Filter/>
        </div>
        <div style={{display: 'flex', width: '100%', margin: '20px 0 0 0'}}>
          <Map mapData={mapData} location={'finder'} center={center} view={view} />
          <CardContainer mapData={mapData} />
        </div>
    </div>
  )
}

export default Finder



