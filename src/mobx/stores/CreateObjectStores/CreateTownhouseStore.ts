// import { action, makeObservable, observable } from "mobx";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectTownhouse } from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";

class CreateTownhouseStore implements ICreateObjectTownhouse {
  about: ICreateObjectTownhouse["about"] = {
    name: "",
    country: 0,
    city: 0,
    index: 0,
    region: 0,
    address: "",
    latitude: 0,
    longitude: 0,
    cost: 0,
    type: "",
  };

  generalInfo: ICreateObjectTownhouse["generalInfo"] = {
    description: "",
    photos: [],
    generalSquare: "",
    houseSquare: "",
    livingSquare: "",
    land: "",
    rooms: 0,
    isolatedInputs: 0,
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
    vrTour: "",
    video: "",
  };

  infrastructure: ICreateObjectTownhouse["infrastructure"] = {
    description: "",
    view: [],
  };

  info: ICreateObjectTownhouse["info"] = {
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
  };

  legalPurity: ICreateObjectTownhouse["legalPurity"] = {
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

export default CreateTownhouseStore;
