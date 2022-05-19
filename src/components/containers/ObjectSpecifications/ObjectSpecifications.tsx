import React from "react";
import { searchIconByValue } from "../../../utils/general/icons";
import { IOption } from "../../../utils/interfaces/general";
import { Advantage } from "../../shared/Advantage/Advantage";
import HeadLine from "../../shared/HeadLine/HeadLine";
import Typography from "../../shared/Typography/Typography";
import s from "./ObjectSpecifications.module.scss";

export interface ISpecificationItem {
  title: string;
  text?: string;
}

export interface ISpecificationsList {
  subtitle: string;
  specificationsItems: IOption<ISpecificationItem>[];
}

interface Props {
  specificationsLists: ISpecificationsList[];
  title: string;
}

const ObjectSpecifications: React.FC<Props> = ({
  specificationsLists,
  title,
}) => {
  return (
    <div className={s.container}>
      <HeadLine title={title}>
        {specificationsLists &&
          specificationsLists.map((specList, idx) => {
            // для исключения пустого поля заголовка
            return (
              specList.specificationsItems[0].label.title !== "" && (
                <div key={idx}>
                  <Typography weight="bold" className={s.subTitle}>
                    {specList.subtitle}
                  </Typography>
                  <div className={s.specsList}>
                    {specList.specificationsItems &&
                      specList.specificationsItems.map((spec, index) => (
                        <Advantage
                          variant="secondary"
                          text={spec.label.text}
                          title={spec.label.title}
                          key={index}
                          classWrapper={s.margin}
                        >
                          {searchIconByValue(spec.value as string)}
                        </Advantage>
                      ))}
                  </div>
                </div>
              )
            );
          })}
      </HeadLine>
    </div>
  );
};

export default ObjectSpecifications;
