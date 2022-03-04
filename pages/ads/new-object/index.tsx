import { NextPage } from "next";
import React, { useEffect } from "react";
import FormScreen from "../../../src/components/processes/create-new-object/FormScreen/FormScreen";
import StartScreen from "../../../src/components/processes/create-new-object/StartScreen/StartScreen";
import {
  NewObjectActionTypes,
  ObjectTypes,
} from "../../../src/utils/interfaces/objects";
import s from "./index.module.scss";
import { MainContainer } from "../../../src/components/containers/MainContainer/MainContainer";

const NewObjectPage: NextPage = () => {
  const [action, setAction] = React.useState<NewObjectActionTypes>();
  const [objectType, setObjectType] = React.useState<ObjectTypes>();

  useEffect(() => {
    const history = window ? window.location.search : undefined;

    if (history) {
      const complex = history
        .split("&")
        .filter((el) => el.indexOf("complex") > -1)[0]
        .split("=")[1];

      if (complex) {
        setAction(NewObjectActionTypes.SELL);
        setObjectType(ObjectTypes.APARTMENTS);
      }
    }
  }, []);

  return (
    <MainContainer
      className={s.wrapper}
      cabinetStyle={true}
      footerColor={"accent"}
    >
      {action !== undefined && objectType !== undefined ? (
        <FormScreen
          objectType={objectType}
          clearObjectType={() => setObjectType(undefined)}
          action={action}
        />
      ) : (
        <StartScreen
          onChooseAction={setAction}
          onChooseObjectType={setObjectType}
          choosedAction={action}
          choosedObjectType={objectType}
        />
      )}
    </MainContainer>
  );
};

export default NewObjectPage;
