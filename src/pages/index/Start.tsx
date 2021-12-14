import type { NextPage } from 'next'
import React from 'react'
import Header from '../../components/widget/Header/Header'
import {HeadFilter} from '../../components/containers/HeadFilter/Finder'
import { BestOffers } from '../../components/containers/BestOffers/bestOffers'
import {IMAGES_SET } from '../../components/containers/GeneralInfo/config'
import DevelopersContainer, {mockDevelopers} from '../../components/containers/DevelopersContainer/DevelopersContainer'
import { AgentsContainer } from '../../components/containers/AgentsContainer/AgentsContainer'
import mocAgent from '../../components/containers/AgentsContainer/Agents.json'
import { Advantages } from '../../components/containers/AdvantageList/AdvantageList'
import { mocAdvantages } from '../../components/containers/AdvantageList/config'
import { OfferNews } from '../../components/containers/OfferNews/offerNews'
import OurOffice from '../../components/containers/OurOffice/OurOffice'
import { OurOfficeType } from '../../components/containers/OurOffice/OurOffice'
import { Footer } from '../../components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../components/shared/ScrollUp/ScrollUp'

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
        <BestOffers tagsButton={tagsButton} bestOffers={estateOffers}/>
        <DevelopersContainer title={'Застройщики и агества, которые нам доверяют'} developersInfo={mockDevelopers}/>
        <AgentsContainer title={'Наши агенты к вашим услугам'} agents={mocAgent.Agents}/>
        <Advantages advantages={mocAdvantages}/>
        <OfferNews/>
        <OurOffice ourOffice={ourOffice.ourOffice}/>
        <Footer color={'accent'}/>
        <ScrollUp/>
    </div>
  )
}

export default Start



