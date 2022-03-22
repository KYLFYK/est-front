import {makeAutoObservable} from "mobx"
import {createContext, FC, useContext} from "react";


type LegalPurityDataGeneralType = {
    general: Array<LegalPurityInfoTabsDataType>
}
type LegalPurityInfoTabsDataType = {
    value: string
    description: string
    label: Array<{
        title: string
        text: string
    }>
}
type LegalPurityInfoTabsDataFoundersType = {
    value: string
    label: Array<{
        title: string
        text: string
    }>
}
type LegalPurityInfoTabsDataEncumbrancesType = {
    title: string
    encumbrances: Array<{
        status: number,
        description: string
        text: string
    }>
}

export type LangAllType ={
    LangData:LangType
    update:(id:number)=>void
}

type LangType = {
    images: Array<string>
    object_id: number
    lang: string,
    name: string,
    type: string,
    category: string,
    address: string,
    city: string,
    lat: number,
    lng: number,
    price: number,
    sort: null,
    planning: string,
    secondary_type: string,
    total_area: number,
    floor: number,
    total_floors: number,
    favorite: boolean,
    publish: string,
    views: string,
    agency: string,
    info_options: Array<{ label: string, value: string }>
    description_items: Array<string>
    object_specs: Array<{
        subtitle: string,
        specificationsItems: Array<{ value: string, label: { title: string, text: string } }>
    }>
    legalPurityData: {
        encumbrances: boolean,
        risks: boolean,
        tabsData: {
            general: Array<LegalPurityInfoTabsDataType>,
            founders: Array<LegalPurityInfoTabsDataFoundersType>,
            encumbrances: Array<LegalPurityInfoTabsDataEncumbrancesType>
            recomendations: Array<{ value: string, label: string }>
        }
    },
    update?:(id:number)=>void
}
// const oneObje : LangType ={
const complex0 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 0,
    lang : "ru",
    name : "ЖК Street",
    type : "residential-complex",
    category: "Жилищный комплекс",
    address : "Поповка",
    city : "Калининград",
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
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: У моря',
    infrastructureInfo:'Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.' +
        'В Гурзуфе есть свой причал, откуда регулярно отправляются рейсы на Ялту, Никиту, Ласточкино гнездо, Алупку, Партенит и Алушту.',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}
const complex1 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 1,
    lang : "ru",
    name : "ЖК District",
    type : "residential-complex",
    category: "Жилищный комплекс",
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
    publish : '7.02.2021',
    views : '139',
    agency : 'Агентство: Заречье',
    infrastructureInfo:'В 15 минутах езды расположена Горнолыжный курорт со своей знаменитыми холмами',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}
const complex2 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 2,
    lang : "ru",
    name : "ЖК Dredd",
    type : "residential-complex",
    category: "Жилищный комплекс",
    address : "ЖК Dredd",
    city : "Керчь",
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
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: Лунный свет',
    infrastructureInfo:'В Гурзуфе есть свой причал, откуда регулярно отправляются рейсы на Ялту, Никиту, Ласточкино гнездо, Алупку, Партенит и Алушту.',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}
const complex3 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 2,
    lang : "ru",
    name : "ЖК District",
    type : "residential-complex",
    category: "Жилищный комплекс",
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
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: Лунный свет',
    infrastructureInfo:'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. ' +
        'Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности. ',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}
const complex4 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 2,
    lang : "ru",
    name : "ЖК District",
    type : "residential-complex",
    category: "Жилищный комплекс",
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
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: Лунный свет',
    infrastructureInfo:'Вид на город с высоты холма',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}
const complex5 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 2,
    lang : "ru",
    name : "ЖК District",
    type : "residential-complex",
    category: "Жилищный комплекс",
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
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: Лунный свет',
    infrastructureInfo:'Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности. ',
    info_options : [
        { label: "Адрес", value: "ул. Николая I" },
        { label: "Срок сдачи", value: "III квартал 2022 года" },
        { label: "Стоимость квартир", value: "от 9,6 млн руб." },
        { label: "Площадь квартир", value: "33 — 81 м2" },
        { label: "Всего квартир", value: "32 (Корпус 5)" },
        { label: "Класс жилья", value: "Бизнес" },
        { label: "Корпуса", value: "1 корпус" },
        { label: "Этажность", value: "13 этажей" },
        { label: "Тип дома", value: "Монолитный" },
        { label: "Высота потолков", value: "3,3 м" },
        { label: "Отделка", value: "Черновая" },
        { label: "Парковка", value: "Подземный паркинг, автостоянка" },
    ],
    object_specs : [{
        subtitle: "Объекты на  территории жилого комплекса",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Безопасность",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    },{
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        },{
            value: 'house_type',
            label: { title: "Тип дома", text: "Монолитный" },
        }]
    }],
    object_developer_info : {
        name: "Брусника",
        developerType: "Девелоперская компания",
        logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
        risks: false,
        leasedAmmount: "183 дома в 103 ЖК",
        inProgressAmmount: "5 домов в 3 ЖК",
        tabsData: {
            about: [
                "Брусника — российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московский области. Ежегодно это 6 000 новых квартир для российских семей.",
                "Бизнес-идея Брусники основана на желании изменить жизнь к лучшему, предлагая демократичное жильё нового качества, простоту и надёжность покупки, комфорт и функциональность проживания.",
                "В Бруснике понимают девелопмент как постоянный процесс преобразования города и пространства, в котором живут люди. Для компании важны детали, которые могут сделать жизнь лучше. Для сотрудников Брусники это ежедневный добросовестный труд.",
            ],
            contacts: [
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
            ],
            requisits: [
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
            ],
            owners: {
                company: {
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
                },
                goverment: [
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
                ],
            },
            activities: {
                primary: [
                    "Деятельность заказчика-застройщика, генерального подрядчика",
                ],
                secondary: [
                    "Передача электроэнергии и технологическое присоединение к распределительным электросетям",
                    "Покупка и продажа собственного недвижимого имущества",
                    "Подготовка к продаже собственного недвижимого имущества",
                    "Аренда и управление собственным или арендованным недвижимым имуществом",
                ],
            },
            news: [{
                link: "",
                date: new Date(),
                title:
                    "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
                description:
                    "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд руб. на...",
                icon:
                    "https://pbs.twimg.com/profile_images/984033833900298245/5U8I3xfZ_400x400.jpg",
                id: "1",
            },],
            statistics: [
                {
                    value: "Арбитражные дела",
                    label: [{ title: "17", text: "Судебные дела" },],
                },
                {
                    value: "Исполнительные производства",
                    label: [{ title: "44", text: "Завершённые производства" },],
                },
                {
                    value: "Тендеры и госзакупки",
                    label: [{ title: "74", text: "Количество закупок" },],
                },
                {
                    value: "Существенные события",
                    label: [{ title: "7", text: "За всю историю компании" },],
                },
            ],
            risks: [
                {
                    value: "15",
                    label: {
                        title: "Индекс должной осмотрительности",
                        text:
                            "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»",
                    },
                },
                {
                    value: "0",
                    label: {
                        title: "Индекс финансового риска",
                        text: "Оценка вероятности неплатежеспособности компании",
                    },
                },
                {
                    value: "11",
                    label: {
                        title: "Индекс платежной дисциплины",
                        text: "Показатель, отражающий своевременность оплаты компанией счетов",
                    },
                },
            ]
        }
    },
    schedule: [
        {label: 'Август 2021', value: '0', title: 'Продолжали работы на фасаде.'},
        {label: 'Сентябрь 2021', value: '1', title: 'Завершили кладку кирпичных стен. Монтировали межкомнатные перегородки.'},
        {label: 'Октябрь 2021', value: '2', title: 'Штукатурили стены. Монтировали окна и витражи.'},
        {label: 'Ноябрь 2021', value: '3', title: 'Выполняли устройство сетей электроснабжения, отопления, водоснабжения, вентиляции и канализации.'}
    ],
    planningList : [
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
        { image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },
    ]
}

class ResidentialComplexStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        images : [
            "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        ],
        object_id : 0,
        lang : "",
        name : " ",
        type : "residential-complex",
        category: "Жилищный комплекс",
        address : "",
        city : "",
        lat : 35.6,
        lng : 35.6,
        price : 0,
        sort : null,
        planning : "2",
        secondary_type : "Новостройка",
        total_area : 73,
        floor : 5,
        total_floors : 29,
        favorite : false,
        publish : '',
        views : '0',
        agency : '',
        infrastructureInfo:'',
        info_options : [{ label: "", value: "" },],
        object_specs : [{
            subtitle: "",
            specificationsItems : [{
                value: '',
                label: { title: "", text: "" },
            }]
        },{
            subtitle: "",
            specificationsItems : [{
                value: '',
                label: { title: "", text: "" },
            }]
        },{
            subtitle: "",
            specificationsItems : [{
                value: '',
                label: { title: "", text: "" },
            }]
        }],
        object_developer_info : {
            name: "",
            developerType: "",
            logo: "https://d3n32ilufxuvd1.cloudfront.net/55ad267d853a8ee05ba03cb2/226965/upload-9b246d20-77e5-11e5-a659-371ac3ded399.jpg",
            risks: false,
            leasedAmmount: "",
            inProgressAmmount: "",
            tabsData: {
                about: [''],
                contacts: [
                    { value: "", label: { title: "", text: "" } }
                ],
                requisits: [{value: "", label: {title: "", text: ""}}],
                owners: {
                    company: {
                        defaultInfo: [{value: "", label: {title: "", text: "",}}],
                        numericInfo: [
                            {value: "", label: {title: "", text: ""}}],
                    },
                    goverment: [{value: "", label: { title: "", text: "" }}],
                },
                activities: {
                    primary: [
                        "",
                    ],
                    secondary: ["",],
                },
                news: [{
                    link: "",
                    date: new Date(),
                    title: "",
                    description: "",
                    icon: "",
                    id: "",
                },],
                statistics: [{value: "", label: [{ title: "", text: "" },],},],
                risks: [{value: "", label: {title: "", text: "",},},]
            }
        },
        schedule: [{label: '', value: '', title: ''},],
        planningList : [{ image: 'https://metrika.com/sites/default/files/debyut.png', price: 144444, title: "Большой домина", housing: 3, deadline: "2 квартал 2023г", floor: 4 },]
    }
    fetch(id:string) {
        if(id==='0')this.initialData = complex0
        if(id==='1')this.initialData = complex1
        if(id==='2')this.initialData = complex2
        if(id==='3')this.initialData = complex3
        if(id==='4')this.initialData = complex4
        if(id==='5')this.initialData = complex5
    }
    get() {
        return JSON.parse(JSON.stringify({ ...this.initialData}))
    }
}


const StoreContext = createContext<ResidentialComplexStore>(new ResidentialComplexStore());

const StoreProvider: FC<{ store: ResidentialComplexStore}> = ({ children, store }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreResidentialComplex = () => {
    return useContext(StoreContext);
};

export { ResidentialComplexStore, StoreProvider, useStoreResidentialComplex };
