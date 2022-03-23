import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea";
import {
  getInitialStateInfrastructureTab,
  isValidInputsInfrastructureTab,
  TInfrastructureState,
} from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import { ObjectGuides } from "../../../../../mobx/stores/objects/GuidesStore";
import { SelectEstate } from "../../../../shared/SelectEstate/SelectEstate";

import s from "./InfrastructureTab.module.scss";
import { NewDropDown } from "../../../../shared/BaseDropDown/NewDropDown";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
}

const InfrastructureTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const guidesStore = ObjectGuides;
    const { createObjectStore } = useStores();
    const [values, setValues] = useState<TInfrastructureState>(
      getInitialStateInfrastructureTab(objectType, createObjectStore)
    );
    const [isValid, setIsValid] = useState<boolean>(true);

    const isValidDescription =
      "description" in values && !!values.description.length;
    const isValidView = "view" in values && !!values.view.length;
    const isValidInfrastructure =
      "infrastructure" in values && !!values.infrastructure;

    const onChangeDescription = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValues({ ...values, description: event.target.value });
    };

    const onChangeInfrastructure = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setValues({ ...values, infrastructure: event.target.value });
    };

    const onChangeView = (value: number[]) => {
      if ("view" in values) {
        setValues({
          ...values,
          view: value.map((el) => el.toString()),
        });
      }
    };

    const handleNextTab = () => {
      const isValidInputs = isValidInputsInfrastructureTab(
        objectType,
        isValidDescription,
        isValidView,
        isValidInfrastructure
      );
      if (isValidInputs) {
        createObjectStore.saveInfrastructureTab(values, objectType);
        onNextTab && onNextTab();
      } else setIsValid(false);
    };

    const viewType = guidesStore.readyToWork?.find(
      (el) => el.type_en === "window"
    );

    const hetViewString: () => string = () => {
      if ("view" in values && viewType) {
        return values.view
          .map((el) =>
            viewType.values.find((x) => x.id === Number(el))
              ? viewType.values.find((x) => x.id === Number(el))?.value
              : ""
          )
          .join(", ");
      }

      return "";
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title="Описание">
          {objectType === 4 && "infrastructure" in values && (
            <BaseTextarea
              value={values.infrastructure}
              onChange={onChangeInfrastructure}
              label="Опишите особенности в инфраструктуре вашего ЖК"
              className={s.textarea}
              isError={!isValid && !isValidInfrastructure}
            />
          )}
          {"description" in values && (
            <BaseTextarea
              value={values.description}
              onChange={onChangeDescription}
              label="Опишите особенности в инфраструктуре вашего объекта"
              className={s.textarea}
              isError={!isValid && !isValidDescription}
            />
          )}
        </InputsGroup>
        {"view" in values && (
          <>
            <div className={s.divider} />
            {viewType && (
              <InputsGroup title="Вид из окон">
                <NewDropDown<number[]>
                  options={viewType.values.map((el) => ({
                    label: el.value,
                    value: el.id,
                  }))}
                  value={values.view.map((el) => Number(el))}
                  onChange={onChangeView}
                  placeholder={
                    values.view.length > 0
                      ? hetViewString()
                      : "Выберите один или несколько"
                  }
                  multi={viewType.isMulti}
                />
              </InputsGroup>
            )}
          </>
        )}
      </ButtonPanel>
    );
  }
);

export default InfrastructureTab;
