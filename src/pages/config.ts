import { IconTypes } from "../utils/interfaces/icons";
import { OBJECT_LEGAL_PURITY_TABS_DATA } from '../../src/components/containers/ObjectLegalPurity/config'
import { DEVELOPER_ABOUT_PARAGRAPHS, DEVELOPER_CONTACTS, DEVELOPER_MASS_MEDIA_ARTICLES, DEVELOPER_OWNERS_COMPANY, 
  DEVELOPER_OWNER_GOVERMENT, DEVELOPER_PRIMARY_ACTIVITIES, DEVELOPER_REQUISITS, DEVELOPER_RISKS, 
  DEVELOPER_SECONDARY_ACTIVITIES, DEVELOPER_STATISTICS } 
  from "../components/tabs/Developer/config";

export const fullObjectData = [
  {
    images : [
      {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
      {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
      {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
    ],
    object_id : 1,
    lang : "ru",
    name : "1-комнатная квартира, 52 м²",
    type : "apartment",
    address : "ул. Ленина, д. 36, кв. 21",
    city : "Ялта",
    lat : 35.5,
    lng : 45.2,
    price : 12860000,
    sort : null,
    planning : "1",
    secondary_type : "Вторичное",
    total_area : 52,
    floor : 3,
    total_floors : 15,
    favorite : false,
    INFO_OPTIONS : [
      { label: "Общая площадь", value: "615 м²" },
      { label: "Площадь дома", value: "300 м²" },
      { label: "Жилая площадь", value: "150 м²" },
      { label: "Участок", value: "10 соток" },
      { label: "Комнат в доме", value: "5" },
      { label: "Ванная комната", value: "10 м²" },
      { label: "Кухня", value: "42 м²" },
      {
        label: "Первый этаж",
        value: "Холл, кухня-гостиная, комната, кабинет, санузел",
      },
      {
        label: "Второй этаж",
        value: "Терраса, 2 спальни, 2 санузла, 2 гардеробных, холл, кладовая",
      },
      {
        label: "Спец этаж",
        value: "2 спальни с индивидуальными душевыми и туалетами",
      },
    ],
    DESCRIPTION_ITEMS : [
      "Из окон виллы открывается красивейший вид на древнюю гору-вулкан Аю-Даг, Гурзуфскую бухту и парки Артека, скалы Адалары и пристань для яхт и катеров.",
      "На террасе расположен бассейн с переливом в сторону моря и уникальными видовыми характеристиками.",
    ],
    Online_tour : {
      threeD_tour: {
          url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
      },
      vr_tour: {
          url: 'https://3d-tur.ru/010/',
      }
    },
    OBJECT_SPECS_MOCK : [{
      subtitle: "Строительно-техническая экспертиза",
      specificationsItems : [{
        value: IconTypes.HOUSE_TYPE,
        label: { title: "Тип дома", text: "Монолитный" },
      }]
    }],
    legalPurityData : {
      encumbrances: false,
      risks: false,
      tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    },
    OBJECT_DEVELOPER_INFO : {
      name: "Брусника",
      developerType: "Девелоперская компания",
      logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
      risks: false,
      leasedAmmount: "183 дома в 103 ЖК",
      inProgressAmmount: "5 домов в 3 ЖК",
      tabsData: {
        about: DEVELOPER_ABOUT_PARAGRAPHS,
        contacts: DEVELOPER_CONTACTS,
        requisits: DEVELOPER_REQUISITS,
        owners: {
            company: DEVELOPER_OWNERS_COMPANY,
            goverment: DEVELOPER_OWNER_GOVERMENT,
        },
        activities: {
            primary: DEVELOPER_PRIMARY_ACTIVITIES,
            secondary: DEVELOPER_SECONDARY_ACTIVITIES,
        },
        news: DEVELOPER_MASS_MEDIA_ARTICLES,
        statistics: DEVELOPER_STATISTICS,
        risks: DEVELOPER_RISKS
      }
    }
  },
  {
    images : [
      {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
      {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
      {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
    ],
    object_id : 2,
    lang : "ru",
    name : "2-комнатная квартира, 73 м²",
    type : "residential-complex",
    address : "ЖК Ленинский",
    city : "Ялта",
    lat : 35.6,
    lng : 45.1,
    price : 22120000,
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    INFO_OPTIONS : [
      { label: "Общая площадь", value: "615 м²" },
      { label: "Площадь дома", value: "300 м²" },
      { label: "Жилая площадь", value: "150 м²" },
      { label: "Участок", value: "10 соток" },
      { label: "Комнат в доме", value: "5" },
      { label: "Ванная комната", value: "10 м²" },
      { label: "Кухня", value: "42 м²" },
      {
        label: "Первый этаж",
        value: "Холл, кухня-гостиная, комната, кабинет, санузел",
      },
      {
        label: "Второй этаж",
        value: "Терраса, 2 спальни, 2 санузла, 2 гардеробных, холл, кладовая",
      },
      {
        label: "Спец этаж",
        value: "2 спальни с индивидуальными душевыми и туалетами",
      },
    ],
    DESCRIPTION_ITEMS : [
      "Из окон виллы открывается красивейший вид на древнюю гору-вулкан Аю-Даг, Гурзуфскую бухту и парки Артека, скалы Адалары и пристань для яхт и катеров.",
      "На террасе расположен бассейн с переливом в сторону моря и уникальными видовыми характеристиками.",
    ],
    Online_tour : {
      threeD_tour: {
          url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
      },
      vr_tour: {
          url: 'https://3d-tur.ru/010/',
      }
    },
    OBJECT_SPECS_MOCK : {
      subtitle: "Строительно-техническая экспертиза",
      specificationsItems : {
        value: IconTypes.HOUSE_TYPE,
        label: { title: "Тип дома", text: "Монолитный" },
      }
    },
    legalPurityData : {
      encumbrances: false,
      risks: false,
      tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    },
    OBJECT_DEVELOPER_INFO : {
      name: "Брусника",
      developerType: "Девелоперская компания",
      logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
      risks: false,
      leasedAmmount: "183 дома в 103 ЖК",
      inProgressAmmount: "5 домов в 3 ЖК",
      tabsData: {
        about: DEVELOPER_ABOUT_PARAGRAPHS,
        contacts: DEVELOPER_CONTACTS,
        requisits: DEVELOPER_REQUISITS,
        owners: {
            company: DEVELOPER_OWNERS_COMPANY,
            goverment: DEVELOPER_OWNER_GOVERMENT,
        },
        activities: {
            primary: DEVELOPER_PRIMARY_ACTIVITIES,
            secondary: DEVELOPER_SECONDARY_ACTIVITIES,
        },
        news: DEVELOPER_MASS_MEDIA_ARTICLES,
        statistics: DEVELOPER_STATISTICS,
        risks: DEVELOPER_RISKS
      }
    }
  },
  {
    images : [
      {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
      {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
      {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
    ],
    object_id : 3,
    lang : "ru",
    name : "1-комнатная квартира, 52 м²",
    type : "apartment",
    address : "ул. Ленина, д. 36, кв. 21",
    city : "Ялта",
    lat : 35.3,
    lng : 45.3,
    price : 1860000,
    sort : null,
    planning : "1",
    secondary_type : "Вторичное",
    total_area : 52,
    floor : 3,
    total_floors : 15,
    favorite : false,
    INFO_OPTIONS : [
      { label: "Общая площадь", value: "615 м²" },
      { label: "Площадь дома", value: "300 м²" },
      { label: "Жилая площадь", value: "150 м²" },
      { label: "Участок", value: "10 соток" },
      { label: "Комнат в доме", value: "5" },
      { label: "Ванная комната", value: "10 м²" },
      { label: "Кухня", value: "42 м²" },
      {
        label: "Первый этаж",
        value: "Холл, кухня-гостиная, комната, кабинет, санузел",
      },
      {
        label: "Второй этаж",
        value: "Терраса, 2 спальни, 2 санузла, 2 гардеробных, холл, кладовая",
      },
      {
        label: "Спец этаж",
        value: "2 спальни с индивидуальными душевыми и туалетами",
      },
    ],
    DESCRIPTION_ITEMS : [
      "Из окон виллы открывается красивейший вид на древнюю гору-вулкан Аю-Даг, Гурзуфскую бухту и парки Артека, скалы Адалары и пристань для яхт и катеров.",
      "На террасе расположен бассейн с переливом в сторону моря и уникальными видовыми характеристиками.",
    ],
    Online_tour : {
      threeD_tour: {
          url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
      },
      vr_tour: {
          url: 'https://3d-tur.ru/010/',
      }
    },
    OBJECT_SPECS_MOCK : {
      subtitle: "Строительно-техническая экспертиза",
      specificationsItems : {
        value: IconTypes.HOUSE_TYPE,
        label: { title: "Тип дома", text: "Монолитный" },
      }
    },
    legalPurityData : {
      encumbrances: false,
      risks: false,
      tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    },
    OBJECT_DEVELOPER_INFO : {
      name: "Брусника",
      developerType: "Девелоперская компания",
      logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
      risks: false,
      leasedAmmount: "183 дома в 103 ЖК",
      inProgressAmmount: "5 домов в 3 ЖК",
      tabsData: {
        about: DEVELOPER_ABOUT_PARAGRAPHS,
        contacts: DEVELOPER_CONTACTS,
        requisits: DEVELOPER_REQUISITS,
        owners: {
            company: DEVELOPER_OWNERS_COMPANY,
            goverment: DEVELOPER_OWNER_GOVERMENT,
        },
        activities: {
            primary: DEVELOPER_PRIMARY_ACTIVITIES,
            secondary: DEVELOPER_SECONDARY_ACTIVITIES,
        },
        news: DEVELOPER_MASS_MEDIA_ARTICLES,
        statistics: DEVELOPER_STATISTICS,
        risks: DEVELOPER_RISKS
      }
    }
  },
  {
    images : [
      {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
      {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
      {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
    ],
    object_id : 4,
    lang : "ru",
    name : "2-комнатная квартира, 73 м²",
    type : "plat",
    address : "ЖК Ленинский",
    cit : "Ялта",
    lat : 35.4,
    lng : 45.2,
    price : 2212000,
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    INFO_OPTIONS : [
      { label: "Общая площадь", value: "615 м²" },
      { label: "Площадь дома", value: "300 м²" },
      { label: "Жилая площадь", value: "150 м²" },
      { label: "Участок", value: "10 соток" },
      { label: "Комнат в доме", value: "5" },
      { label: "Ванная комната", value: "10 м²" },
      { label: "Кухня", value: "42 м²" },
      {
        label: "Первый этаж",
        value: "Холл, кухня-гостиная, комната, кабинет, санузел",
      },
      {
        label: "Второй этаж",
        value: "Терраса, 2 спальни, 2 санузла, 2 гардеробных, холл, кладовая",
      },
      {
        label: "Спец этаж",
        value: "2 спальни с индивидуальными душевыми и туалетами",
      },
    ],
    DESCRIPTION_ITEMS : [
      "Из окон виллы открывается красивейший вид на древнюю гору-вулкан Аю-Даг, Гурзуфскую бухту и парки Артека, скалы Адалары и пристань для яхт и катеров.",
      "На террасе расположен бассейн с переливом в сторону моря и уникальными видовыми характеристиками.",
    ],
    Online_tour : {
      threeD_tour: {
          url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
      },
      vr_tour: {
          url: 'https://3d-tur.ru/010/',
      }
    },
    OBJECT_SPECS_MOCK : {
      subtitle: "Строительно-техническая экспертиза",
      specificationsItems : {
        value: IconTypes.HOUSE_TYPE,
        label: { title: "Тип дома", text: "Монолитный" },
      }
    },
    legalPurityData : {
      encumbrances: false,
      risks: false,
      tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    },
    OBJECT_DEVELOPER_INFO : {
      name: "Брусника",
      developerType: "Девелоперская компания",
      logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
      risks: false,
      leasedAmmount: "183 дома в 103 ЖК",
      inProgressAmmount: "5 домов в 3 ЖК",
      tabsData: {
        about: DEVELOPER_ABOUT_PARAGRAPHS,
        contacts: DEVELOPER_CONTACTS,
        requisits: DEVELOPER_REQUISITS,
        owners: {
            company: DEVELOPER_OWNERS_COMPANY,
            goverment: DEVELOPER_OWNER_GOVERMENT,
        },
        activities: {
            primary: DEVELOPER_PRIMARY_ACTIVITIES,
            secondary: DEVELOPER_SECONDARY_ACTIVITIES,
        },
        news: DEVELOPER_MASS_MEDIA_ARTICLES,
        statistics: DEVELOPER_STATISTICS,
        risks: DEVELOPER_RISKS
      }
    }
  },
  {
    images : [
      {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
      {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
      {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
    ],
    object_id : 5,
    lang : "ru",
    name : "1-комнатная квартира, 52 м²",
    type : "house",
    address : "ул. Ленина, д. 36, кв. 21",
    city : "Ялта",
    lat : 35.6,
    lng : 45.0,
    price : 2160000,
    sort : null,
    planning : "1",
    secondary_type : "Вторичное",
    total_area : 52,
    floor : 3,
    total_floors : 15,
    favorite : false,
    INFO_OPTIONS : [
      { label: "Общая площадь", value: "615 м²" },
      { label: "Площадь дома", value: "300 м²" },
      { label: "Жилая площадь", value: "150 м²" },
      { label: "Участок", value: "10 соток" },
      { label: "Комнат в доме", value: "5" },
      { label: "Ванная комната", value: "10 м²" },
      { label: "Кухня", value: "42 м²" },
      {
        label: "Первый этаж",
        value: "Холл, кухня-гостиная, комната, кабинет, санузел",
      },
      {
        label: "Второй этаж",
        value: "Терраса, 2 спальни, 2 санузла, 2 гардеробных, холл, кладовая",
      },
      {
        label: "Спец этаж",
        value: "2 спальни с индивидуальными душевыми и туалетами",
      },
    ],
    DESCRIPTION_ITEMS : [
      "Из окон виллы открывается красивейший вид на древнюю гору-вулкан Аю-Даг, Гурзуфскую бухту и парки Артека, скалы Адалары и пристань для яхт и катеров.",
      "На террасе расположен бассейн с переливом в сторону моря и уникальными видовыми характеристиками.",
    ],
    Online_tour : {
      threeD_tour: {
          url: 'https://www.youtube.com/embed/Ke3qyQYNob4',
      },
      vr_tour: {
          url: 'https://3d-tur.ru/010/',
      }
    },
    OBJECT_SPECS_MOCK : {
      subtitle: "Строительно-техническая экспертиза",
      specificationsItems : {
        value: IconTypes.HOUSE_TYPE,
        label: { title: "Тип дома", text: "Монолитный" },
      }
    },
    legalPurityData : {
      encumbrances: false,
      risks: false,
      tabsData: OBJECT_LEGAL_PURITY_TABS_DATA
    },
    OBJECT_DEVELOPER_INFO : {
      name: "Брусника",
      developerType: "Девелоперская компания",
      logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
      risks: false,
      leasedAmmount: "183 дома в 103 ЖК",
      inProgressAmmount: "5 домов в 3 ЖК",
      tabsData: {
        about: DEVELOPER_ABOUT_PARAGRAPHS,
        contacts: DEVELOPER_CONTACTS,
        requisits: DEVELOPER_REQUISITS,
        owners: {
            company: DEVELOPER_OWNERS_COMPANY,
            goverment: DEVELOPER_OWNER_GOVERMENT,
        },
        activities: {
            primary: DEVELOPER_PRIMARY_ACTIVITIES,
            secondary: DEVELOPER_SECONDARY_ACTIVITIES,
        },
        news: DEVELOPER_MASS_MEDIA_ARTICLES,
        statistics: DEVELOPER_STATISTICS,
        risks: DEVELOPER_RISKS
      }
    }
  },
]