import { ObjectTypes } from "../../../utils/interfaces/objects";
import {
  ABOUT_TAB_APARTMENT_INIT,
  ABOUT_TAB_HOUSE_INIT,
  ABOUT_TAB_LAND_INIT,
  GENERALINFO_TAB_APARTS_INIT,
  GENERALINFO_TAB_HOUSE_INIT,
  GENERALINFO_TAB_LAND_INIT,
  GENERALINFO_TAB_TOWNHOUSE_INIT,
} from "./config";

export const getInitStateAboutTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return ABOUT_TAB_APARTMENT_INIT;
    case ObjectTypes.HOUSE:
      return ABOUT_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return ABOUT_TAB_HOUSE_INIT;
    case ObjectTypes.LAND:
      return ABOUT_TAB_LAND_INIT;

    default:
      break;
  }
};

export const getInitialStateGeneralInfoTab = (objectType: ObjectTypes) => {
  switch (objectType) {
    case ObjectTypes.APARTMENTS:
      return GENERALINFO_TAB_APARTS_INIT;
    case ObjectTypes.HOUSE:
      return GENERALINFO_TAB_HOUSE_INIT;
    case ObjectTypes.TOWNHOUSE:
      return GENERALINFO_TAB_TOWNHOUSE_INIT;
    case ObjectTypes.LAND:
      return GENERALINFO_TAB_LAND_INIT;
    default:
      break;
  }
};
