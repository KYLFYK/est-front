import { makeAutoObservable } from "mobx";

export class CreateVillageStore {
  constructor() {
    makeAutoObservable(this);
  }
}
