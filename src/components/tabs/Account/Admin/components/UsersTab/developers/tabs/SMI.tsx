import { FC } from "react";
import { AddNews } from "../../../common/AddNews";
import Image from "next/image";
import { Trash } from "../../../../../../../../icons/Trash";
import { EditIcon } from "../../../../../../../../icons/Edit/EditIcon";
import Link from "next/link";
import moment from "moment";
import { myLoader } from "../../../../../../../../utils/image/image";
import { DeveloperProfileStore } from "../../../../../../../../mobx/role/admin/profiles/developer";
import { observer } from "mobx-react";

import styles from "./SMI.module.scss";
import Scroll from "../../../../../../../shared/Scroll/Scroll";

export const SMI: FC = observer(() => {
  const { profileData } = DeveloperProfileStore;

  return (
    <Scroll height={'510'} >
      <div
        style={{
          paddingTop: 20,
        }}
      >
        <AddNews />
        <div className={styles.news}>
          <span className={styles.subTitle}>Добавленные статьи</span>
          <div className={styles.newsWrapper}>
            {profileData !== null &&
              profileData.developerProperty.press.map((el) => (
                <div className={styles.newsItem} key={el.id}>
                  <div className={styles.buttons}>
                    <div className={styles.trash}>
                      <Trash />
                    </div>
                    <div className={styles.edit}>
                      <EditIcon />
                    </div>
                  </div>
                  <div className={styles.img}>
                    <Image
                      loader={(e) => myLoader(e.src, e.width, e.quality)}
                      src={el.logo}
                      unoptimized
                      width={35}
                      height={35}
                      alt={""}
                    />
                  </div>
                  <Link href={el.link}>
                    <a className={styles.title}>{el.title}</a>
                  </Link>
                  <p className={styles.content}>{el.text}</p>
                  <span className={styles.date}>
                    {moment(el.date).format("DD.MM.YYYY")}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Scroll>
  );
});
