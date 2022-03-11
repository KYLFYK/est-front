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
import {
  IRTWGuide,
  ObjectGuides,
} from "../../../../../mobx/stores/objects/GuidesStore";
import { toJS } from "mobx";

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
      if ("furnitureList" in values) {
        const checkedValues = new Set(values.furnitureList);
        if (checkedValues.has(value)) checkedValues.delete(value);
        else checkedValues.add(value);

        setValues({ ...values, furnitureList: Array.from(checkedValues) });
      }
    };

    const onChangeCounter = (value: number, valueField: any) => {
      setValues({ ...values, [valueField]: value });
    };
    const onChangeDropDown = (value: string, valueField: any) =>
      setValues({ ...values, [valueField]: value });

    const bathroomType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "bathroom"
    );

    const furnitureType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "furniture"
    );

    const complexGuides: {
      [key: string]: IRTWGuide[];
    } = {};

    guidesStore.readyToWork?.forEach((elem) => {
      if (elem.subtitle_ru) {
        complexGuides[elem.subtitle_ru] = complexGuides[elem.subtitle_ru]
          ? [...complexGuides[elem.subtitle_ru], toJS(elem)]
          : [toJS(elem)];
      }
    });

    const [guides, setGuides] = useState<{
      [key: string]: number | undefined;
    }>(
      guidesStore.readyToWork
        ? Object.fromEntries(
            guidesStore.readyToWork
              .filter((el) => el.type_en !== "objectType")
              .map((el) => [el.type_en, undefined])
          )
        : {}
    );

    const handleGuideChange = (name: string, value: string) => {
      setGuides({
        ...guides,
        [name]: Number(value),
      });
    };

    const handleNextTab = () => {
      if (objectType !== 4) {
        const isValidInputs =
          (isValidPlumbing || !bathroomType) && isValidRenovation;
        if (isValidInputs) {
          createObjectStore.saveHouseInfoTab(values, objectType);
          onNextTab && onNextTab();
        } else setIsValid(false);
      } else {
        let valid = true;

        Object.keys(guides).forEach((el) => {
          if (!guides[el]) {
            valid = false;
          }
        });

        if (valid) {
          createObjectStore.saveHouseInfoTab(
            {
              ...values,
              guides: Object.keys(guides).map((el) => guides[el] as number),
            },
            objectType
          );
          onNextTab && onNextTab();
        } else setIsValid(false);
      }
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        {objectType === 4 ? (
          <>
            {Object.keys(complexGuides).map((el) => (
              <React.Fragment key={el}>
                <InputsGroup title={el}>
                  {complexGuides[el].map((guide) => (
                    <>
                      {guides[guide.type_en] !== undefined && (
                        <BaseDropDown<string>
                          key={guide.type_en}
                          value={guides[guide.type_en]?.toString() as string}
                          className={classNames(s.dropdownSm, s.extraSpace)}
                          options={guide.values.map((el) => ({
                            label: el.value,
                            value: el.id.toString(),
                          }))}
                          onChange={(value) => {
                            handleGuideChange(guide.type_en, value);
                          }}
                          placeholder={guide.type_ru}
                          label={guide.type_ru}
                          isError={!isValid && !guides[guide.type_en]}
                          multi={guide.isMulti}
                        />
                      )}
                    </>
                  ))}
                </InputsGroup>
                <div className={s.divider} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            <InputsGroup title="Интерьер и экстерьер">
              {"bedrooms" in values && (
                <CounterButtons
                  className={s.extraSpace}
                  initValue={values.bedrooms}
                  onChange={(value) => onChangeCounter(value, "bedrooms")}
                  label="Спален в доме"
                />
              )}
              {"bathrooms" in values && (
                <CounterButtons
                  className={s.extraSpace}
                  initValue={values.bathrooms}
                  onChange={(value) => onChangeCounter(value, "bathrooms")}
                  label="Душевых в доме"
                />
              )}
              {"lavatories" in values && (
                <CounterButtons
                  className={s.extraSpace}
                  initValue={values.lavatories}
                  onChange={(value) => onChangeCounter(value, "lavatories")}
                  label="Туалет"
                />
              )}
              {bathroomType && "plumbing" in values && (
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
                  multi={bathroomType.isMulti}
                />
              )}
              {"renovation" in values && (
                <BaseDropDown
                  className={s.dropdownSm}
                  value={values.renovation}
                  options={INFO_TAB_repair_TYPE}
                  onChange={(value) => onChangeDropDown(value, "renovation")}
                  placeholder="Ремонт"
                  label="Ремонт"
                  isError={!isValid && !isValidRenovation}
                />
              )}
            </InputsGroup>
            <div className={s.divider} />
            {furnitureType && (
              <InputsGroup title="Мебель">
                {furnitureType.values.map((item) => (
                  <Checkbox
                    key={item.id}
                    value={String(item.id)}
                    className={s.checkbox}
                    isActive={
                      "furnitureList" in values
                        ? new Set(values.furnitureList).has(String(item.id))
                        : false
                    }
                    onChange={onChangeCheckbox}
                  >
                    <Typography>{item.value}</Typography>
                  </Checkbox>
                ))}
              </InputsGroup>
            )}
          </>
        )}
      </ButtonPanel>
    );
  }
);

export default HouseInfoInterierTab;
