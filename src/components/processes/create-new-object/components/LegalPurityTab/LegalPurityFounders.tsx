import React, { useState } from "react";
import {
  FoundersTypes,
  ObjectTypes,
} from "../../../../../utils/interfaces/objects";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./LegalPurity.module.scss";
import BaseDatePicker from "../../../../shared/BaseDatePicker/BaseDatePicker";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import { LEGAL_PURITY_TAB_OWNER_TYPES } from "../../config";
import { useStores } from "../../../../../hooks/useStores";
import {
  getActualObjectTypeData,
  getInitialStateLegalPurityTab,
  TLegalPurityTabState,
} from "../../lib";
import { observer } from "mobx-react-lite";
import { IEditInfo, IInfoLoaded } from "../../../../../hooks/useEditObject";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
  presets?: IEditInfo;
  info?: IInfoLoaded;
}

const LegalPurityFounders: React.FC<Props> = observer(
  ({ onPublish, onPrevTab, objectType, presets, info }) => {
    const { createObjectStore } = useStores();
    const [values, setValues] = useState<TLegalPurityTabState>(
      getInitialStateLegalPurityTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);
    const { previousFounder, currentFounder } = values;

    const isValidCurrentFounderNames =
      !!currentFounder.firstFounderName.length &&
      (currentFounder.secondFouderName !== undefined
        ? !!currentFounder.secondFouderName.length
        : true);
    const isValidCurrentCadastralNumber =
      !!currentFounder.cadastralNumber.length;
    const isValidPrevFounderNames =
      !!previousFounder.firstFounderName.length &&
      (previousFounder.secondFouderName !== undefined
        ? !!previousFounder.secondFouderName.length
        : true);
    const isValidPrevCadastralNumber = !!previousFounder.cadastralNumber.length;

    const onChangeCurrentFounder = (value: string) => {
      if (value === FoundersTypes.PAIR)
        setValues({
          ...values,
          currentFounder: {
            ...values.currentFounder,
            founderType: value as FoundersTypes,
            secondFouderName: "",
          },
        });
      else
        setValues({
          ...values,
          currentFounder: {
            ...values.currentFounder,
            founderType: value as FoundersTypes,
            secondFouderName: undefined,
          },
        });
    };

    const onChangePrevFounder = (value: string) => {
      if (value === FoundersTypes.PAIR)
        setValues({
          ...values,
          previousFounder: {
            ...values.previousFounder,
            founderType: value as FoundersTypes,
            secondFouderName: "",
          },
        });
      else
        setValues({
          ...values,
          previousFounder: {
            ...values.previousFounder,
            founderType: value as FoundersTypes,
            secondFouderName: undefined,
          },
        });
    };

    const onChangePrevFirstFounderName = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        previousFounder: {
          ...values.previousFounder,
          firstFounderName: event.target.value,
        },
      });
    };
    const onChangePrevSecondFounderName = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        previousFounder: {
          ...values.previousFounder,
          secondFouderName: event.target.value,
        },
      });
    };

    const onChangeCurrentFirstFounderName = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        currentFounder: {
          ...values.currentFounder,
          firstFounderName: event.target.value,
        },
      });
    };
    const onChangeCurrentSecondFounderName = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        currentFounder: {
          ...values.currentFounder,
          secondFouderName: event.target.value,
        },
      });
    };

    const onChangeCurrentCadastralNumber = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        currentFounder: {
          ...values.currentFounder,
          cadastralNumber: event.target.value,
        },
      });
    };

    const onChangePrevCadastralNumber = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setValues({
        ...values,
        previousFounder: {
          ...values.previousFounder,
          cadastralNumber: event.target.value,
        },
      });
    };

    const onChangePrevFounderStartDate = (value: Date) => {
      setValues({
        ...values,
        previousFounder: { ...values.previousFounder, ownershipFrom: value },
      });
    };
    const onChangePrevFounderEndDate = (value: Date) => {
      setValues({
        ...values,
        previousFounder: { ...values.previousFounder, ownershipTo: value },
      });
    };

    const onChangeCurrentFounderStartDate = (value: Date) => {
      setValues({
        ...values,
        currentFounder: { ...values.currentFounder, ownershipFrom: value },
      });
    };
    const onChangeCurrentFounderEndDate = (value: Date) => {
      setValues({
        ...values,
        currentFounder: { ...values.currentFounder, ownershipTo: value },
      });
    };

    const handlePublish = async (): Promise<void> => {
      const isValidInputs =
        isValidCurrentFounderNames &&
        isValidCurrentCadastralNumber &&
        isValidPrevFounderNames &&
        isValidPrevCadastralNumber;
      if (isValidInputs) {
        createObjectStore.saveLegalPurityTab(values, objectType);
        const dataToSend = getActualObjectTypeData(
          createObjectStore,
          objectType
        );
        if (!dataToSend) return;

        const response = await createObjectStore.sendObjectData(
          dataToSend,
          objectType,
          !!(presets && presets.editMode),
          info?.loadedId
        );
        if (response && onPublish) onPublish(response); // Передаем сюда айди успешного объявления
        createObjectStore.resetFields();
      } else setIsValid(false);
    };

    const handlePreview = () => {
      console.log("preview feature in future");
    };

    return (
      <ButtonPanel
        onPublish={handlePublish}
        onPreview={handlePreview}
        onPrevTab={onPrevTab}
        presets={presets}
        info={info}
      >
        <InputsGroup title="Текущие владельцы">
          <BaseDropDown
            value={currentFounder.founderType}
            onChange={onChangeCurrentFounder}
            options={LEGAL_PURITY_TAB_OWNER_TYPES}
            label="Тип собственника"
            placeholder="Тип собственника"
            className={s.inputMd}
          />
          <div className={s.inputsGroup}>
            {currentFounder.founderType === FoundersTypes.PAIR ? (
              <>
                <BaseInput
                  value={currentFounder.firstFounderName}
                  label="Собственник 1"
                  type="text"
                  classNameWrapper={s.inputMd}
                  onChange={onChangeCurrentFirstFounderName}
                />
                <BaseInput
                  value={currentFounder.secondFouderName}
                  onChange={onChangeCurrentSecondFounderName}
                  label="Собственник 2"
                  type="text"
                  classNameWrapper={s.inputMd}
                  isError={!isValid && !isValidCurrentFounderNames}
                  errorLabel="Все поля должны быть заполнены"
                />
              </>
            ) : (
              <BaseInput
                value={currentFounder.firstFounderName}
                onChange={onChangeCurrentFirstFounderName}
                label="Собственник"
                type="text"
                classNameWrapper={s.inputMd}
                isError={!isValid && !isValidCurrentFounderNames}
              />
            )}
          </div>
          <BaseInput
            value={currentFounder.cadastralNumber}
            onChange={onChangeCurrentCadastralNumber}
            label="Кадастровый номер"
            type="text"
            classNameWrapper={s.inputMd}
            isError={!isValid && !isValidCurrentCadastralNumber}
          />

          <BaseDatePicker
            onChangeStartDate={onChangeCurrentFounderStartDate}
            onChangeEndDate={onChangeCurrentFounderEndDate}
            startDate={currentFounder.ownershipFrom}
            endDate={currentFounder.ownershipTo}
            label="Период владения"
          />
        </InputsGroup>
        <div className={s.divider} />
        <InputsGroup title="Предыдущие владельцы">
          <BaseDropDown
            onChange={onChangePrevFounder}
            value={previousFounder.founderType}
            options={LEGAL_PURITY_TAB_OWNER_TYPES}
            label="Тип собственника"
            placeholder="Тип собственника"
            className={s.inputMd}
          />
          <div className={s.inputsGroup}>
            {previousFounder.founderType === FoundersTypes.PAIR ? (
              <>
                <BaseInput
                  onChange={onChangePrevFirstFounderName}
                  value={previousFounder.firstFounderName}
                  label="Собственник 1"
                  type="text"
                  classNameWrapper={s.inputMd}
                />
                <BaseInput
                  onChange={onChangePrevSecondFounderName}
                  value={previousFounder.secondFouderName}
                  label="Собственник 2"
                  type="text"
                  classNameWrapper={s.inputMd}
                  isError={!isValid && !isValidPrevFounderNames}
                  errorLabel="Все поля должны быть заполнены"
                />
              </>
            ) : (
              <BaseInput
                onChange={onChangePrevFirstFounderName}
                value={previousFounder.firstFounderName}
                label="Собственник"
                type="text"
                isError={!isValid && !isValidPrevFounderNames}
                classNameWrapper={s.inputMd}
              />
            )}
          </div>
          <BaseInput
            onChange={onChangePrevCadastralNumber}
            value={previousFounder.cadastralNumber}
            label="Кадастровый номер"
            type="text"
            classNameWrapper={s.inputMd}
            isError={!isValid && !isValidPrevCadastralNumber}
          />

          <BaseDatePicker
            onChangeStartDate={onChangePrevFounderStartDate}
            onChangeEndDate={onChangePrevFounderEndDate}
            startDate={previousFounder.ownershipFrom}
            endDate={previousFounder.ownershipTo}
            label="Период владения"
          />
        </InputsGroup>
      </ButtonPanel>
    );
  }
);

export default LegalPurityFounders;
