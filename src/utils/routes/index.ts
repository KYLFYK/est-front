export const createHouseUrl = (id: number, type: string | null): string =>
  "/" + (type || "all") + "/" + id;

export const searchNamePage = (page: string) => {
  switch (page) {
    case "Личный кабинет":
      return "cabinet";
    case "Аккаунт Агентства":
      return "cabinet";
    case "Объявления":
      return "ads";
    case "Мои объекты":
      return "ads";
    case "Мои объявления":
      return "ads";
    case "Уведомления":
      return "notifications";
    case "Тарифы размещения":
      return "tariff";
    case "Профпоиск":
      return "proff-search";
    case "Сообщения":
      return "messages";
    case "Заявки на просмотр":
      return "requests";
      case "Заявки":
      return "requests";
    case "Избранное":
      return "favorites";
    case "Сохранённые поиски":
      return "saved-searches";
    case "Проверка объекта":
      return "check-object";
    case "Заявки на ипотеку":
      return "mortgage-applications";
    case "Пользователи":
      return "cabinet";

    default:
      return "cabinet";
  }
};
