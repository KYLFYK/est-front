import React from "react";
import { SearchOffice } from "../../../../../../containers/SearchOffice/SearchOffice";
import FilterSearch from "../../../../../../shared/FilterSearch/FilterSearch";
import CardObject from "../../../../../../shared/CardObject/CardObject";
import css from "./MyObjectActive.module.scss";
import LineV6 from "../../../../../../shared/CardObject/Lines/LineV6";
import LineV7 from "../../../../../../shared/CardObject/Lines/LineV7";
import ParamsColumn from "../../../../../../shared/ParamsColumn/ParamsColumn";
import EnumerationColumn from "../../../../../../shared/EnumerationColumn/EnumerationColumn";
import Typography from "../../../../../../shared/Typography/Typography";
import { useStoreOwnerMyObjects } from "../../../../../../../mobx/role/owner/myObject/OwnerMyObject";
import { GlassIcon } from "../../../../../../../icons/InputIcon/GlassIcon";
import Scroll from "src/components/shared/Scroll/Scroll";

const MyObjectActive = () => {
  const store = useStoreOwnerMyObjects();
  return (
    <div style={{ padding: "0px 20px" }}>
      <SearchOffice
        type={"active"}
        inputIcon={<GlassIcon />}
        inputIconPlacement={"right"}
        placeholder={"Поиск..."}
      />
      <FilterSearch />
        <Scroll height={'450'}>
          {store.initialData.objects_active.map((object) => (
            <div key={object.id} className={css.borderCard}>
              <CardObject img={object.img} className={css.padding}>
                <LineV6
                  id={object.id}
                  onDelete={(id) => ""}
                  onEdit={(id) => ""}
                  nameObject={object.nameObject}
                  totalArea={object.totalArea}
                  dateUpdate={object.dateUpdate}
                />
                <LineV7 datePublish={object.datePublish} address={object.address} />
                <EnumerationColumn>
                  <div className={css.df_jc}>
                    <div style={{ display: "flex" }}>
                      {object.params.map((param, index) => (
                        <ParamsColumn
                          key={index}
                          title={param.title}
                          value={param.value}
                        />
                      ))}
                    </div>
                    <div className={css.cursor}>
                      <Typography color={"nude"}>Продвинуть</Typography>
                    </div>
                  </div>
                </EnumerationColumn>
              </CardObject>
            </div>
          ))}
        </Scroll>
    </div>
  );
};

export default MyObjectActive;
