import { OBJECT_LEGAL_PURITY_TABS_DATA } from '../../components/containers/ObjectLegalPurity/config'

export const city = ['Москва', 'Санкт-Петербург', 'Крым', 'Сочи', 'Нижний Новгород']
export const personalAccount = [{title: 'Личный кабинет', href: '/User', message: 0},
  {title: 'Избранное', href: '/User', message: 0},
  {title: 'Сохраненные поиски', href: '/User', message: 0},
  {title: 'Сообщения', href: '/User', message: 12},
  {title: 'Уведомления', href: '/User', message: 3},
  {title: 'Мои объекты', href: '/User', message: 0},
  {title: 'Проверка объекта', href: '/User', message: 0},
]

export const tabs = [{
    title: "Общая информация",
  },
  {
    title: "Онлайн-тур",
  },
  {
    title: "Архитектура",
  },
  {
    title: "Инфраструктура",
  },
  {
    title: "Юридическая чистота",
  },
  {
    title: "Окупаемость",
  },
  {
    title: "Застройщик",
  },
  {
    title: "Записаться на просмотр",
  },
]

export const Online_tour = {
  '3d_tour': {
      url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
  },
  vr_tour: {
      url: 'https://3d-tur.ru/010/',
  }
}

export const legalPurityData = {
  encumbrances: false,
  risks: false,
  tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
}

export const averagePrice ={
  price:'150 001 240',
  priceUSD:' 2 025 221.09',
  priceEU:'1 728 447.47',
  priceMetre:'79 000',
  priceMetreUSD:'1 0066.61',
  priceMetreEU:'910.31',
}

export const breadcrumbs = ['Крым', 'Купить участок', 'Участок в Троицком 30 соток']
export const views = ['12.06.2021', '389', 'Агентство: Лунный свет']
export const nameEstate = '1-комнатная квартира в центре Сочи'
export const adressEstate = 'Россия, Сочи, ул. Ленина, дом 36, квартира 21'