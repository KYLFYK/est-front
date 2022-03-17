import { instance } from "../instance";

export enum UrlEditObject {
  apartment = "apartment", // post
  house = "house", // post
  land = "land", // post
  townhouse = "townhouse", // post
  complex = "complex", // post
}

export const editObjectApi = {
  createObjectApartment: async (data: any, id: string | number) => {
    try {
      return await instance.put(`${UrlEditObject.apartment}/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectHouse: async (data: any, id: string | number) => {
    try {
      return await instance.put(`${UrlEditObject.house}/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectLand: async (data: any, id: string | number) => {
    try {
      return await instance.put(`${UrlEditObject.land}/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectTownhouse: async (data: any, id: string | number) => {
    try {
      return await instance.put(`${UrlEditObject.townhouse}/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectResComplex: async (data: any, id: string | number) => {
    try {
      return await instance.patch(`${UrlEditObject.complex}/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
};
