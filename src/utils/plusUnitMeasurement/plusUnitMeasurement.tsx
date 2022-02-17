
const searchUnit = (label:string ,value: string | number) => {
    if(label==="Общая площадь"
        || label==="Жилая площадь"
        || label==="Ванная комната"
        || label==="Кухня"
        || label==="Комната"
        || label==="Площадь дома"
        || label==="Прощадь дома" // fail back
    ) {
        if (  value !== '' )return value +' м²'
        return value
    }
    if(label==="Высота потолков") return  value + ' м'
    if(label==="Участок") return  value + ' соток'
    if(label==="Комнат в доме") {
        if(typeof(value) === "number") return value
        if(value==='one') return 1
        if(value==='two') return 2
        if(value==='three') return 3
        if(value==='four') return 4
        if(value==='five') return 5
        if(value==='six') return 6
        if(value==='seven') return 7
    }
    return value
}

export const plusUnitMeasurement = (infoOptions:Array<{label: string, value: string | number}>) => {
   return  infoOptions.map(info=>({
            ...info,
            value:searchUnit(info.label,info.value)
        }
    ))
}
