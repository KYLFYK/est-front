import { ObjectTypes } from "../../utils/interfaces/objects";
import { AxiosResponse } from "axios";
import { instance } from "../instance";

export const reestablishObject: (
  id: number,
  type: ObjectTypes
) => Promise<AxiosResponse> = async (id, type) => {
  switch (type) {
    case ObjectTypes.APARTMENTS:
      return instance.put(
        `apartment/${id}`,
        {
          markAsDelete: false,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );
    case ObjectTypes.HOUSE:
    case ObjectTypes.TOWNHOUSE:
      return instance.put(
        `house/${id}`,
        {
          markAsDelete: false,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );
    case ObjectTypes.LAND:
      return instance.put(
        `land/${id}`,
        {
          markAsDelete: false,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );
    default:
      return instance.put(
        ``,
        {
          markAsDelete: false,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
          },
        }
      );
  }
};
