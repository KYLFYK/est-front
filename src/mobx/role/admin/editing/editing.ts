import { makeAutoObservable } from "mobx";
import {instance} from "../../../../api/instance";

type IEditingProfile={

}


const InitialData: IEditingProfile = {
    initialState:{

    },

};

class AdminEditing {
    constructor() {
        makeAutoObservable(this);
    }

    loaded: boolean = false;
    errorOnLoad: boolean = false;
    initialState: null | Array<{}> = null;

    fetch: ()=> void = async ()=> {
         const res = await instance.get(`guide`)
        const newItemEn = res.data.map((e:any)=>e.subtitle_en !== null && e.subtitle_en )
        const newItemRu = res.data.map((e:any)=>e.subtitle_ru !== null && e.subtitle_ru )
        const uniqueItemEn:Array<string> = Array.from(new Set( newItemEn))
        const uniqueItemRu:Array<string> = Array.from(new Set( newItemRu))
        const arrayItems :any= []
        for ( let x = 0 ; x < uniqueItemEn.length ; x++){
            const itemEn = uniqueItemEn[x]
            const itemRu = uniqueItemRu[x]
            const object = {
                type_en : itemEn,
                type_ru : itemRu,
                info : []
            }
            arrayItems.push(object)
        }

        const newItems = arrayItems.map((t:any)=>t)

        for ( let x = 0 ; x < res.data.length ; x++){
            const result = uniqueItemEn.some(t=> t !== res.data[x].subtitle_en )
            if(result) {
                arrayItems.map( (t:any,index:number)=> t.type_en === res.data[x].subtitle_en && newItems[index].info.push(res.data[x])  )
            }
        }
        this.initialState = newItems
        console.log(newItems)
    }
}

export const AdminEditingStore = new AdminEditing();
