// for  Icons ( Детская площадка )
export const convertSpecificationsIcons = (params:any, title:string) => {
    return params.map((r:any)=>(
        {
            label:
                {
                    title:r.reality_object_param.reality_object_param_subgroup?.name_rus === title ? r.reality_object_param.name_rus:'',
                    text: '',
                    icon:r.reality_object_param.icon
                }
        }
    )).filter((t:any)=>t.label.title !== '')
}

// for  Icons ( Тип дома -  монолитный )
export const convertSpecificationsIconsText = (params:any, title:string) => {
    return params.map((r:any)=>(
        {
            label:
                {
                    title:r.reality_object_param.reality_object_param_subgroup?.name_rus === title ? r.reality_object_param.name_rus:'',
                    text: r.reality_object_param.reality_object_param_subgroup?.name_rus === title ? r.value_text:'',
                    icon:r.reality_object_param.icon
                }
        }
    )).filter((t:any)=>t.label.title !== '')
}

export const convertInfoColumn = (params:any,title:string) => {
    return params.map((general:any)=>{
        if(general.reality_object_param.reality_object_param_subgroup?.name_rus === title ){
            return  ({
                label:general.reality_object_param.name_rus,
                value:general.value_text !== '' ?general.value_text : general.value_int
            })
        }
    }).filter((t:any)=>t !== undefined)
}
export const convertInfoColumnApartment = (params:any,title:string) => {
    return params.map((general:any)=>{
        if(general.reality_object_param.reality_object_param_group?.name_rus === title ){
            return  ({
                label:general.reality_object_param.name_rus,
                value:general.value_text !== '' ?general.value_text : general.value_int
            })
        }
    }).filter((t:any)=>t !== undefined)
}
