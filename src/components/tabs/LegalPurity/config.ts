import { IArticleGeneral, IOption } from "../../../utils/interfaces/general";

export interface ILegalPurityArticleItem extends IArticleGeneral {
  description?: string;
}

export interface ILegalPurityArticle
  extends IOption<ILegalPurityArticleItem[]> {
  description?: string;
}

export const LEGAL_PURITY_GENERAL_TAB: ILegalPurityArticle[] = [
  {
    value: "Данные из ЕГРН",
    description: "Это всплывающая подсказка о данных из ЕГРН",
    label: [
      {
        title: "Адрес",
        text: "Респ. Крым, пгт Гурзуф,  ул. Ялтинская, д. 12К",
      },
      {
        title: "Кадастровый номер",
        text: "77:06:0009005:4567",
      },
      {
        title: "Кадастровая стоимость",
        text: "150 000 000 ₽",
        description: "Это всплывающая подсказка о данных кадастровой стоимости",
      },
      {
        title: "Общая площадь",
        text: "615 м²",
      },
      {
        title: "Этажность",
        text: "3",
      },
    ],
  },
];
