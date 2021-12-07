import { action, makeObservable, observable } from "mobx";
import { ICreateObjectLand } from "../../types/CreateObjectStoresTypes/CreateLandStoreType";

class CreateLandStore implements ICreateObjectLand {
  about: ICreateObjectLand["about"] = {
    name: "",
    country: "",
    city: "",
    address: "",
    cost: 0,
  };

  generalInfo: ICreateObjectLand["generalInfo"] = {
    description: "",
    photos: [],
    landGeneralSquare: "",
    cottageVillageName: "",
    landStatus: "",
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

  legalPurity: ICreateObjectLand["legalPurity"] = {};

  constructor() {
    makeObservable(this, {
      about: observable,
      generalInfo: observable,
      info: observable,
      infrastructure: observable,
      legalPurity: observable,
    });
  }
}

export default CreateLandStore;
