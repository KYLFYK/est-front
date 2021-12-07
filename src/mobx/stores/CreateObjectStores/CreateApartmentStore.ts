import { action, makeObservable, observable } from "mobx";
import { ICreateObjectAparts } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";

class CreateApartmentStore implements ICreateObjectAparts {
  about: ICreateObjectAparts["about"] = {
    name: "baba",
    country: "",
    city: "",
    address: "",
    cost: 0,
    index: 0,
    type: "",
    complexName: "",
    floor: 0,
    floorsAmmount: 0,
  };
  generalInfo: ICreateObjectAparts["generalInfo"] = {
    description: "",
    photos: [],
    generalSquare: "",
    livingSquare: "",
    ceilingHeight: "",
    rooms: 0,
    bathroom: "",
    kitchen: "",
    customRooms: [],
    interiorDescription: "",
  };
  infrastructure: ICreateObjectAparts["infrastructure"] = {
    description: "",
    view: "",
  };
  info: ICreateObjectAparts["info"] = {
    houseType: "",
    fundament: "",
    roof: "",
    walls: "",
    waterPipe: "",
    heating: "",
    sewerage: "",
    electricity: "",
    internet: "",
    bedrooms: 0,
    bathrooms: 0,
    lavatories: 0,
    plumbing: "",
    renovation: "",
    furnitureList: [],
    parking: "",
    parkingPrice: 0,
  };
  legalPurity: ICreateObjectAparts["legalPurity"] = {};

  changeName(name: string) {
    this.about.name = name;
  }
  constructor() {
    makeObservable(this, {
      about: observable,
      generalInfo: observable,
      info: observable,
      infrastructure: observable,
      legalPurity: observable,
      changeName: action,
    });
  }
}

export default CreateApartmentStore;
