import { IOption } from "../../../utils/interfaces/general";
import {
  ILegalPurityArticle,
  ILegalPurityEncumbrances,
  LEGAL_PURITY_ENCUMBRANCES,
  LEGAL_PURITY_GENERAL_TAB,
  LEGAL_PURITY_OWNERS,
  LEGAL_PURITY_RECOMENDS,
} from "../../tabs/LegalPurity/config";

export interface IObjectLegalPurityTabs {
  general: ILegalPurityArticle[];
  founders: ILegalPurityArticle[];
  encumbrances: ILegalPurityEncumbrances[];
  recomendations: IOption[];
}

export interface ILegalPurityData {
    risks: boolean,
    encumbrances: boolean,
    tabsData: IObjectLegalPurityTabs
}

export const OBJECT_LEGAL_PURITY_TABS_DATA: IObjectLegalPurityTabs = {
    general: LEGAL_PURITY_GENERAL_TAB,
    founders: LEGAL_PURITY_OWNERS,
    encumbrances: LEGAL_PURITY_ENCUMBRANCES,
    recomendations: LEGAL_PURITY_RECOMENDS
};


