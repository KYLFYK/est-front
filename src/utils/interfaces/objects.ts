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

export const typeToRuString: (type: ObjectTypes) => string = (type) => {
  switch (type) {
    case ObjectTypes.LAND:
      return "Участок";
    case ObjectTypes.TOWNHOUSE:
    case ObjectTypes.HOUSE:
      return "Дом";
    case ObjectTypes.RESCOMPLEX:
      return "ЖК";
    case ObjectTypes.APARTMENTS:
      return "Квартира";
    case ObjectTypes.VILLAGE:
      return "Посёлок";
  }
};
