import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import {
  getInitialStateLegalPurityTab,
  isValidLegalPurityDetailsTab,
  TLegalPurityTabState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./LegalPurity.module.scss";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
}

const LegalPurityDetails: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores();
    const [values, setValues] = useState<TLegalPurityTabState>(
      getInitialStateLegalPurityTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);
    const { realEstateRegister } = values;

    const isValidAddress = !!realEstateRegister.address.length;
    const isValidCadastralNumber = !!realEstateRegister.cadastralNumber.length;
    const isValidCadastralCost = !!realEstateRegister.cadastralCost.length;
    const isValidGeneralSquare = !!realEstateRegister.generalSquare.length;
    const isValidFloors =
      "floors" in realEstateRegister && !!realEstateRegister.floors.length;

    const onChangeInputs = (
      event: React.ChangeEvent<HTMLInputElement>,
      valueField: keyof TLegalPurityTabState["realEstateRegister"]
    ) => {
      setValues({
        ...values,
        realEstateRegister: {
          ...values.realEstateRegister,
          [valueField]: event.target.value,
        },
      });
    };

    const handleNextTab = () => {
      const isValidInputs = isValidLegalPurityDetailsTab(
        objectType,
        isValidAddress,
        isValidCadastralNumber,
        isValidCadastralCost,
        isValidGeneralSquare,
        isValidFloors
      );
      if (isValidInputs) {
        createObjectStore.saveLegalPurityTab(values, objectType);
        onNextTab && onNextTab();
      } else setIsValid(false);
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title="Данные из ЕГРН">
          <BaseInput
            onChange={(event) => onChangeInputs(event, "address")}
            value={realEstateRegister.address}
            label="Адрес"
            type="text"
            classNameWrapper={s.fullWidth}
            isError={!isValid && !isValidAddress}
          />
          <BaseInput
            onChange={(event) => onChangeInputs(event, "cadastralNumber")}
            value={realEstateRegister.cadastralNumber}
            label="Кадастровый номер"
            type="text"
            classNameWrapper={s.inputMd}
            isError={!isValid && !isValidCadastralNumber}
          />
          <BaseInput
            onChange={(event) => onChangeInputs(event, "cadastralCost")}
            value={realEstateRegister.cadastralCost}
            label="Кадастровая стоимость"
            type="number"
            classNameWrapper={s.inputMd}
            isError={!isValid && !isValidCadastralCost}
          />
          <BaseInput
            onChange={(event) => onChangeInputs(event, "generalSquare")}
            value={realEstateRegister.generalSquare}
            label="Общая площадь"
            type="number"
            classNameWrapper={s.inputSm}
            isError={!isValid && !isValidGeneralSquare}
          />
          {"floors" in realEstateRegister && (
            <BaseInput
              onChange={(event) =>
                onChangeInputs(
                  event,
                  "floors" as keyof TLegalPurityTabState["realEstateRegister"]
                )
              }
              value={realEstateRegister.floors}
              label="Этажность"
              type="number"
              classNameWrapper={s.inputSm}
              isError={!isValid && !isValidFloors}
            />
          )}
        </InputsGroup>
      </ButtonPanel>
    );
  }
);

export default LegalPurityDetails;
