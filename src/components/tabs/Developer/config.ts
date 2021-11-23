import { IArticleGeneral, IOption } from "../../../utils/interfaces/general";
import { IDeveloperContactItem } from "./components/Contacts/Contacts";
import { IDeveloperArticleItem } from "./components/MassMedia/DeveloperMassMedia";
import { IDeveloperCompanyData } from "./components/Owners/DeveloperOwners";

export const ABOUT_PARAGRAPHS = [
  "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
  "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
  "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
];

export const DEVELOPER_CONTACTS: IOption<IArticleGeneral>[] = [
  { value: "tel", label: { title: "Телефон", text: "+7 (495) 023 76 29" } },
  { value: "email", label: { title: "E-mail", text: "Сведения отсутствуют" } },
  { value: "site", label: { title: "Сайт", text: "brusnika.ru" } },
  {
    value: "address",
    label: {
      title: "Адрес",
      text:
        "Московская область, Ленинский район, г. Видное, д. Сапроново, ул. Калиновая, 1",
    },
  },
];

export const DEVELOPER_REQUISITS: IOption<IArticleGeneral>[] = [
  {
    value: "fullName",
    label: {
      title: "Полное наименование организации",
      text:
        "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ СПЕЦИАЛИЗИРОВАННЫЙ ЗАСТРОЙЩИК «ГАРАНТ-ЖИЛЬЕ»",
    },
  },
  {
    value: "address",
    label: {
      title: "Адрес",
      text: "Смоленская обл., г. Смоленск, ул. 25 Сентября, д. 64",
    },
  },
  {
    value: "capital",
    label: {
      title: "Уставный капитал",
      text: "40 010 000 ₽",
    },
  },
  {
    value: "okfs",
    label: {
      title: "ОКФС",
      text: "Частная собственность",
    },
  },
  {
    value: "okopf",
    label: {
      text: "Общества с ограниченной ответственностью",
      title: "ОКОПФ",
    },
  },
  {
    value: "okogu",
    label: {
      title: "ОКОГУ",
      text:
        "Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно",
    },
  },
  {
    value: "inn",
    label: {
      title: "ИНН",
      text: "6732076930",
    },
  },
  {
    value: "okato",
    label: {
      title: "ОКАТО",
      text: "Смоленская область, Смоленск",
    },
  },
  {
    value: "ogrn",
    label: {
      title: "ОГРН",
      text: "1146733013350",
    },
  },
  {
    value: "okpo",
    label: {
      title: "ОКПО",
      text: "25769055",
    },
  },
  {
    value: "kpp",
    label: {
      title: "КПП",
      text: "673201001",
    },
  },
  {
    value: "oktmo",
    label: {
      title: "ОКТМО",
      text: "Смоленская область, г. Смоленск",
    },
  },
];

export const DEVELOPER_OWNERS_COMPANY: IDeveloperCompanyData = {
  defaultInfo: [
    {
      value: "status",
      label: {
        title: "Статус компании",
        text: "Статус компании",
      },
    },
    {
      value: "head",
      label: {
        title: "Руководитель",
        text: "Иванов Иван Иванович",
      },
    },
    {
      value: "owner",
      label: {
        title: "Учредители",
        text: "МЕНЕДЖМЕНТ-ЮБИКС, ООО, РЕБРИК НИКОЛАЙ ЮРЬЕВИЧ",
      },
    },
  ],
  numericInfo: [
    {
      value: "size",
      label: {
        title: "Размер предприятия",
        text: "60 человек",
      },
    },
    {
      value: "staffAmmount",
      label: {
        title: "Численность персонала",
        text: "60 человек",
      },
    },
    {
      value: "filials",
      label: {
        title: "Филиалы",
        text: "5",
      },
    },
    {
      value: "revenue",
      label: {
        title: "Выручка",
        text: "40 010 000 ₽ ",
      },
    },
    {
      value: "profit",
      label: {
        title: "Чистая прибыль",
        text: "40 010 000 ₽ ",
      },
    },
    {
      value: "assets",
      label: {
        title: "Чистые активы",
        text: "40 010 000 ₽",
      },
    },
  ],
};

export const DEVELOPER_OWNER_GOVERMENT: IOption<IArticleGeneral>[] = [
  {
    value: "date",
    label: { title: "Дата регистрации", text: "06.08.2014" },
  },
  {
    value: "authority",
    label: {
      title: "Регистрирующий орган",
      text: "Межрайонная ИФНС России № 5 по Смоленской области",
    },
  },
  {
    value: "authorityAddress",
    label: {
      title: "Адрес регистрирующего органа",
      text: "214018, Смоленская обл, Смоленск г, Гагарина пр-кт, д 23В",
    },
  },
  {
    value: "authorityBusiness",
    label: {
      title: "Регистрирующий орган, в котором находится регистрационное дело",
      text:
        "Межрайонная инспекция Федеральной налоговой службы № 5 по Смоленской области",
    },
  },
];

export const DEVELOPER_PRIMARY_ACTIVITIES: string[] = [
  "Деятельность заказчика-застройщика, генерального подрядчика",
];

export const DEVELOPER_SECONDARY_ACTIVITIES: string[] = [
  "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
  "Покупка и продажа собственного недвижимого имущества",
  "Подготовка к продаже собственного недвижимого имущества",
  "Аренда и управление собственным или арендованным недвижимым имуществом",
];

export const DEVELOPER_MASS_MEDIA_ARTICLES: IDeveloperArticleItem[] = Array(
  5
).fill({
  link: "",
  date: new Date(),
  title:
    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
  description:
    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
  icon:
    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
  id: "1",
});
