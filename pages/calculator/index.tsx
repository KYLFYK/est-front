import type { NextPage } from 'next'
import React from 'react'
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'

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
    <MainContainer keywords={"Калькулятор"} title={"Калькулятор"} city={city} personalAccount={personalAccount} footerColor={'accent'}>
        <Mortgage/>
    </MainContainer>
  )
}

export default Calculator