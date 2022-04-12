// import { action, makeObservable, observable } from "mobx";
import { FoundersTypes } from "../../../utils/interfaces/objects";
import { ICreateObjectLand } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";

class CreateLandStore implements ICreateObjectLand {
  about: ICreateObjectLand["about"] = {
    name: "",
    country: 0,
    city: 0,
    address: "",
    latitude: 0,
    longitude: 0,
    region: 0,
    cost: 0,
    type: "",
  };

  generalInfo: ICreateObjectLand["generalInfo"] = {
    description: "",
    photos: [],
    landGeneralSquare: "",
    cottageVillageName: "",
    landStatus: "",
    vrTour: "",
    video: "",
  };

  infrastructure: ICreateObjectLand["infrastructure"] = {
    description: "",
  };

  info: ICreateObjectLand["info"] = {
    waterPipe: "",
    heating: "",
    sewerage: "",
    buildings: "",
  };

  legalPurity: ICreateObjectLand["legalPurity"] = {
    realEstateRegister: {
      address: "",
      cadastralNumber: "",
      cadastralCost: "",
      generalSquare: "",
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

export default CreateLandStore;
