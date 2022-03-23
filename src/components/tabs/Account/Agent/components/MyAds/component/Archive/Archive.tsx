import React, { useEffect, useState } from "react";
import MyAdsContainer from "../../../Others/MyAdsContainer/MyAdsContainer";
import { useAgentAdsStore } from "../../../../../../../../mobx/role/agent/ads/AgentAds";
import jwt_decode from "jwt-decode";
import { ObjectTypes } from "../../../../../../../../utils/interfaces/objects";
import { Loader } from "../../../../../../../shared/Loader/Loader";

const Archive = () => {
  const adsStore = useAgentAdsStore();

  const [force, forceUpdate] = useState(false);

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

  const handleRestoreObject = async (id: number, type: ObjectTypes) => {
    await adsStore.reestablishObj(id, type);
    forceUpdate(!force);
  };

  return adsStore.get().loading ? (
    <Loader />
  ) : (
    <MyAdsContainer
      objects={adsStore.initialData.data.filter(
        (el) => el.agent?.id === idOwner.id && el.markAsDelete
      )}
      menu={"archive"}
      restoreObject={handleRestoreObject}
    />
  );
};

export default Archive;
