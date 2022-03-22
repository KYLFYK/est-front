import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import MyAdsContainer from "../../../Others/MyAdsContainer/MyAdsContainer";
import { useAgentAdsStore } from "../../../../../../../../mobx/role/agent/ads/AgentAds";
import jwt_decode from "jwt-decode";
import { Loader } from "src/components/shared/Loader/Loader";
import { ObjectTypes } from "../../../../../../../../utils/interfaces/objects";

const MyAdsActive = observer(() => {
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

  const handleDeleteObject = async (id: number, type: ObjectTypes) => {
    await adsStore.markAsDeleted(id, type);
    forceUpdate(!force);
  };

  return adsStore.get().loading ? (
    <Loader />
  ) : (
    <MyAdsContainer
      objects={adsStore.initialData.data.filter(
        (el) => el.agent?.id === idOwner.id && !el.markAsDelete
      )}
      menu={"active"}
      deleteObject={handleDeleteObject}
    />
  );
});

export default MyAdsActive;
