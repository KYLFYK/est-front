export const MappingGeneralInfo = (info: any) => {
    const info_options = [
      {label: "Общая площадь", value: `${info.total_area} м²`},
      {label: "Жилая площадь", value: `${info.living_area} м²`},
      {label: "Высота потолков", value: `${info.height_сeilings} м`},
      {label: "Этаж", value: `${info.floor}/${info.total_floors}`},
      {label: "Комнат в квартире", value: info.amount_bedrooms},
      {label: "Ванная комната", value: `${info.bathroom_area} м²`},
      {label: "Кухня", value: `${info.kitchen_area} м²`},
      {label: info.rooms_area.length < 2 ? "Комната" : "Комнаты", value: info.rooms_area.map((ra: any) => `${ra} м²`).join(', ')},
      {label: "Интерьер", value: info.interior},
      {label: "Парковка", value: info.parking ? info.parking : 'нет'},
      {label: "ЖК", value: info.complex},
      {label: "Срок сдачи", value: info.deadline},
    ]
    return info_options;
}

export const MappingDescription = (description: any) => {
  return [description]
}

export const MappingDeveloperInfo = (info: any) => {
    const news: any = []
    info.developerProperty.press?.forEach((p: any) => {news.push({link: p.link, date: p.date, title: p.title, description: p.text, icon: p.logo, id: p.id})})
    const statistics: any = []
    info.developerProperty.statistics?.forEach((s: any) => {statistics.push({value: s.title, label: s.items.map((i: any) => {
      return {title: i.value, text: i.item}
    })})})
    const object_developer_info = {
        name: info.developerProperty.name,
        developerType: info.developerProperty.type,
        logo: info.developerProperty.logo,
        risks: info.developerProperty.risks,
        leasedAmmount: `${info.developerProperty.completedBuildingAmount} дома в ${info.developerProperty.completedBuildingAmount} ЖК`,
        inProgressAmmount: `${info.developerProperty.inProgressBuildingAmount} домов в ${info.developerProperty.inProgressComplexAmount} ЖК`,
        tabsData: {
          about: [info.developerProperty.description],
          contacts: [
            { value: "tel", label: { title: "Телефон", text: info.phone }},
            { value: "email", label: { title: "E-mail", text: info.email }},
            { value: "site", label: { title: "Сайт", text: info.developerProperty.site }},
            { value: "address", label: { title: "Адрес", text: info.developerProperty.legalAddress}},
          ],
          requisits: [
            { value: "fullName", label: { title: "Полное наименование организации", text: info.developerProperty.legalFullName}},
            { value: "address", label: { title: "Адрес", text: info.developerProperty.address}},
            { value: "capital", label: { title: "Уставный капитал", text: info.developerProperty.authorizedCapital}},
            { value: "okfs", label: { title: "ОКФС", text: info.developerProperty.OKFS}},
            { value: "okopf", label: { title: "ОКОПФ", text: info.developerProperty.OKOPF}},
            { value: "okogu", label: { title: "ОКОГУ", text: info.developerProperty.OKOGU}},
            { value: "inn", label: { title: "ИНН", text: info.developerProperty.INN}},
            { value: "okato", label: { title: "ОКАТО", text: info.developerProperty.OKATO}},
            { value: "ogrn", label: { title: "ОГРН", text: info.developerProperty.OGRN}},
            { value: "okpo", label: { title: "ОКПО", text: info.developerProperty.OKPO}},
            { value: "kpp", label: { title: "КПП", text: info.developerProperty.KPP}},
            { value: "oktmo", label: { title: "ОКТМО", text: info.developerProperty.OKTMO}}
          ],
          owners: {
              company: {
                defaultInfo: [
                    { value: "status", label: { title: "Статус компании", text: info.developerProperty.status}},
                    { value: "head", label: { title: "Руководитель", text: info.developerProperty.leaderName}},
                    { value: "owner", label: { title: "Учредители", text: info.developerProperty.founders}}
                ],
                numericInfo: [
                    { value: "size", label: { title: "Размер предприятия", text: info.developerProperty.enterpriseSize}},
                    { value: "staffAmmount", label: { title: "Численность персонала", text: info.developerProperty.numberOfStaff}},
                    { value: "filials", label: { title: "Филиалы", text: info.developerProperty.branch}},
                    { value: "revenue", label: { title: "Выручка", text: info.developerProperty.revenue}},
                    { value: "profit", label: { title: "Чистая прибыль", text: info.developerProperty.netProfit}},
                    { value: "assets", label: { title: "Чистые активы", text: info.developerProperty.netAssets}}
                ]
              },
              goverment: [
                { value: "date", label: { title: "Дата регистрации", text: info.developerProperty.registrationDate}},
                { value: "authority", label: { title: "Регистрирующий орган", text: info.developerProperty.registrationAuthorityName}},
                { value: "authorityAddress", label: { title: "Адрес регистрирующего органа", text: info.developerProperty.registrationAuthorityAddress}},
                { value: "authorityBusiness", label: { title: "Регистрирующий орган, в котором находится регистрационное дело", text: info.developerProperty.registeringAuthorityLocated}}
              ]
          },
          activities: {primary: [info.developerProperty.mainOccupation], secondary: [...info.developerProperty.extraOccupations.map((eo: any) => eo.value )]},
          news: news,
          statistics: statistics,
          risks: [
            { value: info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс должной осмотрительности")[0].value, label: { title: "Индекс должной осмотрительности", text: "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»"}},
            { value: info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс финансового риска")[0].value, label: { title: "Индекс финансового риска", text: "Оценка вероятности неплатежеспособности компании"}},
            { value: info.developerProperty.risks?.filter((dp: any) => dp.title === "Индекс платежной дисциплины")[0].value, label: { title: "Индекс платежной дисциплины", text: "Показатель, отражающий своевременность оплаты компанией счетов"}}
          ]
        }
      }
    return object_developer_info;
}