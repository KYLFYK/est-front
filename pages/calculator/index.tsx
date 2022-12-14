import type { NextPage } from 'next'
import { observer } from "mobx-react-lite"
import React from 'react'
import { MainContainer } from 'src/components/containers/MainContainer/MainContainer'
import {Mortgage} from '../../src/components/shared/Mortgage/Mortgage'
import css from './../../styles/mainContainer.module.scss'
import {useMortGageStore} from '../../src/mobx/role/bank/mortgage/MortGage'
const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
  {title: 'Избранное', href: '/User', message: 0},
  {title: 'Сохраненные поиски', href: '/User', message: 0},
  {title: 'Сообщения', href: '/User', message: 12},
  {title: 'Уведомления', href: '/User', message: 3},
  {title: 'Мои объекты', href: '/User', message: 0},
  {title: 'Проверка объекта', href: '/User', message: 0},
]

const Calculator: NextPage = observer(() => {
  const store = useMortGageStore()
  return (
    <MainContainer 
      keywords={"Калькулятор"} 
      title={"Калькулятор"}  
      personalAccount={personalAccount} 
      footerColor={'accent'} 
      className={store.getEarlyPayments().length ? css.altjs : css.js}
      cabinetStyle={true}
    >
        <Mortgage/>
    </MainContainer>
  )
})

export default Calculator