import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import Typography from "../../../../shared/Typography/Typography";
import { INFO_TAB_ventilation_TYPE } from "../../config";
import {
  getInitialStateInfoTab,
  isValidInputsHouseDetailsTab,
  TInfoState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";

import s from "./HouseInfoTab.module.scss";

interface Props extends ICreateObjectControls {
  objectType: Exclude<ObjectTypes, ObjectTypes.LAND>;
}

const MAX_LENGTH = 250;

const HouseInfoDetailsTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const guidesStore = ObjectGuides;
    const { createObjectStore } = useStores();
    const [values, setValues] = useState<TInfoState>(
      getInitialStateInfoTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);

    const isValidHouseType = "houseType" in values && !!values.houseType.length;
    const isValidFundament = "fundament" in values && !!values.fundament.length;
    const isValidRoof = "roof" in values && !!values.roof.length;
    const isValidWalls = "walls" in values && !!values.walls.length;
    const isValidTechComment =
      "technicalComment" in values &&
      !!values.technicalComment.length &&
      values.technicalComment.length < MAX_LENGTH;
    const isValidWaterPipe = "waterPipe" in values && !!values.waterPipe.length;
    const isValidHeating = "heating" in values && !!values.heating.length;
    const isValidSewerage = "sewerage" in values && !!values.sewerage.length;
    const isValidElectricity =
      "electricity" in values && !!values.electricity.length;
    const isValidVent = "vent" in values && !!values.vent.length;
    const isValidInternet = "internet" in values && !!values.internet.length;
    const isValidEngineeringComment =
      "engineeringComment" in values &&
      !!values.engineeringComment.length &&
      values.engineeringComment.length < MAX_LENGTH;
    const isValidParking = "parking" in values && !!values.parking.length;
    const isValidParkingPrice =
      "parkingPrice" in values && !!values.parkingPrice;

    const onChangeDropDown = (value: string, valueField: keyof TInfoState) =>
      setValues({ ...values, [valueField]: value });
    const onChaneInput = (
      event: React.ChangeEvent<HTMLInputElement>,
      valueField: keyof TInfoState
    ) => setValues({ ...values, [valueField]: event.target.value });

    const houseType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "construction"
    );

    const groundType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "groundwork"
    );

    const roofType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "roof"
    );

    const wallType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "wall"
    );

    const waterType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "water"
    );

    const heatingType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "heating"
    );

    const sewerageType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "sewerage"
    );

    const electricityType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "electricity"
    );

    const parkingType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "parking"
    );

    const internetType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "internet"
    );

    const handleNextTab = () => {
      const isValidInputs = isValidInputsHouseDetailsTab(
        objectType,
        isValidHouseType,
        isValidFundament,
        isValidRoof,
        isValidWalls,
        isValidTechComment,
        isValidWaterPipe,
        isValidHeating,
        isValidSewerage,
        isValidElectricity,
        isValidVent,
        isValidInternet || !internetType,
        isValidEngineeringComment,
        isValidParking,
        isValidParkingPrice
      );
      if (isValidInputs) {
        createObjectStore.saveHouseInfoTab(values, objectType);
        onNextTab && onNextTab();
      } else setIsValid(false);
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title="Строительно-техническая экспертиза">
          {houseType && (
            <BaseDropDown
              isError={!isValid && !isValidHouseType}
              value={values.houseType}
              className={s.dropdownSm}
              label="Тип дома"
              options={houseType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Тип дома"
              onChange={(value) => onChangeDropDown(value, "houseType")}
            />
          )}
          {groundType && (
            <BaseDropDown
              value={values.fundament}
              className={s.dropdownSm}
              label="Фундамент"
              options={groundType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Фундамент"
              onChange={(value) => onChangeDropDown(value, "fundament")}
              isError={!isValid && !isValidFundament}
            />
          )}
          {roofType && (
            <BaseDropDown
              value={values.roof}
              className={s.dropdownSm}
              label="Кровля"
              options={roofType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Кровля"
              onChange={(value) => onChangeDropDown(value, "roof")}
              isError={!isValid && !isValidRoof}
            />
          )}
          {wallType && (
            <BaseDropDown
              value={values.walls}
              className={s.dropdownSm}
              label="Стены"
              options={wallType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Стены"
              onChange={(value) => onChangeDropDown(value, "walls")}
              isError={!isValid && !isValidWalls}
            />
          )}
          {"technicalComment" in values && (
            <BaseInput
              onChange={(event) =>
                onChaneInput(event, "technicalComment" as keyof TInfoState)
              }
              value={values.technicalComment}
              type="text"
              classNameWrapper={classNames(s.fullWidth, s.commentInput)}
              className={s.commentInputIconSpace}
              label="Комментарий"
              isError={!isValid && !isValidTechComment}
              icon={
                <Typography color="tertiary">
                  {values.technicalComment.length}/{MAX_LENGTH}
                </Typography>
              }
            />
          )}
        </InputsGroup>
        <div className={s.divider} />
        <InputsGroup title="Инженерные коммуникации">
          {waterType && (
            <BaseDropDown
              value={values.waterPipe}
              className={s.dropdownSm}
              label="Водопровод"
              options={waterType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Водопровод"
              onChange={(value) => onChangeDropDown(value, "waterPipe")}
              isError={!isValid && !isValidWaterPipe}
            />
          )}
          {heatingType && (
            <BaseDropDown
              value={values.heating}
              className={s.dropdownSm}
              label="Отопление"
              options={heatingType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Отопление"
              onChange={(value) => onChangeDropDown(value, "heating")}
              isError={!isValid && !isValidHeating}
            />
          )}
          {sewerageType && (
            <BaseDropDown
              value={values.sewerage}
              className={s.dropdownSm}
              label="Канализация"
              options={sewerageType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Канализация"
              onChange={(value) => onChangeDropDown(value, "sewerage")}
              isError={!isValid && !isValidSewerage}
            />
          )}
          {electricityType && (
            <BaseDropDown
              value={values.electricity}
              className={s.dropdownSm}
              label="Электричество"
              options={electricityType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Электричество"
              onChange={(value) => onChangeDropDown(value, "electricity")}
              isError={!isValid && !isValidElectricity}
            />
          )}
          {"vent" in values && (
            <BaseDropDown
              value={values.vent}
              className={s.dropdownSm}
              label="Вентиляция"
              options={INFO_TAB_ventilation_TYPE}
              placeholder="Вентиляция"
              onChange={(value) =>
                onChangeDropDown(value, "vent" as keyof TInfoState)
              }
              isError={!isValid && !isValidVent}
            />
          )}
          {internetType && (
            <BaseDropDown
              value={values.internet}
              isError={!isValid && !isValidInternet}
              className={s.dropdownSm}
              label="Интернет"
              options={internetType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              placeholder="Интернет"
              onChange={(value) => onChangeDropDown(value, "internet")}
            />
          )}
          {"engineeringComment" in values && (
            <BaseInput
              onChange={(event) =>
                onChaneInput(event, "engineeringComment" as keyof TInfoState)
              }
              type="text"
              value={values.engineeringComment}
              classNameWrapper={classNames(s.fullWidth, s.commentInput)}
              label="Комментарий"
              className={s.commentInputIconSpace}
              isError={!isValid && !isValidEngineeringComment}
              icon={
                <Typography color="tertiary">
                  {values.engineeringComment.length}/{MAX_LENGTH}
                </Typography>
              }
            />
          )}
          {"parking" in values && "parkingPrice" in values && (
            <>
              <div className={s.divider} />
              {parkingType && (
                <InputsGroup title="Парковка">
                  <BaseDropDown
                    value={values.parking}
                    className={s.dropdownSm}
                    label="Парковка"
                    options={parkingType.values.map((el) => ({
                      label: el.value,
                      value: el.id.toString(),
                    }))}
                    placeholder="Парковка"
                    onChange={(value) =>
                      onChangeDropDown(value, "parking" as keyof TInfoState)
                    }
                    isError={!isValid && !isValidParking}
                  />
                  <BaseInput
                    onChange={(event) =>
                      onChaneInput(event, "parkingPrice" as keyof TInfoState)
                    }
                    value={values.parkingPrice}
                    type="number"
                    classNameWrapper={s.dropdownSm}
                    label="Стоимость места за час"
                    isError={!isValid && !isValidParkingPrice}
                    icon={<Typography className={s.icon}>₽</Typography>}
                  />
                </InputsGroup>
              )}
            </>
          )}
        </InputsGroup>
      </ButtonPanel>
    );
  }
);

export default HouseInfoDetailsTab;
