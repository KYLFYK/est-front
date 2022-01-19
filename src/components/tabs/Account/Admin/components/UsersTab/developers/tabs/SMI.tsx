import { FC } from "react";
import { AddNews } from "../../../common/AddNews";
import Image from "next/image";
import { Trash } from "../../../../../../../../icons/Trash";
import { EditIcon } from "../../../../../../../../icons/Edit/EditIcon";
import Link from "next/link";
import moment from "moment";

import styles from "./SMI.module.scss";
import rbkPic from "../../../../../../../../Pics/card-images/rbk.png";

interface NewsItem {
  pic: StaticImageData;
  link: string;
  title: string;
  content: string;
  date: string;
}

const news: NewsItem[] = [
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей. Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей.",
    date: moment().toISOString(),
  },
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей. Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей.",
    date: moment().toISOString(),
  },
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций.",
    date: moment().toISOString(),
  },
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей. Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей.",
    date: moment().toISOString(),
  },
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей. Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей.",
    date: moment().toISOString(),
  },
  {
    pic: rbkPic,
    link: "/",
    title:
      "«Брусника» выпустит облигации на 4 млрд ₽ ради земли и перевооружения",
    content:
      "Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей. Девелоперская компания Брусника объявила о дебютном выпуске облигаций объемом до 4 млрд рублей.",
    date: moment().toISOString(),
  },
];

export const SMI: FC = () => {
  return (
    <div
      style={{
        paddingTop: 20,
      }}
    >
      <AddNews />
      <div className={styles.news}>
        <span className={styles.subTitle}>Добавленные статьи</span>
        <div className={styles.newsWrapper}>
          {news.map((el, index) => (
            <div className={styles.newsItem} key={index}>
              <div className={styles.buttons}>
                <div className={styles.trash}>
                  <Trash />
                </div>
                <div className={styles.edit}>
                  <EditIcon />
                </div>
              </div>
              <div className={styles.img}>
                <Image src={el.pic} width={35} height={35} alt={""} />
              </div>
              <Link href={el.link}>
                <a className={styles.title}>{el.title}</a>
              </Link>
              <p className={styles.content}>{el.content}</p>
              <span className={styles.date}>
                {moment(el.date).format("DD.MM.YYYY")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
