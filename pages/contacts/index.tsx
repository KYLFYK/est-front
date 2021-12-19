import type { NextPage } from 'next'
import React from 'react'
import Header from '../../src/components/widget/Header/Header'
import { Footer } from '../../src/components/widget/Footer/ui/Footer'
import {ScrollUp} from '../../src/components/shared/ScrollUp/ScrollUp'

const city = ['Москва', 'Санкт-Петербург', 'Крым', 'Сочи', 'Нижний Новгород']
const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
  {title: 'Избранное', href: '/User', message: 0},
  {title: 'Сохраненные поиски', href: '/User', message: 0},
  {title: 'Сообщения', href: '/User', message: 12},
  {title: 'Уведомления', href: '/User', message: 3},
  {title: 'Мои объекты', href: '/User', message: 0},
  {title: 'Проверка объекта', href: '/User', message: 0},
]

const Contacts: NextPage = () => {
  return (
    <div >
        <Header city={city} personalAccount={personalAccount}/>
        <h1>Контакты</h1>
        <Footer color={'accent'}/>
        <ScrollUp/>
    </div>
  )
}

export default Contacts