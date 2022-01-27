export const MappingGeneralInfo = (address: any, category: any, info: any, specs: any) => {
    const info_options = [
        { label: "Адрес", value: address },
        { label: "Срок сдачи", value: category },
        { label: "Стоимость квартир", value: `от ${(info.priceObjectMin/1000000).toFixed(2)} млн руб.` },
        { label: "Площадь квартир", value: `${info.areaObjectMin} — ${info.areaObjectMax} м2` },
        { label: "Всего квартир", value: info.amountObjects },
        { label: "Класс жилья", value: specs[0].specificationsItems.filter((s: any) => s.value === 'class')[0].label.text },
        { label: "Корпуса", value: `${info.amountBuildings} корпус` },
        { label: "Этажность", value: info.amountFloors },
        { label: "Тип дома", value: specs.filter((s: any) => s.subtitle === 'Строительно-техническая экспертиза')[0].specificationsItems.filter((si: any) => si.value === 'construction')[0].label.text },
        { label: "Высота потолков", value: info.heightCeilings },
        { label: "Отделка", value: specs[0].specificationsItems.filter((s: any) => s.value === 'decorating')[0].label.text },
        { label: "Парковка", value: specs[0].specificationsItems.filter((s: any) => s.value === 'parking')[0].label.text },
      ]
    return info_options;
}

export const MappingDeveloperInfo = (info: any) => {
    const news: any = []
    info.developerProperty.press.forEach((p: any) => {news.push({link: p.link, date: p.date, title: p.title, description: p.text, icon: p.logo, id: p.id})})
    const object_developer_info = {
        name: info.developerProperty.name,
        developerType: info.developerProperty.type,
        logo: "",
        risks: info.developerProperty.risks,
        leasedAmmount: "",
        inProgressAmmount: "",
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
          activities: {primary: [""], secondary: [...info.developerProperty.extraOccupations.map((eo: any) => eo.value )]},
          news: news,
          statistics: [
            { value: "Арбитражные дела", label: [{ title: "", text: "Судебные дела" }]},
            { value: "Исполнительные производства", label: [{ title: "", text: "Завершённые производства" }]},
            { value: "Тендеры и госзакупки", label: [{ title: "", text: "Количество закупок" }]},
            { value: "Существенные события", label: [{ title: "", text: "За всю историю компании" }]}
          ],
          risks: [
            { value: "", label: { title: "Индекс должной осмотрительности", text: "Оценка, показывающая вероятность того, что компания является «фирмой- однодневкой»"}},
            { value: "", label: { title: "Индекс финансового риска", text: "Оценка вероятности неплатежеспособности компании"}},
            { value: "", label: { title: "Индекс платежной дисциплины", text: "Показатель, отражающий своевременность оплаты компанией счетов"}}
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