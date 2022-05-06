import React from "react";
import { ILegalPurityData } from "./config";
import s from "./ObjectLegalPurity.module.scss";
import HeadLine from "../../shared/HeadLine/HeadLine";
import ExclamationMarkIcon from "../../../icons/Development/ExclamationMark";
import EncumbrancesIcon from "../../../icons/LegalPurity/EncumbrancesIcon";
import { AdvantageMobile } from "../../shared/Advantage/AdvantageMobile";
import LegalPurityTabs from "../../tabs/LegalPurity";
import InfoDeveloperMobile from "../AccordionMobile/infoDelevolerMobile/infoDeveloperMobile";
import DeveloperAbout from "../../tabs/Developer/components/About/About";
import LegalPurityGeneralTab from "../../tabs/LegalPurity/components/General/LegalPurityGeneralTab";
import LegalPurityFoundersTab from "../../tabs/LegalPurity/components/Founders/LegalPurityFoundersTab";
import LegalPurityEncumbrancesTab from "../../tabs/LegalPurity/components/Encumbrances/LegalPurityEncumbrancesTab";
import LegalPurityRecomendationsTab from "../../tabs/LegalPurity/components/Recomendations/LegalPurityRecomendationsTab";

import EncumbrancesMobile from "../../../icons/LegalPurity/EncumbrancesMobile";
import { ExclamationMarkMobileV2 } from "../../../icons/Development/ExclamationMarkMobile";
import Typography from "../../shared/Typography/Typography";

interface Props {
  legalPurityData?: ILegalPurityData;
}

const ObjectLegalPurityMobile: React.FC<Props> = ({ legalPurityData }) => {
  return (
    <div className={s.containerMobile}>
      <Typography size={"subheader"} weight="bold">
        Юридическая чистота
      </Typography>
      <div className={s.infoBlockMobile}>
        <AdvantageMobile
          title="Риски"
          text={legalPurityData && legalPurityData.risks ? "Да" : "Нет"}
          className={s.paddingIconMobile}
          wrapperStyle={s.wrapperStyle}
        >
          <ExclamationMarkMobileV2 />
        </AdvantageMobile>
        <AdvantageMobile
          title="Обременения"
          text={legalPurityData && legalPurityData.encumbrances ? "Да" : "Нет"}
          className={s.paddingIconMobile}
          wrapperStyle={s.wrapperStyle}
        >
          <EncumbrancesMobile />
        </AdvantageMobile>
      </div>
      {legalPurityData?.tabsData?.general &&
        legalPurityData.tabsData.general?.length > 0 && (
          <InfoDeveloperMobile title={"Общие сведения"}>
            <LegalPurityGeneralTab
              data={
                legalPurityData?.tabsData && legalPurityData?.tabsData.general
              }
            />
          </InfoDeveloperMobile>
        )}
      {legalPurityData?.tabsData?.founders &&
        legalPurityData.tabsData.founders?.length > 0 && (
          <InfoDeveloperMobile title={"Собственники"}>
            <LegalPurityFoundersTab
              data={
                legalPurityData?.tabsData && legalPurityData.tabsData.founders
              }
            />
          </InfoDeveloperMobile>
        )}
      {legalPurityData?.tabsData?.encumbrances &&
        legalPurityData.tabsData.encumbrances?.length > 0 && (
          <InfoDeveloperMobile title={"Обременения"}>
            <LegalPurityEncumbrancesTab
              data={
                legalPurityData?.tabsData &&
                legalPurityData.tabsData.encumbrances
              }
            />
          </InfoDeveloperMobile>
        )}
      {legalPurityData?.tabsData?.recomendations &&
        legalPurityData.tabsData.recomendations?.length > 0 && (
          <InfoDeveloperMobile title={"Рекомендации"}>
            <LegalPurityRecomendationsTab
              data={
                legalPurityData?.tabsData &&
                legalPurityData?.tabsData.recomendations
              }
            />
          </InfoDeveloperMobile>
        )}
    </div>
  );
};

export default ObjectLegalPurityMobile;
