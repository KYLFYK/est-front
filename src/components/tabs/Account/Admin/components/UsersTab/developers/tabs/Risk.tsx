import { FC } from "react";
import styles from "../../agency/agency.module.scss";
import { BaseInput } from "../../../../../../../shared/BaseInput/Input";

export const Risk: FC = () => {
  return (
    <div
      className={styles.formWrapper}
      style={{
        paddingTop: 20,
      }}
    >
      <div className={styles.form}>
        <section>
          <BaseInput
            classNameWrapper={styles.mediumHWrapper}
            className={styles.mediumH}
            errorLabel=""
            label="Индекс должной осмотрительности"
            type="number"
            name={"companyName"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumHWrapper}
            className={styles.mediumH}
            errorLabel=""
            label="Индекс финансового риска"
            type="number"
            name={"companyName"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
          <BaseInput
            classNameWrapper={styles.mediumHWrapper}
            className={styles.mediumH}
            errorLabel=""
            label="Индекс платежной дисциплины"
            type="number"
            name={"companyName"}
            defaultValue={" "}
            onChange={() => {
              console.log("sd");
            }}
          />
        </section>
      </div>
    </div>
  );
};
