import { makeAutoObservable } from "mobx";
import { instance } from "../../../api/instance";

export type GuideObject =
  | "apartment"
  | "house"
  | "townhouse"
  | "land"
  | "complex"
  | "village";

export type GuideType =
  | "lang"
  | "objectType"
  | "buildingType"
  | "class"
  | "decorating"
  | "parking"
  | "window"
  | "safety"
  | "buildings"
  | "construction"
  | "groundwork"
  | "roof"
  | "wall"
  | "water"
  | "heating"
  | "sewerage"
  | "electricity"
  | "internet"
  | "furniture"
  | "viewApplicationStatus"
  | "bathroom";

export interface IGuide {
  id: number;
  for: GuideObject[];
  subtitle_en: string | null;
  subtitle_ru: string | null;
  type_en: GuideType;
  type_ru: string;
  isMulti: boolean;
  value: string;
}

export interface IRTWGuide {
  subtitle_en: string | null;
  subtitle_ru: string | null;
  type_en: GuideType;
  type_ru: string;
  isMulti: boolean;
  values: {
    id: number;
    value: string;
  }[];
}

class GuidesStore {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  guideList: IGuide[] | null = null;
  loadedType: GuideType | undefined | null = null;
  loadedObject: GuideObject | null = null;
  readyToWork: IRTWGuide[] | null = null;

  uploadGuides = async (object: GuideObject, type?: GuideType) => {
    try {
      let newReadyToWorkArray: IRTWGuide[] = [];
      const response = await instance.get<IGuide[]>("guide", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
        params: {
          for: object,
          type,
        },
      });
      this.loaded = true;
      this.errorOnLoad = false;
      this.loadedObject = object;
      this.loadedType = type;
      this.guideList = response.data;
      response.data.forEach((item) => {
        if (
          newReadyToWorkArray.find((el) => el.type_en === item.type_en) !==
          undefined
        ) {
          newReadyToWorkArray = newReadyToWorkArray.map((readyItem) => {
            if (readyItem.type_en === item.type_en) {
              return {
                ...readyItem,
                values: [
                  ...readyItem.values,
                  {
                    id: item.id,
                    value: item.value,
                  },
                ],
              };
            } else return readyItem;
          });
        } else {
          newReadyToWorkArray.push({
            subtitle_en: item.subtitle_en,
            subtitle_ru: item.subtitle_ru,
            type_en: item.type_en,
            type_ru: item.type_ru,
            isMulti: item.isMulti,
            values: [
              {
                id: item.id,
                value: item.value,
              },
            ],
          });
        }
      });

      this.readyToWork = newReadyToWorkArray;
    } catch (e) {
      this.loaded = false;
      this.errorOnLoad = true;
    }
  };
}

export const ObjectGuides = new GuidesStore();
