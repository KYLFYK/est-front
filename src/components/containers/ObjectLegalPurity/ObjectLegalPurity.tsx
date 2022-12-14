import React from "react";
import ExclamationMarkIcon from "../../../icons/Development/ExclamationMark";
import EncumbrancesIcon from "../../../icons/LegalPurity/EncumbrancesIcon";
import { Advantage } from "../../shared/Advantage/Advantage";
import HeadLine from "../../shared/HeadLine/HeadLine";
import LegalPurityTabs from "../../tabs/LegalPurity";
import { ILegalPurityData } from "./config";
import s from "./ObjectLegalPurity.module.scss";

interface Props {
  legalPurityData?: ILegalPurityData;
}

const ObjectLegalPurity: React.FC<Props> = ({ legalPurityData }) => {
  return (
    <div className={s.container}>
      <HeadLine title="Юридическая чистота">
        <div className={s.infoBlock}>
          <Advantage
            title="Риски"
            text={legalPurityData && legalPurityData.risks ? "Да" : "Нет"}
            className={s.iconItem}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <ExclamationMarkIcon />
          </Advantage>
          <Advantage
            title="Обременения"
            text={
              legalPurityData && legalPurityData.encumbrances ? "Да" : "Нет"
            }
            className={s.iconItem}
            titleWeight={"bold"} 
            titleSize={'default'}
            textWeight={'light'}
          >
            <EncumbrancesIcon />
          </Advantage>
        </div>

        <LegalPurityTabs
          tabsData={legalPurityData && legalPurityData.tabsData}
        />
      </HeadLine>
    </div>
  );
};

export default ObjectLegalPurity;
