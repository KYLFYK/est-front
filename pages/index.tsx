import type { NextPage } from 'next'
import React from 'react'
import FavoriteIcon from '../src/shared/icons/Favorite/Favorite'
import BaseButton from '../src/shared/ui/BaseButton/BaseButtons'
import { BaseDropDown } from '../src/shared/ui/BaseDropDown/BaseDropDown'
import { BaseInput } from '../src/shared/ui/BaseInput/Input'
import { CompareInput } from '../src/shared/ui/CompareInput/CompareInput'
import { ToggleButtons } from '../src/shared/ui/ToggleButtons/ToggleButtons'
import Typography from '../src/shared/ui/Typography/Typography'
import { ObjectCard, ObjectGeneralInfo } from '../src/entities/object'
import { APIObject } from '../src/shared/api'

const OPTION_DATA = [{label: 'option_1', value: "1"}, {label: 'option_2', value: "2"}, {label: 'option_3', value: "4"}, {label: 'option_4', value: "3"}]
const emptyFunc = () => {}

const imgs = [{url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', id: 0}, {url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',id: 1}, {url: '213', id: 2}, {url: '32123', id: 4}]
const Home: NextPage = () => {

  return (
    <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <h3>Buttons:</h3>
        <BaseButton type="secondary" icon={<FavoriteIcon />}>Кнопка с иконкой</BaseButton>
        <BaseButton type="primary">Основная кнопка</BaseButton>
        <BaseButton type="secondary" isActive>Вторичная кнопка активна</BaseButton>
        <BaseButton type="secondary">Вторичная кнопка неактивна</BaseButton>
        <BaseButton type="blank">На главную</BaseButton>
        <BaseButton type="secondary" icon={<FavoriteIcon />} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}> <ToggleButtons items={OPTION_DATA} onChange={emptyFunc} activeValue={OPTION_DATA[0].value}/> </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexDirection: 'column' }}>
        <h3>Typography:</h3>
        <Typography size={'small'}> Small text </Typography>
        <Typography size={'default'} color="accent" weight="light"> Default light text with accent color</Typography>
        <Typography size={'default'} color="accent" icon={<FavoriteIcon />}> Default text with accent color with icon at start</Typography>
        <Typography size={'default'} color="accent" icon={<FavoriteIcon />} iconPosition="end"> Default text with accent color with icon at end</Typography>
        <Typography size={'medium'} color='nude' weight="bold"> Medium text with nude color & bold weight</Typography>
        <Typography size={'subheader'} color='tertiary' weight="bold"> Subheader text with tertiary color</Typography>
        <Typography size={'big'} color='nude'> Big text with nude color (price example) - 30 000 000 $</Typography>
        <div style={{ backgroundColor: "#000" }}><Typography size={'header'} color='secondary'> Header text with secondary color (white)</Typography></div>
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexDirection: 'column' }}>
        <h3>Inputs:</h3>
        <CompareInput placeholderFrom="start" placeholderTo="end" valueFrom="startvalue" valueTo="endvalue" onChangeFrom={emptyFunc} onChangeTo={emptyFunc} />
        <BaseInput placeholder="placeholder" />
        <BaseDropDown options={OPTION_DATA} value={OPTION_DATA[0].value} placeholder="Выбрерите опцию" onChange={emptyFunc}/>
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexDirection: 'column' }}>
        <h3>House Card:</h3>
        <ObjectCard houseData={new APIObject.types.IObjectEntry(imgs)}/>
      </div>
      <ObjectGeneralInfo info={[]} price="0" images={imgs.map((i) => i.url)}/>
    </div>
  )
}

export default Home
