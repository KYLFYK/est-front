import { makeAutoObservable } from "mobx";
import moment from "moment";

interface IDeveloperAd {
  name: string;
  address: string;
  impressions: number; // Показов в поиске
  views: number; // Просмотров
  favorites: number; // Избранное
  publishedAt: Date; // Дата публикации
  updateAt: Date; // Дата обновления
  sold: boolean; // Продан ?
  sellingPrice?: string | number; // Цена продажи
}

const initialData: null | IDeveloperAd[] = [
  {
    name: "3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    impressions: 0,
    views: 506,
    favorites: 9,
    updateAt: moment().toDate(),
    publishedAt: moment().toDate(),
    sold: false,
  },
  {
    name: "3-этажный коттедж, 600 м²",
    address: "Крым, Ялта",
    impressions: 0,
    views: 506,
    favorites: 9,
    updateAt: moment().toDate(),
    publishedAt: moment().toDate(),
    sold: true,
    sellingPrice: "10 000 000",
  },
];

class DevelopersList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: null | IDeveloperAd[] = null;

  uploadList: () => void = () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = initialData;
  };
}

export const DevelopersListStore = new DevelopersList();
