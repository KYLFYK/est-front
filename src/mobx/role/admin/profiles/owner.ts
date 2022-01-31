import { makeAutoObservable } from "mobx";
import moment from "moment";

interface IOwnerProfile {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  login: string;
  password: string;
}

const InitialData: null | IOwnerProfile = {
  id: "",
  firstName: "",
  lastName: "",
  birthDate: moment().toDate(),
  phoneNumber: "",
  email: "",
  login: "",
  password: "",
};

class AdminOwnerProfile {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  profileData: null | IOwnerProfile = null;

  loadProfileInfo: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.profileData = InitialData;
  };
}

export const AdminOwnerProfileStore = new AdminOwnerProfile();
