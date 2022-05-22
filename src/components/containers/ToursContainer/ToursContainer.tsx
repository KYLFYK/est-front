import VerticalTabs from "../../shared/VerticalTabs/VerticalTabs";
import React, { FC } from "react";
import { ThreeDTour } from "./Tours/ThreeDTour/ThreeDTour";
import { VRTour } from "./Tours/VRTour/VRTour";
import s from "./ToursContainer.module.scss";
import HeadLine from "src/components/shared/HeadLine/HeadLine";

type ToursContainerType = {
  // link?:boolean
  Online_tour?: {
    threeD_tour: {
      url: string;
    };
    vr_tour: {
      url: string;
    };
  };
};

const ToursContainer: FC<ToursContainerType> = ({ Online_tour }) => {
  return (
    <div className={s.container}>
      <HeadLine title={"Онлайн-тур"} className={s.headLine}>
        <VerticalTabs
          link={false}
          classNameBody={s.body}
          classNameMenu={s.menu}
          classNameInfo={s.info}
          className={s.padding}
          tabs={[
            Online_tour?.threeD_tour?.url && {
              title: "3D тур",
              Component: (
                <ThreeDTour url={Online_tour && Online_tour.threeD_tour.url} />
              ),
            },
            Online_tour?.vr_tour?.url && {
              title: "VR тур",
              Component: (
                <VRTour url={Online_tour && Online_tour.vr_tour.url} />
              ),
            },
          ]}
        />
      </HeadLine>
    </div>
  );
};

export default ToursContainer;
