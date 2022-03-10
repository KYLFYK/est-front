import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import FormScreen from "../../../src/components/processes/create-new-object/FormScreen/FormScreen";
import StartScreen from "../../../src/components/processes/create-new-object/StartScreen/StartScreen";
import {
  NewObjectActionTypes,
  ObjectTypes,
} from "../../../src/utils/interfaces/objects";
import { MainContainer } from "../../../src/components/containers/MainContainer/MainContainer";
import { useEditObject } from "../../../src/hooks/useEditObject";

import s from "./index.module.scss";

const NewObjectPage: NextPage = () => {
  const [action, setAction] = useState<NewObjectActionTypes>();
  const [objectType, setObjectType] = useState<ObjectTypes>();

  const [presets, info, resetEditState] = useEditObject(
    setAction,
    setObjectType
  );

  useEffect(() => {
    const history = window ? window.location.search : undefined;

    if (history) {
      const queryElems = history.split("&");

      const complex: string | undefined = queryElems.filter(
        (el) => el.indexOf("complex") > -1
      )
        ? queryElems
            .filter((el) => el.indexOf("complex") > -1)[0]
            ?.split("=")[1]
        : undefined;

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
        <>
          {presets.editMode ? (
            <>
              {info.loaded && info.loadedId === presets.object ? (
                <FormScreen
                  objectType={objectType}
                  clearObjectType={() => setObjectType(undefined)}
                  action={action}
                  presets={presets}
                  info={info}
                  resetEditState={resetEditState}
                />
              ) : null}
            </>
          ) : (
            <FormScreen
              objectType={objectType}
              clearObjectType={() => setObjectType(undefined)}
              action={action}
              presets={presets}
              info={info}
              resetEditState={resetEditState}
            />
          )}
        </>
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
