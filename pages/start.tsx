import type { NextPage } from 'next'
import React from 'react'
import Header from '../src/components/widget/Header/Header'
import {HeadFilter} from '../src/components/containers/HeadFilter/Finder'
import { BestOffers } from '../src/components/containers/BestOffers/bestOffers'
import {IMAGES_SET, INFO_OPTIONS} from '../src/components/containers/GeneralInfo/config'
import DevelopersContainer, {mockDevelopers} from '../src/components/containers/DevelopersContainer/DevelopersContainer'
import { AgentsContainer } from '../src/components/containers/AgentsContainer/AgentsContainer'
import mocAgent from '../src/components/containers/AgentsContainer/Agents.json'
import { Advantages } from '../src/components/containers/AdvantageList/AdvantageList'
import { mocAdvantages } from '../src/components/containers/AdvantageList/config'
import { OfferNews } from '../src/components/containers/OfferNews/offerNews'
import OurOffice from '../src/components/containers/OurOffice/OurOffice'
import { OurOfficeType } from '../src/components/containers/OurOffice/OurOffice'
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
const estateOffers = [{id: 1, url: 'www.google.com', img: IMAGES_SET, tags: ["Покупка", 'Таунхаус', 'Новостройка']},
  {id: 1, url: 'www.google.com', img: IMAGES_SET, tags: ["Покупка", 'Таунхаус', 'Новостройка']},
  {id: 1, url: 'www.google.com', img: IMAGES_SET, tags: ["Покупка", 'Таунхаус', 'Новостройка']}
]
const tagsButton = ['Покупка', 'Аренда', 'Дом', 'Коммерческая недвижимость', 'Новостройка', 'Вторичноежилье',
  'Строящийся дом', 'От собственника']
const ourOffice: OurOfficeType = {
  ourOffice: {
    positionMap: {
      lat: 44.959975,
      lng: 34.109053
  },
  location: 'start',
  contactsOffice: [
      {title: 'metro', value: 'Проспект Победы'},
      {title: 'dot', value: 'Крым, Ленина, 23 корпус 1'},
      {title: 'time', value: 'Ежедневно с 10:00 до 20:00'},
      {title: 'phone', value: '+7 913 453 22 34', href: 'tel:'},
      {title: 'phone', value: '+7 913 453 22 35', href: 'tel:'},
      {title: 'printer', value: '+7 913 453 22 34'},
      {title: 'email', value: 'estatum@mail.com', href: 'mailto:'}
  ],
  plotRoute: 'www.google.com'
  }
}

const Start: NextPage = () => {
  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <HeadFilter />
        <div style={{margin: '40px 0 0 0'}}>
          <BestOffers tagsButton={tagsButton} bestOffers={estateOffers}/>
        </div>
        <div style={{margin: '60px 0 0 0'}}>
          <DevelopersContainer title={'Застройщики и агества, которые нам доверяют'} developersInfo={mockDevelopers}/>
        </div>
        <div style={{margin: '40px 0 0 0'}}>
          <AgentsContainer title={'Наши агенты к вашим услугам'} agents={mocAgent.Agents}/>
        </div>
        <div style={{margin: '60px 0 0 0'}}>
          <Advantages advantages={mocAdvantages}/>
        </div>
        <div style={{margin: '50px 0 0 0'}}>
          <OfferNews/>
        </div>
        <div style={{margin: '60px 0 0 0'}}>
          <OurOffice ourOffice={ourOffice.ourOffice}/>
        </div>
        <div style={{margin: '100px 0 0 0'}}>
          <Footer/>
        </div>
    </div>
  )
}

export default Start



