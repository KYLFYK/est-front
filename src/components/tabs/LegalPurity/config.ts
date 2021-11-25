import { IArticleGeneral, IOption } from "../../../utils/interfaces/general";

export interface ILegalPurityArticleItem extends IArticleGeneral {
  description?: string;
}

export interface ILegalPurityArticle
  extends IOption<ILegalPurityArticleItem[]> {
  description?: string;
}

export enum LegalPurityStatusTypes {
  WARN,
  SUCCESS,
}

export interface ILegalPurityEncumbrancesItem {
  status: LegalPurityStatusTypes;
  text: string;
  description?: string;
}
export interface ILegalPurityEncumbrances {
  title: string;
  encumbrances: ILegalPurityEncumbrancesItem[];
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

export const LEGAL_PURITY_OWNERS: ILegalPurityArticle[] = [
  {
    value: "Текущие владельцы",
    label: [
      { title: "Единоличный собственник", text: "Иванов Филипп Васильевич" },
      { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
    ],
  },
  {
    value: "Предыдущие владельцы",
    description: "Всплывающая подсказка предыдущих владельцев",
    label: [
      {
        title: "2 владельца",
        text: "Иванов Филипп Васильевич, Иванов Филипп Васильевич",
      },
      { title: "77-77-08/011/2021-0308", text: "03.08.2021" },
    ],
  },
];

export const LEGAL_PURITY_ENCUMBRANCES: ILegalPurityEncumbrances[] = [
  {
    title: "Текущие владельцы",
    encumbrances: [
      {
        status: LegalPurityStatusTypes.WARN,
        description: "Description",
        text: "Дом в ипотеке",
      },
      {
        status: LegalPurityStatusTypes.SUCCESS,
        description: "Description",
        text: "Записей об аренде не найдено",
      },
    ],
  },
];

export const LEGAL_PURITY_RECOMENDS: IOption[] = [
  {
    value: "Квартира меняла владельцев несколько раз за последние 3 года",
    label:
      "Внимательно изучите документы, по которым квартира перешла в собственность текущего владельца, узнайте больше о предыдущих собственниках и сделках. Лучше обратиться к специалистам для проверки и сопровождения сделки.",
  },
  {
    value: "Квартира в собственности менее 5 лет",
    label:
      "При продаже продавец скорее всего должен будет заплатить налог с её продажи. Чтобы этого не делать, он может настаивать на занижении стоимости жилья в договоре купли-продажи. В таком случае вы рискуете: если что-то пойдёт не так, возместить можно будет только сумму, указанную в договоре, и вы не сможете полностью получить налоговый вычет за покупку квартиры.",
  },
];
