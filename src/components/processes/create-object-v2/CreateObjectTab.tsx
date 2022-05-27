import React, { FC } from "react";
import InputsGroup from "../create-new-object/components/InputsGroup/InputsGroup";
import { BaseInput } from "../../shared/BaseInput/Input";
import s from "../create-new-object/components/AboutObjectTab/AboutObject.module.scss";
import ButtonPanel from "../create-new-object/components/ButtonsPanel/ButtonsPanel";
import { ISubSection } from "../../../api-new/create-object/types/store-types";

interface Props {
  handleNext: () => void;
  handlePrev: () => void;
  isImageTab?: boolean;
  subSection: ISubSection;
}

export const CreateObjectTab: FC<Props> = ({
  handleNext,
  isImageTab,
  handlePrev,
  subSection,
}) => {
  return (
    <div>
      <ButtonPanel onNextTab={handleNext} onPrevTab={handlePrev}>
        {subSection.groups.map((group) => (
          <InputsGroup
            title={group.name ? group.name : "Объект"}
            key={group.slug}
          >
            {group.subGroups.map((subGroup, index) => (
              <React.Fragment key={index}>
                {subGroup.fields.map((field) => (
                  <BaseInput
                    key={field.slug}
                    label={field.name}
                    className={s.inputXl}
                    type="text"
                    value={field.defaultValue}
                    onChange={(e) => {
                      console.log(e);
                    }}
                    required={field.admin_required}
                    isError={false}
                    name={field.slug}
                  />
                ))}
              </React.Fragment>
            ))}
          </InputsGroup>
        ))}
      </ButtonPanel>
    </div>
  );
};
