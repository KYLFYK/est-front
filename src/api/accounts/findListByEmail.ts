import { AxiosResponse } from "axios";
import { instance } from "../instance";

export interface IListResponse {
  id: number;
  createAt: string;
  updateAt: string;
  email: string;
  phone: string;
  markAsDelete: boolean;
  isConfirmed: boolean;
  role: string;
  customerProperty: any;
  developerProperty: any;
  agencyProperty: any;
  agentProperty: any;
  adminProperty: any;
  bankProperty: any;
}

export const findListByEmail: (
  email: string
) => Promise<AxiosResponse<IListResponse[]>> = (email) => {
  return instance.get<IListResponse[]>(`account/find-by-email/${email}`);
};
