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
import jwt_decode from "jwt-decode";
import { useStoreDeveloperMyObjectStore } from "../../../../../mobx/role/developer/myObject/DeveloperMyObject";
import { accFromToken } from "../../../../../lib/localStorage/localStorage";

import s from "./AboutObject.module.scss";
import { NewDropDown } from "../../../../shared/BaseDropDown/NewDropDown";
import { AllAdsStore } from "../../../../../mobx/role/admin/ads";
import { OwnersSelectStore } from "../../../../../mobx/object/ownersSelect";
import { SearchDropDown } from "../../../../shared/SearchDropDown";

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
    const adminAdsStore = AllAdsStore;
    const ownersList = OwnersSelectStore;
    const developerStore = useStoreDeveloperMyObjectStore();

    const idOwner: any = jwt_decode(
      localStorage.getItem("accessEstatum")
        ? (localStorage.getItem("accessEstatum") as string)
        : "123"
    );

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
    const isValidComplexName = "complexName" in values && !!values.complexName; // REPLACE BY VALIDATION SERVICE
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
        idOwner.role === "developer" ? isValidComplexName : true,
        isValidCountry,
        isValidCity,
        isValidIndex,
        isValidAddress,
        isValidCost,
        isValidRegion
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
      if (onPrevTab) {
        onPrevTab();
      }
    };

    const onChangeName = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, name: event.target.value });
    };
    const onChangeType = (value: string) => {
      setValues({ ...values, type: value });
    };

    const onChangeComplexName = (value: string) => {
      if (idOwner.role === "developer" || idOwner.role === "admin") {
        // @ts-ignore
        setValues({ ...values, complexName: Number(value) });
      }
    };
    const onChangeFloor = (value: number) => {
      setValues({ ...values, floor: value });
    };
    const onChangeFloorsAmmount = (value: number) => {
      setValues({ ...values, floorsAmmount: value });
    };
    const onChangeCountry = (value: number) => {
      setValues({ ...values, country: value });
    };
    const onChangeRegion = (value: number) => {
      setValues({ ...values, region: value });
    };
    const onChangeCity = (value: number) => {
      setValues((prev) => ({ ...prev, city: value }));

      if (!values.region && value) {
        const regionId = addressStore.cities?.find(
          (el) => el.id === Number(value)
        )?.region.id;
        if (regionId) {
          // @ts-ignore
          setValues((prev) => ({
            ...prev,
            region: regionId,
          }));
        }
      }
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

    useEffect(() => {
      if (!values.region && values.region !== 0 && values.city) {
        onChangeCity(values.city);
      }
    }, [values.city]);

    const buildingType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "buildingType"
    );

    useEffect(() => {
      if (guidesStore.loaded) {
        if (
          getInitStateAboutTab(objectType, createObjectStore).type.length > 2
        ) {
          const typeId = buildingType?.values.find(
            (el) => el.value === values.type
          )?.id;

          if (typeId) {
            // @ts-ignore
            onChangeType(typeId.toString());
          }
        }
      }
    }, [guidesStore, values.type]);

    useEffect(() => {
      if (idOwner.role === "developer") {
        developerStore.fetchAllComplexByOwnerId(accFromToken().id).then(() => {
          const history = window ? window.location.search : undefined;

          if (history) {
            const complex = history
              .split("&")
              .filter((el) => el.indexOf("complex") > -1)[0]
              ?.split("=")[1];

            if (complex) {
              onChangeComplexName(complex);
            }
          }
        });
      }

      if (idOwner.role === "admin") {
        if (!adminAdsStore.loaded) {
          adminAdsStore.uploadAllAds().then(() => {
            const history = window ? window.location.search : undefined;

            if (history) {
              const complex = history
                .split("&")
                .filter((el) => el.indexOf("complex") > -1)[0]
                ?.split("=")[1];

              if (complex) {
                onChangeComplexName(complex);
              }
            }
          });
        } else {
          const history = window ? window.location.search : undefined;

          if (history) {
            const complex = history
              .split("&")
              .filter((el) => el.indexOf("complex") > -1)[0]
              ?.split("=")[1];

            if (complex) {
              onChangeComplexName(complex);
            }
          }
        }
      }
    }, []);

    const onChangeOwner = (newData: string) => {
      createObjectStore.setOwner(Number(newData));
    };

    const onSearch = async (query: string) => {
      await ownersList.handleLoad(query);
    };

    return (
      <FormController<IForm> form={form}>
        <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
          <InputsGroup title={"Объект"}>
            <BaseInput
              label={
                objectType === 4 ? "Название ЖК" : "Придумайте название объекта"
              }
              className={s.inputXl}
              type="text"
              value={values.name}
              onChange={onChangeName}
              isError={!isValid && !isValidName}
              name={"objectName"}
            />
            {buildingType && (
              <BaseDropDown
                className={s.inputSm}
                options={buildingType.values.map((el) => ({
                  label: el.value,
                  value: el.id.toString(),
                }))}
                placeholder={objectType === 3 ? "Тип земли" : "Тип жилья"}
                value={values.type}
                onChange={onChangeType}
                label={objectType === 3 ? "Тип земли" : "Тип жилья"}
                isError={!isValid && !isValidType}
                name={"type"}
                multi={buildingType.isMulti}
              />
            )}
            {"complexName" in values && (
              <>
                {(idOwner.role === "developer" || idOwner.role === "admin") && (
                  <BaseDropDown
                    className={s.inputSm}
                    options={
                      idOwner.role === "developer"
                        ? developerStore.initialData.complex.map((complex) => ({
                            label: complex.name,
                            value: complex.id,
                          }))
                        : adminAdsStore.adsList
                        ? adminAdsStore.adsList
                            .filter(
                              (el) => el.objType === ObjectTypes.RESCOMPLEX
                            )
                            .map((complex) => ({
                              label: complex.name,
                              value: complex.id,
                            }))
                        : []
                    }
                    placeholder={"ЖК"}
                    onChange={onChangeComplexName}
                    value={values.complexName}
                    label="ЖК"
                    isError={!isValid && !isValidComplexName}
                    name={"lcd"}
                  />
                )}
              </>
            )}
            {"floor" in values && (
              <CounterButtons
                onChange={onChangeFloor}
                initValue={values.floor}
                label="Этаж"
              />
            )}
            {"floorsAmmount" in values && (
              <CounterButtons
                onChange={onChangeFloorsAmmount}
                initValue={values.floorsAmmount}
                label="Этажей в доме"
              />
            )}
            {idOwner.role === "admin" && (
              <SearchDropDown
                className={s.inputSm}
                options={
                  ownersList.data
                    ? ownersList.data.map((el) => ({
                        label: el.email,
                        value: el.id.toString(),
                      }))
                    : []
                }
                placeholder={"Ответственный"}
                onChange={onChangeOwner}
                value={
                  createObjectStore.newOwner !== null
                    ? createObjectStore.newOwner.toString()
                    : undefined
                }
                isError={!isValid && !isValidComplexName}
                name={"lcd"}
                onSearch={onSearch}
              />
            )}
          </InputsGroup>
          <div className={s.divider} />
          <InputsGroup title={"Адрес"}>
            {addressStore.countries && (
              <NewDropDown
                value={Number(values.country)}
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
              <NewDropDown
                value={Number(values.region)}
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
              <NewDropDown
                value={Number(values.city)}
                className={s.inputMd}
                options={addressStore.cities
                  .filter((el) =>
                    values.region
                      ? el.region.id === Number(values.region)
                      : true
                  )
                  .map((el) => ({
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
          {"cost" in values && (
            <>
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
            </>
          )}
        </ButtonPanel>
      </FormController>
    );
  }
);

export default AboutObjectTab;
