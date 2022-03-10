import { useCallback, useEffect, useReducer } from "react";
import { NewObjectActionTypes, ObjectTypes } from "../utils/interfaces/objects";
import { instance } from "../api/instance";
import { AxiosResponse } from "axios";

export interface IEditInfo {
  editMode: boolean;
  object?: number;
  type?: ObjectTypes;
}

interface IAction {
  type: "UPDATE_PRESETS" | "LOAD_OBJECT" | "ERROR_ON_LOAD" | "RESET";
  payload?: any;
}

export interface IInfoLoaded {
  loaded: boolean;
  object: any;
  loadError: boolean;
  loadedId: number;
}

export interface IEditState {
  presets: IEditInfo;
  info: IInfoLoaded;
}

const initialState: IEditState = {
  presets: {
    editMode: false,
    object: undefined,
    type: undefined,
  },
  info: {
    loaded: false,
    object: null,
    loadError: false,
    loadedId: 99999,
  },
};

const loadApartments: (id: string | number) => Promise<AxiosResponse> = async (
  id
) => {
  return await instance.get(`apartment/${id}`);
};

const loadHouse: (id: string | number) => Promise<AxiosResponse> = async (
  id
) => {
  return await instance.get(`house/${id}`);
};

const loadComplex: (id: string | number) => Promise<AxiosResponse> = async (
  id
) => {
  return await instance.get(`complex/${id}`);
};

const loadLand: (id: string | number) => Promise<AxiosResponse> = async (
  id
) => {
  return await instance.get(`land/${id}`);
};

const reducer: (state: IEditState, action: IAction) => IEditState = (
  state,
  action
) => {
  switch (action.type) {
    case "UPDATE_PRESETS":
      return {
        ...state,
        presets: action.payload,
      };
    case "LOAD_OBJECT":
      return {
        ...state,
        info: {
          ...state.info,
          loaded: true,
          loadError: false,
          loadedId: action.payload.id,
          object: action.payload.object,
        },
      };
    case "ERROR_ON_LOAD":
      return {
        ...state,
        info: {
          ...state.info,
          loadError: true,
        },
      };
    case "RESET":
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export const useEditObject: (
  setAction?: (newState: NewObjectActionTypes) => void,
  setObjectType?: (newState: ObjectTypes) => void
) => [IEditInfo, IInfoLoaded, () => void] = (setAction, setObjectType) => {
  const [editState, dispatch] = useReducer<
    (state: IEditState, action: IAction) => IEditState
  >(reducer, initialState);

  const resetData = () => {
    console.log("reset");
    dispatch({ type: "RESET" });
  };

  const loadObject = useCallback(async () => {
    if (
      editState.presets.object &&
      editState.presets.editMode &&
      editState.presets.type !== undefined
    ) {
      switch (editState.presets.type) {
        case ObjectTypes.APARTMENTS:
          return loadApartments(editState.presets.object);
        case ObjectTypes.TOWNHOUSE:
        case ObjectTypes.HOUSE:
          return loadHouse(editState.presets.object);
        case ObjectTypes.RESCOMPLEX:
          return loadComplex(editState.presets.object);
        case ObjectTypes.LAND:
          return loadLand(editState.presets.object);
      }
    }
  }, [editState.presets]);

  useEffect(() => {
    const history = window ? window.location.search : undefined;

    if (history) {
      const queryElems = history.split("&");

      const mode = queryElems
        .filter((el) => el.indexOf("mode") > -1)[0]
        ?.split("=")[1];

      const objectId = queryElems
        .filter((el) => el.indexOf("object") > -1)[0]
        ?.split("=")[1];

      const objectType = queryElems
        .filter((el) => el.indexOf("type") > -1)[0]
        ?.split("=")[1];

      if (mode && objectId && objectType && mode === "edit") {
        dispatch({
          type: "UPDATE_PRESETS",
          payload: {
            editMode: true,
            object: objectId ? Number(objectId) : undefined,
            type: Number(objectType) as ObjectTypes | undefined,
          },
        });

        if (setAction && setObjectType) {
          switch (objectType) {
            case "0":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.APARTMENTS);
              break;
            case "1":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.HOUSE);
              break;
            case "2":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.TOWNHOUSE);
              break;
            case "3":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.LAND);
              break;
            case "4":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.RESCOMPLEX);
              break;
            case "5":
              setAction(NewObjectActionTypes.SELL);
              setObjectType(ObjectTypes.VILLAGE);
              break;
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    if (
      editState.info.loadedId !== editState.presets.object ||
      (!editState.info.loaded && !editState.info.loadError)
    ) {
      loadObject()
        .then((r) => {
          if (r) {
            dispatch({
              type: "LOAD_OBJECT",
              payload: {
                id: r.data.object_id,
                object: r.data,
              },
            });
          }
        })
        .catch(() => {
          dispatch({
            type: "ERROR_ON_LOAD",
          });
        });
    }
  }, [editState, loadObject]);

  return [editState.presets, editState.info, resetData];
};
