import {makeAutoObservable} from "mobx";
import {instance} from "../../../../api/instance";
import {GuideInfoType} from "../../../../components/tabs/Account/Admin/components/Editing/GuidesItem";


class AdminLocation {
    constructor() {
        makeAutoObservable(this);
    }

    loaded: boolean = false;
    errorOnLoad: boolean = false;
    statusLoaded: string = ''
    city: any = []
    region: any = []
    country: any = []

    fetchCity: () => void = async () => {
        this.statusLoaded='loader'
        this.loaded=true
        try {
            const res = await instance.get(`city`)
            this.city = res.data
            this.loaded=false
        }catch (e){
            this.statusLoaded='error'
            this.loaded=false
        }
    }

    addCity: (nameCountry:{name:string,regionId:number}) => void = async (nameCountry:{name:string,regionId:number}) => {
        this.statusLoaded='loader'
        this.loaded=true
        try {
            await instance.post(`city`, nameCountry, {
                headers: {authorization: `Bearer ${localStorage.getItem('accessEstatum')}`}
            }) // + key
            this.fetchCity()
            this.loaded=false
        }catch (e){
            this.statusLoaded='error'
            this.loaded=false
        }
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
        this.statusLoaded='loader'
        this.loaded=false
        try{
            const res = await instance.get(`region`)
            this.region = res.data
            this.loaded=true
        }catch (e) {
            this.statusLoaded='error'
        }
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

        try{
            const res = await instance.get(`country`)
            this.country = res.data
            this.loaded=true
        }catch (e){
            this.statusLoaded='error'
            this.loaded=true
        }

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
