import { ObjectTypes } from "../../utils/interfaces/objects";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const markAsDeleted: (
  id: number,
  type: ObjectTypes
) => Promise<AxiosResponse> = async (id, type) => {
  switch (type) {
    case ObjectTypes.APARTMENTS:
      return instance.patch(`apartment/${id}`, undefined, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    case ObjectTypes.HOUSE:
    case ObjectTypes.TOWNHOUSE:
      return instance.patch(`house/${id}`, undefined, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    case ObjectTypes.LAND:
      return instance.patch(`land/${id}`, undefined, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    default:
      return instance.patch(``, undefined, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
  }
};
