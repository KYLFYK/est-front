import { instance } from "../instance";

export enum UrlCreateObject {
  apartment = "/apartment", // post
  house = "/house", // post
  land = "/land", // post
  townhouse = "/townhouse", // post
  complex = "/complex", // post
}

export const createObjectAPI = {
  createObjectApartment: async (data: any) => {
    console.log('data', data)
    try {
      return await instance.post(`${UrlCreateObject.apartment}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectHouse: async (data: any) => {
    try {
      return await instance.post(`${UrlCreateObject.house}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectLand: async (data: any) => {
    try {
      return await instance.post(`${UrlCreateObject.land}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectTownhouse: async (data: any) => {
    try {
      return await instance.post(`${UrlCreateObject.townhouse}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });
    } catch (e: any) {
      alert("Error");
      return e;
    }
  },
  createObjectResComplex: async (data: any) => {
    try {
      return await instance.post(`${UrlCreateObject.complex}`, data, {
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
