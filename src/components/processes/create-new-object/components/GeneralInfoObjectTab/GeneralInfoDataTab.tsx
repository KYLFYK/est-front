import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { isUndefined } from "../../../../../utils/general";
import { IOption } from "../../../../../utils/interfaces/general";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import { BaseInput } from "../../../../shared/BaseInput/Input";
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons";
import Typography from "../../../../shared/Typography/Typography";
import {
  getInitialStateGeneralInfoTab,
  isValidInputsGeneralTab,
  TGeneralInfoState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import {
  GENERAL_INFO_TAB_STATUS_OPTIONS,
  GENERAL_INFO_TAB_TOGGLE_OPTIONS,
} from "./config";
import s from "./GeneralInfoObjectTab.module.scss";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
}

const GeneralInfoDataTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores();
    const [values, setValues] = React.useState<TGeneralInfoState>(
      getInitialStateGeneralInfoTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);
    const isValidGeneralSquare = !!(
      "generalSquare" in values && values.generalSquare.length
    );
    const isValidHouseSquare = !!(
      "houseSquare" in values && values.houseSquare.length
    );
    const isValidLivingSquare = !!(
      "livingSquare" in values && values.livingSquare.length
    );
    const isValidLand = !!("land" in values && values.land.length);
    const isValidLandGeneralSquare = !!(
      "landGeneralSquare" in values && values.landGeneralSquare.length
    );
    const isValidCeilingHeight = !!(
      "ceilingHeight" in values && values.ceilingHeight?.length
    );
    const isValidRooms = !!("rooms" in values && values.rooms);
    const isValidBathroom = !!("bathroom" in values && values.bathroom.length);
    const isValidKitchen = !!("kitchen" in values && values.kitchen.length);
    const isValidGarage = !!("garage" in values && values.garage.has.length);
    const isValidGarageCapacity = !!(
      "garage" in values && values.garage.capacity.length
    );
    const isValidGarageSquare = !!(
      "garage" in values && values.garage.square.length
    );
    const isValidPool = !!("pool" in values && values.pool.has.length);
    const isValidPoolSquare = !!("pool" in values && values.pool.square.length);
    const isValidCottageVillage = !!(
      "cottageVillageName" in values && values.cottageVillageName.length
    );
    const isValidLandStatus = !!(
      "landStatus" in values && values.landStatus.length
    );
    const isValidInteriorDescription = !!(
      "interiorDescription" in values && values.interiorDescription.length
    );
    const isAmountObjects = !!(
      "amountObjects" in values && values.amountObjects
    );

    const isAmountBuildings = !!(
      "amountBuildings" in values && values.amountBuildings
    );

    const isAmountFloors = !!("amountFloors" in values && values.amountFloors);
    const isHeightCeilings = !!(
      "heightCeilings" in values && values.heightCeilings
    );

    const isPriceObjectMin = !!(
      "priceObjectMin" in values && values.priceObjectMin
    );
    const isPriceObjectMax = !!(
      "priceObjectMax" in values && values.priceObjectMax
    );

    const isAreaObjectMin = !!(
      "areaObjectMin" in values && values.areaObjectMin
    );

    const isAreaObjectMax = !!(
      "areaObjectMax" in values && values.areaObjectMax
    );

    const isFloors = !!("floors" in values && values.floors.count > 0);

    const onChangeAmountObjects = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, amountObjects: Number(event.target.value) });
    };

    const onChangeAmountBuildings = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, amountBuildings: Number(event.target.value) });
    };

    const onChangeAmountFloors = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, amountFloors: Number(event.target.value) });
    };

    const onChangeHeightCeilings = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, heightCeilings: Number(event.target.value) });
    };

    const onChangeAreaObjectMax = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, areaObjectMax: Number(event.target.value) });
    };

    const onChangeAreaObjectMin = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, areaObjectMin: Number(event.target.value) });
    };

    const onChangePriceObjectMax = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, priceObjectMax: Number(event.target.value) });
    };

    const onChangePriceObjectMin = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, priceObjectMin: Number(event.target.value) });
    };
    
    const onChangeFloors = (value: number) => {
      if ("floors" in values!) {
        let newFloorsList: IOption<{ description: string; height?: string }>[];
        const newFloor: IOption<{ description: string; height?: string }> = {
          value: value,
          label: {
            description: "",
            height: objectType === ObjectTypes.HOUSE ? "" : undefined,
          },
        };
        if (value > values.floors.items.length)
          newFloorsList = [...values.floors.items, newFloor];
        else
          newFloorsList = values.floors.items.filter(
            (item, idx) => idx !== values.floors.items.length - 1
          );
        values &&
          setValues({
            ...values,
            floors: { count: value, items: newFloorsList },
          });
      }
    };

    const onChangeFloorDesc = (description: string, value: string | number) => {
      if ("floors" in values!) {
        const newFloorsData = values.floors.items.map((item) => {
          if (item.value === value)
            return { ...item, label: { ...item.label, description } };
          return { ...item };
        });
        setValues({
          ...values,
          floors: { ...values.floors, items: newFloorsData },
        });
      }
    };

    const onChangeFloorHeight = (height: string, value: string | number) => {
      if ("floors" in values!) {
        const newFloorsData = values.floors.items.map((item) => {
          if (item.value === value)
            return { ...item, label: { ...item.label, height } };
          return { ...item };
        });
        setValues({
          ...values,
          floors: { ...values.floors, items: newFloorsData },
        });
      }
    };

    const onAddRoom = () => {
      if ("customRooms" in values!) {
        const newCustomRoomsList = [
          ...values.customRooms,
          { value: values.rooms + 1, label: "" },
        ];
        setValues({
          ...values,
          customRooms: newCustomRoomsList,
          rooms: values.rooms + 1,
        });
      }
    };

    const onChangeRooms = (value: number) => {
      if ("customRooms" in values!) {
        const newCustomRooms =
          value > values.customRooms.length
            ? [...values.customRooms, { value: values.rooms + 1, label: "" }]
            : values.customRooms.filter(
                (customRoom, idx) => values.customRooms.length - 1 !== idx
              );

        setValues({ ...values, customRooms: newCustomRooms, rooms: value });
      } else setValues({ ...values!, rooms: value });
    };

    const onChangeIsolatedInputs = (value: number) => {
      setValues({ ...values!, isolatedInputs: value });
    };

    const onChangeGeneralSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, generalSquare: event.target.value });
    };

    const onChangeHouseSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, houseSquare: event.target.value });
    };

    const onChangeLivingSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, livingSquare: event.target.value });
    };

    const onChangeLand = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, land: event.target.value });
    };

    const onChangeLandGeneralSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, landGeneralSquare: event.target.value });
    };

    const onChangeCeilingHeight = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, ceilingHeight: event.target.value });
    };

    const onChangeBathroom = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, bathroom: event.target.value });
    };

    const onChangeKitchen = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, kitchen: event.target.value });
    };

    const onChangeGarage = (value: string) => {
      if ("garage" in values) {
        value === "yes" &&
          setValues({
            ...values,
            garage: { ...values.garage, has: value, capacity: "", square: "" },
          });
        value === "no" &&
          setValues({
            ...values,
            garage: {
              ...values.garage,
              has: value,
              capacity: value,
              square: value,
            },
          });
      }
    };

    const onChangeGarageCapacity = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      if ("garage" in values)
        setValues({
          ...values,
          garage: { ...values.garage, capacity: event.target.value },
        });
    };

    const onChangeGarageSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      if ("garage" in values)
        setValues({
          ...values,
          garage: { ...values.garage, square: event.target.value },
        });
    };

    const onChangePool = (value: string) => {
      if ("pool" in values) {
        value === "yes" &&
          setValues({ ...values, pool: { ...values.pool, has: value, square: "" } });
        value === "no" &&
          setValues({
            ...values,
            pool: { ...values.pool, has: value, square: value },
          });
      }
    };

    const onChangePoolSquare = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      if ("pool" in values)
        setValues({
          ...values,
          pool: { ...values.pool, square: event.target.value },
        });
    };
    const onChangeCottageVillage = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, cottageVillageName: event.target.value });
    };

    const onChangeLandStatus = (value: string) => {
      setValues({ ...values, landStatus: value });
    };

    const onChangeInteriorDescription = (
      event: React.ChangeEvent & { target: HTMLInputElement }
    ) => {
      setValues({ ...values, interiorDescription: event.target.value });
    };
    
    const handleNextTab = () => {
      const isValidInputs = isValidInputsGeneralTab(
        objectType,
        isValidGeneralSquare,
        isValidHouseSquare,
        isValidLivingSquare,
        isValidLand,
        isValidLandGeneralSquare,
        isValidCeilingHeight,
        isValidRooms,
        isValidBathroom,
        isValidKitchen,
        isValidGarage,
        isValidGarageCapacity,
        isValidGarageSquare,
        isValidPool,
        isValidPoolSquare,
        isValidCottageVillage,
        isValidLandStatus,
        isValidInteriorDescription,
        isAmountObjects,
        isAmountBuildings,
        isAmountFloors,
        isHeightCeilings,
        isPriceObjectMin,
        isPriceObjectMax,
        isAreaObjectMin,
        isAreaObjectMax,
        isFloors,
      );

      if (isValidInputs) {
        createObjectStore.saveGeneralTab(values, objectType);
        onNextTab && onNextTab();
      } else {
        setIsValid(isValidInputs);
      }
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title="Размеры объекта">
          {objectType === 4 && (
            <>
              {"amountObjects" in values && (
                <BaseInput
                  type="number"
                  onChange={onChangeAmountObjects}
                  label="Кол-во квартир"
                  className={s.inputSm}
                  value={values.amountObjects}
                  required={true}
                  isError={!isValid && !isAmountObjects}
                />
              )}
              {"amountBuildings" in values && (
                <BaseInput
                  type="number"
                  onChange={onChangeAmountBuildings}
                  label="Кол-во корпусов"
                  className={s.inputSm}
                  value={values.amountBuildings}
                  required={true}
                  isError={!isValid && !isAmountBuildings}
                />
              )}
              {"amountFloors" in values && (
                <BaseInput
                  type="number"
                  onChange={onChangeAmountFloors}
                  label="Кол-во этажей"
                  className={s.inputSm}
                  value={values.amountFloors}
                  required={true}
                  isError={!isValid && !isAmountFloors}
                />
              )}
            </>
          )}
          {"generalSquare" in values && (
            <BaseInput
              type="number"
              onChange={onChangeGeneralSquare}
              label="Общая площадь"
              className={s.inputSm}
              value={values.generalSquare}
              required={true}
              isError={!isValid && !isValidGeneralSquare}
              icon={<Typography className={s.iconColor}>м²</Typography>}
            />
          )}

          {"houseSquare" in values && (
            <BaseInput
              onChange={onChangeHouseSquare}
              value={values.houseSquare}
              type="number"
              required={true}
              isError={!isValid && !isValidHouseSquare}
              label="Площадь дома"
              className={s.inputSm}
              icon={<Typography className={s.iconColor}>м²</Typography>}
            />
          )}
          {"livingSquare" in values && (
            <BaseInput
              value={Number(
                values.livingSquare.toString().replaceAll(",", ".")
              )}
              type="number"
              label="Жилая площадь"
              required={true}
              isError={!isValid && !isValidLivingSquare}
              className={s.inputSm}
              onChange={onChangeLivingSquare}
              icon={<Typography className={s.iconColor}>м²</Typography>}
            />
          )}
          {"land" in values && (
            <BaseInput
              onChange={onChangeLand}
              value={values.land}
              type="number"
              label="Участок"
              required={true}
              isError={!isValid && !isValidLand}
              className={classNames(s.inputSm, s.largeIconSpace)}
              classNameWrapper={s.extraSpace}
              icon={<Typography className={s.iconColor}>соток</Typography>}
            />
          )}
          {"landGeneralSquare" in values && (
            <BaseInput
              value={values.landGeneralSquare}
              onChange={onChangeLandGeneralSquare}
              type="number"
              label="Общая площадь"
              required={true}
              isError={!isValid && !isValidLandGeneralSquare}
              className={classNames(s.inputSm, s.largeIconSpace)}
              classNameWrapper={s.extraSpace}
              icon={<Typography className={s.iconColor}>соток</Typography>}
            />
          )}
          {"ceilingHeight" in values && (
            <BaseInput
              onChange={onChangeCeilingHeight}
              value={values.ceilingHeight}
              type="number"
              required={true}
              isError={!isValid && !isValidCeilingHeight}
              label="Высота потолков"
              className={s.inputSm}
              icon={<Typography className={s.iconColor}>м</Typography>}
            />
          )}
          {"rooms" in values && (
            <CounterButtons
              required={true}
              isError={!isValid && !isValidRooms}
              className={s.extraSpace}
              label="Кол-во комнат"
              initValue={values.rooms}
              onChange={onChangeRooms}
            />
          )}
          {"isolatedInputs" in values && (
            <CounterButtons
              label="Изолированных входов"
              initValue={values.isolatedInputs}
              onChange={onChangeIsolatedInputs}
            />
          )}
        </InputsGroup>
        <div className={s.divider} />

        {objectType !== ObjectTypes.LAND && (
          <InputsGroup
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            title={
              objectType === 4
                ? "Размеры квартир"
                : "Внутренние размеры объекта"
            }
          >
            <div style={{ display: "flex", gap: "10px" }}>
              {objectType === 4 && (
                <>
                  {"areaObjectMin" in values && (
                    <BaseInput
                      type="number"
                      onChange={onChangeAreaObjectMin}
                      label="Площадь квартиры (Мин)"
                      className={s.inputSmP}
                      value={values.areaObjectMin}
                      required={true}
                      isError={!isValid && !isAreaObjectMin}
                      icon={<Typography className={s.iconColor}>м²</Typography>}
                    />
                  )}
                  {"areaObjectMax" in values && (
                    <BaseInput
                      type="number"
                      onChange={onChangeAreaObjectMax}
                      label="Площадь квартиры (Макс)"
                      className={s.inputSmP}
                      value={values.areaObjectMax}
                      required={true}
                      isError={!isValid && !isAreaObjectMax}
                      icon={<Typography className={s.iconColor}>м²</Typography>}
                    />
                  )}
                  {"heightCeilings" in values && (
                    <BaseInput
                      type="number"
                      onChange={onChangeHeightCeilings}
                      label="Высота потолков"
                      className={s.inputSm}
                      value={values.heightCeilings}
                      required={true}
                      isError={!isValid && !isHeightCeilings}
                      icon={<Typography className={s.iconColor}>м</Typography>}
                    />
                  )}
                </>
              )}
              {"bathroom" in values && (
                <BaseInput
                  type="number"
                  value={values.bathroom}
                  required={true}
                  isError={!isValid && !isValidBathroom}
                  onChange={onChangeBathroom}
                  label="Ванная комната"
                  className={s.inputSm}
                  icon={<Typography className={s.iconColor}>м²</Typography>}
                />
              )}
              {"kitchen" in values && (
                <BaseInput
                  value={values.kitchen}
                  onChange={onChangeKitchen}
                  type="number"
                  label="Кухня"
                  required={true}
                  isError={!isValid && !isValidKitchen}
                  className={s.inputSm}
                  icon={<Typography className={s.iconColor}>м²</Typography>}
                />
              )}
            </div>

            {"customRooms" in values && (
              <>
                {values.customRooms.map((room) => (
                  <BaseInput
                    key={room.value}
                    type="number"
                    label="Комната"
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                  />
                ))}
                <Typography
                  onClick={onAddRoom}
                  className={classNames(s.iconColor, s.newRoomLabel)}
                >
                  + Добавить комнату
                </Typography>
              </>
            )}

            {"garage" in values && (
              <div style={{ display: "flex", gap: "10px" }}>
                <BaseDropDown
                  value={values.garage.has}
                  required={true}
                  isError={!isValid && !isValidGarage}
                  options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                  onChange={onChangeGarage}
                  placeholder="Гараж"
                  label="Гараж"
                  className={s.inputSm}
                />

                {values.garage.has === "yes" && (
                  <>
                    <BaseInput
                      value={values.garage.capacity}
                      required={true}
                      isError={!isValid && !isValidGarageCapacity}
                      onChange={onChangeGarageCapacity}
                      type="number"
                      label="Вместимость"
                      className={s.inputSm}
                      icon={
                        <Typography className={s.iconColor}>м/м</Typography>
                      }
                    />

                    <BaseInput
                      value={values.garage.square}
                      onChange={onChangeGarageSquare}
                      type="number"
                      label="Площадь гаража"
                      required={true}
                      isError={!isValid && !isValidGarageSquare}
                      className={s.inputSm}
                      classNameWrapper={s.extraSpace}
                      icon={<Typography className={s.iconColor}>м²</Typography>}
                    />
                  </>
                )}
              </div>
            )}

            {"pool" in values && (
              <div style={{ display: "flex", gap: "10px" }}>
                <BaseDropDown
                  value={values.pool.has}
                  options={GENERAL_INFO_TAB_TOGGLE_OPTIONS}
                  onChange={onChangePool}
                  placeholder="Бассейн"
                  label="Бассейн"
                  required={true}
                  isError={!isValid && !isValidPool}
                  className={s.inputSm}
                />
                {values.pool.has === "yes" && (
                  <BaseInput
                    value={values.pool.square}
                    onChange={onChangePoolSquare}
                    type="number"
                    label="Площадь бассейна"
                    required={true}
                    isError={!isValid && !isValidPoolSquare}
                    className={s.inputSm}
                    icon={<Typography className={s.iconColor}>м²</Typography>}
                  />
                )}
              </div>
            )}
          </InputsGroup>
        )}
        {objectType === 4 && (
          <>
            <div className={s.divider} />
            <InputsGroup title="Стоимость жилья">
              {"priceObjectMin" in values && (
                <BaseInput
                  type="number"
                  onChange={onChangePriceObjectMin}
                  label="Минимальная"
                  className={s.inputSm}
                  value={values.priceObjectMin}
                  required={true}
                  isError={!isValid && !isPriceObjectMin}
                />
              )}
              {"priceObjectMax" in values && (
                <BaseInput
                  type="number"
                  onChange={onChangePriceObjectMax}
                  label="Максимальная"
                  className={s.inputSm}
                  value={values.priceObjectMax}
                  required={true}
                  isError={!isValid && !isPriceObjectMax}
                />
              )}
            </InputsGroup>
          </>
        )}
        {"cottageVillageName" in values && "landStatus" in values && (
          <>
            <InputsGroup title="Коттеджный посёлок">
              <BaseInput
                onChange={onChangeCottageVillage}
                required={true}
                isError={!isValid && !isValidCottageVillage}
                value={values.cottageVillageName}
                type="text"
                label="Название коттеджного посёлка"
                className={s.inputMd}
              />
            </InputsGroup>
            <div className={s.divider} />
            <InputsGroup title="Статус участка">
              <BaseDropDown
                required={true}
                isError={!isValid && !isValidLandStatus}
                value={values.landStatus}
                options={GENERAL_INFO_TAB_STATUS_OPTIONS}
                onChange={onChangeLandStatus}
                placeholder="Статус"
                label="Статус"
                className={s.dropdownStatus}
              />
            </InputsGroup>
          </>
        )}

        <div className={s.divider} />
        {"interiorDescription" in values && (
          <InputsGroup title="Описание интерьера">
            <BaseInput
              value={values.interiorDescription}
              onChange={onChangeInteriorDescription}
              type="text"
              label="Описание комнат"
              required={true}
              isError={!isValid && !isValidInteriorDescription}
              classNameWrapper={s.fullWidth}
            />
          </InputsGroup>
        )}
        {"floors" in values && (
          <InputsGroup title="Описание интерьера по этажам">
            <div className={s.extraSpace}>
              <CounterButtons
              required={true}
              isError={(!isValid && !isFloors) || (!isValid && values.floors.count === 0)}
                initValue={values.floors.count}
                onChange={onChangeFloors}
                label="Этажей в доме"
              />
            </div>
            <div className={s.floorInputs}>
              {values.floors.items.map((item, idx) => (
                <div key={idx} className={s.floorInputsGroup}>
                  <BaseInput
                    onChange={(e) =>
                      onChangeFloorDesc(e.target.value, item.value)
                    }
                    classNameWrapper={s.floorInput}
                    value={item.label.description}
                    type="text"
                    label={`${item.value} этаж`}
                  />
                  {!isUndefined(item.label.height) && (
                    <BaseInput
                      onChange={(event) =>
                        onChangeFloorHeight(event.target.value, item.value)
                      }
                      value={item.label.height}
                      type="number"
                      label="Высота потолка"
                      classNameWrapper={s.floorHeightInput}
                      icon={<Typography className={s.iconColor}>м²</Typography>}
                    />
                  )}
                </div>
              ))}
            </div>
          </InputsGroup>
        )}
      </ButtonPanel>
    );
  }
);

export default GeneralInfoDataTab;
