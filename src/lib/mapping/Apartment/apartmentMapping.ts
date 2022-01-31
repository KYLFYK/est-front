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
