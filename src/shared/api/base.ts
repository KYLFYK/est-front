import axios, { AxiosInstance, AxiosResponse } from "axios";

export const BASE_API_URL = 'https://estatum.f-case.ru/'

class AxiosHttpClient {
  private readonly instance: AxiosInstance

  public constructor(version: 0 | 1 = 0) {
    this.instance = axios.create({
      withCredentials: false,
      baseURL: `${BASE_API_URL}api/v${version}/`,
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  }
  public get = <T>(path: string, params ?: any, headers?: any): Promise<AxiosResponse<T>> => {
    return this.instance.get<T>(path, {params: params, headers});
  }

  public post = <T>(path: string, body: any, headers?: any): Promise<AxiosResponse<T>> => {
    return this.instance.post<T>(path, body, {headers});
  }

  public put = <T>(path: string, body: any, headers?: any): Promise<AxiosResponse<T>> => {
    return this.instance.put<T>(path, body, {headers});
  }

  public delete = <T>(path: string, headers?: any): Promise<AxiosResponse<T>> => {
    return this.instance.delete<T>(path, {headers});
  }

  public patch = <T>(path: string, body: any, headers?: any): Promise<AxiosResponse<T>> => {
    return this.instance.patch<T>(path, body, {headers});
  }
}

export default AxiosHttpClient