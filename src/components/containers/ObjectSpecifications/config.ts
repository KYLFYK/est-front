import { IconTypes } from "../../../utils/interfaces/icons";
import { ISpecificationsList } from "./ObjectSpecifications";

const SPEC_ITEM = {
  title: {
    value: IconTypes.HOUSE_TYPE,
    label: "Тип дома",
  },
  text: "Монолитный",
};

const SPEC_ITEM_WITHOUT_TEXT = {
    title: {
      value: IconTypes.REST,
      label: "Места для отдыха",
    },
  };
  

export const OBJECT_SPECS_MOCK: ISpecificationsList = {
  subtitle: "Строительно-техническая экспертиза",
  specificationsItems: Array(4).fill(SPEC_ITEM),
};


export const OBJECT_SPEC_WITHOUT_TEXT: ISpecificationsList = {
    subtitle: "Объекты на территории жилого комплекса",
    specificationsItems: Array(4).fill(SPEC_ITEM_WITHOUT_TEXT),
}