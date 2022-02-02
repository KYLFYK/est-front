export const sortObject_specsTypeGuide = (guide:Array<{value:string,label:{title:string, text:string}}> | undefined) => {
    const EngineeringCommunication = {
        subtitle: "Инженерные коммуникации",
        specificationsItems :[] as Array<{value:string,label:{title:string, text:string}}>
    }
    const ObjectsTerritory = {
        subtitle: "Объекты на территории",
        specificationsItems :[] as Array<{value:string,label:{title:string, text:string}}>
    }
    const Safety = {
        subtitle: "Безопасность",
        specificationsItems :[] as Array<{value:string,label:{title:string, text:string}}>
    }
    const Furniture = {
        subtitle: "Мебель",
        specificationsItems :[] as Array<{value:string,label:{title:string, text:string}}>
    }
    const ConstructionAndTechnicalExpertise = {
        subtitle: "Строительно-техническая экспертиза",
        specificationsItems :[]as Array<{value:string,label:{title:string, text:string}}>
    }
    guide && guide.map(guid=>{

        //"Инженерные коммуникации"
        if (guid.value === 'water_supply' || guid.value === 'heating' || guid.value === 'sewage_system' || guid.value === 'internet' || guid.value === 'electricity'){
            EngineeringCommunication.specificationsItems.push(guid)
        }
        //"Строительно-техническая экспертиза"
        if (guid.value === 'foundation' || guid.value === 'roof' || guid.value === 'wall'|| guid.value === 'constructionHouse'){
            ConstructionAndTechnicalExpertise.specificationsItems.push(guid)
        }
        //"Объекты на территории"
        if (guid.value === 'rest' || guid.value === 'relax_place' || guid.value === 'children_playground'){
            ObjectsTerritory.specificationsItems.push(guid)
        }
        //"Безопасность"
        if (guid.value === 'video_surveillance' || guid.value === 'fire_protection' || guid.value === 'concierge'){
            Safety.specificationsItems.push(guid)
        }
        //"Мебель"
        if (guid.value === 'fridge' || guid.value === 'washing_machine' || guid.value === 'conditioner'|| guid.value === 'furniture_rooms'|| guid.value === 'TV'|| guid.value === 'dishwasher'){
            Furniture.specificationsItems.push(guid)
        }
    })
    const filterSpecs = [ConstructionAndTechnicalExpertise,EngineeringCommunication,ObjectsTerritory,Safety,Furniture]

    return filterSpecs.filter(specs=>specs.specificationsItems.length > 0)
}

export const sortGuide = (
    guid:{
        "id": number
        "subtitle_en": null,
        "subtitle_ru": null,
        "type_en": string
        "type_ru": null,
        "for": Array<string>
        "value": string
    },
    type:string|null) => {
    switch (type){
        // case 'Construction and technical expertise':return {}
        case 'Строительно-техническая экспертиза':
            if(guid.type_ru === 'Фундамент'){
                return {value:'foundation',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Кровля"){
                return {value:'roof',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Стены"){
                return {value:'wall',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Тип дома"){
                return {value:'constructionHouse',label:{title:guid.type_ru, text:guid.value}}
            }
            return
        // case 'Furniture':return {}
        case 'Мебель':
            if(guid.value === 'Холодильник'){
                return {value:'fridge',label:{title: 'Холодильник',text:''}}
            }
            if(guid.value === "Стиральная машина"){
                return {value:'washing_machine',label:{title: "Стиральная машина",text:''}}
            }
            if(guid.value === 'Кондиционер'){
                return {value:'conditioner',label:{title: 'Кондиционер',text:''}}
            }
            if(guid.value === 'Мебель в комнатах'){
                return {value:'furniture_rooms',label:{title: 'Мебель в комнатах',text:''}}
            }
            if(guid.value === 'Телевизор'){
                return {value:'TV',label:{title: 'Телевизор',text:''}}
            }
            if(guid.value === 'Посудомоечная машина'){
                return {value:'dishwasher',label:{title: 'Посудомоечная машина',text:''}}
            }
            return
        // case 'Engineering Communication':return {}
        case 'Инженерные коммуникации':
            if(guid.type_ru === "Водопровод"){
                return {value:'water_supply',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Отопление"){
                return {value:'heating',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Канализация"){
                return {value:'sewage_system',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Интернет"){
                return {value:'internet',label:{title:guid.type_ru, text:guid.value}}
            }
            if(guid.type_ru === "Электричество"){
                return {value:'electricity',label:{title:guid.type_ru, text:guid.value}}
            }
            return

        // case 'Objects on the territory':return {}
        case 'Объекты на территории':
            if(guid.value === "Забор"){
                return {value:'rest',label:{title:guid.value,text:''}} // net Icons
            }
            if(guid.value === "Места для отдыха"){
                return {value:'relax_place',label:{title: guid.value,text:''}}
            }
            if(guid.value === "Детская площадка"){
                return {value:'children_playground',label:{title: guid.value,text:''}}
            }
            return
        case 'Безопасность':
            if(guid.value === "Видеонаблюдение"){
                return {value:'video_surveillance',label:{title:guid.value,text:''}} // net Icons
            }
            if(guid.value === "Противопожарная система"){
                return {value:'fire_protection',label:{title: guid.value,text:''}}
            }
            if(guid.value === "Консьерж"){
                return {value:'concierge',label:{title: guid.value,text:''}}
            }
            return
    }
}
