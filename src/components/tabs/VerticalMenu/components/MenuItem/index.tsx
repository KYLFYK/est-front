import { FC } from "react";
import { IMenuItem } from "../../index";
import Link from "next/link";

import styles from "../../VerticalMenu.module.scss";

interface Props {
  data: IMenuItem;
}

const Marker: FC<{
  count: number;
}> = ({ count }) => {
  return <div className={styles.menuMarker}>{count}</div>;
};

export const MenuItem: FC<Props> = ({ data }) => {
  return (
    <Link href={data.url}>
      <a className={`${styles.link}${data.active ? ` ${styles.active}` : ""}`}>
        {data.text}
        {data.markerCount ? <Marker count={data.markerCount} /> : ""}
      </a>
    </Link>
  );
};
