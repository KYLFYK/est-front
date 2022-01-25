import { makeAutoObservable } from "mobx";
import moment from "moment";

interface ICountMonthStat {
  month: Date;
  count: number;
}

interface ICurrentMonthStat {
  month: Date;
  agents: number;
  developers: number;
  owners: number;
}

interface ICurrentYearStat {
  year: Date;
  agents: number;
  developers: number;
  owners: number;
}

interface IRevenueStat {
  month: Date;
  revenue: number | string;
}

interface IObjectsStats {
  purchase: string | number;
  sale: string | number;
}

interface IAdsStats {
  countByPeriod: ICountMonthStat[]; // Проданные объекты (количество) во времени
  currentMonthStats: ICurrentMonthStat; // Итоги продаж (кол-во) по объектам за месяц
  currentYearStats: ICurrentYearStat; // Итоги продаж (кол-во) по объектам за год
  revenuePerMonth: IRevenueStat[]; // Выручка по месяцам
  /**
   * Количество реализованных объектов по типу объекта/сделки.
   * Ключ объекта - строка houses | flats_1 | townhouses и тп (можем использорвать любые удобные)
   */
  soldObjectsStats: Record<"houses" | "flats_1" | "townhouses", IObjectsStats>;
}

const InitialData: null | IAdsStats = {
  countByPeriod: [
    {
      month: moment().toDate(),
      count: 12,
    },
    {
      month: moment().toDate(),
      count: 21,
    },
    {
      month: moment().toDate(),
      count: 30,
    },
    {
      month: moment().toDate(),
      count: 38,
    },
    {
      month: moment().toDate(),
      count: 49,
    },
    {
      month: moment().toDate(),
      count: 76,
    },
    {
      month: moment().toDate(),
      count: 94,
    },
    {
      month: moment().toDate(),
      count: 138,
    },
  ],
  currentMonthStats: {
    month: moment().toDate(),
    agents: 10,
    developers: 12,
    owners: 6,
  },
  currentYearStats: {
    year: moment().toDate(),
    agents: 33,
    developers: 35,
    owners: 54,
  },
  revenuePerMonth: [
    {
      month: moment().toDate(),
      revenue: "50000",
    },
    {
      month: moment().toDate(),
      revenue: "55000",
    },
    {
      month: moment().toDate(),
      revenue: "56000",
    },
    {
      month: moment().toDate(),
      revenue: "61000",
    },
    {
      month: moment().toDate(),
      revenue: "62000",
    },
    {
      month: moment().toDate(),
      revenue: "67000",
    },
    {
      month: moment().toDate(),
      revenue: "68000",
    },
    {
      month: moment().toDate(),
      revenue: "71000",
    },
  ],
  soldObjectsStats: {
    houses: {
      purchase: 55,
      sale: 49,
    },
    flats_1: {
      purchase: 35,
      sale: 31,
    },
    townhouses: {
      purchase: 26,
      sale: 23,
    },
  },
};

class AdsStatistics {
  constructor() {
    makeAutoObservable(this);
  }

  loaded: boolean = false;
  errorOnLoad: boolean = false;
  list: null | IAdsStats = null;

  uploadList: () => void = async () => {
    this.loaded = true;
    this.errorOnLoad = false;
    this.list = InitialData;
  };
}

export const AdsStatisticsStore = new AdsStatistics();
