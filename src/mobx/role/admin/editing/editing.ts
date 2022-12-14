import {makeAutoObservable} from "mobx";
import {instance} from "../../../../api/instance";
import {GuideInfoType} from "../../../../components/tabs/Account/Admin/components/Editing/GuidesItem";

class AdminEditing {
    constructor() {
        makeAutoObservable(this);
    }
    statusLoader:string='loading'
    loaded: boolean = false;
    errorOnLoad: boolean = false;
    initialState: null |
        Array<{ type_en: string, type_ru: string, info: Array<GuideInfoType> }> = null;

    update: (iconsFor: Array<string> | null, indexGuides: number, activeType: number) => void = async (iconsFor: any, indexGuides: number, activeType: number) => {
        if (this.initialState !== null) {
            this.initialState[indexGuides].info[activeType].for = iconsFor
        }
    }

    updatePut: (id: number, indexGuides: number, activeType: number) => void = async (id: number, indexGuides: number, activeType: number) => {
        if (this.initialState !== null) {
            const objectUpdate = this.initialState[indexGuides].info[activeType]
            await instance.put(`guide/${id}`, objectUpdate, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
                }
            })
        }
    }

    updateValueGuidePut: (id: number, guide: GuideInfoType) => void = async (id: number, guide: GuideInfoType) => {
        await instance.put(`guide/${id}`,guide, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
        })
    }

    addGuide: (newGuide: GuideInfoType) => void = async (newGuide) => {
        await instance.post(`guide`, newGuide, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
        })
    }
    removeGuide: (id: number, indexGuides: number, activeType: number) => void = async (id, indexGuides: number, activeType: number) => {
        await instance.delete(`guide/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
        })
    }

    fetch: () => void = async () => {
        this.statusLoader = 'loader'
        this.loaded = true
        try{
            const res = await instance.get(`guide`)
            const newItemEn = res.data.map((e: any) => e.subtitle_en !== null ? e.subtitle_en : '??????????')
            const newItemRu = res.data.map((e: any) => e.subtitle_ru !== null ? e.subtitle_ru : '??????????')

            const uniqueItemEn: Array<string> = Array.from(new Set(newItemEn))
            const uniqueItemRu: Array<string> = Array.from(new Set(newItemRu))
            const arrayItems: any = []
            for (let x = 0; x < uniqueItemEn.length; x++) {
                const itemEn = uniqueItemEn[x]
                const itemRu = uniqueItemRu[x]
                const object = {
                    type_en: itemEn,
                    type_ru: itemRu,
                    info: []
                }
                arrayItems.push(object)
            }

            const newItems = arrayItems.map((t: any) => t)

            for (let x = 0; x < res.data.length; x++) {
                const subtitle_en = res.data[x].subtitle_en !== null ? res.data[x].subtitle_en : '??????????'
                const result = uniqueItemEn.some(t => t !== subtitle_en)
                if (result) {
                    arrayItems.map((t: any, index: number) => t.type_en === subtitle_en && newItems[index].info.push(res.data[x]))
                }
            }
            // filter type_ru (null)
            newItems[0].info = newItems[0].info.filter((f:any)=>f.type_ru !== null)
            this.initialState = newItems
            this.loaded = false
        }catch (e) {
            this.statusLoader = 'error'
        }

    }
}

export const AdminEditingStore = new AdminEditing();
