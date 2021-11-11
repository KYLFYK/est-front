import type { NextPage } from 'next'
import React from 'react'
import FavoriteIcon from '../src/shared/icons/Favorite/Favorite'
import BaseButton from '../src/shared/ui/BaseButton/BaseButtons'
import Typography from '../src/shared/ui/Typography/Typography'



const Home: NextPage = () => {

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
        <h3>Buttons:</h3>
        <BaseButton type="secondary" icon={<FavoriteIcon />}>Кнопка с иконкой</BaseButton>
        <BaseButton type="primary">Основная кнопка</BaseButton>
        <BaseButton type="secondary" isActive>Вторичная кнопка активна</BaseButton>
        <BaseButton type="secondary">Вторичная кнопка неактивна</BaseButton>
        <BaseButton type="blank">На главную</BaseButton>
        <BaseButton type="secondary" icon={<FavoriteIcon />} />
      </div>
      <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
        <h3>Typography:</h3>
        <Typography />
      </div>
    </div>
  )
}

export default Home
