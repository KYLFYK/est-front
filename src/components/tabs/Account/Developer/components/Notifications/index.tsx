import { FC, useState } from "react";

import styles from "./Notification.module.scss";

export interface INotice {
  readed: boolean;
  text: string;
  date: string;
  id: string;
  action: "change" | "see";
}

export const IconDown: FC = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        marginLeft: 2,
      }}
    >
      <path
        d="M11.06 6.22668L8 9.28002L4.94 6.22668L4 7.16668L8 11.1667L12 7.16668L11.06 6.22668Z"
        fill="#9495A7"
      />
    </svg>
  );
};

export const Notifications: FC = () => {
  const [noticeList, setNoticeList] = useState<INotice[]>([
    {
      readed: false,
      date: "22.03.2021 15:30",
      text: "Вы сменили описание профиля.",
      id: "3",
      action: "change",
    },
    {
      readed: false,
      date: "21.03.2021 16:41",
      text: "Вы сменили пароль.",
      id: "2",
      action: "change",
    },
    {
      readed: true,
      date: "20.03.2021 12:14",
      text: "9 пользователей добавили ЖК Ленинский в Избранное.",
      id: "1",
      action: "see",
    },
  ]);

  return (
    <div className={styles.wrapper}>
      <table>
        <tr>
          <th>
            <div
              className={styles.flex}
              style={{
                cursor: "pointer",
              }}
            >
              <span>Дата</span>
              <IconDown />
            </div>
          </th>
          <th>
            <span>Сообщение</span>
          </th>
          <th>
            <span
              className={styles.btn}
              onClick={() => {
                setNoticeList([
                  ...noticeList.map((notice) => ({
                    ...notice,
                    readed: true,
                  })),
                ]);
              }}
            >
              Отметить все как прочитанные
            </span>
          </th>
        </tr>
        {noticeList.map((notice, index) => (
          <tr key={index} className={notice.readed ? styles.readed : ""}>
            <td>
              <span
                className={`${styles.marked}${
                  notice.readed ? "" : " " + styles.new
                }`}
              >
                {notice.date}
              </span>
            </td>
            <td>
              <div className={styles.flex}>
                <span>{notice.text}</span>
                <span className={styles.btn}>
                  {notice.action === "change" ? "Изменить" : "Просмотреть"}
                </span>
              </div>
            </td>
            <td />
          </tr>
        ))}
      </table>
    </div>
  );
};
