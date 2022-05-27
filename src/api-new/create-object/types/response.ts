import { IObjectType } from "./store-types";

export interface BaseResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

interface IObjectParamGroup {
  id: string;
  sort: number;
  slug: string;
  name_rus: string;
  icon: string | null;
  is_visible: true;
}

interface IObjectParamSubGroup {
  id: string;
  sort: number;
  slug: string;
  name_rus: string;
  icon: string | null;
  is_visible: true;
}

export interface IObjectParam {
  id: string;
  type: Array<{
    id: string;
    slug: IObjectType;
    name: string;
  }>;
  admin_required: boolean;
  admin_section: null | any;
  admin_section_subsection: number;
  reality_object_param_group: IObjectParamGroup;
  reality_object_param_subgroup: IObjectParamSubGroup;
  sort: number;
  input_type: null;
  advert_type: "sell";
  slug: string;
  icon: string | null;
  name_rus: string;
  unit: string | null;
  is_visible: true;
}
