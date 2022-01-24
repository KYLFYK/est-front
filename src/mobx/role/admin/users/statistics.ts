import { makeAutoObservable } from "mobx";
import moment from "moment";

export interface IAdminChart {
  /**
   * Месяц (день в месяце может быть любым, но лучше
   * не использовать 1 или последний день месяца
   * из-за разных часовых поясов)
   * Пример для января: 2022-01-02T22:42:12.269Z
   */
  month: Date;
  /**
   * Общая выручка а месяц
   */
  price: string;
}

interface IAdminObjects {
  /**
   * Выручка за месяц по объектам
   */
  month: Date;
  objectsByMonth: {
    /**
     * Выручка за месяц по агентам
     */
    agencies: string;
    /**
     * Выручка за месяц по застройщикам
     */
    developers: string;
    /**
     * Выручка за месяц по собственникам
     */
    owners: string;
  };
  year: Date; // Выручка за год по объектам
  objectsByYear: {
    agencies: string; // Выручка за год по агентам
    developers: string; // Выручка за год по застройщикам
    owners: string; // Выручка за год по собственникам
  };
}

interface IAdminStat {
  revenueChart: IAdminChart[]; // Выручка по месяцам (Месяц - рублей)
  revenueByObjects: IAdminObjects; // Общая выручка по объектам
}

const InitialData: null | IAdminStat = {
  revenueChart: [
    {
      month: moment().set("months", 5).add(-1, "years").toDate(),
      price: "50000",
    },
    {
      month: moment().set("months", 6).add(-1, "years").toDate(),
      price: "55000",
    },
    {
      month: moment().set("months", 7).add(-1, "years").toDate(),
      price: "56000",
    },
    {
      month: moment().set("months", 8).add(-1, "years").toDate(),
      price: "61000",
    },
    {
      month: moment().set("months", 9).add(-1, "years").toDate(),
      price: "62000",
    },
    {
      month: moment().set("months", 10).add(-1, "years").toDate(),
      price: "67000",
    },
    {
      month: moment().set("months", 11).add(-1, "years").toDate(),
      price: "68000",
    },
    {
      month: moment().set("months", 12).add(-1, "years").toDate(),
      price: "71000",
    },
  ],
  revenueByObjects: {
    month: moment().set("month", 12).add(-1, "years").toDate(),
    objectsByMonth: {
      agencies: "25",
      developers: "5,2",
      owners: "30",
    },
    year: moment().set("month", 1).add(-1, "years").toDate(),
    objectsByYear: {
      agencies: "25",
      developers: "5,2",
      owners: "30",
    },
  },
};

class UsersStatistics {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  data: null | IAdminStat = null;

  uploadData: () => void = () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.data = InitialData;
  };
}

export const UsersStatisticsStore = new UsersStatistics();
