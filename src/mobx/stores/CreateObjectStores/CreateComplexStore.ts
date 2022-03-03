import { makeAutoObservable } from "mobx";

export class CreateComplexStore {
  constructor() {
    makeAutoObservable(this);
  }
}
