import { IOption } from "../../../utils/interfaces/general";
import { IconTypes } from "../../../utils/interfaces/icons";
import {
  ISpecificationItem,
  ISpecificationsList,
} from "./ObjectSpecifications";

const SPEC_ITEM: IOption<ISpecificationItem> = {
  value: IconTypes.HOUSE_TYPE,
  label: { title: "Тип дома", text: "Монолитный" },
};

const SPEC_ITEM_WITHOUT_TEXT: IOption<ISpecificationItem> = {
  value: IconTypes.REST,
  label: { title: "Места для отдыха" },
};

export const OBJECT_SPECS_MOCK: ISpecificationsList = {
  subtitle: "Строительно-техническая экспертиза",
  specificationsItems: Array(4).fill(SPEC_ITEM),
};

export const OBJECT_SPEC_WITHOUT_TEXT: ISpecificationsList = {
  subtitle: "Объекты на территории жилого комплекса",
  specificationsItems: Array(4).fill(SPEC_ITEM_WITHOUT_TEXT),
};
