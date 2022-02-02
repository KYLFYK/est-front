import {instance, UrlObj} from "../instance";
import {sortObject_specsTypeGuide,sortGuide} from "../../utils/conversionIcons/conversionIcons";

export const HouseApi  = {
    getAllHouse: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.house}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getHouseById: async (id: number) =>{
        try{

            const res  = await instance.get(`${UrlObj.house}/${id}`)
            console.log('resApiHouse',res)
            console.log(res.data.online_tour)
            //@ts-ignore
            let object_specsGuide :Array<{value:string,label:{title:string, text:string}}> | [] = res.data.object_specs.map(guid=>sortGuide(guid,guid.subtitle_ru)).filter(f=>f !== undefined)
             // console.log('object_specsGuide',object_specsGuide)
            const objectHouse = {
                    images : [
                        {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
                        {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
                        {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
                    ],
                    object_id : res.data.object_id,
                    lang : "ru",
                    name : res.data.name,
                    type : res.data.type,
                    category: "Дом",
                    address :  res.data.address,
                    city : "Ялта",
                    lat : +res.data.lat,
                    lng : +res.data.lng,
                    price : res.data.price? res.data.price : 999666,
                    sort : null,
                    planning : res.data.planning,
                    secondary_type : res.data.secondary_type,
                    total_area : 52,
                    floor : 3,
                    total_floors : 15,
                    favorite : res.data.favorite,
                    publish : res.data.owner.createAt.substr(0,10).split('-').reverse().join('.'),
                    views : res.data.views,
                    agency : res.data.agency !== null? res.data.agency : '',
                    info_options : [
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
                    description_items : [res.data.description],
                    online_tour :res.data.online_tour,
                    object_specs:  sortObject_specsTypeGuide( object_specsGuide),
                    // object_specs:  res.data.object_specs,
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
                                            description: "Это всплывающая подсказка о данных кадастровой стоимости",
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
                                    description: "Всплывающая подсказка предыдущих владельцев",
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
                    }
                }
            return objectHouse

        }
        catch (e:any){
            console.log('error', e)
            return e
        }
    },
}
export type IhouseApiType={
    data:{
        address:string
        complex: number
        createAt: string
        description: string
        object_specs: Array<{
                subtitle: string
                specificationsItems: Array<{value:string, label:{title:string, text:string}}>
        }>
        object_id: number
        lat: string
        lng: string
        markAsDelete: boolean
        name: string
        owner:{
            adminProperty: null
            agencyProperty: null
            agentProperty: null
            bankProperty: null
            createAt: string
            customerProperty: null
            developerProperty: number
            email: string
            id: number
            isConfirmed: false
            markAsDelete: true
            phone: string
            role: string
            updateAt: string
        }
        type:string
        online_tour:{
            threeD_tour:string
            vr_tour:string
        }
        price: number
        region:{
            id: number
            name: string
        }
        "status": {
            "id": number,
            "status": string
        }
        updateAt: string
        views: number

    }
}




