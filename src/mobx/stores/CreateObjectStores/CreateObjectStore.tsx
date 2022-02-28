import { action, flow, makeObservable, observable } from "mobx";
import { INFO_TAB_HOUSE_FURNITURE } from "../../../components/processes/create-new-object/config";
import {
  TAboutTabState,
  TGeneralInfoState,
  TInfoState,
  TInfrastructureState,
  TLegalPurityTabState,
} from "../../../components/processes/create-new-object/lib";
import { IOption } from "../../../utils/interfaces/general";
import { ObjectTypes } from "../../../utils/interfaces/objects";
import {
  ICreateApartmentAboutTab,
  ICreateApartsGeneralInfo,
  ICreateApartsInfoTab,
  ICreateApartsInfrastructure,
  ICreateApartsLegalPurity,
  ICreateObjectAparts,
} from "../../types/CreateObjectStoresTypes/CreateApartmentStoreType";
import {
  ICreateHouseAboutTab,
  ICreateHouseGeneralInfo,
  ICreateHouseInfoTab,
  ICreateHouseInfrastructure,
  ICreateHouseLegalPurity,
  ICreateObjectHouse,
} from "../../types/CreateObjectStoresTypes/CreateHouseStoreType";
import {
  ICreateLandAboutTab,
  ICreateLandGeneralInfo,
  ICreateLandInfoTab,
  ICreateLandInfrastructure,
  ICreateLandLegalPurity,
  ICreateObjectLand,
} from "../../types/CreateObjectStoresTypes/CreateLandStoreType";
import { ICreateObject } from "../../types/CreateObjectStoresTypes/CreateObjectStoreType";
import {
  ICreateObjectTownhouse,
  ICreateTownhouseAboutTab,
  ICreateTownhouseGeneralInfo,
  ICreateTownhouseInfoTab,
  ICreateTownhouseInfrastructure,
  ICreateTownhouseLegalPurity,
} from "../../types/CreateObjectStoresTypes/CreateTownhouseStoreType";
import CreateApartmentStore from "./CreateApartmentStore";
import CreateHouseStore from "./CreateHouseStore";
import CreateLandStore from "./CreateLandStore";
import CreateTownhouseStore from "./CreateTownhouseStore";
import { createObjectAPI } from "../../../api/createObjects/createObject";
import jwt_decode from "jwt-decode";
import { IObjType } from "../../../components/tabs/Account/Agent/components/Others/MyAdsContainer/MyAdsContainer";

class CreateObjectStore implements ICreateObject {
  apartment: CreateApartmentStore = new CreateApartmentStore();
  townhouse: CreateTownhouseStore = new CreateTownhouseStore();
  land: CreateLandStore = new CreateLandStore();
  house: CreateHouseStore = new CreateHouseStore();
  objType: IObjType = "sale";

  resetFields() {
    this.apartment = new CreateApartmentStore();
    this.townhouse = new CreateTownhouseStore();
    this.land = new CreateLandStore();
    this.house = new CreateHouseStore();
    this.objType = "sale";
  }

  saveAboutTab(data: TAboutTabState, objectType: ObjectTypes) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.about = data as ICreateApartmentAboutTab;
        break;
      case ObjectTypes.HOUSE:
        this.house.about = data as ICreateHouseAboutTab;
        break;
      case ObjectTypes.TOWNHOUSE:
        this.townhouse.about = data as ICreateTownhouseAboutTab;
        break;
      case ObjectTypes.LAND:
        this.land.about = data as ICreateLandAboutTab;
        break;
      default:
        break;
    }
  }

  saveGeneralTab(data: TGeneralInfoState, objectType: ObjectTypes) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.generalInfo = data as ICreateApartsGeneralInfo;
        break;
      case ObjectTypes.HOUSE:
        this.house.generalInfo = data as ICreateHouseGeneralInfo;
        break;
      case ObjectTypes.TOWNHOUSE:
        this.townhouse.generalInfo = data as ICreateTownhouseGeneralInfo;
        break;
      case ObjectTypes.LAND:
        this.land.generalInfo = data as ICreateLandGeneralInfo;
        break;
      default:
        break;
    }
  }

  saveInfrastructureTab(data: TInfrastructureState, objectType: ObjectTypes) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.infrastructure = data as ICreateApartsInfrastructure;
        break;
      case ObjectTypes.HOUSE:
        this.house.infrastructure = data as ICreateHouseInfrastructure;
        break;
      case ObjectTypes.TOWNHOUSE:
        this.townhouse.infrastructure = data as ICreateTownhouseInfrastructure;
        break;
      case ObjectTypes.LAND:
        this.land.infrastructure = data as ICreateLandInfrastructure;
        break;
      default:
        break;
    }
  }

  saveHouseInfoTab(
    data: TInfoState,
    objectType: Exclude<ObjectTypes, ObjectTypes.LAND>
  ) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.info = data as ICreateApartsInfoTab;
        break;
      case ObjectTypes.HOUSE:
        this.house.info = data as ICreateHouseInfoTab;
        break;
      case ObjectTypes.TOWNHOUSE:
        this.townhouse.info = data as ICreateTownhouseInfoTab;
        break;
      default:
        break;
    }
  }

  saveLandInfoTab(data: ICreateLandInfoTab) {
    this.land.info = data;
  }

  saveLegalPurityTab(data: TLegalPurityTabState, objectType: ObjectTypes) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.legalPurity = data as ICreateApartsLegalPurity;
        break;
      case ObjectTypes.HOUSE:
        this.house.legalPurity = data as ICreateHouseLegalPurity;
        break;
      case ObjectTypes.TOWNHOUSE:
        this.townhouse.legalPurity = data as ICreateTownhouseLegalPurity;
        break;
      case ObjectTypes.LAND:
        this.land.legalPurity = data as ICreateLandLegalPurity;
        break;
      default:
        break;
    }
  }

  setObjType(type: IObjType) {
    this.objType = type;
  }

  getObjType() {
    return this.objType;
  }

  // Fake request method for assigning options list in store in the future
  *getFurnitureList(): Generator<Promise<IOption[]>, IOption[], IOption[]> {
    const fakeRequest = () =>
      new Promise<IOption[]>((res) => res(INFO_TAB_HOUSE_FURNITURE));
    return yield fakeRequest();
  }

  // Fake request method for sending data and receiving response in the future
  async sendObjectData(
    data:
      | ICreateObjectHouse
      | ICreateObjectLand
      | ICreateObjectTownhouse
      | ICreateObjectAparts,
    objectType: ObjectTypes
  ): Promise<string | undefined> {
    const idOwner: any = jwt_decode(
      localStorage.getItem("accessEstatum")
        ? (localStorage.getItem("accessEstatum") as string)
        : "123"
    );

    if (objectType === 0) {
      const newData: any = data;

      const guides = [];
      const owners = [];

      if ("furnitureList" in data.info) {
        guides.push(...data.info.furnitureList.map((el) => Number(el)));
      }

      if (newData.legalPurity.previousFounder.firstFounderName) {
        owners.push(newData.legalPurity.previousFounder.firstFounderName);
      }
      if (newData.legalPurity.previousFounder.secondFouderName) {
        owners.push(newData.legalPurity.previousFounder.secondFouderName);
      }

      if (newData.about.type) {
        guides.push(Number(newData.about.type));
      }
      if (newData.infrastructure.view.length > 0) {
        guides.push(
          ...newData.infrastructure.view.map((el: string) => Number(el))
        );
      }
      if (newData.info.construction) {
        guides.push(Number(newData.info.construction));
      }
      if (newData.info.groundwork) {
        guides.push(Number(newData.info.groundwork));
      }
      if (newData.info.roof) {
        guides.push(Number(newData.info.roof));
      }
      if (newData.info.wall) {
        guides.push(Number(newData.info.wall));
      }
      if (newData.info.water) {
        guides.push(Number(newData.info.water));
      }
      if (newData.info.heating) {
        guides.push(Number(newData.info.heating));
      }
      if (newData.info.sewerage) {
        guides.push(Number(newData.info.sewerage));
      }
      if (newData.info.electricity) {
        guides.push(Number(newData.info.electricity));
      }
      if (newData.info.parking) {
        guides.push(Number(newData.info.parking));
      }

      const apartmentData = {
        name: newData.about.name,
        objectType: this.getObjType(),
        description: newData.generalInfo.description,
        address: newData.about.address,
        postcode: String(newData.about.index),
        longitude: "31.45",
        latitude: "31.45",
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        owner: idOwner.id,
        status: 1,
        price: newData.about.cost,
        complex: 1,
        legalPurity: {
          address: newData.legalPurity.realEstateRegister.address,
          areaValue: Number(
            newData.legalPurity.realEstateRegister.generalSquare
          ),
          areaUnits: "м2",
          cadastalNumber:
            newData.legalPurity.realEstateRegister.cadastralNumber,
          cadastralPrice: Number(
            newData.legalPurity.realEstateRegister.cadastralCost
          ),
          currentOwnerName: newData.legalPurity.currentFounder.firstFounderName,
          currentOwnerStartDate:
            newData.legalPurity.currentFounder.ownershipFrom,
          floor: 1,
          previewOwners: {
            owners: owners,
            startDate: newData.legalPurity.previousFounder.ownershipFrom,
            finishDate: newData.legalPurity.previousFounder.ownershipTo,
          },
          encumbrances: [
            {
              title: "На дом наложен арест",
              status: false,
              description: null,
            },
            {
              title: "Записей об аренде не найдено",
              status: false,
              description: null,
            },
          ],
          recomendations: [
            {
              title: "Дом в собственности менее 5 лет",
              description:
                "При продаже продавец скорее всего должен будет заплатить налог с её продажи",
            },
          ],
        },
        guides: guides,
        files: [
          {
            fileName: "string",
            mimeType: "string",
            size: "string",
            url: "string",
          },
        ],
        property: {
          floor: newData.about.floor,
          totalFloor: newData.about.floorsAmmount,
          area: Number(newData.generalInfo.generalSquare),
          livingArea: Number(newData.generalInfo.livingSquare),
          bathroomArea: Number(newData.generalInfo.bathroom),
          kitchenArea: Number(newData.generalInfo.kitchen),
          roomsArea: newData.generalInfo.customRooms.map((el: any) =>
            Number(el.value)
          ),
          amountBathrooms: 1,
          amountBedrooms: 1,
          amountShowers: 1,
          buildingNumber: 1,
          heightCeilings: 3.3,
          deadline: "2022-02-25T17:53:38.800Z",
          interior: "string",
          infrastructure: "string",
          rooms: "one",
          threeD: "https://www.youtube.com/embed/Ke3qyQYNob4",
          vr: "https://3d-tur.ru/010/",
          constructionFeatures: [
            {
              title: newData.generalInfo.interiorDescription,
              value: "foundation",
            },
          ],
        },
      };

      try {
        const res = await createObjectAPI.createObjectApartment(apartmentData);
        console.log("response apartment", res);
        return res;
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }
    if (objectType === 1 || objectType === 2) {
      const newHouse: any = data;

      const guides = [];
      const owners = [];

      if ("furnitureList" in data.info) {
        guides.push(...data.info.furnitureList.map((el) => Number(el)));
      }

      if (newHouse.legalPurity.previousFounder.firstFounderName) {
        owners.push(newHouse.legalPurity.previousFounder.firstFounderName);
      }
      if (newHouse.legalPurity.previousFounder.secondFouderName) {
        owners.push(newHouse.legalPurity.previousFounder.secondFouderName);
      }

      if (newHouse.about.type) {
        guides.push(Number(newHouse.about.type));
      }
      if (newHouse.infrastructure.view.length > 0) {
        guides.push(
          ...newHouse.infrastructure.view.map((el: string) => Number(el))
        );
      }
      if (newHouse.info.construction) {
        guides.push(Number(newHouse.info.construction));
      }
      if (newHouse.info.groundwork) {
        guides.push(Number(newHouse.info.groundwork));
      }
      if (newHouse.info.roof) {
        guides.push(Number(newHouse.info.roof));
      }
      if (newHouse.info.wall) {
        guides.push(Number(newHouse.info.wall));
      }
      if (newHouse.info.water) {
        guides.push(Number(newHouse.info.water));
      }
      if (newHouse.info.heating) {
        guides.push(Number(newHouse.info.heating));
      }
      if (newHouse.info.sewerage) {
        guides.push(Number(newHouse.info.sewerage));
      }
      if (newHouse.info.electricity) {
        guides.push(Number(newHouse.info.electricity));
      }
      if (newHouse.info.parking) {
        guides.push(Number(newHouse.info.parking));
      }
      if (newHouse.info.internet) {
        guides.push(Number(newHouse.info.internet));
      }

      const houseObject = {
        name: newHouse.about.name,
        objectType: this.getObjType(),
        description: newHouse.generalInfo.description,
        address: newHouse.about.address,
        postcode: String(newHouse.about.index),
        longitude: "31.45",
        latitude: "31.45",
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        owner: idOwner.id,
        status: 1,
        price: newHouse.about.cost,
        complex: 1,
        legalPurity: {
          address: newHouse.legalPurity.realEstateRegister.address,
          areaValue: Number(
            newHouse.legalPurity.realEstateRegister.generalSquare
          ),
          areaUnits: "м2",
          cadastalNumber:
            newHouse.legalPurity.realEstateRegister.cadastralNumber,
          cadastralPrice: Number(
            newHouse.legalPurity.realEstateRegister.cadastralCost
          ),
          currentOwnerName:
            newHouse.legalPurity.currentFounder.firstFounderName,
          currentOwnerStartDate:
            newHouse.legalPurity.currentFounder.ownershipFrom,
          floor: 1,
          previewOwners: {
            owners: owners,
            startDate: newHouse.legalPurity.previousFounder.ownershipFrom,
            finishDate: newHouse.legalPurity.previousFounder.ownershipTo,
          },
          encumbrances: [
            {
              title: "На дом наложен арест",
              status: false,
              description: null,
            },
            {
              title: "Записей об аренде не найдено",
              status: false,
              description: null,
            },
          ],
          recomendations: [
            {
              title: "Дом в собственности менее 5 лет",
              description:
                "При продаже продавец скорее всего должен будет заплатить налог с её продажи",
            },
          ],
        },
        guides: guides,
        files: [
          {
            fileName: "string",
            mimeType: "string",
            size: "string",
            url: "string",
          },
        ],
        property: {
          floor: newHouse.about.floor,
          totalFloor: newHouse.about.floorsAmmount,
          area: Number(newHouse.generalInfo.generalSquare),
          livingArea: Number(newHouse.generalInfo.livingSquare),
          bathroomArea: Number(newHouse.generalInfo.bathroom),
          kitchenArea: Number(newHouse.generalInfo.kitchen),
          roomsArea: [],
          amountBathrooms: 1,
          amountBedrooms: 1,
          amountShowers: 1,
          buildingNumber: 1,
          heightCeilings: 3.3,
          deadline: "2022-02-25T17:53:38.800Z",
          interior: "string",
          infrastructure: "string",
          rooms: "one",
          threeD: "https://www.youtube.com/embed/Ke3qyQYNob4",
          vr: "https://3d-tur.ru/010/",
          constructionFeatures: [
            {
              title: newHouse.generalInfo.interiorDescription,
              value: "foundation",
            },
          ],
        },
      };

      try {
        const res = await createObjectAPI.createObjectHouse(houseObject);
        console.log("response apartment", res);
        return res;
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }
    if (objectType === 3) {
      const newLand: any = data;

      const owners = [];
      const guides = [];

      if ("furnitureList" in data.info) {
        guides.push(...data.info.furnitureList.map((el) => Number(el)));
      }

      if (newLand.about.type) {
        guides.push(Number(newLand.about.type));
      }
      if (newLand.infrastructure.view.length > 0) {
        guides.push(
          ...newLand.infrastructure.view.map((el: string) => Number(el))
        );
      }
      if (newLand.info.construction) {
        guides.push(Number(newLand.info.construction));
      }
      if (newLand.info.groundwork) {
        guides.push(Number(newLand.info.groundwork));
      }
      if (newLand.info.roof) {
        guides.push(Number(newLand.info.roof));
      }
      if (newLand.info.wall) {
        guides.push(Number(newLand.info.wall));
      }
      if (newLand.info.water) {
        guides.push(Number(newLand.info.water));
      }
      if (newLand.info.heating) {
        guides.push(Number(newLand.info.heating));
      }
      if (newLand.info.sewerage) {
        guides.push(Number(newLand.info.sewerage));
      }
      if (newLand.info.electricity) {
        guides.push(Number(newLand.info.electricity));
      }
      if (newLand.info.parking) {
        guides.push(Number(newLand.info.parking));
      }
      if (newLand.info.internet) {
        guides.push(Number(newLand.info.internet));
      }

      if (newLand.legalPurity.previousFounder.firstFounderName) {
        owners.push(newLand.legalPurity.previousFounder.firstFounderName);
      }
      if (newLand.legalPurity.previousFounder.secondFouderName) {
        owners.push(newLand.legalPurity.previousFounder.secondFouderName);
      }

      const landData = {
        name: newLand.about.name,
        objectType: this.getObjType(),
        description: newLand.generalInfo.description,
        address: newLand.about.address,
        postcode: String(newLand.about.index),
        longitude: "31.45",
        latitude: "31.45",
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        owner: idOwner.id,
        status: 1,
        price: newLand.about.cost,
        complex: 1,
        legalPurity: {
          address: newLand.legalPurity.realEstateRegister.address,
          areaValue: Number(
            newLand.legalPurity.realEstateRegister.generalSquare
          ),
          areaUnits: "м2",
          cadastalNumber:
            newLand.legalPurity.realEstateRegister.cadastralNumber,
          cadastralPrice: Number(
            newLand.legalPurity.realEstateRegister.cadastralCost
          ),
          currentOwnerName: newLand.legalPurity.currentFounder.firstFounderName,
          currentOwnerStartDate:
            newLand.legalPurity.currentFounder.ownershipFrom,
          floor: 1,
          previewOwners: {
            owners: owners,
            startDate: newLand.legalPurity.previousFounder.ownershipFrom,
            finishDate: newLand.legalPurity.previousFounder.ownershipTo,
          },
          encumbrances: [
            {
              title: "На дом наложен арест",
              status: false,
              description: null,
            },
            {
              title: "Записей об аренде не найдено",
              status: false,
              description: null,
            },
          ],
          recomendations: [
            {
              title: "Дом в собственности менее 5 лет",
              description:
                "При продаже продавец скорее всего должен будет заплатить налог с её продажи",
            },
          ],
        },
        guides: guides,
        files: [
          {
            fileName: "string",
            mimeType: "string",
            size: "string",
            url: "string",
          },
        ],
      };

      try {
        const res = await createObjectAPI.createObjectLand(landData);
        console.log("response apartment", res);
        return res;
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }

    // const fakeRequest = () => new Promise<string>((res, rej) => setTimeout(() => res('1'), 1000)) //  fake return publish -ID-
    // try {
    //     const response = await fakeRequest()
    //     return response
    // }
    // catch (e) {
    //     console.warn(e, 'error')
    // }
  }

  constructor() {
    makeObservable(this, {
      apartment: observable,
      townhouse: observable,
      land: observable,
      house: observable,
      saveAboutTab: action,
      saveGeneralTab: action,
      saveInfrastructureTab: action,
      saveHouseInfoTab: action,
      saveLandInfoTab: action,
      saveLegalPurityTab: action,
      getFurnitureList: flow.bound,
    });
  }
}

export default CreateObjectStore;
