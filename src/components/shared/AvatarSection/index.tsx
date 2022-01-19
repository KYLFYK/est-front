import { FC, useState } from "react";
import Image from "next/image";
import BaseButton from "../BaseButton/BaseButtons";
import { v4 as uuidv4 } from "uuid";

import styles from "./AvatarSection.module.scss";
import { myLoader } from "../../../utils/image/image";

interface Props {
  src?: string | StaticImageData;
  changeable?: boolean;
  buttonText?: string;
  onChange?: (value: FormData) => void;
}

export const AvatarSection: FC<Props> = ({
  src,
  changeable,
  buttonText,
  onChange,
}) => {
  const labelId = changeable ? uuidv4() : "";

  const [fileSrc, setFileSrc] = useState(src ? src : "");

  const handleFile = (file: File) => {
    if (onChange) {
      let data = new FormData();
      data.append("file", file, file.name);
      onChange(data);
      setFileSrc(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          alt={"Аватар пользователя"}
          src={fileSrc}
          layout={"fill"}
          loader={(e) => myLoader(e.src, e.width, e.quality)}
        />
      </div>
      {changeable && (
        <>
          <label className={styles.label} htmlFor={labelId}>
            <BaseButton
              className={styles.button}
              onClick={() => {}}
              type="secondary"
            >
              {buttonText ? buttonText : "Загрузить лого"}
            </BaseButton>
          </label>
          <input
            type="file"
            id={labelId}
            multiple={false}
            accept="image/*"
            name={labelId}
            onChange={(file) => {
              if (file.currentTarget.files?.[0]) {
                handleFile(file.currentTarget.files[0]);
              }
            }}
            style={{
              position: "absolute",
              opacity: 0,
              width: 0,
              height: 0,
            }}
          />
        </>
      )}
    </div>
  );
};
