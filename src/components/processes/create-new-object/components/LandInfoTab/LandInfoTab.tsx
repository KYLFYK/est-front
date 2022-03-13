import { observer } from "mobx-react-lite";
import React from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ICreateLandInfoTab } from "../../../../../mobx/types/CreateObjectStoresTypes/CreateLandStoreType";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import { INFO_TAB_HOUSE_TYPE } from "../../config";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./LandInfoTab.module.scss";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";
import { NewDropDown } from "../../../../shared/BaseDropDown/NewDropDown";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes.LAND;
}

const LandInfoTab: React.FC<Props> = observer(({ onNextTab, onPrevTab }) => {
  const { createObjectStore } = useStores();
  const guidesStore = ObjectGuides;

  const [values, setValues] = React.useState<ICreateLandInfoTab>(
    createObjectStore.land.info
  );
  const [isValid, setIsValid] = React.useState<boolean>(true);

  const isValidWaterPipe = "waterPipe" in values && !!values.waterPipe.length;
  const isValidHeating = "heating" in values && !!values.heating.length;
  const isValidSewerage = "sewerage" in values && !!values.sewerage.length;
  const isValidBuilding = "buildings" in values && !!values.buildings.length;

  const onChangeDropDown = (
    value: string,
    valueField: keyof ICreateLandInfoTab
  ) => setValues({ ...values, [valueField]: value });

  const handleNextTab = () => {
    const isValidInputs =
      isValidWaterPipe && isValidHeating && isValidSewerage && isValidBuilding;
    if (isValidInputs) {
      createObjectStore.saveLandInfoTab(values);
      onNextTab && onNextTab();
    } else {
      setIsValid(false);
    }
  };

  const waterType = guidesStore.readyToWork?.find(
    (el) => el.type_en === "water"
  );

  const heatingType = guidesStore.readyToWork?.find(
    (el) => el.type_en === "heating"
  );

  const sewerageType = guidesStore.readyToWork?.find(
    (el) => el.type_en === "sewerage"
  );

  return (
    <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
      <InputsGroup title="Инженерные коммуникации">
        {waterType && (
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
            isError={!isValid && !isValidWaterPipe}
            multi={waterType.isMulti}
          />
        )}
        {heatingType && (
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
            isError={!isValid && !isValidHeating}
            multi={heatingType.isMulti}
          />
        )}
        {sewerageType && (
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
            isError={!isValid && !isValidSewerage}
            multi={sewerageType.isMulti}
          />
        )}
      </InputsGroup>
      <div className={s.divider} />
      <InputsGroup title="Строения">
        <NewDropDown
          value={values.buildings}
          className={s.dropdownMd}
          label="Выберите одно или несколько"
          options={INFO_TAB_HOUSE_TYPE}
          placeholder="Выберите одно или несколько"
          onChange={(value) => onChangeDropDown(value, "buildings")}
          isError={!isValid && !isValidBuilding}
        />
      </InputsGroup>
    </ButtonPanel>
  );
});

export default LandInfoTab;
