import { action, makeObservable, observable } from "mobx";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectAparts } from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";

class CreateApartmentStore implements ICreateObjectAparts {
  about: ICreateObjectAparts["about"] = {
    name: "",
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
  legalPurity: ICreateObjectAparts["legalPurity"] = {
    realEstateRegister: {
      address: '',
      cadastralNumber: "",
      cadastralCost: "",
      generalSquare: "",
      floors: "",
    },
    currentFounder: {
      founderType: FoundersTypes.SINGLE,
      firstFounderName: '',
      secondFouderName: undefined,
      cadastralNumber: "",
      ownershipFrom: new Date(),
      ownershipTo: new Date(), 
    },
    previousFounder: {
      founderType: FoundersTypes.SINGLE,
      firstFounderName: '',
      secondFouderName: undefined,
      cadastralNumber: "",
      ownershipFrom: new Date(),
      ownershipTo: new Date(), 
    }
  };

}

export default CreateApartmentStore;
