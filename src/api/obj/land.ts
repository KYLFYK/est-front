import {instance, UrlObj} from "../instance";
import {sortObject_specsTypeGuide,sortGuide} from "../../utils/conversionIcons/conversionIcons";

export const LandApi  = {
    getAllLand: async (skip = 0, take = 10) =>{
        try{
            const res = await instance.get(`${UrlObj.land}`, {skip, take})

            console.log("res", res.data)
        }
        catch (e){
            console.log('error', e)
        }
    },

    getLandById: async (id: number) =>{
        try{
            const res : IgetLandIdType = await instance.get(`${UrlObj.land}/${id}`)
            console.log("res",res)
            //@ts-ignore
            let object_specsGuide :Array<{value:string,label:{title:string, text:string}}> | [] = res.data.object_specs.map(guid=>sortGuide(guid,guid.subtitle_ru)).filter(f=>f !== undefined)

            const objectPlat :ObjectLandType = {
                "images":[ // нету
                    {
                        "url":"https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
                        "id":0
                    },
                    {
                        "url":"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
                        "id":1
                    },
                    {
                        "url":"https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
                        "id":2
                    }
                ],
                "object_id": res.data.object_id,
                "lang": "ru",
                "name": res.data.name,
                "type": res.data.type,
                "category": res.data.category,
                "address": res.data.address,
                "city": res.data.city ? res.data.city : '' ,
                "lat": +res.data.lat,
                "lng": +res.data.lng,
                "price": res.data.price,
                "sort": res.data.sort?res.data.sort:0,
                "planning": res.data.planning,
                "favorite": false,
                "publish": res.data.publish.substr(0,10).split('-').reverse().join('.'),
                "views": res.data.views,
                "agency": res.data.agency?res.data.agency:'',
                "info_options":res.data.info_options,
                "description_items":[res.data.description_items],
                "description_Info":[res.data.description_Info],
                "object_specs": sortObject_specsTypeGuide(object_specsGuide),
                "legalPurityData":{ //fail
                    "encumbrances":false,
                    "risks":false,
                    "tabsData":{
                        "general":
                            [
                            {
                                "value":"Данные из ЕГРН",
                                "description":"Это всплывающая подсказка о данных из ЕГРН",
                                "label":[
                                    {
                                        "title":"Адрес",
                                        "text":"Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К"
                                    },
                                    {
                                        "title":"Кадастровый номер",
                                        "text":"77:06:0009005:4567"
                                    },
                                    // {
                                    //     "title":"Кадастровая стоимость",
                                    //     "text":"150 000 000 ₽",
                                    //     "description":"Это всплывающая подсказка о данных кадастровой стоимости"
                                    // },
                                    {
                                        "title":"Общая площадь",
                                        "text":"615 м²"
                                    },
                                    {
                                        "title":"Этажность",
                                        "text":"3"
                                    }
                                ]
                            }
                        ]
                        ,
                        "founders":[
                            // {
                            //     "value":"Текущие владельцы",
                            //     "label":[
                            //         {
                            //             "title":"Единоличный собственник",
                            //             "text":"Иванов Филипп Васильевич"
                            //         },
                            //         {
                            //             "title":"77-77-08/011/2021-0308",
                            //             "text":"03.08.2021"
                            //         }
                            //     ]
                            // },
                            {
                                "value":"Предыдущие владельцы",
                                "description":"Всплывающая подсказка предыдущих владельцев",
                                "label":[
                                    {
                                        "title":"2 владельца",
                                        "text":"Иванов Филипп Васильевич, Иванов Филипп Васильевич"
                                    },
                                    {
                                        "title":"77-77-08/011/2021-0308",
                                        "text":"03.08.2021"
                                    }
                                ]
                            }
                        ],
                        "encumbrances":[
                            {
                                "title":"Текущие владельцы",
                                "encumbrances":[
                                    {
                                        "status":0,
                                        "description":"Description",
                                        "text":"Дом в ипотеке"
                                    },
                                    {
                                        "status":1,
                                        "description":"Description",
                                        "text":"Записей об аренде не найдено"
                                    }
                                ]
                            }
                        ],
                        "recomendations":[
                            {
                                "value":"Квартира меняла владельцев несколько раз за последние 3 года",
                                "label":"Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки."
                            },
                            {
                                "value":"Квартира в собственности менее 5 лет",
                                "label":"При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры."
                            }
                        ]
                    }
                }
            }
            console.log("res", res.data)
            console.log("objectPlat", objectPlat)
            return objectPlat
        }
        catch (e:any){
            console.log('error', e)
            return e
        }
    },
}

export type ObjectLandType={
    images: Array<{url:string,id:number}>
    object_id: number,
    lang: string,
    name: string
    type : string
    category: string
    address: string
    city: string
    lat: number,
    lng: number,
    price: number,
    sort: null | number,
    planning: string
    favorite: boolean,
    publish: string
    views: number,
    agency: string
    info_options: Array<{ label: string, value: string }>
    description_items: Array<string>,
    description_Info: Array<string>,
    object_specs: Array<{subtitle:string,specificationsItems:Array<{ value: string, label: { title: string, text: string }}>}>
    legalPurityData: {
        encumbrances: boolean,
        risks: boolean,
        tabsData: {
            general:Array<{value:string,description:string, label: Array<{ title: string, text: string}>}>
            founders: Array<{value:string,description:string, label: Array<{ title: string, text: string}>}>
            encumbrances: Array<{title:string,encumbrances: Array<{ status: number, description: string, text: string}>}>
            recomendations: Array<{value: string, label: string}>
        }
    }
}

export type IgetLandIdSSPType={
    type:string
    "object_id": number,
    "publish": string
    "name": string
    "description_Info":string
    "description_items":string
    "address": string
    "city": string | null
    "lng":string
    planning:string
    category:string
    "lat": string
    "views": number,
    "price": number,
    "markAsDelete": boolean
    sort: null|number
    agency: null|string
    info_options:Array<{label:string, value:string}>
    "status": {
        "id": number,
        "status": string
    },
    "owner": {
        "id": number,
        "createAt": string
        "updateAt": string
        "email": string
        "phone": string
        "markAsDelete": boolean,
        "isConfirmed": boolean,
        "role": string
        "customerProperty": {
            "id": number,
            "name": string
            "phone": string
        }
    },
    "object_specs":
        Array<{
            "id": number
            "subtitle_en": null,
            "subtitle_ru": null,
            "type_en": string
            "type_ru": null,
            "for": Array<string>
            "value": string
        }>
    "region": {
        "id": number
        "name": string
    }
    "legalPurityData": {
        "id": number,
        "address": string
        "areaUnits": string
        "areaValue": number
        "cadastalNumber": string
        "cadastralPrice": number
        "currentOwnerName":string
        "currentOwnerStartDate": string
        "floor": null | number | string,
        "previewOwners": {
            "owners": Array<string>
            "startDate": string
            "finishDate": string
        },
        "encumbrances": Array<{ "title": string ,"status": true, "description": string}>
        "recomendations": Array<{ "title": string ,"description": string}>
        "risks": boolean
    }
}


export type IgetLandIdType={
    data:{
        type:string
        "object_id": number,
        "publish": string
        "name": string
        "description_Info":string
        "description_items":string
        "address": string
        "city": string | null
        "lng":string
        planning:string
        category:string
        "lat": string
        "views": number,
        "price": number,
        "markAsDelete": boolean
        sort: null|number
        agency: null|string
        info_options:Array<{label:string, value:string}>
        "status": {
            "id": number,
            "status": string
        },
        "owner": {
            "id": number,
            "createAt": string
            "updateAt": string
            "email": string
            "phone": string
            "markAsDelete": boolean,
            "isConfirmed": boolean,
            "role": string
            "customerProperty": {
                "id": number,
                "name": string
                "phone": string
            }
        },
        "object_specs":
            Array<{
                "id": number
                "subtitle_en": null,
                "subtitle_ru": null,
                "type_en": string
                "type_ru": null,
                "for": Array<string>
                "value": string
            }>
        "region": {
            "id": number
            "name": string
        }
    }
}
