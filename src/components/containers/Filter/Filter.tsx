import React, { ChangeEvent, useState } from "react";
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
  FILTER_APARTMENT_TYPE_OPTIONS,
  FILTER_PRIVATE_HOUSE_OPTIONS,
  FILTER_FLOORS_OPTIONS,
  FILTER_HOUSE_TYPE_OPTIONS,
  TOGGLE_BUTTONS_OPTIONS_APART,
  TOGGLE_BUTTONS_OPTIONS_APART_MOBILE,
  TOGGLE_BUTTONS_OPTIONS_HOUSE,
  FILTER_IRB_OPTIONS,
  FILTER_LAND_SPECS_OPTIONS,
  FILTER_HOUSE_TYPES,
  FILTER_FORHOUSE_TYPE_OPTIONS,
} from "./config";
import { IOption } from "../../../utils/interfaces/general";
import {REG_EXP_CONFIG} from '../../../lib/regexp/regexp';
import { SearchStore, useSearchStore } from "src/mobx/stores/SearchStore/SearchStore";
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
  React.useEffect(() => {
    if (
      searchStore.getFilter() &&
      searchStore.getFilter()["type__slug"] === "townhouse"
    ) {
      searchStore.setPrivateType("house");
      searchStore.setPrivateType(FILTER_PRIVATE_HOUSE_OPTIONS[1].value);
    }
    searchStore.setParams(paramsForGet(router.query));
    if (location === "search") {
      searchStore.setFilter(router.query);
      searchStore.getFilter()["advert_type"] &&
        breadcrumbs.addBreadCrumbs(
          FILTER_ACTIONS_OPTIONS.filter(
            (s: any) => searchStore.getFilter()["advert_type"] === s.value
          )[0].label,
          1
        );
      searchStore.getFilter()["type__slug"] &&
        breadcrumbs.addBreadCrumbs(
          FILTER_HOUSE_TYPES.filter(
            (s: any) => searchStore.getFilter()["type__slug"] === s.value
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
  const onChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    searchStore.setSearchField(e.target.value)
  }
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
  const onChooseHouseType = (value: string) => {
    searchStore.setForHouseType(value);
  };
  const onChooseImprovment = (value: string) => {
    searchStore.setImprovment(value);
  };

  const MultiChoice = (prop: string, config: IOption[]) => {
    const selectedImprovmentSet = new Set(searchStore.getFilter()[prop]?.filter((f: any) => f !== ""));
    return Array.from(selectedImprovmentSet).map((si: any) => config.filter((s: any) => si === s.value)[0].label).join(", ");
  };
  
  return (
    <div className={s.wrapper}>
      <div className={s.firstLine}>
      <InputsUnion className={s.actionDropdownUnion}>
        <BaseDropDown
          options={FILTER_ACTIONS_OPTIONS}
          value={searchStore.getFilter()["advert_type"]}
          onChange={onChangeActionType}
          placeholder={FILTER_ACTIONS_OPTIONS[0].label}
          className={s.dropdownAction}
          location={"unionDropdown"}
        />
        <BaseDropDown
          options={FILTER_HOUSE_TYPE_OPTIONS}
          value={searchStore.getFilter()["type__slug"]}
          onChange={onChangeHouseType}
          placeholder={FILTER_HOUSE_TYPE_OPTIONS[0].label}
          className={s.dropdownHouseType}
          location={"unionDropdown"}
        />
      </InputsUnion>

      {searchStore.getFilter()["type__slug"] === "house" && (
        <BaseDropDown
          options={FILTER_PRIVATE_HOUSE_OPTIONS}
          value={searchStore.getFilter()["privateType__in"]}
          onChange={onChangePrivateType}
          className={s.dropdownPrivateType}
          placeholder={
            searchStore.getFilter()['privateType__in']?.length > 0
              ? MultiChoice('privateType__in', FILTER_PRIVATE_HOUSE_OPTIONS)
              : "Тип дома"
          }
          multi
        />
      )}

      {searchStore.getFilter()["type__slug"] === "house" && (
        <div style={{marginRight: '8px', width: '200px'}}>
        <CompareInput
          location="search"
          classNameInputFrom={s.floorInputFrom}
          classNameInputTo={s.floorInputTo}
          placeholderFrom="Этажей от"
          placeholderTo="до"
          valueFrom={searchStore.getFilter()['params__reality_object_param__slug": "Floors", "params__value_int__gte']}
          valueTo={searchStore.getFilter()['params__reality_object_param__slug": "Floors", "params__value_int__lte']}
          onChangeFrom={onChangePrivateFloorFrom}
          onChangeTo={onChangePrivateFloorTo}
        />
        </div>
      )}

      {searchStore.getFilter()["type__slug"] === "apartment" && (
        <div className={s.mainToggleButtonWrap}>
          <ToggleButtons
            classNameButton={s.toggleButton}
            items={TOGGLE_BUTTONS_OPTIONS_APART}
            activeValue={searchStore.getFilter()["rooms-in-apartment__in"]}
            onChange={onChangePlanningApart}
            multiple
          />
        </div>
      )}
      {searchStore.getFilter()["type__slug"] === "apartment" && (
        <div className={s.lowResToggleButtonWrap}>
          <ToggleButtons
            classNameButton={s.toggleButton}
            items={TOGGLE_BUTTONS_OPTIONS_APART_MOBILE}
            activeValue={searchStore.getFilter()["rooms-in-apartment__in"]}
            onChange={onChangePlanningApart}
            multiple
          />
        </div>
      )}

      {<BaseInput 
        value={searchStore.getFilter()['name__contains']} 
        type="text" placeholder="Поиск..." 
        className={searchStore.getFilter()["type__slug"] === "land" ? s.searchInputLand : s.searchInput} 
        onChange={onChangeSearchValue}/>
      }
      </div>
      <div className={s.secondLine}>
      <InputsUnion className={s.inputsUnion}>
        <CompareInput
          location="search"
          classNameInputFrom={s.priceInputFrom}
          classNameInputTo={s.priceInputTo}
          placeholderFrom="Цена от"
          placeholderTo="до"
          valueFrom={searchStore.getFilter()["price__gte"]}
          valueTo={searchStore.getFilter()["price__lte"]}
          onChangeFrom={onChangePriceFrom}
          onChangeTo={onChangePriceTo}
          Icon={<span>₽</span>}
        />
        <CompareInput
          location="search"
          classNameInputFrom={s.squareInputFrom}
          classNameInputTo={s.squareInputTo}
          placeholderFrom="Площадь от"
          placeholderTo="до"
          valueFrom={searchStore.getFilter()['params__reality_object_param__slug": "Total_area", "params__value_int__gte']}
          valueTo={searchStore.getFilter()['params__reality_object_param__slug": "Total_area", "params__value_int__lte']}
          onChangeFrom={onChangeSquareFrom}
          onChangeTo={onChangeSquareTo}
          Icon={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </InputsUnion>

      <div className={s.lowResContainer}>
        <CompareInput
          location="search"
          classNameInputFrom={s.priceInputFrom}
          classNameInputTo={s.priceInputTo}
          placeholderFrom="Цена от"
          placeholderTo="до"
          valueFrom={searchStore.getFilter()["price__gte"]}
          valueTo={searchStore.getFilter()["price__lte"]}
          onChangeFrom={onChangePriceFrom}
          onChangeTo={onChangePriceTo}
          Icon={<span>₽</span>}
        />
        <div style={{height: '10px'}}></div>
        <CompareInput
          location="search"
          classNameInputFrom={s.squareInputFrom}
          classNameInputTo={s.squareInputTo}
          placeholderFrom="Площадь от"
          placeholderTo="до"
          valueFrom={searchStore.getFilter()['params__reality_object_param__slug": "Total_area", "params__value_int__gte']}
          valueTo={searchStore.getFilter()['params__reality_object_param__slug": "Total_area", "params__value_int__lte']}
          onChangeFrom={onChangeSquareFrom}
          onChangeTo={onChangeSquareTo}
          Icon={
            <span>
              м<sup>2</sup>
            </span>
          }
        />
      </div>

      {searchStore.getFilter()["type__slug"] === "apartment" && (
        <BaseDropDown
          options={FILTER_APARTMENT_TYPE_OPTIONS}
          value={searchStore.getFilter()["building-type"]}
          onChange={onChangeBuildingType}
          placeholder={searchStore.getFilter()["building-type"]}
          className={s.dropdownBuildingType}
        />
      )}
      {searchStore.getFilter()["type__slug"] === "house" && (
        <BaseDropDown
          options={FILTER_FORHOUSE_TYPE_OPTIONS}
          value={searchStore.getFilter()['houseType__in']}
          onChange={onChooseHouseType}
          className={s.dropdownBuildingType}
          placeholder={
            searchStore.getFilter()['houseType__in']?.length > 0
              ? MultiChoice('houseType__in', FILTER_FORHOUSE_TYPE_OPTIONS)
              : "Тип дома"
          }
          multi
        />
      )}


      {searchStore.getFilter()["type__slug"] === "apartment" && (
        <BaseDropDown
          options={FILTER_FLOORS_OPTIONS}
          value={searchStore.getFilter()["floor__in"]}
          onChange={onChangeFloors}
          className={s.dropdownFloor}
          placeholder={
            searchStore.getFilter()["floor__in"]?.length > 0
              ? MultiChoice("floor__in", FILTER_FLOORS_OPTIONS)
              : "Выбрать этаж"
          }
          multi
        />
      )}

      {searchStore.getFilter()["type__slug"] === "land" && (
        <BaseDropDown
          options={FILTER_IRB_OPTIONS}
          value={searchStore.getFilter()['params__reality_object_param__slug": "Buildings_on_the_site", "params__value_text']}
          onChange={onChangeIrb}
          placeholder={FILTER_IRB_OPTIONS[0].label}
          className={s.dropdownIRB}
        />
      )}

      {searchStore.getFilter()["type__slug"] !== "apartment" && (
        <BaseDropDown
          options={FILTER_LAND_SPECS_OPTIONS}
          value={searchStore.getFilter()["params__reality_object_param__slug__in"]}
          onChange={onChooseImprovment}
          placeholder={
            searchStore.getFilter()["params__reality_object_param__slug__in"]?.length > 0
              ? MultiChoice("params__reality_object_param__slug__in", FILTER_LAND_SPECS_OPTIONS)
              : "Выбрать благоустроенность"
          }
          multi
          className={s.dropdownImprovement}
        />
      )}

      {location === "start" || location === "search" ? (
        <BaseButton className={s.submit} type="primary" onClick={onSubmit}>
          Показать объявления
        </BaseButton>
      ) : (
        <BaseButton className={s.submit} type="primary" onClick={onSubmit}>
          Искать
        </BaseButton>
      )}
      </div>
    </div>
  );
});
