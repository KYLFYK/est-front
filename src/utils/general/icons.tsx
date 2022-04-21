import React from "react";
import InfrastructureAnalysis from "../../icons/Advantages/InfrastructureAnalysis";
import Mortgage from "../../icons/Advantages/Mortage";
import Tours from "../../icons/Advantages/Tours";
import AnalysisLegalPurity from "../../icons/Advantages/AnalysisLegalPurity";
import {InfrastructureAnalysisMobile} from "../../icons/Advantages/InfrastructureAnalysisMobile";
import {MortgageMobile} from "../../icons/Advantages/MortageMobile";
import {ToursMobile} from "../../icons/Advantages/ToursMobile";
import {AnalysisLegalPurityMobile} from "../../icons/Advantages/AnalysisLegalPurityMobile";
import {IconTypes} from "../interfaces/icons";
import {HouseIcon} from "../../icons/Specifications/House";
import {RestIcon} from "../../icons/Specifications/Rest";
import ChildrenPlayground from "../../icons/Specifications/FeaturesIcons/ChildrenPlayground";
import Concierge from "../../icons/Specifications/FeaturesIcons/Concierge";
import FireProtection from "../../icons/Specifications/FeaturesIcons/FireProtection";
import RelaxPlace from "../../icons/Specifications/FeaturesIcons/RelaxPlace";
import VideoSurveillance from "../../icons/Specifications/FeaturesIcons/VideoSurveillance";
import Foundation from "../../icons/Specifications/ArchitecturalPlanningSolutions/Foundation";
import Roof from "../../icons/Specifications/ArchitecturalPlanningSolutions/Roof";
import Walls from "../../icons/Specifications/ArchitecturalPlanningSolutions/Walls";
import Internet from "../../icons/Specifications/ArchitecturalPlanningSolutions/Internet";
import WatterSupply from "../../icons/Specifications/ArchitecturalPlanningSolutions/WatterSupply";
import Heating from "../../icons/Specifications/ArchitecturalPlanningSolutions/Heating";
import SewageSystem from "../../icons/Specifications/ArchitecturalPlanningSolutions/SewageSystem";
import Electricity from "../../icons/Specifications/ArchitecturalPlanningSolutions/Electricity";
import Bedrooms from "../../icons/Specifications/InteriorExterior/Bedrooms";
import Showers from "../../icons/Specifications/InteriorExterior/Showers";
import Bathroom from "../../icons/Specifications/InteriorExterior/Bathroom";
import Repair from "../../icons/Specifications/InteriorExterior/Repair";
import ParkingSpace from "../../icons/Specifications/InteriorExterior/ParkingSpace";
import Fridge from "../../icons/Specifications/InteriorExterior/Fridge";
import WashingMachine from "../../icons/Specifications/InteriorExterior/WashingMachine";
import Dishwasher from "../../icons/Specifications/InteriorExterior/Dishwasher";
import Conditioner from "../../icons/Specifications/InteriorExterior/Conditioner";
import FurnitureRooms from "../../icons/Specifications/InteriorExterior/FurnitureRooms";
import TV from "src/icons/Specifications/InteriorExterior/TV";
import ConstructionHouse from "../../icons/Specifications/ArchitecturalPlanningSolutions/ConstructionHouse";
import ConstructionFeatures1 from "../../icons/Specifications/constructionFeatures/ConstructionFeatures1";
import ConstructionFeatures2 from "../../icons/Specifications/constructionFeatures/ConstructionFeatures2";

export const searchIconByValue = (value: IconTypes | string): JSX.Element => {
  switch (value) {
    case IconTypes.MORTGAGE:
      return <Mortgage />;
    case IconTypes.INFRASTRUCTURE_ANALYSIS:
      return <InfrastructureAnalysis />;
    case IconTypes.TOURS:
      return <Tours />;
    case IconTypes.PURITY_ANALYSIS:
      return <AnalysisLegalPurity />;
    case IconTypes.MORTGAGE_MOBILE:
      return <MortgageMobile />;
    case IconTypes.INFRASTRUCTURE_ANALYSIS_MOBILE:
      return <InfrastructureAnalysisMobile />;
    case IconTypes.TOURS_MOBILE:
      return <ToursMobile />;
    case IconTypes.PURITY_ANALYSIS_MOBILE:
      return <AnalysisLegalPurityMobile />;
    case IconTypes.HOUSE_TYPE:
      return <HouseIcon />
    case IconTypes.REST:
      return <RestIcon />
    // FeaturesIcons
    case IconTypes.CHILDREN:
      return  <ChildrenPlayground/>
    case IconTypes.CONCIERGE:
      return  <Concierge/>
    case IconTypes.FIRE_PROTECTION:
      return  <FireProtection/>
    case IconTypes.RELAX_PLACE:
      return  <RelaxPlace/>
    case IconTypes.VIDEO_SURVEILLANCE:
      return  <VideoSurveillance/>

  // Архитектурно-планировочные решения ( ArchitecturalPlanningSolutions )
    case IconTypes.constructionHouse:
          return <ConstructionHouse/>
    case IconTypes.foundation:
      return  <Foundation/>
    case IconTypes.roof:
      return  <Roof/>
    case IconTypes.wall:
      return  <Walls/>
    case IconTypes.internet:
      return  <Internet/>
    case IconTypes.water_supply:
      return  <WatterSupply/>
    case IconTypes.heating:
      return  <Heating/>
    case IconTypes.sewage_system:
      return  <SewageSystem/>
    case IconTypes.electricity:
      return  <Electricity/>

    // Interior and Exterior

    case  IconTypes.bedrooms:
      return <Bedrooms/>
    case  IconTypes.showers:
      return <Showers/>
    case  IconTypes.bathroom:
      return <Bathroom/>
    case  IconTypes.repair:
      return <Repair/>
    case  IconTypes.parking_space:
      return <ParkingSpace/>

    case  IconTypes.fridge:
      return <Fridge/>
    case  IconTypes.washing_machine:
      return <WashingMachine/>
    case  IconTypes.dishwasher:
      return <Dishwasher/>
    case  IconTypes.conditioner:
      return <Conditioner/>
    case  IconTypes.furniture_rooms:
      return <FurnitureRooms/>
    case  IconTypes.TV:
      return <TV/>
      //construction features
    case  IconTypes.construction_features1:
      return <ConstructionFeatures1/>
    case  IconTypes.construction_features2:
      return <ConstructionFeatures2/>


    default:
      return <ConstructionHouse />;
  }
};
