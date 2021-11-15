import type { NextPage } from 'next'
import React from 'react'
import FavoriteIcon from '../src/shared/icons/Favorite/Favorite'
import BaseButton from '../src/shared/ui/BaseButton/BaseButtons'
import { BaseDropDown } from '../src/shared/ui/BaseDropDown/BaseDropDown'
import { BaseInput } from '../src/shared/ui/BaseInput/Input'
import { CompareInput } from '../src/shared/ui/CompareInput/CompareInput'
import { ToggleButtons } from '../src/shared/ui/ToggleButtons/ToggleButtons'
import Typography from '../src/shared/ui/Typography/Typography'
import ThreeColumnCard from "../src/shared/ui/ThreeColumnCard/ThreeColumnCard";
import EnumerationColumn from "../src/shared/ui/EnumerationColumn/EnumerationColumn";
import ParamsColumn from "../src/shared/ui/ParamsColumn/ParamsColumn";
import Header from "../src/shared/ui/Components/Header/Header";
import {Footer} from "../src/shared/ui/Components/Footer/Footer";
import {TabsWrappedLabel} from "../src/shared/ui/Components/AnchorLine/AnchorLine";
import SelectTab from "../src/shared/ui/SelectTab/SelectTab";
import {CardAgency} from "../src/shared/ui/CardAgency/CardAgency";
import EditingProfile from "../src/shared/ui/EditingProfile/EditingProfile";
import UploadLogo from "../src/shared/ui/UploadPhoto/UploadLogo";
import UploadPhoto from "../src/shared/ui/UploadPhoto/UploadLogo";
import TwoColumn from "../src/shared/ui/TwoColumn/TwoColumn";

const emunsArray =[{title:'цена',value:'5 000 000 '},{title:'Тип объекта',value:'участок'},
    {title:'площадь',value:'30 соток'},{title:'Статус',value:'ИЖС'},
    {title:'Строения',value:'нет'},{title:'Коммуникации',value:'По улице'},]
import { ObjectCard } from '../src/entities/object'
import { APIObject } from '../src/shared/api'


const OPTION_DATA = [{label: 'option_1', value: "1"}, {label: 'option_2', value: "2"}, {label: 'option_3', value: "4"}, {label: 'option_4', value: "3"}]
const emptyFunc = () => {}

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
        <ObjectCard houseData={new APIObject.types.IObjectEntry()}/>
      </div>

        <h3>Header : </h3>
        <Header />
        <h3>Footer :</h3>
        <Footer />

        <h3>TabsWrappedLabel :</h3>
        <TabsWrappedLabel />

        <h3>SelectTab : ??</h3>
        <SelectTab />

        <hr color={'red'} style={{width:'100%'}}/>
        <Typography size={'big'} weight={'bold'} color={'nude'}>ADMIN :</Typography>

        <h3>ThreeColumnCard :</h3>
      <ThreeColumnCard>
          <Typography size={'default'} weight={'bold'}>Арнеда, 3-этажный коттедж , 600м2</Typography>
          <Typography size={'default'} color='tertiary'>Агент: Виталий Панкратов</Typography>
          <div>del , edit</div>
      </ThreeColumnCard>
        <h3>EnumerationColumn :</h3>
        <EnumerationColumn>
            {
                emunsArray.map(({title,value})=>(
                   <ParamsColumn
                        title={title}
                        value={value}
                        key={title}
                   />
                ))
            }
        </EnumerationColumn>
        <h3>CardAgency :</h3>
        <CardAgency
            id={1}
            onDelete={()=>console.log(1)}
            img={'https://www.publicdomainpictures.net/pictures/20000/velka/westminster-abbey-11297883825gkU.jpg'}
            name={'Emaar'}
            description={'lorem ipsum'}
            phone={'+7 000 222 11'}
        />
        <h3>EditingProfile :</h3>
        <EditingProfile title={'DEAL'}/>
        <h3>UploadPhoto :</h3>
        <UploadPhoto title={'Загрузить фото'} />
        <h3>TwoColumn :</h3>
        <TwoColumn>
            <TwoColumn title={'Account'}  >
                <div>1asdfasdf </div>
                <div>2</div>
            </TwoColumn>
            <UploadPhoto title={'Загрузить фото'} />
        </TwoColumn>

    </div>
  )
}

export default Home
