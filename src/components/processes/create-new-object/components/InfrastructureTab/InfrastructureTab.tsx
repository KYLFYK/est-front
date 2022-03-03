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

    const onChangeView = (value: string) => {
      if ("view" in values) {
        setValues({
          ...values,
          view:
            values.view.indexOf(value) > -1
              ? values.view.filter((el) => el !== value)
              : [...values.view, value],
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
                <SelectEstate
                  options={viewType.values.map((el) => ({
                    label: el.value,
                    value: el.id.toString(),
                  }))}
                  value={
                    values.view.length > 1
                      ? hetViewString()
                      : values.view.join(",")
                  }
                  onChange={onChangeView}
                  placeholder={
                    values.view.length > 1
                      ? hetViewString()
                      : "Выберите один или несколько"
                  }
                  multi
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
