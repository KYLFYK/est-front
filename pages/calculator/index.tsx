import type { NextPage } from 'next'
import React from 'react'
import Header from '../../src/components/widget/Header/Header'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
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

const Calculator: NextPage = () => {

  return (
    <div >
        <div style={{display:'flex',justifyContent:"space-between",flexDirection:"column",height: "100vh"}}>
            <Header city={city} personalAccount={personalAccount}/>
            <div style={{display:'flex',alignItems:"flex-start",height:"100%"}}>
                <Mortgage/>
            </div>

            <Footer color={'accent'}/>
        </div>
        <ScrollUp/>
    </div>
  )
}

export default Calculator