import {datetoDayFormat} from '../objectDates';

export const MappingGeneralInfo = (info: any, specs: any) => {
    let info_options = []
    if(info['total_area']) info_options.push({label: "Общая площадь", value: `${info.total_area} м²`})
    if(info['living_area']) info_options.push({label: "Жилая площадь", value: `${info.living_area} м²`})
    if(info['height_сeilings']) info_options.push({label: "Высота потолков", value: `${info.height_сeilings} м`})
    if(info['floor'] && info['total_floors']) info_options.push({label: "Этаж", value: `${info.floor}/${info.total_floors}`})
    if(info['amount_bedrooms']) info_options.push({label: "Комнат в квартире", value: info.amount_bedrooms})
    if(info['bathroom_area']) info_options.push({label: "Ванная комната", value: `${info.bathroom_area} м²`})
    if(info['kitchen_area']) info_options.push({label: "Кухня", value: `${info.kitchen_area} м²`})
    if(info['rooms_area']) info_options.push({label: info.rooms_area.length < 2 ? "Комната" : "Комнаты", value: info.rooms_area.map((ra: any) => `${ra} м²`).join(', ')})
    if(info['interior']) info_options.push({label: "Интерьер", value: info.interior})
    info_options.push({label: "Парковка", value: specs.filter((s: any) => s.subtitle_en === 'Parking')[0] 
      ? specs.filter((s: any) => s.subtitle_en === 'Parking')[0].value
      : 'нет'})
    if(info['deadline']) info_options.push({label: "Срок сдачи", value: datetoDayFormat(info.deadline)})
    if(info['complex']) info_options.push({label: "ЖК", value: info.complex })
    return info_options;
}

export const MappingDescription = (description: any) => {
  return [description]
}

export const MappingLegalPurity = (legal: any) => {
  return {
    encumbrances: true,
    risks: true,
    tabsData: {
      general: [
        {
          value: "Данные из ЕГРН",
          description: "Это всплывающая подсказка о данных из ЕГРН",
          label: [
            {title: "Адрес", text: legal.address},
            {title: "Кадастровый номер", text: legal.cadastalNumber},
            {title: "Кадастровая стоимость", text: legal.cadastralPrice, description: "Это всплывающая подсказка о данных кадастровой стоимости"},
            {title: "Общая площадь", text: legal.areaValue},
            {title: "Этажность", text: legal.floor},
          ],
        },
      ],
      founders: [
        {
          value: "Текущие владельцы",
          label: [
            { title: "Единоличный собственник", text: legal.currentOwnerName },
            { title: "77-77-08/011/2021-0308", text: legal.currentOwnerStartDate },
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
            {status: 0, description: "Description", text: "Дом в ипотеке"},
            {status: 1, description: "Description", text: "Записей об аренде не найдено"},
          ],
        },
      ],
      recomendations: [
        {
          value: "Квартира меняла владельцев несколько раз за последние 3 года",
          label: "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
        },
        {
          value: "Квартира в собственности менее 5 лет",
          label: "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
        },
      ]
    }
  }
}