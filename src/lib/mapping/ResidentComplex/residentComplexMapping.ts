import {datetoMonthFormat} from '../objectDates'

export const MappingGeneralInfo = (name: any, address: any, category: any, info: any, specs: any) => {
    let info_options = []
    info_options.push({ label: name, value: ''})
    if(address) info_options.push({ label: "Адрес", value: address })
    if(category) info_options.push({ label: "Срок сдачи", value: category })
    info_options.push({ label: 'Общая информация', value: ''})
    if(info['priceObjectMin']) info_options.push({ label: "Стоимость квартир", value: `от ${(info.priceObjectMin/1000000).toFixed(2)} млн руб.` })
    if(info['areaObjectMin'] && info['areaObjectMax']) info_options.push({ label: "Площадь квартир", value: `${info.areaObjectMin} — ${info.areaObjectMax} м2` })
    if(info['amountObjects']) info_options.push({ label: "Всего квартир", value: info.amountObjects })
    info_options.push({ label: 'О доме', value: ''})
    if(specs.filter((s: any) => s.type_en === 'class').length > 0) info_options.push({label: "Класс жилья", value: specs.filter((s: any) => s.type_en === 'class')[0].value})
    if(info['amountBuildings']) info_options.push({label: "Корпуса", value: `${info.amountBuildings} корпус`})
    if(info['amountFloors']) info_options.push({ label: "Этажность", value: info.amountFloors })
    if(specs.filter((s: any) => s.type_en === 'construction').length > 0) info_options.push({label: "Тип дома", value: specs.filter((s: any) => s.type_en === 'construction')[0].value})
    if(info['heightCeilings']) info_options.push({ label: "Высота потолков", value: info.heightCeilings })
    if(specs.filter((s: any) => s.type_en === 'decorating').length > 0) info_options.push({label: "Отделка", value: specs.filter((s: any) => s.type_en === 'decorating')[0].value})
    if(specs.filter((s: any) => s.type_en === 'parking').length > 0) info_options.push({label: "Парковка", value: specs.filter((s: any) => s.type_en === 'parking')[0].value})
    return info_options;
}

export const MappingDeveloperInfo = (info: any) => {
    const news: any = []
    info.developerProperty && info.developerProperty.press?.forEach((p: any) => {news.push({link: p.link, date: p.date, title: p.title, description: p.text, icon: p.logo, id: p.id})})
    const statistics: any = []
    info.developerProperty && info.developerProperty.statistics?.forEach((s: any) => {statistics.push({value: s.title, label: s.items.map((i: any) => {
      return {title: i.value, text: i.item}
    })})})
    const object_developer_info = {
        name: info.developerProperty ? info.developerProperty.name : "",
        developerType: info.developerProperty ? info.developerProperty.type : "",
        logo: info.developerProperty ? info.developerProperty.logo : "",
        risks: info.developerProperty ? info.developerProperty.risks : "",
        leasedAmmount: `${info.developerProperty ? info.developerProperty.completedBuildingAmount : ""} дома в ${info.developerProperty ? info.developerProperty.completedBuildingAmount : ""} ЖК`,
        inProgressAmmount: `${info.developerProperty ? info.developerProperty.inProgressBuildingAmount : ""} домов в ${info.developerProperty ? info.developerProperty.inProgressComplexAmount : ""} ЖК`,
        tabsData: {
          about: [info.developerProperty ? info.developerProperty.description : ""],
          contacts: [
            { value: "tel", label: { title: "Телефон", text: info ? info.phone : "" }},
            { value: "email", label: { title: "E-mail", text: info ? info.email : "" }},
            { value: "site", label: { title: "Сайт", text: info.developerProperty ? info.developerProperty.site : "" }},
            { value: "address", label: { title: "Адрес", text: info.developerProperty ? info.developerProperty.legalAddress : "" }},
          ],
          requisits: [
            { value: "fullName", label: { title: "Полное наименование организации", text: info.developerProperty ? info.developerProperty.legalFullName : "" }},
            { value: "address", label: { title: "Адрес", text: info.developerProperty ? info.developerProperty.address : "" }},
            { value: "capital", label: { title: "Уставный капитал", text: info.developerProperty ? info.developerProperty.authorizedCapital : "" }},
            { value: "okfs", label: { title: "ОКФС", text: info.developerProperty ? info.developerProperty.OKFS : "" }},
            { value: "okopf", label: { title: "ОКОПФ", text: info.developerProperty ? info.developerProperty.OKOPF : "" }},
            { value: "okogu", label: { title: "ОКОГУ", text: info.developerProperty ? info.developerProperty.OKOGU : "" }},
            { value: "inn", label: { title: "ИНН", text: info.developerProperty ? info.developerProperty.INN : "" }},
            { value: "okato", label: { title: "ОКАТО", text: info.developerProperty ? info.developerProperty.OKATO : "" }},
            { value: "ogrn", label: { title: "ОГРН", text: info.developerProperty ? info.developerProperty.OGRN : "" }},
            { value: "okpo", label: { title: "ОКПО", text: info.developerProperty ? info.developerProperty.OKPO : "" }},
            { value: "kpp", label: { title: "КПП", text: info.developerProperty ? info.developerProperty.KPP : "" }},
            { value: "oktmo", label: { title: "ОКТМО", text: info.developerProperty ? info.developerProperty.OKTMO : "" }}
          ],
          owners: {
              company: {
                defaultInfo: [
                    { value: "status", label: { title: "Статус компании", text: info.developerProperty ? info.developerProperty.status : "" }},
                    { value: "head", label: { title: "Руководитель", text: info.developerProperty ? info.developerProperty.leaderName : "" }},
                    { value: "owner", label: { title: "Учредители", text: info.developerProperty ? info.developerProperty.founders : "" }}
                ],
                numericInfo: [
                    { value: "size", label: { title: "Размер предприятия", text: info.developerProperty ? info.developerProperty.enterpriseSize : "" }},
                    { value: "staffAmmount", label: { title: "Численность персонала", text: info.developerProperty ? info.developerProperty.numberOfStaff : "" }},
                    { value: "filials", label: { title: "Филиалы", text: info.developerProperty ? info.developerProperty.branch : "" }},
                    { value: "revenue", label: { title: "Выручка", text: info.developerProperty ? info.developerProperty.revenue : "" }},
                    { value: "profit", label: { title: "Чистая прибыль", text: info.developerProperty ? info.developerProperty.netProfit : "" }},
                    { value: "assets", label: { title: "Чистые активы", text: info.developerProperty ? info.developerProperty.netAssets : "" }}
                ]
              },
              goverment: [
                { value: "date", label: { title: "Дата регистрации", text: info.developerProperty ? info.developerProperty.registrationDate : "" }},
                { value: "authority", label: { title: "Регистрирующий орган", text: info.developerProperty ? info.developerProperty.registrationAuthorityName : "" }},
                { value: "authorityAddress", label: { title: "Адрес регистрирующего органа", text: info.developerProperty ? info.developerProperty.registrationAuthorityAddress : "" }},
                { value: "authorityBusiness", label: { title: "Регистрирующий орган, в котором находится регистрационное дело", text: info.developerProperty ? info.developerProperty.registeringAuthorityLocated : "" }}
              ]
          },
          activities: {primary: info.developerProperty ? [info.developerProperty.mainOccupation] : [], secondary: info.developerProperty ? [...info.developerProperty.extraOccupations.map((eo: any) => eo.value )] : []},
          news: news,
          statistics: statistics,
          risks: [
            { value: info.developerProperty ? info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс должной осмотрительности")[0].value : "", label: { title: "Индекс должной осмотрительности", text: "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»"}},
            { value: info.developerProperty ? info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс финансового риска")[0].value : "", label: { title: "Индекс финансового риска", text: "Оценка вероятности неплатежеспособности компании"}},
            { value: info.developerProperty ? info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс платежной дисциплины")[0].value : "", label: { title: "Индекс платежной дисциплины", text: "Показатель, отражающий своевременность оплаты компанией счетов"}}
          ]
        }
      } 
    return object_developer_info;
}

export const MappingShedule = (objs: any) => {
    let returnedObjs: Array<any> = [];
    objs && objs.forEach((o: any) => {
        returnedObjs.push({
            label: datetoMonthFormat(o.date),
            value: o.id - 1,
            title: o.description,
        })
    })
    return returnedObjs;
}