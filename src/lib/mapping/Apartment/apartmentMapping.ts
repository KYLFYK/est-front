import {datetoDayFormat} from '../objectDates'

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
    risks: legal.risks ? legal.risks : '',
    tabsData: {
      general: [
        {
          value: "Данные из ЕГРН",
          description: "Это всплывающая подсказка о данных из ЕГРН",
          label: [
            {title: "Адрес", text: legal.address ? legal.address : ''},
            {title: "Кадастровый номер", text: legal.cadastalNumber ? legal.cadastalNumber : ''},
            {title: "Кадастровая стоимость", text: legal.cadastralPrice ? legal.cadastralPrice : '', description: "Это всплывающая подсказка о данных кадастровой стоимости"},
            {title: "Общая площадь", text: legal.areaValue ? legal.areaValue : ''},
            {title: "Этажность", text: legal.floor ? legal.floor : ''},
          ],
        },
      ],
      founders: [
        {
          value: "Текущие владельцы",
          label: [
            { title: "Единоличный собственник", text: legal.currentOwnerName ? legal.currentOwnerName : ''},
            { title: "77-77-08/011/2021-0308", text: legal.currentOwnerStartDate ? legal.currentOwnerStartDate : ''},
          ],
        },
        {
          value: "Предыдущие владельцы",
          description: "Всплывающая подсказка предыдущих владельцев",
          label: [
            {
              title: legal.previewOwners.owners ? `${legal.previewOwners.owners.length} владельца` : '',
              text: legal.previewOwners.owners ? legal.previewOwners.owners.join() : '',
            },
            { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
          ],
        },
      ],
      encumbrances: [
        {
          title: "Текущие владельцы",
          encumbrances: legal.encumbrances ? legal.encumbrances.map((e: any) => { return {status: e.status ? 0 : 1, description: e.title, text: e.title } }) : [],
        },
      ],
      recomendations: legal.recomendations ? legal.recomendations.map((r: any) => { return {value: r.title, label: r.description} }) : []
    }
  }
}