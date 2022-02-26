import classNames from "classnames";
import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseDropDown } from "../../../../shared/BaseDropDown/BaseDropDown";
import CounterButtons from "../../../../shared/CounterButtons/CounterButtons";
import Typography from "../../../../shared/Typography/Typography";
import { Checkbox } from "../../../../widget/Login/registration/checkbox/Checkbox";
import { INFO_TAB_repair_TYPE } from "../../config";
import { getInitialStateInfoTab, TInfoState } from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./HouseInfoTab.module.scss";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";

interface Props extends ICreateObjectControls {
  objectType: Exclude<ObjectTypes, ObjectTypes.LAND>;
}

const HouseInfoInterierTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const guidesStore = ObjectGuides;

    const { createObjectStore } = useStores();
    const [values, setValues] = useState<TInfoState>(
      getInitialStateInfoTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);

    const isValidPlumbing = "plumbing" in values && !!values.plumbing.length;
    const isValidRenovation =
      "renovation" in values && !!values.renovation.length;
    const onChangeCheckbox = (value: string) => {
      const checkedValues = new Set(values.furnitureList);
      if (checkedValues.has(value)) checkedValues.delete(value);
      else checkedValues.add(value);

      setValues({ ...values, furnitureList: Array.from(checkedValues) });
    };

    const onChangeCounter = (value: number, valueField: keyof TInfoState) => {
      setValues({ ...values, [valueField]: value });
    };
    const onChangeDropDown = (value: string, valueField: keyof TInfoState) =>
      setValues({ ...values, [valueField]: value });

    const handleNextTab = () => {
      const isValidInputs = isValidPlumbing && isValidRenovation;
      if (isValidInputs) {
        createObjectStore.saveHouseInfoTab(values, objectType);
        onNextTab && onNextTab();
      } else setIsValid(false);
    };

    const bathroomType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "bathroom"
    );

    const furnitureType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "furniture"
    );

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title="Интерьер и экстерьер">
          <CounterButtons
            className={s.extraSpace}
            initValue={values.bedrooms}
            onChange={(value) => onChangeCounter(value, "bedrooms")}
            label="Спален в доме"
          />
          <CounterButtons
            className={s.extraSpace}
            initValue={values.bathrooms}
            onChange={(value) => onChangeCounter(value, "bathrooms")}
            label="Душевых в доме"
          />
          <CounterButtons
            className={s.extraSpace}
            initValue={values.lavatories}
            onChange={(value) => onChangeCounter(value, "lavatories")}
            label="Туалет"
          />
          {bathroomType && (
            <BaseDropDown
              value={values.plumbing}
              className={classNames(s.dropdownSm, s.extraSpace)}
              options={bathroomType.values.map((el) => ({
                label: el.value,
                value: el.id.toString(),
              }))}
              onChange={(value) => onChangeDropDown(value, "plumbing")}
              placeholder="Сан. узел"
              label="Сан. узел"
              isError={!isValid && !isValidPlumbing}
            />
          )}
          <BaseDropDown
            className={s.dropdownSm}
            value={values.renovation}
            options={INFO_TAB_repair_TYPE}
            onChange={(value) => onChangeDropDown(value, "renovation")}
            placeholder="Ремонт"
            label="Ремонт"
            isError={!isValid && !isValidRenovation}
          />
        </InputsGroup>
        <div className={s.divider} />
        {furnitureType && (
          <InputsGroup title="Мебель">
            {furnitureType.values.map((item) => (
              <Checkbox
                key={item.id}
                value={String(item.id)}
                className={s.checkbox}
                isActive={new Set(values.furnitureList).has(String(item.id))}
                onChange={onChangeCheckbox}
              >
                <Typography>{item.value}</Typography>
              </Checkbox>
            ))}
          </InputsGroup>
        )}
      </ButtonPanel>
    );
  }
);

export default HouseInfoInterierTab;
