import {createContext, FC, useContext} from "react";
import {makeAutoObservable} from "mobx";
import {mailPage} from "../../api/mainPage/mainPage";
import {mockObjects} from "../../components/containers/DevelopersContainer/DevelopersContainer";
import {ObjectApi} from '../../api/object/object';

class ObjectInStore {
    constructor() {
        makeAutoObservable(this);
    }

    initialData = [
        {
            images : [
                {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
                {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
                {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
            ],
            id: 0,
            object_id: 0,
            createAt: "",
            updateAt: "",
            name: "",
            description: "",
            address: "",
            postcode: "",
            lng: 0,
            lat: 0,
            views: 0,
            price: 0,
            markAsDelete: false,
            objectType: "",
            complex: 0,
            region: 0,
            city: 0,
            country: 0,
            owner: 0,
            status: 0,
            legalPurity: 0,
            property: 0,
            distance: 0,
            type : "Квартира",
        },
        /*{
            lang : "ru",
            name : "1-комнатная квартира, 52 м²",
            address : "ул. Ленина, д. 36, кв. 21",
            city : "Ялта",
            lat : 45.2,
            lng : 35.5,
            price : 12860000,
            sort : null,
            planning : "1",
            secondary_type : "Вторичное",
            total_area : 52,
            floor : 3,
            total_floors : 15,
            favorite : false
          }*/
    ]

    async fetchObjectIn(lat: number, lng: number) {
        const res = await ObjectApi.getObjectIn(lat, lng)
        this.initialData = res?.data.map((d: any) => {
            return {
                images : [
                    {url : "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg", id : 0},
                    {url : "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", id : 1},
                    {url : "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270", id : 2}
                ],
                id: d.id,
                object_id: d.id,
                createAt: d.createAt,
                updateAt: d.updateAt,
                name: d.name,
                description: d.description,
                address: d.address,
                postcode: d.postcode,
                lng: d.longitude,
                lat: d.latitude,
                views: d.views,
                price: d.price,
                markAsDelete: d.markAsDelete,
                objectType: d.objectType,
                complex: d.complex,
                region: d.region,
                city: d.city,
                country: d.country,
                owner: d.owner,
                status: d.status,
                legalPurity: d.legalPurity,
                property: d.property,
                distance: d.distance,
                type : "Квартира",
            }
        }).sort((a: any, b: any) => a.distance > b.distance ? 1 : -1).slice(0, 10)
    }

    get() {
        return JSON.parse(JSON.stringify(this.initialData))
    }
}

const StoreContext = createContext<ObjectInStore>(new ObjectInStore());

const StoreProvider: FC<{ store: ObjectInStore }> = ({children, store}) => (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useObjectInStore = () => {
    return useContext(StoreContext);
};

export {ObjectInStore, StoreProvider, useObjectInStore};
