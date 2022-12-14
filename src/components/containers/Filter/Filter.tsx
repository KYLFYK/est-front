import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { ISearchParamsModel } from "../../../utils/interfaces/search";
import { BaseDropDown } from "../../shared/BaseDropDown/BaseDropDown";
import { BaseInput } from "../../shared/BaseInput/Input";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { CompareInput } from "../../shared/CompareInput/CompareInput";
import InputsUnion from "../../shared/InputsUnion/InputsUnion";
import { ToggleButtons } from "../../shared/ToggleButtons/ToggleButtons";
import {
  FILTER_ACTIONS_OPTIONS,
  FILTER_BUILDING_TYPE_OPTIONS,
  FILTER_PRIVATE_HOUSE_OPTIONS,
  FILTER_FLOORS_OPTIONS,
  FILTER_HOUSE_TYPE_OPTIONS,
  TOGGLE_BUTTONS_OPTIONS_APART,
  TOGGLE_BUTTONS_OPTIONS_APART_MOBILE,
  TOGGLE_BUTTONS_OPTIONS_HOUSE,
  FILTER_IRB_OPTIONS,
  FILTER_LAND_SPECS_OPTIONS,
  FILTER_HOUSE_TYPES,
} from "./config";
import {REG_EXP_CONFIG} from '../../../lib/regexp/regexp';
import { useSearchStore } from "src/mobx/stores/SearchStore/SearchStore";
import { useBreadcrumbsStore } from "src/mobx/stores/BreadcrumbsStore/BreadcrumbsStore";
import s from "./Filter.module.scss";
import { paramsForGet } from "../../../lib/params/params";

interface Props {
  location?: "start" | "search";
  onFilter?: ()=>void
}

export const Filter: React.FC<Props> = observer(({ location, onFilter }) => {

  const router = useRouter();
  const searchStore = useSearchStore();
  const breadcrumbs = useBreadcrumbsStore();
  const [width, setWidth]=useState<number>(1280)

  React.useEffect(() => {
    setWidth(window.innerWidth)
  },[])
  console.log(searchStore.getFilter())
  React.useEffect(() => {
    if (
      searchStore.getFilter() &&
      searchStore.getFilter()["object-type"] === "townhouse"
    ) {
      searchStore.setPrivateType("house");
      searchStore.setPrivateType(FILTER_PRIVATE_HOUSE_OPTIONS[1].value);
    }
    searchStore.setParams(paramsForGet(router.query));
    if (location === "search") {
      searchStore.setFilter(router.query);
      searchStore.getFilter()["order-type"] &&
        breadcrumbs.addBreadCrumbs(
          FILTER_ACTIONS_OPTIONS.filter(
            (s: any) => searchStore.getFilter()["order-type"] === s.value
          )[0].label,
          1
        );
      searchStore.getFilter()["object-type"] &&
        breadcrumbs.addBreadCrumbs(
          FILTER_HOUSE_TYPES.filter(
            (s: any) => searchStore.getFilter()["object-type"] === s.value
          )[0].label,
          2
        );
    }
  }, []);
  
  const onSubmit = () => {
    if (location === "start") {
      router.push({
        pathname: "/search",
        query: paramsForGet(searchStore.getFilter()),
      });
      searchStore.setParams(paramsForGet(searchStore.getFilter()));
      searchStore.fetch();
    }
    if (location === "search") {
      router.replace(
        {
          pathname: "/search",
          query: paramsForGet(searchStore.getFilter()),
        },
        undefined,
        {}
      );
      searchStore.setParams(paramsForGet(searchStore.getFilter()));
      searchStore.fetch();
    }
    if(width<576){
      onFilter && onFilter()
    }
  };
  const onChangeActionType = (value: string) => {
    searchStore.setOrderType(value);
    breadcrumbs.addBreadCrumbs(
      FILTER_ACTIONS_OPTIONS.filter((s: any) => value === s.value)[0].label,
      1
    );
  };
  const onChangeHouseType = (value: string) => {
    searchStore.setHouseType(value);
    breadcrumbs.addBreadCrumbs(
      FILTER_HOUSE_TYPES.filter((s: any) => value === s.value)[0].label,
      2
    );
  };
  const onChangeFloors = (value: string) => {
    searchStore.setFloors(value);
  };
  const onChangePlanningApart = (value: string) => {
    searchStore.setRoomsApart(value);
  };
  const onChangePlanningHouse = (value: string) => {
    searchStore.setRoomsHouse(value);
  };
  const onChangeBuildingType = (value: string) => {
    searchStore.setBuildingType(value);
  };
  const onChangePriceFrom = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setPriceFrom(value);
  };
  const onChangePriceTo = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setPriceTo(value);
  };
  const onChangeSquareFrom = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setSquareFrom(value);
  };
  const onChangeSquareTo = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setSquareTo(value);
  };
  /*const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValues({...values, searchValue: e.target.value})
    }*/
  const onChangePrivateType = (value: string) => {
    searchStore.setPrivateType(value);
    breadcrumbs.addBreadCrumbs(
      FILTER_HOUSE_TYPES.filter((s: any) => value === s.value)[0].label,
      2
    );
  };
  const onChangePrivateFloorFrom = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setPrivateFloorFrom(value);
  };
  const onChangePrivateFloorTo = (value: string) => {
    (value.match(REG_EXP_CONFIG.integer) || value === '') && searchStore.setPrivateFloorTo(value);
  };
  const onChangeIrb = (value: string) => {
    searchStore.setIRB(value);
  };
  const onChooseImprovment = (value: string) => {
    searchStore.setImprovment(value);
  };

  const MultiChoiceBenefits = () => {
    const selectedImprovmentSet = new Set(
      searchStore
        .getFilter()
        ["benefit"]?.split(",")
        .filter((f: any) => f !== "")
    );
    return Array.from(selectedImprovmentSet)
      .map(
        (si: any) =>
          FILTER_LAND_SPECS_OPTIONS.filter((s: any) => si === s.value)[0].label
      )
      .join(", ");
  };

  return (
    <div className={s.wrapper}>
      <div className={s.firstLine}>
      <InputsUnion className={s.actionDropdownUnion}>
        <BaseDropDown
          options={FILTER_ACTIONS_OPTIONS}
          value={searchStore.getFilter()["order-type"]}
          onChange={onChangeActionType}
          placeholder={FILTER_ACTIONS_OPTIONS[0].label}
          className={s.dropdownAction}
          location={"unionDropdown"}
        />
        <BaseDropDown
          options={FILTER_HOUSE_TYPE_OPTIONS}
          value={searchStore.getFilter()["object-type"]}
          onChange={onChangeHouseType}
          placeholder={FILTER_HOUSE_TYPE_OPTIONS[0].label}
          className={s.dropdownHouseType}
          location={"unionDropdown"}
        />
      </InputsUnion>

      {searchStore.getFilter()["object-type"] === "house" && (
        <BaseDropDown
          options={FILTER_PRIVATE_HOUSE_OPTIONS}
          value={searchStore.getFilter()["privateType"]}
          onChange={onChangePrivateType}
          placeholder={FILTER_PRIVATE_HOUSE_OPTIONS[0].label}
          className={s.dropdownPrivateType}
        />
      )}

      {searchStore.getFilter()["object-type"] === "house" && (
        <div style={{marginRight: '8px', width: '200px'}}>
        <CompareInput
          location="search"
          classNameInputFrom={s.floorInputFrom}
          classNameInputTo={s.floorInputTo}
          placeholderFrom="???????????? ????"
          placeholderTo="????"
          valueFrom={searchStore.getFilter()["floor-from"]}
          valueTo={searchStore.getFilter()["floor-to"]}
          onChangeFrom={onChangePrivateFloorFrom}
          onChangeTo={onChangePrivateFloorTo}
        />
        </div>
      )}

      {searchStore.getFilter()["object-type"] === "apartment" && (
        <div className={s.mainToggleButtonWrap}>
          <ToggleButtons
            classNameButton={s.toggleButton}
            items={TOGGLE_BUTTONS_OPTIONS_APART}
            activeValue={searchStore.getFilter()["rooms-in-apartment"]}
            onChange={onChangePlanningApart}
            multiple
          />
        </div>
      )}

      {searchStore.getFilter()["object-type"] === "apartment" && (
        <div className={s.lowResToggleButtonWrap}>
          <ToggleButtons
            classNameButton={s.toggleButton}
            items={TOGGLE_BUTTONS_OPTIONS_APART_MOBILE}
            activeValue={searchStore.getFilter()["rooms-in-apartment"]}
            onChange={onChangePlanningApart}
            multiple
          />
        </div>
      )}

      {/*(searchStore.getFilter()["object-type"] === "house" ||
        searchStore.getFilter()["object-type"] === "townhouse") && (
        <ToggleButtons
          title={"????????????"}
          classNameButton={s.toggleButton}
          items={TOGGLE_BUTTONS_OPTIONS_HOUSE}
          activeValue={searchStore.getFilter()["rooms-in-house"]}
          onChange={onChangePlanningHouse}
          multiple
        />
        )*/}

      {<BaseInput type="text" placeholder="??????????..." className={searchStore.getFilter()["object-type"] === "land" ? s.searchInputLand : s.searchInput} onChange={() => {} /*onChangeSearchValue*/}/>}
      </div>
      <div className={s.secondLine}>
      <InputsUnion className={s.inputsUnion}>
        <CompareInput
          location="search"
          classNameInputFrom={s.priceInputFrom}
          classNameInputTo={s.priceInputTo}
          placeholderFrom="???????? ????"
          placeholderTo="????"
          valueFrom={searchStore.getFilter()["price-from"]}
          valueTo={searchStore.getFilter()["price-to"]}
          onChangeFrom={onChangePriceFrom}
          onChangeTo={onChangePriceTo}
          Icon={<span>???</span>}
        />
        <CompareInput
          location="search"
          classNameInputFrom={s.squareInputFrom}
          classNameInputTo={s.squareInputTo}
          placeholderFrom="?????????????? ????"
          placeholderTo="????"
          valueFrom={searchStore.getFilter()["square-from"]}
          valueTo={searchStore.getFilter()["square-to"]}
          onChangeFrom={onChangeSquareFrom}
          onChangeTo={onChangeSquareTo}
          Icon={
            <span>
              ??<sup>2</sup>
            </span>
          }
        />
      </InputsUnion>

      <div className={s.lowResContainer}>
        <CompareInput
          location="search"
          classNameInputFrom={s.priceInputFrom}
          classNameInputTo={s.priceInputTo}
          placeholderFrom="???????? ????"
          placeholderTo="????"
          valueFrom={searchStore.getFilter()["price-from"]}
          valueTo={searchStore.getFilter()["price-to"]}
          onChangeFrom={onChangePriceFrom}
          onChangeTo={onChangePriceTo}
          Icon={<span>???</span>}
        />
        <div style={{height: '10px'}}></div>
        <CompareInput
          location="search"
          classNameInputFrom={s.squareInputFrom}
          classNameInputTo={s.squareInputTo}
          placeholderFrom="?????????????? ????"
          placeholderTo="????"
          valueFrom={searchStore.getFilter()["square-from"]}
          valueTo={searchStore.getFilter()["square-to"]}
          onChangeFrom={onChangeSquareFrom}
          onChangeTo={onChangeSquareTo}
          Icon={
            <span>
              ??<sup>2</sup>
            </span>
          }
        />
      </div>

      {searchStore.getFilter()["object-type"] !== "land" && (
        <BaseDropDown
          options={FILTER_BUILDING_TYPE_OPTIONS}
          value={searchStore.getFilter()["building-type"]}
          onChange={onChangeBuildingType}
          placeholder={searchStore.getFilter()["building-type"]}
          className={s.dropdownBuildingType}
        />
      )}

      {searchStore.getFilter()["object-type"] === "apartment" && (
        <BaseDropDown
          options={FILTER_FLOORS_OPTIONS}
          value={searchStore.getFilter().floor}
          onChange={onChangeFloors}
          placeholder="?????????????? ????????"
          className={s.dropdownFloor}
        />
      )}

      {searchStore.getFilter()["object-type"] === "land" && (
        <BaseDropDown
          options={FILTER_IRB_OPTIONS}
          value={searchStore.getFilter()["building"]}
          onChange={onChangeIrb}
          placeholder="?????????????? c ?????? ?????? ??????"
          className={s.dropdownIRB}
        />
      )}

      {searchStore.getFilter()["object-type"] !== "apartment" && (
        <BaseDropDown
          options={FILTER_LAND_SPECS_OPTIONS}
          value={searchStore.getFilter()["benefit"]}
          onChange={onChooseImprovment}
          placeholder={
            searchStore.getFilter()["benefit"]
              ? MultiChoiceBenefits()
              : "?????????????? ??????????????????????????????????"
          }
          multi
          className={s.dropdownImprovement}
        />
      )}

      {location === "start" || location === "search" ? (
        <BaseButton className={s.submit} type="primary" onClick={onSubmit}>
          ???????????????? ????????????????????
        </BaseButton>
      ) : (
        <BaseButton className={s.submit} type="primary" onClick={onSubmit}>
          ????????????
        </BaseButton>
      )}
      </div>
    </div>
  );
});
