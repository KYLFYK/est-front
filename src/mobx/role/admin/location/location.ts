import {makeAutoObservable} from "mobx";
import {instance} from "../../../../api/instance";
import {GuideInfoType} from "../../../../components/tabs/Account/Admin/components/Editing/GuidesItem";


class AdminLocation {
    constructor() {
        makeAutoObservable(this);
    }

    loaded: boolean = false;
    errorOnLoad: boolean = false;

    city: any = []
    region: any = []
    country: any = []

    fetchCity: () => void = async () => {
        const res = await instance.get(`city`)
        this.city = res.data
        console.log("newItems", res)
    }
    fetchRegion: () => void = async () => {
        const res = await instance.get(`region`)
        this.region = res.data
        console.log("newItems", res)
    }
    fetchCountry: () => void = async () => {
        const res = await instance.get(`country`)
        this.country = res.data
        console.log("newItems", res)
    }
}

export const AdminLocationStore = new AdminLocation();
