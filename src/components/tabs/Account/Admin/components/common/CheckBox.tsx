import { FC, useState } from "react";

import styles from "./CheckBox.module.scss";

interface Props {
  text: string;
  defaultChecked?: boolean;
}

export const CheckBox: FC<Props> = ({ defaultChecked, text }) => {
  const [checked, setChecked] = useState(Boolean(defaultChecked));
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      <div className={`${styles.marker}${checked ? ` ${styles.checked}` : ""}`}>
        {checked && (
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.3126 7.12045L2.07132 4.87917L1.9501 4.75795L1.82888 4.87917L1.04138 5.66667L0.920161 5.78789L1.04138 5.90911L4.19138 9.05911L4.3126 9.18033L4.43382 9.05911L11.1838 2.30911L11.305 2.18789L11.1838 2.06667L10.3963 1.27917L10.2751 1.15795L10.1539 1.27917L4.3126 7.12045Z"
              fill="white"
              stroke="white"
              strokeWidth="0.342857"
            />
          </svg>
        )}
      </div>
      <span>{text}</span>
    </div>
  );
};
