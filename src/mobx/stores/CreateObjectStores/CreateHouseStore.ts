// import { action, makeObservable, observable } from "mobx";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectHouse } from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";

class CreateHouseStore implements ICreateObjectHouse {
  about: ICreateObjectHouse["about"] = {
    name: "",
    country: "",
    city: "",
    index: 0,
    address: "",
    region: "",
    cost: 0,
  };
  generalInfo: ICreateObjectHouse["generalInfo"] = {
    description: "",
    photos: [],
    generalSquare: "",
    houseSquare: "",
    livingSquare: "",
    land: "",
    rooms: 0,
    bathroom: "",
    kitchen: "",
    garage: {
      has: "",
      capacity: "",
      square: "",
    },
    pool: {
      has: "",
      square: "",
    },
    floors: {
      count: 0,
      items: [],
    },
  };
  infrastructure: ICreateObjectHouse["infrastructure"] = {
    description: "",
    view: [],
  };
  info: ICreateObjectHouse["info"] = {
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
    technicalComment: "",
    engineeringComment: "",
    vent: "",
  };
  legalPurity: ICreateObjectHouse["legalPurity"] = {
    realEstateRegister: {
      address: "",
      cadastralNumber: "",
      cadastralCost: "",
      generalSquare: "",
      floors: "",
    },
    currentFounder: {
      founderType: FoundersTypes.SINGLE,
      firstFounderName: "",
      secondFouderName: undefined,
      cadastralNumber: "",
      ownershipFrom: new Date(),
      ownershipTo: new Date(),
    },
    previousFounder: {
      founderType: FoundersTypes.SINGLE,
      firstFounderName: "",
      secondFouderName: undefined,
      cadastralNumber: "",
      ownershipFrom: new Date(),
      ownershipTo: new Date(),
    },
  };
}

export default CreateHouseStore;
