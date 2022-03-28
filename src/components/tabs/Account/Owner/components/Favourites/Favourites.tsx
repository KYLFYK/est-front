import React, { FC } from "react";
import Typography from "../../../../../shared/Typography/Typography";
import { SearchOffice } from "../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../shared/FilterSearch/FilterSearch";
import CardOwner, { ObjectInfoType } from "./CardOwner";
import { useStoreOwnerFavorites } from "../../../../../../mobx/role/owner/favorites/OwnerFavorites";
import { GlassIcon } from "../../../../../../icons/InputIcon/GlassIcon";

type FavouritesType = {
  count?: number;
};

type CardOwnerTypeMoc = {
  url: string;
  id: string;
  image: string;
  objectInfo: ObjectInfoType;
};

const Favourites: FC<FavouritesType> = ({ count = 0 }) => {
  const store = useStoreOwnerFavorites();
  return (
    <div style={{ padding: "20px 20px" }}>
      <Typography weight={"bold"}>Мои избранные объявление</Typography>
      <SearchOffice
        type={"owner"}
        inputIcon={<GlassIcon />}
        inputIconPlacement={"right"}
        placeholder={"Поиск..."}
      />
      <FilterSearch type={"owner"} />
      <Typography color={"tertiary"}>
        {count > 0 && count + " объявления"}
      </Typography>
      {store.initialData.favourites.map((object, index) => {
        return (
          <CardOwner
            key={index}
            id={object.id}
            url={object.url}
            objectInfo={object.objectInfo}
            image={object.image}
          />
        );
      })}
    </div>
  );
};

export default Favourites;
