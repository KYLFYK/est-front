import type { NextPage } from "next";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { MainContainer } from "src/components/containers/MainContainer/MainContainer";
import { Breadcrumbs } from "../../src/components/shared/Breadcrumbs/Breadcrumbs";
import { Filter } from "../../src/components/containers/Filter/Filter";
import CardContainer from "../../src/components/containers/CardContainer/CardContainer";
import { ToggleButtons } from "../../src/components/containers/CardContainer/ToggleButtons";
import Map from "../../src/components/containers/Maps/MapFinder/index";
import { mapData } from "../../src/components/containers/Maps/MapFinder/config";
import { useSearchStore } from "../../src/mobx/stores/SearchStore/SearchStore";
import s from "src/components/containers/Maps/MapFinder/styles.module.scss";
import { MobileOnly } from "src/components/containers/Adaptive/MobileOnly";
import { DesktopOnly } from "src/components/containers/Adaptive/DesktopOnly";

const city = ["Москва", "Крым", "Сочи"];

const personalAccount = [
  { title: "Личный кабинет", href: "/User", message: 0 },
  { title: "Избранное", href: "/User", message: 0 },
  { title: "Сохраненные поиски", href: "/User", message: 0 },
  { title: "Сообщения", href: "/User", message: 12 },
  { title: "Уведомления", href: "/User", message: 3 },
  { title: "Мои объекты", href: "/User", message: 0 },
  { title: "Проверка объекта", href: "/User", message: 0 },
];

const center = { lat: 45.16, lng: 36.9 };

const Finder: NextPage = observer(() => {
  const searchStore = useSearchStore();

  useEffect(() => {
    if (window.innerWidth >= 576) {
      //searchStore.activeFilter = true
    } else {
      searchStore.onWidthBrowser(window.innerWidth);
    }
  }, []);

  return (
    <MainContainer
      keywords={"Поиск"}
      title={"Поиск"}
      city={city}
      personalAccount={personalAccount}
    >
      <MobileOnly>
        {searchStore.views.filter && (
          <div style={{ margin: "20px 10px 0 10px" }}>
            <Filter
              location={"search"}
              onFilter={() => searchStore.setView("grid")}
            />
          </div>
        )}
        <div
          className={s.positionAdaptive}
          style={{
            gridTemplateColumns: searchStore.views.map ? "1fr 1fr" : "1fr",
          }}
        >
          {!searchStore.views.filter && (
            <ToggleButtons
              onActiveFilter={() => searchStore.setView("filter")}
            />
          )}
          {searchStore.views.map && (
            <div
              className={!searchStore.views.map ? s.cardAdaptive : ""}
              style={{
                display: searchStore.views.map ? "flex" : "none",
                marginTop: searchStore.views.map ? "10px" : "",
              }}
            >
              <Map
                mapData={mapData}
                location={"finder"}
                center={center}
                view={searchStore.views}
              />
            </div>
          )}
          {searchStore.views.grid && (
            <CardContainer
              mapData={mapData}
              onActiveFilter={() => searchStore.setView("filter")}
              forViewObject={searchStore.views.map ? "none" : ""}
            />
          )}
        </div>
      </MobileOnly>

      <DesktopOnly>
        <Breadcrumbs />
        <div style={{ margin: "20px 0 0 0" }}>
          <Filter location={"search"} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: searchStore.views.map ? "1fr 1fr" : "1fr",
            width: "100%",
            margin: "20px auto 0 auto",
            maxWidth: "1440px",
          }}
        >
          <div style={{ display: searchStore.views.map ? "flex" : "none" }}>
            <Map
              mapData={mapData}
              location={"finder"}
              center={center}
              view={searchStore.views}
            />
          </div>
          <CardContainer mapData={mapData} forViewObject={""} />
        </div>
      </DesktopOnly>
    </MainContainer>
  );
});

export default Finder;
