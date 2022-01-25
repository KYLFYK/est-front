import { makeAutoObservable } from "mobx";
import moment from "moment";

interface IOwnersAds {
  name: string;
  address: string;
  impressions: number; // Показов в поиске
  views: number; // Просмотров
  favorites: number; // Избранное
  updateAt?: Date; // Дата обновления
  publishedAt?: Date; // Дата публикации
  archivedAt?: Date; // Дата архивации
  isPublished: boolean; // Опубликовано ?
  isArchived: boolean; // В архиве ?
  isDraft: boolean; // В черновике ?
}

const InitialData: null | IOwnersAds[] = [
  {
    name: "2-этажный коттедж, 300 м²",
    address: "г. Санкт-Петербург, ул. Ленина 18",
    impressions: 0,
    views: 506,
    favorites: 9,
    updateAt: moment().toDate(),
    publishedAt: moment().toDate(),
    isArchived: false,
    isDraft: false,
    archivedAt: undefined,
    isPublished: true,
  },
  {
    name: "3-комнатная квартира в Москве, 80 м²",
    address: "г. Москва, Лефортово, ул. Воскова 90",
    impressions: 30,
    views: 5,
    favorites: 2,
    updateAt: moment().toDate(),
    publishedAt: moment().toDate(),
    isArchived: false,
    isDraft: true,
    archivedAt: undefined,
    isPublished: false,
  },
  {
    name: "Участок на окраине Омска, 30 соток",
    address: "г. Омск, ул. 17-ая линия 60",
    impressions: 0,
    views: 10,
    favorites: 1,
    updateAt: moment().toDate(),
    publishedAt: moment().toDate(),
    isArchived: true,
    isDraft: false,
    archivedAt: moment().toDate(),
    isPublished: false,
  },
];

class OwnersList {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: null | IOwnersAds[] = null;

  uploadList: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = InitialData;
  };
}

export const OwnersListStore = new OwnersList();
