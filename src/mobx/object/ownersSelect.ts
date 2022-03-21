import { makeAutoObservable } from "mobx";
import {
  findListByEmail,
  IListResponse,
} from "../../api/accounts/findListByEmail";

class OwnersSelect {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  currentQuery: string = "";
  data: IListResponse[] | null = null;

  async handleLoad(query: string) {
    try {
      if (query && query.trim().length > 0) {
        const response = await findListByEmail(query);

        this.loaded = true;
        this.errorOnLoad = false;
        this.currentQuery = query;
        this.data = response.data;
      }
    } catch (e) {
      console.log("Owners list error", e);
    }
  }
}

export const OwnersSelectStore = new OwnersSelect();
