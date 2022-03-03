interface IPaging {
  total_pages: number;
  page_size: number;
}

export interface IGeneralObjectResponse<T> {
  objects: T[];
  paging: IPaging;
}

export enum NewObjectActionTypes {
  SELL,
  RENT,
}

export enum FoundersTypes {
  SINGLE = "single",
  PAIR = "pair",
}

export enum ObjectTypes {
  APARTMENTS,
  HOUSE,
  TOWNHOUSE,
  LAND,
  RESCOMPLEX,
  VILLAGE,
}
