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
    }
    addCity: (nameCountry:{name:string,regionId:number}) => void = async (nameCountry:{name:string,regionId:number}) => {
        await instance.post (`city`,nameCountry,{
            headers: {authorization: `Bearer ${localStorage.getItem('accessEstatum')}`}
        }) // + key
        this.fetchCity()
    }
    editCity: (id:number,city:{name:string,regionId:number}) => void = async (id:number,city:{name:string,regionId:number}) => {
       await instance.patch (`city/${id}`,city,{
            headers: {authorization: `Bearer ${localStorage.getItem('accessEstatum')}`}
        }) // + key
        this.fetchCity()
    }

    // removeCity: (id:number) => void = async (id:number) => {
    //     instance.delete (`city/${id}`) // + key
    // }
    fetchRegion: () => void = async () => {
        const res = await instance.get(`region`)
        this.region = res.data
    }
    addRegion: (name:string) => void = async (name:string) => {
        await instance.post (`region`,{name:name},{
            headers: {authorization: `Bearer ${localStorage.getItem('accessEstatum')}`}
        })
        this.fetchRegion()
    }
    editRegion: (id:number,name:string) => void = async (id:number,name:string) => {
        await instance.patch (`region/${id}`,{name:name},{
            headers: {authorization: `Bearer ${localStorage.getItem('accessEstatum')}`}
        })
        this.fetchRegion()
    }

    fetchCountry: () => void = async () => {
        const res = await instance.get(`country`)
        this.country = res.data
    }
    addCountry: (nameCountry:string) => void = async (nameCountry:string) => {
        instance.put (`country`,nameCountry) // + key
    }
    editCountry: (nameCountry:string,id:number) => void = async (nameCountry:string,id:number) => {
        instance.patch (`country/${id}`,nameCountry) // + key
    }
    removeCountry: (id:number) => void = async (id:number) => {
        instance.delete (`country${id}`) // + key
    }
}

export const AdminLocationStore = new AdminLocation();
