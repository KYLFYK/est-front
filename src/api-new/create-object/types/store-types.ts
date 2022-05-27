export enum IObjectType {
  apartment = "apartment",
  residential_complex = "residential_complex",
  house = "house",
  land = "land",
}

export interface IField {
  sort: number;
  name: string;
  slug: string;
  admin_required: boolean;
  defaultValue: string | number | undefined;
  is_visible: boolean;
}

export interface ISubGroup {
  sort: number;
  name: string;
  slug: string;
  fields: IField[];
  is_visible: boolean;
}

export interface IGroup {
  sort: number;
  name: string;
  slug: string;
  subGroups: Array<ISubGroup>;
  is_visible: boolean;
}

export interface ISubSection {
  sort: number;
  groups: Array<IGroup>;
}

export interface ISection {
  name: string;
  sort: number;
  subSections: Array<ISubSection>;
}

export type IParamsState = Record<IObjectType, Array<ISection>> | null;
