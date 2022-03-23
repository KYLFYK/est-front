import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStores } from "../../../../../hooks/useStores";
import { ObjectTypes } from "../../../../../utils/interfaces/objects";
import { BaseTextarea } from "../../../../shared/BaseTextarea/BaseTextarea";
import { getInitialStateGeneralInfoTab, TGeneralInfoState } from "../../lib";
import ButtonPanel, {
  ICreateObjectControls,
} from "../ButtonsPanel/ButtonsPanel";
import InputsGroup from "../InputsGroup/InputsGroup";
import s from "./GeneralInfoObjectTab.module.scss";

interface Props extends ICreateObjectControls {
  objectType: ObjectTypes;
}

const GeneralInfoDescriptionTab: React.FC<Props> = observer(
  ({ onNextTab, onPrevTab, objectType }) => {
    const { createObjectStore } = useStores();
    const [isValid, setIsValid] = useState<boolean>(true);
    const [values, setValues] = React.useState<TGeneralInfoState>(
      getInitialStateGeneralInfoTab(objectType, createObjectStore)
    );

    const isValidDescription = !!values.description.length;

    const onChangeDescription = (
      e: React.ChangeEvent & { target: HTMLTextAreaElement }
    ) => {
      setValues({ ...values, description: e.target.value });
    };

    const handleNextTab = () => {
      if (isValidDescription) {
        createObjectStore.saveGeneralTab(values, objectType);
        onNextTab && onNextTab();
      } else {
        setIsValid(isValidDescription);
      }
    };

    return (
      <ButtonPanel onNextTab={handleNextTab} onPrevTab={onPrevTab}>
        <InputsGroup title={"Описание"}>
          <BaseTextarea
            className={s.textarea}
            label={
              objectType === 4
                ? "Опишите сильные стороны вашего ЖК"
                : "Опишите сильные стороны вашего объекта"
            }
            value={values.description}
            onChange={onChangeDescription}
            isError={!isValidDescription && !isValid}
          />
        </InputsGroup>
      </ButtonPanel>
    );
  }
);

export default GeneralInfoDescriptionTab;
