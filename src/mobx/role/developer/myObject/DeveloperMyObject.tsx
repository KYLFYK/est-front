import { createContext, FC, useContext } from "react";
import { makeAutoObservable } from "mobx";
import { ComplexApi } from "../../../../api/obj/complex";
import { HouseApi } from "../../../../api/obj/house";
import { datetoDayFormat } from "../../../../lib/mapping/objectDates";
import { IGuide } from "../../../stores/objects/GuidesStore";

class DeveloperMyObjectStore {
  constructor() {
    makeAutoObservable(this);
  }
  initialData = {
    loading: true,
    statistics: {
      byMonth: [
        {
          name: "Январь 2018",
          price: "50000",
        },
        {
          name: "Июль 2018",
          price: "55000",
        },
        {
          name: "Январь 2019",
          price: "56000",
        },
        {
          name: "Июль 2019",
          price: "61000",
        },
        {
          name: "Январь 2020",
          price: "62000",
        },
        {
          name: "Июль 2020",
          price: "67000",
        },
        {
          name: "Январь 2021",
          price: "68000",
        },
        {
          name: "Июль 2021",
          price: "71000",
        },
      ],
      chartDataBookings: [
        {
          name: "Студии",
          value: 55,
        },
        {
          name: "1к квартиры",
          value: 35,
        },
        {
          name: "2к квартиры",
          value: 26,
        },
        {
          name: "3к квартиры",
          value: 18,
        },
      ],
      chartDataPurchases: [
        {
          name: "Студии",
          value: 35,
        },
        {
          name: "1к квартиры",
          value: 33,
        },
        {
          name: "2к квартиры",
          value: 21,
        },
        {
          name: "3к квартиры",
          value: 15,
        },
      ],
      option: {
        dates: [
          {
            label: "Сентябрь 2021",
            value: "Сентябрь 2021",
          },
          {
            label: "Октябрь 2021",
            value: "Октябрь 2021",
          },
          {
            label: "Ноябрь 2021",
            value: "Ноябрь 2021",
          },
          {
            label: "Декабрь 2021",
            value: "Декабрь 2021",
          },
          {
            label: "Январь 2022",
            value: "Январь 2022",
          },
        ],
        objects: [
          {
            label: "ЖК Ленинский",
            value: "ЖК Ленинский",
          },
          {
            label: "ЖК Ленинский 1",
            value: "ЖК Ленинский 1",
          },
          {
            label: "ЖК Ленинский 2",
            value: "ЖК Ленинский 2",
          },
          {
            label: "ЖК Ленинский 3",
            value: "ЖК Ленинский 3",
          },
        ],
      },
      revenueMonth: {
        date: "Сентябрь 2021",
        complex: "25 млн ₽",
        house: "5,2 млн ₽",
        allRevenue: "30 млн ₽",
      },
      revenueYear: {
        date: "2021",
        complex: "125 млн ₽",
        house: "15,2 млн ₽",
        allRevenue: "140 млн ₽",
      },
    },
    complex: [
      {
        id: "",
        img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
        type: "",
        name: "",
        price: "",
        mainSpecifications: ["", "", "", "", ""],
        agent: "",
        dateStart: "",
        dateEnd: "",
        address: "",
        files: [
          {
            createAt: "2022-03-03T20:49:01.585Z",
            fileName: "474f7c58ec02739c41f50fc7db8a6195.png",
            id: 38,
            mimeType: "image/png",
            size: "1648669",
            updateAt: "2022-03-03T20:49:01.585Z",
            url: "http",
          },
        ],
      },
    ],
    complexObjects: [
      {
        address: "ул Тестовая",
        complex: 11,
        createAt: "2022-03-04T10:50:09.090Z",
        description: "Опишите сильные стороны вашего объекта",
        country: {
          id: 1,
          name: "Россия",
        },
        guides: [],
        id: 1,
        latitude: 31.45,
        longitude: 31.45,
        markAsDelete: false,
        name: "Квартира в ЖК",
        objectType: "sale",
        owner: {
          adminProperty: null,
          agencyProperty: null,
          agentProperty: null,
          bankProperty: null,
          createAt: "2022-03-02T18:08:41.364Z",
          customerProperty: null,
          developerProperty: 1,
          email: "testdevel123@mail.ru",
          id: 19,
          isConfirmed: true,
          markAsDelete: false,
          phone: "665-639-0973",
          role: "developer",
          updateAt: "2022-03-02T18:08:41.364Z",
        },
        postcode: "12332",
        price: 9000000,
        files: [
          {
            createAt: "2022-03-04T10:50:08.983Z",
            fileName: "225dd8f44dbba5b2f6f08d99b2409d13.png",
            id: 40,
            mimeType: "image/png",
            size: "1648669",
            updateAt: "2022-03-04T10:50:08.983Z",
            url: "http://s3.dtln.ru:80/m",
          },
        ],
        property: {
          amountBathrooms: 1,
          amountBedrooms: 1,
          amountShowers: 1,
          area: 123,
          bathroomArea: 234,
          buildingNumber: 1,
          constructionFeatures: [
            { title: "Описание комнат", value: "foundation" },
          ],
          deadline: "2022-02-25T17:53:38.800Z",
          floor: 2,
          heightCeilings: 3.3,
          id: 1,
          infrastructure: "string",
          interior: "string",
          kitchenArea: 42,
          livingArea: 42,
          rooms: "one",
          roomsArea: [1, 2],
          threeD: "",
          totalFloor: 11,
          vr: "",
        },
        region: { id: 2, name: "Крым" },
        status: { id: 1, status: "На продаже" },
        updateAt: "2022-03-04T10:58:25.190Z",
        views: 6,
      },
    ],
    house: [
      {
        id: "",
        img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
        type: "",
        name: "",
        price: "",
        mainSpecifications: ["", "", "", "", ""],
        agent: "",
        dateStart: "",
        dateEnd: "",
        address: "",
      },
    ],
  };
  fetch(id: string) {
    console.log("DeveloperMyObjectStore", id);
  }
  async fetchAllComplexByOwnerId(ownerId: number) {
    this.initialData.loading = true;
    const res = await ComplexApi.getAllComplexByOwnerId(ownerId);

    this.initialData.complex = res?.data.map((r: any) => {
      return {
        id: r.id,
        img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
        type: r.status.status,
        name: r.name,
        price: "",
        mainSpecifications: r.guides
          .filter(
            (guide: IGuide) =>
              guide.type_en === "safety" || guide.type_en === "buildings"
          )
          .map((guide: IGuide) => guide.value),
        agent: r.owner.email,
        dateStart: datetoDayFormat(r.createAt, "Cabinet"),
        dateEnd: "",
        address: r.address,
        files: r.files,
      };
    });
    this.initialData.loading = false;
  }

  async fetchAllHousesByOwnerId(ownerId: number) {
    this.initialData.loading = true;
    let i = 0;
    let obj: any = [];
    let res;
    do {
      res = await HouseApi.getAllHouse(i * 10, 10);
      obj = [...obj, ...res?.data];
      i++;
    } while (res?.data?.length >= 10);

    this.initialData.house = obj
      .filter((o: any) => o.owner.id === ownerId)
      .map((o: any) => {
        return {
          id: o.id,
          img: "https://i.pinimg.com/736x/6a/30/8d/6a308d4d949bcf10e4382c9b4a455721.jpg",
          type: o.objectType,
          name: o.name,
          price: o.price,
          mainSpecifications: ["", "", "", "", ""],
          agent: o.owner.id,
          dateStart: datetoDayFormat(o.createAt, "Cabinet"),
          dateEnd: "",
          address: o.address,
        };
      });
    this.initialData.loading = false;
  }

  async fetchAllObjectsByComplexId(complexId: number) {
    this.initialData.loading = true;
    const res = await ComplexApi.getAllObjectsByComplexId(complexId);
    console.log(res);
    this.initialData.complexObjects = res?.data;
    this.initialData.loading = false;
  }

  get() {
    console.log(JSON.parse(JSON.stringify({ ...this.initialData })));
  }
}

const StoreContext = createContext<DeveloperMyObjectStore>(
  new DeveloperMyObjectStore()
);

const StoreProvider: FC<{ store: DeveloperMyObjectStore }> = ({
  children,
  store,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

const useStoreDeveloperMyObjectStore = () => {
  return useContext(StoreContext);
};

export {
  DeveloperMyObjectStore,
  StoreProvider,
  useStoreDeveloperMyObjectStore,
};
