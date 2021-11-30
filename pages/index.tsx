import type { NextPage } from 'next'
import React from 'react'
import { APIObject } from '../src/api'
import { Advantages } from '../src/components/containers/AdvantageList/AdvantageList'
import { AgentsContainer } from '../src/components/containers/AgentsContainer/AgentsContainer'
import { BestOffers } from '../src/components/containers/BestOffers/bestOffers'
import ObjectCard from '../src/components/containers/Card'
import DevelopersContainer from '../src/components/containers/DevelopersContainer/DevelopersContainer'
import { IMAGES_SET, INFO_OPTIONS } from '../src/components/containers/GeneralInfo/config'
import GeneralInfo from '../src/components/containers/GeneralInfo/GeneralInfo'
import BaseButton from '../src/components/shared/BaseButton/BaseButtons'
import { BaseDropDown } from '../src/components/shared/BaseDropDown/BaseDropDown'
import { BaseInput } from '../src/components/shared/BaseInput/Input'
import { CardAgency } from '../src/components/shared/CardAgency/CardAgency'
import { CompareInput } from '../src/components/shared/CompareInput/CompareInput'
import EditingProfile from '../src/components/shared/EditingProfile/EditingProfile'
import EnumerationColumn from '../src/components/shared/EnumerationColumn/EnumerationColumn'
import ParamsColumn from '../src/components/shared/ParamsColumn/ParamsColumn'
import { SearchOffice } from '../src/components/containers/SearchOffice/SearchOffice'
import { SelectEstate } from '../src/components/shared/SelectCustom/SelectCustom'
import { HorizontalTabs } from '../src/components/shared/HorizontalTabs/HorizontalTabs'
import ThreeColumnCard from '../src/components/shared/ThreeColumnCard/ThreeColumnCard'
import { ToggleButtons } from '../src/components/shared/ToggleButtons/ToggleButtons'
import TwoColumn from '../src/components/shared/TwoColumn/TwoColumn'
import Typography from '../src/components/shared/Typography/Typography'
import UploadPhoto from '../src/components/shared/UploadPhoto/UploadLogo'
import { Footer } from '../src/components/widget/Footer/ui/Footer'
import FavoriteIcon from '../src/icons/Favorite/Favorite'
import { OfferNews } from '../src/components/containers/OfferNews/offerNews'
import Header from '../src/components/widget/Header/Header'
import { mocAdvantages } from '../src/components/containers/AdvantageList/config'
import DeveloperTabs from '../src/components/tabs/Developer'
import Map from '../src/components/containers/Maps/MapInfrastructure/index'
import {currentHouse} from '../src/components/containers/Maps/MapInfrastructure/config'
import {infrastructura} from '../src/components/containers/Maps/MapInfrastructure/config'


const emunsArray = [{ title: 'цена', value: '5 000 000 ' }, { title: 'Тип объекта', value: 'участок' },
{ title: 'площадь', value: '30 соток' }, { title: 'Статус', value: 'ИЖС' },
{ title: 'Строения', value: 'нет' }, { title: 'Коммуникации', value: 'По улице' },]

const home = ['Москва', 'Санкт-Петербург', 'Крым', 'Нижний Новгород']

const mocAgent = [{
  name: 'Василий Сидоров',
  heldPost: 'Старший агент',
  img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
},
{
  name: 'Семён Панкратов ',
  heldPost: 'Старший агент',
  img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg'
},
{ name: 'Петр Петрович', heldPost: 'Старший агент', img: 'https://vsvlegalgroup.ru/d/yurist_po_nedvizhimosti.jpg' },
]

const OPTION_DATA = [{ label: 'option_1', value: "1" }, { label: 'option_2', value: "2" }, { label: 'option_3', value: "4" }, { label: 'option_4', value: "3" }]
const emptyFunc = () => { }

const imgs = [{ url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', id: 0 }, { url: 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg', id: 1 }, { url: '213', id: 2 }, { url: '32123', id: 4 }]
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
      <div style={{ display: 'flex', justifyContent: 'center' }}> <ToggleButtons items={OPTION_DATA} onChange={emptyFunc} activeValue={OPTION_DATA[0].value} /> </div>
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
        <BaseDropDown options={OPTION_DATA} value={OPTION_DATA[0].value} placeholder="Выбрерите опцию" onChange={emptyFunc} />
      </div>
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexDirection: 'column' }}>
        <h3>House Card:</h3>
        <ObjectCard houseData={new APIObject.types.IObjectEntry()} />
      </div>
      <Map infrastructura={infrastructura} currentHouse={currentHouse} location={'infrastructure'}/>
      <h3>Header : </h3>
      <Header />
      <h3>Footer :</h3>
      <Footer />

      <h3>TabsWrappedLabel :</h3>
      <HorizontalTabs />

      <h3>CustomSidebarTabs : ??</h3>
      {/* <DeveloperTabs /> */}

      <hr color={'red'} style={{ width: '100%' }} />
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
          emunsArray.map(({ title, value }) => (
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
        onDelete={() => console.log(1)}
        img={'https://www.publicdomainpictures.net/pictures/20000/velka/westminster-abbey-11297883825gkU.jpg'}
        name={'Emaar'}
        description={'lorem ipsum'}
        phone={'+7 000 222 11'}
      />
      <h3>EditingProfile :</h3>
      <EditingProfile title={'DEAL'} />
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
      <DevelopersContainer />
      <AgentsContainer
        title={'Наши агенты к вашим услугам'}
        agents={mocAgent}
      />
      <Advantages
        advantages={mocAdvantages}
      />
      <OfferNews />
      <SearchOffice />
      <BestOffers />
      <SelectEstate params={'housingCondition'} options={home} />
      <GeneralInfo info={INFO_OPTIONS} price={300000} images={IMAGES_SET} />
    </div>
  )
}

export default Home
