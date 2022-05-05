import React, { useState } from "react";
import Link from "next/link";
import HeadLine from "../../../shared/HeadLine/HeadLine";
import Card from "../Card/Card";
import s from "./Plannings.module.scss";
import { datetoQuarterFormat } from "../../../../lib/mapping/objectDates";
import PlanningFilter from "../../../../../src/components/containers/PlanningFilter/PlanningFilter";
import { DesktopOnly } from "../../Adaptive/DesktopOnly";
import { useAdaptiveContext } from "../../../../mobx/adaptive/AdaptiveProvider";
import { AdaptiveParams } from "../../../../mobx/adaptive/store";
import { MobileOnly } from "../../Adaptive/MobileOnly";
import BaseButton from "../../../shared/BaseButton/BaseButtons";

// TODO: Take types from 'model' folder, when global state gets its types

interface IObjectPlanningItem {
  file: { id: number; url: string }[];
  price: number;
  name: string;
  buildingNumber: number;
  deadline: string;
  floor: number;
  id: number;
}

interface Props {
  FilterComponent: JSX.Element;
  planningList?: IObjectPlanningItem[];
}

const Planning: React.FC<Props> = ({ planningList }) => {
  const { resolution } = useAdaptiveContext();

  const [sort, setSort] = useState("default");

  return (
    <div className={s.container}>
      <HeadLine title="Квартиры и аппартаменты">
        <DesktopOnly>
          <div className={s.filterWrapper}>
            <PlanningFilter sort={sort} setSort={setSort} />
          </div>
        </DesktopOnly>
        <div className={s.content}>
          {planningList &&
            planningList.map(
              (
                { file, price, name, buildingNumber, deadline, floor, id },
                idx
              ) =>
                resolution <= AdaptiveParams.KT2 ? (
                  <React.Fragment key={id}>
                    {idx <= 1 && (
                      <Link href={`/apartment/${id}`}>
                        <a className={s.link}>
                          <Card
                            key={idx}
                            image={file ? file[0]?.url : ""}
                            price={price}
                            title={name}
                            housing={buildingNumber}
                            deadline={datetoQuarterFormat(deadline)}
                            floor={floor}
                          />
                        </a>
                      </Link>
                    )}
                  </React.Fragment>
                ) : (
                  <Link href={`/apartment/${id}`} key={id}>
                    <a className={s.link}>
                      <Card
                        key={idx}
                        image={file ? file[0]?.url : ""}
                        price={price}
                        title={name}
                        housing={buildingNumber}
                        deadline={datetoQuarterFormat(deadline)}
                        floor={floor}
                      />
                    </a>
                  </Link>
                )
            )}
        </div>
        <MobileOnly>
          <div className={s.mobileButtonWrapper}>
            <BaseButton className={s.button} type="primary">
              Показать объявления
            </BaseButton>
          </div>
        </MobileOnly>
      </HeadLine>
    </div>
  );
};

export default Planning;
