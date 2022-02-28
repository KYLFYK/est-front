import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ICreateHouseAboutTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateHouseStoreType";
import {
  NewObjectActionTypes,
  ObjectTypes,
} from "../../../../../utils/interfaces/objects";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons";
import Typography from "../../../../shared/Typography/Typography";
import {
  getInitStateAboutTab,
  isValidInputsAboutTab,
  TAboutTabState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import { FormController, useForm } from "../../../../containers/FormController";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";
import { IObjType } from "../../../../tabs/Account/Agent/components/Others/MyAdsContainer/MyAdsContainer";
import { AddressGuides } from "../../../../../mobx/stores/objects/AddressGuidesStore";

import s from "./AboutObject.module.scss";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
  action: NewObjectActionTypes;
}

interface IForm {
  type: string;
  objectName: string;
  lcd: string;
  country: string;
  city: string;
  index: string;
  address: string;
  cost: string;
}

const actionToText: (action: NewObjectActionTypes) => IObjType = (action) => {
  switch (action) {
    case NewObjectActionTypes.RENT:
      return "rent";
    case NewObjectActionTypes.SELL:
      return "sale";
  }
};

const AboutObjectTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType, action }) => {
    const guidesStore = ObjectGuides;
    const addressStore = AddressGuides;

    const [form] = useForm<IForm>({
      type: "",
      objectName: "",
      lcd: "",
      country: "",
      city: "",
      index: "",
      address: "",
      cost: "",
    });

    const { createObjectStore } = useStores();
    const [values, setValues] = React.useState<TAboutTabState>(
      getInitStateAboutTab(objectType, createObjectStore)
    ); // 1-type Object  2-
    const [isValid, setIsValid] = useState<boolean>(true);
    const saveAboutTab = createObjectStore.saveAboutTab.bind(createObjectStore);

    const isValidName = "name" in values && !!values.name.length; // REPLACE BY VALIDATION SERVICE
    const isValidType = "type" in values && !!values.type.length; // REPLACE BY VALIDATION SERVICE
    // const isValidComplexName =
    //   "complexName" in values && !!values.complexName.length; // REPLACE BY VALIDATION SERVICE
    const isValidCountry = "country" in values && !!values.country; // REPLACE BY VALIDATION SERVICE
    const isValidCity = "city" in values && !!values.city; // REPLACE BY VALIDATION SERVICE
    const isValidIndex = "index" in values && !!values.index; // REPLACE BY VALIDATION SERVICE
    const isValidAddress = "address" in values && !!values.address; // REPLACE BY VALIDATION SERVICE
    const isValidCost = "cost" in values && !!values.cost; // REPLACE BY VALIDATION SERVICE
    const isValidRegion = "region" in values && !!values.region; // REPLACE BY VALIDATION SERVICE

    const handleNext = () => {
      const isValid = isValidInputsAboutTab(
        objectType,
        isValidName,
        isValidType,
        true,
        isValidCountry,
        isValidCity,
        isValidIndex,
        isValidAddress,
        isValidCost
      );
      if (isValid) {
        saveAboutTab(values!, objectType);
        onNextTab && onNextTab();
      } else {
        setIsValid(isValid);
      }
    };

    useEffect(() => {
      if (createObjectStore.getObjType() !== actionToText(action)) {
        createObjectStore.setObjType(actionToText(action));
      }
    }, [action]);

    useEffect(() => {
      if (!addressStore.loaded && !addressStore.errorOnLoad) {
        addressStore.loadData().then();
      }
    }, []);

    const handlePrev = () => {
      onPrevTab();
    };
    const onChangeName = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, name: event.target.value });
    };
    const onChangeType = (value: string) => {
      setValues({ ...values, type: value });
    };
    // const onChangeComplexName = (value: string) => {
    //   setValues({ ...values, complexName: value });
    // };
    const onChangeFloor = (value: number) => {
      setValues({ ...values, floor: value });
    };
    const onChangeFloorsAmmount = (value: number) => {
      setValues({ ...values, floorsAmmount: value });
    };
    const onChangeCountry = (value: string) => {
      setValues({ ...values, country: value });
    };
    const onChangeRegion = (value: string) => {
      setValues({ ...values, region: value });
    };
    const onChangeCity = (value: string) => {
      setValues({ ...values, city: value });
    };
    const onChangeIndex = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, index: +event.target.value });
    };
    const onChangeAddress = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, address: event.target.value });
    };
    const onChangeCost = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, cost: +event.target.value });
    };

    const buildingType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "buildingType"
    );

    return (
      <FormController<IForm> form={form}>
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
          <InputsGroup title={"Объект"}>
            <BaseInput
              label="Придумайте название объекта"
              className={s.inputXl}
              type="text"
              value={values.name}
              onChange={onChangeName}
              isError={!isValid && !isValidName}
              name={"objectName"}
            />
            {"complexName" in values &&
              "floor" in values &&
              "floorsAmmount" in values &&
              "type" in values && (
                <>
                  {buildingType && (
                    <BaseDropDown
                      className={s.inputSm}
                      options={buildingType.values.map((el) => ({
                        label: el.value,
                        value: el.id.toString(),
                      }))}
                      placeholder={"Тип жилья"}
                      value={values.type}
                      onChange={onChangeType}
                      label="Тип жилья"
                      isError={!isValid && !isValidType}
                      name={"type"}
                    />
                  )}

                  {/*<BaseDropDown*/}
                  {/*  className={s.inputSm}*/}
                  {/*  options={DROPDOWN_FILTER_OPTIONS}*/}
                  {/*  placeholder={"ЖК"}*/}
                  {/*  onChange={onChangeComplexName}*/}
                  {/*  value={values.complexName}*/}
                  {/*  label="ЖК"*/}
                  {/*  isError={!isValid && !isValidComplexName}*/}
                  {/*  name={"lcd"}*/}
                  {/*/>*/}

                  <CounterButtons
                    onChange={onChangeFloor}
                    initValue={values.floor}
                    label="Этаж"
                  />

                  <CounterButtons
                    onChange={onChangeFloorsAmmount}
                    initValue={values.floorsAmmount}
                    label="Этажей в доме"
                  />
                </>
              )}
          </InputsGroup>
          <div className={s.divider} />
          <InputsGroup title={"Адрес"}>
            {addressStore.countries && (
              <BaseDropDown
                value={values.country}
                className={s.inputMd}
                options={addressStore.countries.map((el) => ({
                  label: el.name,
                  value: el.id,
                }))}
                placeholder={"Страна"}
                onChange={onChangeCountry}
                label="Страна"
                isError={!isValid && !isValidCountry}
                name={"country"}
              />
            )}
            {addressStore.regions && (
              <BaseDropDown
                value={values.region}
                className={s.inputMd}
                options={addressStore.regions.map((el) => ({
                  label: el.name,
                  value: el.id,
                }))}
                placeholder={"Регион"}
                onChange={onChangeRegion}
                label="Регион"
                isError={!isValid && !isValidRegion}
                name={"region"}
              />
            )}
            {addressStore.cities && (
              <BaseDropDown
                value={values.city}
                className={s.inputMd}
                options={addressStore.cities.map((el) => ({
                  label: el.name,
                  value: el.id,
                }))}
                placeholder={"Город"}
                onChange={onChangeCity}
                label="Город"
                isError={!isValid && !isValidCity}
                name={"city"}
              />
            )}
            {"index" in values && (
              <BaseInput
                value={(values as ICreateHouseAboutTab).index}
                label="Индекс"
                className={s.inputXs}
                type="number"
                onChange={onChangeIndex}
                isError={!isValid && !isValidIndex}
                name={"index"}
              />
            )}
            <BaseInput
              isError={!isValid && !isValidAddress}
              label="Адрес"
              className={s.inputX}
              type="text"
              value={values.address}
              onChange={onChangeAddress}
              name={"address"}
            />
          </InputsGroup>
          <div className={s.divider} />
          <InputsGroup title={"Стоимость"}>
            <BaseInput
              onChange={onChangeCost}
              value={values.cost}
              label="Укажите стоимость в рублях"
              className={s.inputMd}
              type="number"
              isError={!isValid && !isValidCost}
              icon={<Typography color="tertiary">₽</Typography>}
              name={"cost"}
            />
          </InputsGroup>
        </ButtonPanel>
      </FormController>
    );
  }
);

export default AboutObjectTab;
