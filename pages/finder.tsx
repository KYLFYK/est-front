import type { NextPage } from 'next'
import React, {useState} from 'react'
import Header from '../src/components/widget/Header/Header'
import { Filter } from '../src/components/containers/Filter/Filter'
import CardContainer from '../src/components/containers/CardContainer/CardContainer'
import Map from '../src/components/containers/Maps/MapFinder/index'
import { mapData } from '../src/components/containers/Maps/MapFinder/config';
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

const center = {lat: 45.16, lng: 36.90}

const Start: NextPage = () => {

  const [view, setView] = useState('mapView')

  return (
    <div>
        <Header city={city} personalAccount={personalAccount}/>
        <Filter/>
        <div style={{display: 'flex', width: '100%'}}>
          <Map mapData={mapData} location={'finder'} center={center}/>
          <CardContainer mapData={mapData} view={view} setView={setView}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Start



