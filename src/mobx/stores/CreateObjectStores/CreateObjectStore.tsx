// noinspection JSNonASCIINames

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
import { instance } from "../../../api/instance";
import { CreateComplexStore } from "./CreateComplexStore";
import { CreateVillageStore } from "./CreateVillageStore";
import {
  ICreateComplexAboutTab,
  ICreateComplexGeneralInfo,
  ICreateComplexInfoTab,
  ICreateComplexInfrastructure,
  ICreateObjectComplex,
} from "../../types/CreateObjectStoresTypes/CreateComplexStoreTypes";
import { IGuide } from "../objects/GuidesStore";
import { ICustomFile } from "../../../components/processes/create-new-object/components/GeneralInfoObjectTab/GeneralInfoPhotosTab";
import moment from "moment";
import { editObjectApi } from "../../../api/editObjects/editObjects";

export interface IUploadedFile {
  size: number;
  mimeType: string;
  fileName: string;
  url: string;
}

class CreateObjectStore implements ICreateObject {
  apartment: CreateApartmentStore = new CreateApartmentStore();
  townhouse: CreateTownhouseStore = new CreateTownhouseStore();
  land: CreateLandStore = new CreateLandStore();
  house: CreateHouseStore = new CreateHouseStore();
  complex: CreateComplexStore = new CreateComplexStore();
  village: CreateVillageStore = new CreateVillageStore();
  objType: IObjType = "sale";
  uploadedFiles: IUploadedFile[] = [];
  forceRerender: boolean = true;
  newOwner: number | null = null;

  resetFields() {
    this.apartment = new CreateApartmentStore();
    this.townhouse = new CreateTownhouseStore();
    this.land = new CreateLandStore();
    this.house = new CreateHouseStore();
    this.objType = "sale";
    this.uploadedFiles = [];
    this.newOwner = null;
  }

  setOwner(ownerId: number) {
    this.newOwner = ownerId;
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
      case ObjectTypes.RESCOMPLEX:
        this.complex.about = data as ICreateComplexAboutTab;
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
      case ObjectTypes.RESCOMPLEX:
        this.complex.generalInfo = data as ICreateComplexGeneralInfo;
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
      case ObjectTypes.RESCOMPLEX:
        this.complex.infrastructure = data as ICreateComplexInfrastructure;
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
      case ObjectTypes.RESCOMPLEX:
        this.complex.info = data as ICreateComplexInfoTab;
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

  setExistObject(objectType: ObjectTypes, data: any) {
    switch (objectType) {
      case ObjectTypes.APARTMENTS:
        this.apartment.about.name = data.name;
        this.apartment.about.address = data.address;
        this.apartment.about.complexName = data.complex;
        this.apartment.about.cost = data.price;
        this.apartment.about.city = data.cityId;
        this.apartment.about.country = data.countryId;
        if (data.secondary_type) {
          this.apartment.about.type = data.secondary_type;
        }
        this.apartment.about.floorsAmmount = data.info_options.total_floors;
        this.apartment.about.floor = data.info_options.floor;
        if (data.postcode) {
          this.apartment.about.index = Number(data.postcode);
        }
        this.apartment.generalInfo.description = data.description;
        this.apartment.generalInfo.generalSquare = data.info_options.total_area
          ? data.info_options.total_area.toString()
          : "";
        this.apartment.generalInfo.livingSquare = data.info_options.living_area
          ? data.info_options.living_area.toString()
          : "";
        this.apartment.generalInfo.bathroom = data.info_options.bathroom_area
          ? data.info_options.bathroom_area.toString()
          : "";
        this.apartment.generalInfo.kitchen = data.info_options.kitchen_area
          ? data.info_options.kitchen_area.toString()
          : "";
        this.apartment.generalInfo.customRooms = data.info_options.rooms_area
          ? data.info_options.rooms_area.map((el: number) => ({
              label: el,
              value: el,
            }))
          : [];
        this.apartment.generalInfo.rooms = data.info_options.rooms_area
          ? data.info_options.rooms_area.length
          : 0;
        this.apartment.generalInfo.video = data.online_tour.threeD_tour.url;
        this.apartment.generalInfo.vrTour = data.online_tour.vr_tour.url;
        this.apartment.generalInfo.interiorDescription =
          data.info_options.construction_features[0].title;
        this.apartment.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.apartment.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.apartment.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.apartment.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.apartment.legalPurity.currentFounder.firstFounderName =
          data.legalPurityData.currentOwnerName;
        this.apartment.legalPurity.currentFounder.ownershipFrom = moment(
          data.legalPurityData.currentOwnerStartDate
        ).toDate();
        this.apartment.legalPurity.previousFounder.ownershipFrom = moment(
          data.legalPurityData.previewOwners.startDate
        ).toDate();
        this.apartment.legalPurity.previousFounder.ownershipTo = moment(
          data.legalPurityData.previewOwners.finishDate
        ).toDate();
        this.apartment.legalPurity.previousFounder.firstFounderName =
          data.legalPurityData.previewOwners.owners[0];
        this.uploadedFiles = data.images;
        this.apartment.generalInfo.photos = data.images;
        this.apartment.generalInfo.ceilingHeight =
          data.info_options.height_сeilings;
        this.apartment.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.apartment.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.apartment.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.apartment.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.apartment.legalPurity.realEstateRegister.floors =
          data.legalPurityData.floor.toString();

        data.object_specs.forEach((item: IGuide) => {
          switch (item.type_en) {
            case "buildingType":
              this.apartment.about.type = item.id.toString();
              break;
            case "heating":
              this.apartment.info.heating = item.id.toString();
              break;
            case "electricity":
              this.apartment.info.electricity = item.id.toString();
              break;
            case "window":
              this.apartment.infrastructure.view = this.apartment.infrastructure
                .view
                ? [...this.apartment.infrastructure.view, item.id.toString()]
                : [item.id.toString()];
              break;
            case "sewerage":
              this.apartment.info.sewerage = item.id.toString();
              break;
            case "roof":
              this.apartment.info.roof = item.id.toString();
              break;
            case "parking":
              this.apartment.info.parking = item.id.toString();
              break;
            case "furniture":
              this.apartment.info.furnitureList = this.apartment.info
                .furnitureList
                ? [...this.apartment.info.furnitureList, item.id.toString()]
                : [item.id.toString()];
              break;
          }
        });
        break;
      case ObjectTypes.HOUSE:
        this.house.about.name = data.name;
        this.house.about.address = data.address;
        this.house.about.cost = data.price;
        if (data.postcode) {
          this.house.about.index = Number(data.postcode);
        }
        this.house.about.city = data.cityId;
        this.house.about.country = data.countryId;
        if (data.secondary_type) {
          this.house.about.type = data.secondary_type;
        }
        this.house.generalInfo.description = data.description;
        this.house.infrastructure.description = data.description_items;
        this.uploadedFiles = data.images;
        this.house.generalInfo.photos = data.images;
        this.house.generalInfo.generalSquare = data.info_options.total_area
          ? data.info_options.total_area.toString()
          : "";
        this.house.generalInfo.livingSquare = data.info_options.living_area
          ? data.info_options.living_area.toString()
          : "";
        this.house.generalInfo.bathroom = data.info_options.bathroom_area
          ? data.info_options.bathroom_area.toString()
          : "";
        this.house.generalInfo.kitchen = data.info_options.kitchen_area
          ? data.info_options.kitchen_area.toString()
          : "";
        this.house.generalInfo.land = data.info_options.land_area.toString();
        this.house.generalInfo.houseSquare = data.info_options.area.toString();
        this.house.generalInfo.video = data.online_tour.threeD_tour.url;
        this.house.generalInfo.vrTour = data.online_tour.vr_tour.url;
        this.house.generalInfo.floors.count = data.info_options.total_floor;
        this.house.generalInfo.floors.items = data.info_options.floors.map(
          (el: { floor: string; value: string }, index: number) => ({
            label: {
              description: el.floor,
              height: el.value,
            },
            value: index + 1,
          })
        );
        this.house.info.technicalComment =
          data.info_options.construction_features &&
          data.info_options.construction_features[0] &&
          data.info_options.construction_features[0].title
            ? data.info_options.construction_features[0].title
            : "";

        this.house.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.house.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.house.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.house.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.house.legalPurity.realEstateRegister.floors =
          data.legalPurityData.floor.toString();
        this.house.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.house.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.house.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.house.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.house.legalPurity.currentFounder.firstFounderName =
          data.legalPurityData.currentOwnerName;
        this.house.legalPurity.currentFounder.ownershipFrom = moment(
          data.legalPurityData.currentOwnerStartDate
        ).toDate();
        this.house.legalPurity.previousFounder.ownershipFrom = moment(
          data.legalPurityData.previewOwners.startDate
        ).toDate();
        this.house.legalPurity.previousFounder.ownershipTo = moment(
          data.legalPurityData.previewOwners.finishDate
        ).toDate();
        this.house.legalPurity.previousFounder.firstFounderName =
          data.legalPurityData.previewOwners.owners[0];

        data.object_specs.forEach((item: IGuide) => {
          switch (item.type_en) {
            case "buildingType":
              this.house.about.type = item.id.toString();
              break;
            case "heating":
              this.house.info.heating = item.id.toString();
              break;
            case "electricity":
              this.house.info.electricity = item.id.toString();
              break;
            case "window":
              this.house.infrastructure.view = this.house.infrastructure.view
                ? [...this.house.infrastructure.view, item.id.toString()]
                : [item.id.toString()];
              break;
            case "sewerage":
              this.house.info.sewerage = item.id.toString();
              break;
            case "roof":
              this.house.info.roof = item.id.toString();
              break;
            case "furniture":
              this.house.info.furnitureList = this.house.info.furnitureList
                ? [...this.house.info.furnitureList, item.id.toString()]
                : [item.id.toString()];
              break;
            case "internet":
              this.house.info.internet = item.id.toString();
              break;
          }
        });

        break;
      case ObjectTypes.LAND:
        this.land.about.name = data.name;
        this.land.about.address = data.address;
        this.land.about.cost = data.price;
        this.land.about.city = data.cityId;
        this.land.about.country = data.countryId;
        this.land.about.type = "Вторичка";
        this.land.generalInfo.description = data.description;
        this.uploadedFiles = data.images;
        this.land.generalInfo.photos = data.images;

        this.land.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.land.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.land.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.land.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.land.legalPurity.realEstateRegister.address =
          data.legalPurityData.address;
        this.land.legalPurity.realEstateRegister.generalSquare =
          data.legalPurityData.areaValue.toString();
        this.land.legalPurity.realEstateRegister.cadastralNumber =
          data.legalPurityData.cadastalNumber;
        this.land.legalPurity.realEstateRegister.cadastralCost =
          data.legalPurityData.cadastralPrice.toString();
        this.land.legalPurity.currentFounder.firstFounderName =
          data.legalPurityData.currentOwnerName;
        this.land.legalPurity.currentFounder.ownershipFrom = moment(
          data.legalPurityData.currentOwnerStartDate
        ).toDate();
        this.land.legalPurity.previousFounder.ownershipFrom = moment(
          data.legalPurityData.previewOwners.startDate
        ).toDate();
        this.land.legalPurity.previousFounder.ownershipTo = moment(
          data.legalPurityData.previewOwners.finishDate
        ).toDate();
        this.land.legalPurity.previousFounder.firstFounderName =
          data.legalPurityData.previewOwners.owners[0];

        this.land.generalInfo.landGeneralSquare = data.info_options
          .find((x: any) => x.label === "Общая площадь")
          .value.split(" ")[0];

        this.land.infrastructure.description = data.description_Info;

        data.object_specs.forEach((item: IGuide) => {
          switch (item.type_en) {
            case "buildingType":
              this.land.about.type = item.id.toString();
              break;
            case "heating":
              this.land.info.heating = item.id.toString();
              break;
            case "sewerage":
              this.land.info.sewerage = item.id.toString();
              break;
          }
        });

        break;
      case ObjectTypes.RESCOMPLEX:
        this.complex.about.name = data.name;
        this.complex.about.address = data.address;
        this.complex.about.city = data.cityId;
        this.complex.about.country = data.countryId;
        this.complex.generalInfo.description = data.description;
        this.uploadedFiles = data.images;
        this.complex.generalInfo.photos = data.images;
        this.complex.generalInfo.amountObjects =
          data.info_options[0].amountObjects;
        this.complex.generalInfo.priceObjectMin =
          data.info_options[0].priceObjectMin;
        this.complex.generalInfo.priceObjectMax =
          data.info_options[0].priceObjectMax;
        this.complex.generalInfo.amountBuildings =
          data.info_options[0].amountBuildings;
        this.complex.generalInfo.heightCeilings =
          data.info_options[0].heightCeilings;
        this.complex.generalInfo.amountFloors =
          data.info_options[0].amountFloors;
        this.complex.generalInfo.areaObjectMax =
          data.info_options[0].areaObjectMax;
        this.complex.generalInfo.areaObjectMin =
          data.info_options[0].areaObjectMin;
        this.complex.infrastructure.infrastructure =
          data.info_options[0].infrastructure;
        this.complex.info.guides = data.object_specs.map((el: IGuide) => el.id);

        this.complex.info.constructionProgress = data.schedule.map(
          (el: any) => ({
            date: moment(el.date).format("DD.MM.YYYY"),
            description: el.description,
          })
        );

        if (data.postcode) {
          this.complex.about.index = Number(data.postcode);
        }
    }

    this.forceRerender = !this.forceRerender;
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

  async uploadFile(file: File) {
    try {
      const formData = new FormData();
      formData.set("file", file);

      const result = await instance.post(`media/s3-upload`, formData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessEstatum")}`,
        },
      });

      this.uploadedFiles = [
        ...this.uploadedFiles.filter((el) => el.url !== result.data.url),
        result.data,
      ];
    } catch (e) {
      console.error("Can't upload file", e);
    }
  }

  async uploadFileList(fileList: Array<IUploadedFile | ICustomFile>) {
    this.uploadedFiles = [];

    fileList.forEach((file) => {
      if ("file" in file && file.file) {
        this.uploadFile(file.file);
      } else {
        this.uploadedFiles.push(file as IUploadedFile);
      }
    });
  }

  // Fake request method for sending data and receiving response in the future
  async sendObjectData(
    data:
      | ICreateObjectHouse
      | ICreateObjectLand
      | ICreateObjectTownhouse
      | ICreateObjectAparts
      | ICreateObjectComplex,
    objectType: ObjectTypes,
    isEdit: boolean,
    id?: string | number
  ): Promise<string | undefined> {
    const idOwner: any = jwt_decode(
      localStorage.getItem("accessEstatum")
        ? (localStorage.getItem("accessEstatum") as string)
        : "123"
    );

    if (objectType === 0) {
      const newData: any = data;

      const guides: number[] = [];
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

      guides.filter((item, pos) => {
        return guides.indexOf(item) == pos;
      });

      const apartmentData: any = {
        name: newData.about.name,
        objectType: this.getObjType(),
        description: newData.generalInfo.description,
        address: newData.about.address,
        postcode: String(newData.about.index),
        longitude: 31.45,
        latitude: 31.45,
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        status: 1,
        price: newData.about.cost,
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
        files: this.uploadedFiles,
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
          heightCeilings: newData.generalInfo.heightCeilings,
          deadline: "2022-02-25T17:53:38.800Z",
          interior: "string",
          infrastructure: "string",
          rooms: "one",
          threeD: newData.generalInfo.video,
          vr: newData.generalInfo.vrTour,
          constructionFeatures: [
            {
              title: newData.generalInfo.interiorDescription,
              value: "foundation",
            },
          ],
        },
      };

      if (newData.about.complexName) {
        apartmentData.complex = newData.about.complexName;
      }

      try {
        if (isEdit) {
          if (idOwner.role === "admin" && this.newOwner !== null) {
            apartmentData.owner = this.newOwner;
          }

          const res = await editObjectApi.createObjectApartment(
            apartmentData,
            id as string | number
          );
          return res;
        } else {
          apartmentData.owner = idOwner.id;
          const res = await createObjectAPI.createObjectApartment(
            apartmentData
          );
          return res;
        }
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }
    if (objectType === 1 || objectType === 2) {
      const newHouse: any = data;

      const guides: number[] = [];
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

      guides.filter((item, pos) => {
        return guides.indexOf(item) == pos;
      });

      const houseObject: any = {
        name: newHouse.about.name,
        objectType: this.getObjType(),
        description: newHouse.generalInfo.description,
        address: newHouse.about.address,
        postcode: String(newHouse.about.index),
        longitude: 31.45,
        latitude: 31.45,
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        status: 1,
        price: newHouse.about.cost,
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
        files: this.uploadedFiles,
        property: {
          totalFloor: newHouse.generalInfo.floors.count,
          area: Number(newHouse.generalInfo.generalSquare),
          livingArea: Number(newHouse.generalInfo.livingSquare),
          bathroomArea: Number(newHouse.generalInfo.bathroom),
          kitchenArea: Number(newHouse.generalInfo.kitchen),
          rooms: "two", //newHouse.info.bedrooms.toString(),
          amountBathrooms: newHouse.info.bathrooms,
          amountBedrooms: newHouse.info.bedrooms,
          amountShowers: newHouse.info.lavatories,
          constructionFeatures: [
            {
              title: newHouse.info.technicalComment,
              value: "foundation",
            },
          ],
          floors: newHouse.generalInfo.floors.items.map(
            (el: {
              label: {
                description: string;
                height: string;
              };
              value: number;
            }) => ({
              floor: el.label.description,
              value: el.label.height,
            })
          ),
          infrastructure: newHouse.infrastructure.description,
          landArea: Number(newHouse.generalInfo.land),
          threeD: newHouse.generalInfo.video,
          vr: newHouse.generalInfo.vrTour,
          totalArea: Number(newHouse.generalInfo.generalSquare),
        },
      };

      try {
        if (isEdit) {
          if (idOwner.role === "admin" && this.newOwner !== null) {
            houseObject.owner = this.newOwner;
          }

          const res = await editObjectApi.createObjectHouse(
            houseObject,
            id as string | number
          );
          return res;
        } else {
          houseObject.owner = idOwner.id;
          const res = await createObjectAPI.createObjectHouse(houseObject);
          return res;
        }
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }
    if (objectType === 3) {
      const newLand: any = data;

      const owners = [];
      const guides: number[] = [];

      if ("furnitureList" in data.info) {
        guides.push(...data.info.furnitureList.map((el) => Number(el)));
      }

      if (newLand.about.type) {
        guides.push(Number(newLand.about.type));
      }
      if (
        newLand.infrastructure.view &&
        newLand.infrastructure.view.length > 0
      ) {
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

      guides.filter((item, pos) => {
        return guides.indexOf(item) == pos;
      });

      const landData: any = {
        name: newLand.about.name,
        objectType: this.getObjType(),
        description: newLand.generalInfo.description,
        address: newLand.about.address,
        postcode: String(newLand.about.index),
        longitude: 31.45,
        latitude: 31.45,
        region: data.about.region,
        country: data.about.country,
        city: data.about.city,
        status: 1,
        price: newLand.about.cost,
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
        files: this.uploadedFiles,
        property: {
          area: Number(newLand.generalInfo.landGeneralSquare),
          infrastructure: newLand.infrastructure.description,
        },
      };

      try {
        if (isEdit) {
          if (idOwner.role === "admin" && this.newOwner !== null) {
            landData.owner = this.newOwner;
          }

          const res = await editObjectApi.createObjectLand(
            landData,
            id as string | number
          );
          return res;
        } else {
          landData.owner = idOwner.id;
          const res = await createObjectAPI.createObjectLand(landData);
          return res;
        }
      } catch (e) {
        console.log("response apartment-error", e);
      }
    }

    if (objectType === 4) {
      const complexDataS: ICreateObjectComplex = data as ICreateObjectComplex;

      const complexData: any = {
        objectType: "sale",
        name: complexDataS.about.name,
        description: complexDataS.generalInfo.description,
        address: complexDataS.about.address,
        postcode: complexDataS.about.index.toString(),
        longitude: 44.948237,
        latitude: 34.100318,
        region: complexDataS.about.region,
        country: complexDataS.about.country,
        city: complexDataS.about.city,
        status: 1,
        guides: complexDataS.info.guides,
        files: this.uploadedFiles,
        property: {
          priceObjectMin: complexDataS.generalInfo.priceObjectMin,
          priceObjectMax: complexDataS.generalInfo.priceObjectMax,
          areaObjectMin: complexDataS.generalInfo.areaObjectMin,
          areaObjectMax: complexDataS.generalInfo.areaObjectMax,
          amountObjects: complexDataS.generalInfo.amountObjects,
          amountBuildings: complexDataS.generalInfo.amountBuildings,
          amountFloors: complexDataS.generalInfo.amountFloors,
          heightCeilings: complexDataS.generalInfo.heightCeilings,
          infrastructure: complexDataS.infrastructure.infrastructure,
        },
        constructionProgress: complexDataS.info.constructionProgress,
      };

      try {
        if (isEdit) {
          if (idOwner.role === "admin" && this.newOwner !== null) {
            complexData.owner = this.newOwner;
          }

          return await editObjectApi.createObjectResComplex(
            complexData,
            id as number | string
          );
        } else {
          complexData.owner = idOwner.id;
          return await createObjectAPI.createObjectResComplex(complexData);
        }
      } catch (e) {
        console.log("response complex-error", e);
      }
    }
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
