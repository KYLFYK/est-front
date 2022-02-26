import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import MyAdsContainer from "../../../Others/MyAdsContainer/MyAdsContainer";
import { useAgentAdsStore } from "../../../../../../../../mobx/role/agent/ads/AgentAds";
import { toJS } from "mobx";
import jwt_decode from "jwt-decode";

const MyAdsActive = observer(() => {
  const adsStore = useAgentAdsStore();

  useEffect(() => {
    if (adsStore.get().loading) {
      adsStore.fetch();
    }
  }, []);

  const idOwner: any = jwt_decode(
    localStorage.getItem("accessEstatum")
      ? (localStorage.getItem("accessEstatum") as string)
      : ("123" as string)
  );

  return adsStore.get().loading ? (
    <h1>Loading...</h1>
  ) : (
    <MyAdsContainer
      objects={toJS(adsStore.initialData.data).filter(
        (el) => el.agent?.id === idOwner.id
      )}
      menu={"active"}
    />
  );
});

export default MyAdsActive;
