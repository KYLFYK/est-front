import { AxiosResponse } from "axios";
import { newInstance } from "../instance";
import { BaseResponse, IObjectParam } from "./types/response";

interface ICreateObjectApi {
  getObjectParams: () => Promise<AxiosResponse<BaseResponse<IObjectParam[]>>>;
}

export const CreateObjectApi: ICreateObjectApi = {
  getObjectParams: async () => {
    return newInstance.get("reality-object-params");
  },
};
