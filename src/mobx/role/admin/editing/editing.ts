import {makeAutoObservable} from "mobx";
import {instance} from "../../../../api/instance";
import {GuideInfoType} from "../../../../components/tabs/Account/Admin/components/Editing/GuidesItem";

type IEditingProfile = {}


const InitialData: IEditingProfile = {
    initialState: {}

};

class AdminEditing {
    constructor() {
        makeAutoObservable(this);
    }

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


    addGuide: (newGuide: GuideInfoType) => void = async (newGuide) => {
        await instance.post(`guide`, newGuide, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
        })
    }
    removeGuide: (id: number) => void = async (id) => {
        await instance.delete(`guide/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessEstatum')}`
            }
        })
    }

    fetch: () => void = async () => {
        const res = await instance.get(`guide`)
        const newItemEn = res.data.map((e: any) => e.subtitle_en !== null && e.subtitle_en)
        const newItemRu = res.data.map((e: any) => e.subtitle_ru !== null && e.subtitle_ru)
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
            const result = uniqueItemEn.some(t => t !== res.data[x].subtitle_en)
            if (result) {
                arrayItems.map((t: any, index: number) => t.type_en === res.data[x].subtitle_en && newItems[index].info.push(res.data[x]))
            }
        }

        this.initialState = newItems
        // console.log("newItems", newItems)
    }
}

export const AdminEditingStore = new AdminEditing();
