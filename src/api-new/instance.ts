import axios from "axios";

export const newInstance = axios.create({
  baseURL: "https://estat.101bot.ru/api/v1/",
  headers: {
    // authorization: `Bearer ''`,
  },
});
