import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import Typography from "../../../../shared/Typography/Typography";
import { INFO_TAB_ventilation_TYPE } from "../../config";
import {
  getActualObjectTypeData,
  getInitialStateInfoTab,
  isValidInputsHouseDetailsTab,
  TInfoState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";
import {
  IConstructionProgress,
  IConstructionProgressChangeable,
} from "../../../../../mobx/types/CreateObjectStoresTypes/CreateComplexStoreTypes";
import moment from "moment";
import BaseButton from "../../../../shared/BaseButton/BaseButtons";
import { IEditInfo, IInfoLoaded } from "../../../../../hooks/useEditObject";
import { NewDropDown } from "../../../../shared/BaseDropDown/NewDropDown";

import s from "./HouseInfoTab.module.scss";

interface Props extends ICreateObjectControls {
  objectType: Exclude<ObjectTypes, ObjectTypes.LAND>;
  presets?: IEditInfo;
  info?: IInfoLoaded;
}

const MAX_LENGTH = 250;

const HouseInfoDetailsTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType, onPublish, info, presets }) => {
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

    const onChangeDropDown = (value: string, valueField: any) =>
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

    const [constructionProgress, setConstructionProgress] = useState<
      IConstructionProgressChangeable[]
    >(
      "constructionProgress" in values && values.constructionProgress
        ? values.constructionProgress.map((el, index) => ({
            date: el.date,
            description: el.description,
            id: moment()
              .add(index + 1, "days")
              .toISOString(),
          }))
        : [
            {
              date: "",
              description: "",
              id: moment().add(1, "days").toISOString(),
            },
          ]
    );

    const handleAddProgress = () => {
      setConstructionProgress([
        ...constructionProgress,
        {
          date: "",
          description: "",
          id: moment()
            .add(constructionProgress.length + 1, "days")
            .toISOString(),
        },
      ]);
    };

    const handleChangeProgress = (
      id: string,
      field: keyof IConstructionProgress,
      value: string
    ) => {
      setConstructionProgress(
        constructionProgress.map((element) => {
          if (element.id === id) {
            return {
              ...element,
              [field]: value,
            };
          } else return element;
        })
      );
    };

    const removeConstructionProgressField = (id: string) => {
      setConstructionProgress(
        constructionProgress.filter((el) => el.id !== id)
      );
    };

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
        isValidParkingPrice,
        constructionProgress
      );
      if (isValidInputs) {
        createObjectStore.saveHouseInfoTab(values, objectType);
        onNextTab && onNextTab();
      } else setIsValid(false);
    };

    const handlePublish = async () => {
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
        isValidParkingPrice,
        constructionProgress
      );

      if (isValidInputs) {
        createObjectStore.saveHouseInfoTab(
          {
            constructionProgress: constructionProgress.map((elem) => ({
              date: elem.date,
              description: elem.description,
            })),
            guides: "guides" in values ? values.guides : [],
          },
          objectType
        );

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

    return (
      <ButtonPanel
        onNextTab={objectType === 4 ? undefined : handleNextTab}
        onPrevTab={onPrevTab}
        onPublish={objectType === 4 ? handlePublish : undefined}
        presets={presets}
        info={info}
      >
        {objectType === 4 ? (
          <InputsGroup title="Процесс строительства">
            {constructionProgress.map((el, index) => (
              <>
                <div
                  className={s.group}
                  style={{
                    marginTop: index === 0 ? 40 : 0,
                  }}
                >
                  <BaseInput
                    value={el.date}
                    label="Дата"
                    type="date"
                    classNameWrapper={s.inputMd}
                    onChange={(e) => {
                      handleChangeProgress(el.id, "date", e.target.value);
                    }}
                    isError={!isValid && !el.date}
                  />
                  <BaseInput
                    value={el.description}
                    label="Описание"
                    type="text"
                    classNameWrapper={s.inputMd}
                    onChange={(e) => {
                      handleChangeProgress(
                        el.id,
                        "description",
                        e.target.value
                      );
                    }}
                    isError={!isValid && !el.description}
                  />
                  {index !== 0 && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      <BaseButton
                        buttonHTMLType={"button"}
                        onClick={() => {
                          removeConstructionProgressField(el.id);
                        }}
                        type="danger"
                      >
                        Удалить этап
                      </BaseButton>
                    </div>
                  )}
                </div>
                <div className={s.divider} />
              </>
            ))}
            <BaseButton
              buttonHTMLType={"button"}
              onClick={handleAddProgress}
              type="primary"
            >
              Добавить этап
            </BaseButton>
          </InputsGroup>
        ) : (
          <>
            <InputsGroup title="Строительно-техническая экспертиза">
              {houseType && "houseType" in values && (
                <NewDropDown
                required={true}
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
                  multi={houseType.isMulti}
                />
              )}
              {groundType && "fundament" in values && (
                <NewDropDown
                  value={values.fundament}
                  className={s.dropdownSm}
                  label="Фундамент"
                  options={groundType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Фундамент"
                  onChange={(value) => onChangeDropDown(value, "fundament")}
                  required={true}
                  isError={!isValid && !isValidFundament}
                  multi={groundType.isMulti}
                />
              )}
              {roofType && "roof" in values && (
                <NewDropDown
                  value={values.roof}
                  className={s.dropdownSm}
                  label="Кровля"
                  options={roofType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Кровля"
                  onChange={(value) => onChangeDropDown(value, "roof")}
                  required={true}
                  isError={!isValid && !isValidRoof}
                  multi={roofType.isMulti}
                />
              )}
              {wallType && "walls" in values && (
                <NewDropDown
                  value={values.walls}
                  className={s.dropdownSm}
                  label="Стены"
                  options={wallType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Стены"
                  onChange={(value) => onChangeDropDown(value, "walls")}
                  required={true}
                  isError={!isValid && !isValidWalls}
                  multi={wallType.isMulti}
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
                  required={true}
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
              {waterType && "waterPipe" in values && (
                <NewDropDown
                  value={values.waterPipe}
                  className={s.dropdownSm}
                  label="Водопровод"
                  options={waterType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Водопровод"
                  onChange={(value) => onChangeDropDown(value, "waterPipe")}
                  required={true}
                  isError={!isValid && !isValidWaterPipe}
                  multi={waterType.isMulti}
                />
              )}
              {heatingType && "heating" in values && (
                <NewDropDown
                  value={values.heating}
                  className={s.dropdownSm}
                  label="Отопление"
                  options={heatingType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Отопление"
                  onChange={(value) => onChangeDropDown(value, "heating")}
                  required={true}
                  isError={!isValid && !isValidHeating}
                  multi={heatingType.isMulti}
                />
              )}
              {sewerageType && "sewerage" in values && (
                <NewDropDown
                  value={values.sewerage}
                  className={s.dropdownSm}
                  label="Канализация"
                  options={sewerageType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Канализация"
                  onChange={(value) => onChangeDropDown(value, "sewerage")}
                  required={true}
                  isError={!isValid && !isValidSewerage}
                  multi={sewerageType.isMulti}
                />
              )}
              {electricityType && "electricity" in values && (
                <NewDropDown
                  value={values.electricity}
                  className={s.dropdownSm}
                  label="Электричество"
                  options={electricityType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Электричество"
                  onChange={(value) => onChangeDropDown(value, "electricity")}
                  required={true}
                  isError={!isValid && !isValidElectricity}
                  multi={electricityType.isMulti}
                />
              )}
              {"vent" in values && (
                <NewDropDown
                  value={values.vent}
                  className={s.dropdownSm}
                  label="Вентиляция"
                  options={INFO_TAB_ventilation_TYPE}
                  placeholder="Вентиляция"
                  onChange={(value) =>
                    onChangeDropDown(value, "vent" as keyof TInfoState)
                  }
                  required={true}
                  isError={!isValid && !isValidVent}
                />
              )}
              {internetType && "internet" in values && (
                <NewDropDown
                  value={values.internet}
                  required={true}
                  isError={!isValid && !isValidInternet}
                  className={s.dropdownSm}
                  label="Интернет"
                  options={internetType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  placeholder="Интернет"
                  onChange={(value) => onChangeDropDown(value, "internet")}
                  multi={internetType.isMulti}
                />
              )}
              {"engineeringComment" in values && (
                <BaseInput
                  onChange={(event) =>
                    onChaneInput(
                      event,
                      "engineeringComment" as keyof TInfoState
                    )
                  }
                  type="text"
                  value={values.engineeringComment}
                  classNameWrapper={classNames(s.fullWidth, s.commentInput)}
                  label="Комментарий"
                  className={s.commentInputIconSpace}
                  required={true}
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
                      <NewDropDown
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
                        required={true}
                        isError={!isValid && !isValidParking}
                        multi={parkingType.isMulti}
                      />
                      <BaseInput
                        onChange={(event) =>
                          onChaneInput(
                            event,
                            "parkingPrice" as keyof TInfoState
                          )
                        }
                        value={values.parkingPrice}
                        type="number"
                        classNameWrapper={s.dropdownSm}
                        label="Стоимость места за час"
                        required={true}
                        isError={!isValid && !isValidParkingPrice}
                        icon={<Typography className={s.icon}>₽</Typography>}
                      />
                    </InputsGroup>
                  )}
                </>
              )}
            </InputsGroup>
          </>
        )}
      </ButtonPanel>
    );
  }
);

export default HouseInfoDetailsTab;
