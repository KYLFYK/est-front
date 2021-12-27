import {makeAutoObservable} from "mobx"
import {createContext, FC, useContext} from "react";


// type LegalPurityDataGeneralType = {
//     general: Array<LegalPurityInfoTabsDataType>
// }
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

const lang0 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 0,
    lang : "ru",
    name : "Участок на берегу Моря",
    type : "plat",
    category: "Участок",
    address : "Крым, Ялта, ул.Советская 12",
    city : "Ялта",
    lat : 35.4,
    lng : 45.2,
    price : 4000000,
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    publish : '22.01.2020',
    views : '589',
    agency : 'Агентство: Estatum',
    infrastructureInfo:'Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности.' +
        'В Гурзуфе есть свой причал, откуда регулярно отправляются рейсы на Ялту, Никиту, Ласточкино гнездо, Алупку, Партенит и Алушту.',
    info_options : [
        { label: "Общая площадь", value: "50 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Есть" },
    ],
    description_items : [ // {description:''}
        "Рядом аэропорт , метро в шаговой доступности. Около участка электричество, газ.",
        "В округе множетво новых стоений, в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
        },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}
const lang1 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 1,
    lang : "ru",
    name : "Участок в Хволынск 15 соток",
    type : "plat",
    category: "Участок",
    address : "Россия, Хволынск, микрорайон Холмы",  // `${country},${city},${address} `
    city : "Хволынск", // city
    lat : 35.4,
    lng : 45.2,
    price : 3110000, // cost
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    publish : '12.06.2021',
    views : '389',
    agency : 'Агентство: Холмы мира',
    infrastructureInfo:'В 15 минутах езды расположена Горнолыжный курорт со своей знаменитыми холмами',
    info_options : [
        { label: "Общая площадь", value: "30 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Нет" },
    ],
    description_items : [ // {description:''}
        "Участок расположен на границе с городом, прилегает к асфальту. Зона ОД-4 (общественного-деловая). Около участка электричество, газ.",
        "Рядом гаражный кооператив на 400 машиномест (70 продано), в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
        },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}
const lang2 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 2,
    lang : "ru",
    name : "Участок Нагорный",
    type : "plat",
    category: "Участок",
    address : "Кавказ, Нагорный, микрорайон Бугристый",  // `${country},${city},${address} `
    city : "Нагорный", // city
    lat : 35.4,
    lng : 45.2,
    price : 12200000, // cost
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    publish : '12.01.2018',
    views : '789',
    agency : 'Агентство: Вокруг мира',
    infrastructureInfo:'В Гурзуфе есть свой причал, откуда регулярно отправляются рейсы на Ялту, Никиту, Ласточкино гнездо, Алупку, Партенит и Алушту.',
    info_options : [
        { label: "Общая площадь", value: "30 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Нет" },
    ],
    description_items : [ // {description:''}
        "Участок расположен на границе с городом, прилегает к асфальту. Зона ОД-4 (общественного-деловая). Около участка электричество, газ.",
        "Рядом гаражный кооператив на 400 машиномест (70 продано), в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
        },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}
const lang3 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 3,
    lang : "ru",
    name : "Участок в Сосновом бору",
    type : "plat",
    category: "Участок",
    address : "Россия, Забугорное, микрорайон Сосновый бор",  // `${country},${city},${address} `
    city : "Троицкое", // city
    lat : 35.4,
    lng : 45.2,
    price : 3220000, // cost
    sort : null,
    planning : "2",
    secondary_type : "Новостройка",
    total_area : 73,
    floor : 5,
    total_floors : 29,
    favorite : false,
    publish : '12.06.2021',
    views : '789',
    agency : 'Агентство: Бобры',
    infrastructureInfo:'В 15 минутах езды расположена Ялта со своей знаменитой набережной, театр Чехова, авквариум и дельфинарий. ' +
        'Знаменитые дворцы, парки, ботанические сады и винные заводы расположены в получасовой доступности. ',
    info_options : [
        { label: "Общая площадь", value: "40 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Да" },
    ],
    description_items : [ // {description:''}
        "Участок расположен на границе с городом, прилегает к асфальту. Зона ОД-4 (общественного-деловая). Около участка электричество, газ.",
        "Рядом гаражный кооператив на 400 машиномест (70 продано), в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
        },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}
const lang4 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 4,
    lang : "ru",
    name : "Участок в Троицком 30 соток",
    type : "plat",
    category: "Участок",
    address : "Россия, Троицкое, микрорайон Ясная Поляна",  // `${country},${city},${address} `
    city : "Троицкое", // city
    lat : 35.4,
    lng : 45.2,
    price : 2212000, // cost
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
        { label: "Общая площадь", value: "30 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Нет" },
    ],
    description_items : [ // {description:''}
        "Участок расположен на границе с городом, прилегает к асфальту. Зона ОД-4 (общественного-деловая). Около участка электричество, газ.",
        "Рядом гаражный кооператив на 400 машиномест (70 продано), в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [{
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
        },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}
const lang5 ={
    images : [
        "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
    ],
    object_id : 5,
    lang : "ru",
    name : "участок в Казахстан на Равнине ",
    type : "plat",
    category: "Участок",
    address : "Казахстан,Караганда , микрорайон Ровнина",  // `${country},${city},${address} `
    city : "Караганда", // city
    lat : 35.4,
    lng : 45.2,
    price : 5200000, // cost
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
    infrastructureInfo:'Вид на город с высоты холма ',
    info_options : [
        { label: "Общая площадь", value: "15 соток" },
        { label: "Статус участка", value: "ИЖС" },
        { label: "Строения на участке", value: "Нет" },
    ],
    description_items : [ // {description:''}
        "Участок расположен на границе с городом, прилегает к асфальту. Зона ОД-4 (общественного-деловая). Около участка электричество, газ.",
        "Рядом гаражный кооператив на 400 машиномест (70 продано), в процессе строительства 5 многоквартирных дома и торговый комплекс. Документы готовы, оформление через МФЦ.",
    ],
    object_specs : [{
        subtitle: "Инженерные коммуникации",
        specificationsItems : [
            {
            value: 'house_type',
            label: { title: "Водопровод", text: "Центральный" },
            },
            {
                value: 'house_type',
                label: { title: "Отопление", text: "Газовый котёл" },
            },
            {
                value: 'house_type',
                label: { title: "Канализация", text: "Центральная" },
            }]
    }],
    legalPurityData : {
        encumbrances: false,
        risks: false,
        tabsData: {
            general: [
                {
                    value: "Данные из ЕГРН",
                    description: "Это всплывающая подсказка о данных из ЕГРН",
                    label: [
                        {
                            title: "Адрес",
                            text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
                        },
                        {
                            title: "Кадастровый номер",
                            text: "77:06:0009005:4567",
                        },
                        {
                            title: "Кадастровая стоимость",
                            text: "150 000 000 ₽",
                            // description: "Это всплывающая подсказка о данных кадастровой стоимости",
                        },
                        {
                            title: "Общая площадь",
                            text: "615 м²",
                        },
                        {
                            title: "Этажность",
                            text: "3",
                        },
                    ],
                },
            ],
            founders: [
                {
                    value: "Текущие владельцы",
                    label: [
                        { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
                {
                    value: "Предыдущие владельцы",
                    // description: "Всплывающая подсказка предыдущих владельцев", // ??
                    label: [
                        {
                            title: "2 владельца",
                            text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
                        },
                        { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
                    ],
                },
            ],
            encumbrances: [
                {
                    title: "Текущие владельцы",
                    encumbrances: [
                        {
                            status: 0,
                            description: "Description",
                            text: "Дом в ипотеке",
                        },
                        {
                            status: 1,
                            description: "Description",
                            text: "Записей об аренде не найдено",
                        },
                    ],
                },
            ],
            recomendations: [
                {
                    value: "Квартира меняла владельцев несколько раз за последние 3 года",
                    label:
                        "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
                },
                {
                    value: "Квартира в собственности менее 5 лет",
                    label:
                        "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
                },
            ]
        }
    },
}

class PlatStore  {
    constructor() {
        makeAutoObservable(this);
    }
    initialData = {
        images : ['https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'],
        object_id : 0,
        lang : "",
        name : "",
        type : "plat",
        category: "Участок",
        address : "",  // `${country},${city},${address} `
        city : "", // city
        lat : 1.0,
        lng : 10.0,
        price : 0, // cost
        sort : null,
        planning : "",
        secondary_type : "",
        total_area : 0,
        floor : 0,
        total_floors : 0,
        favorite : false,
        publish : '',
        views : '',
        agency : '',
        info_options : [{ label: 'string', value: 'string' }],
        description_items : [''],
        infrastructureInfo:'',
        object_specs : [{
            subtitle: "",
            specificationsItems : [{
                value: '',
                label: { title: "", text: "" },
            }]
        }],
        legalPurityData : {
            encumbrances: false,
            risks: false,
            tabsData: {
                general: [
                    {
                        value: "",
                        description: "",
                        label: [{title: "", text: "",}],
                    },
                ],
                founders: [{
                    value: "",
                    label: [{ title: "", text: "" },],
                }],
                encumbrances: [ {
                    title: "",
                    encumbrances: [{status: 0, description: "", text: "",}],
                }],
                recomendations: [{value: "", label: "",}]
            }
        },
    }
    fetch(id:string) {
        if(id==='0')this.initialData = lang0
        if(id==='1')this.initialData = lang1
        if(id==='2')this.initialData = lang2
        if(id==='3')this.initialData = lang3
        if(id==='4')this.initialData = lang4
        if(id==='5')this.initialData = lang5
    }
    get() {
        console.log(JSON.parse(JSON.stringify({ ...this.initialData})))
    }
}


const StoreContext = createContext<PlatStore>(new PlatStore());

const StoreProvider: FC<{ store: PlatStore}> = ({ children, store }) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStoreLang = () => {
    return useContext(StoreContext);
};

export { PlatStore, StoreProvider, useStoreLang };
