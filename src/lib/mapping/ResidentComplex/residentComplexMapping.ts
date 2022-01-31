export const MappingGeneralInfo = (address: any, category: any, info: any, specs: any) => {
    const info_options = [
        { label: "Адрес", value: address },
        { label: "Срок сдачи", value: category },
        { label: "Стоимость квартир", value: `от ${(info.priceObjectMin/1000000).toFixed(2)} млн руб.` },
        { label: "Площадь квартир", value: `${info.areaObjectMin} — ${info.areaObjectMax} м2` },
        { label: "Всего квартир", value: info.amountObjects },
        { label: "Класс жилья", value: specs.filter((s: any) => s.subtitle === 'Класс жилья')[0].specificationsItems?.filter((si: any) => si.value === 'class')[0]?.label?.text },
        { label: "Корпуса", value: `${info.amountBuildings} корпус` },
        { label: "Этажность", value: info.amountFloors },
        { label: "Тип дома", value: specs.filter((s: any) => s.subtitle === 'Строительно-техническая экспертиза')[0].specificationsItems?.filter((si: any) => si.value === 'construction')[0]?.label?.text },
        { label: "Высота потолков", value: info.heightCeilings },
        { label: "Отделка", value: specs.filter((s: any) => s.subtitle === 'Отделка')[0].specificationsItems?.filter((si: any) => si.value === 'decorating')[0]?.label?.text },
        { label: "Парковка", value: specs.filter((s: any) => s.subtitle === 'Парковка')[0].specificationsItems?.filter((si: any) => si.value === 'parking').map((p: any) => p.label.text).join(', ') },
      ]
    return info_options;
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

export const MappingShedule = (objs: any) => {
    let returnedObjs: Array<any> = [];
    objs && objs.forEach((o: any) => {
        returnedObjs.push({
            label: o.date,
            value: o.id - 1,
            title: o.description,
        })
    })
    return returnedObjs;
}