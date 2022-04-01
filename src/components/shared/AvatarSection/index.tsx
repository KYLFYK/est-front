import { FC, useEffect, useState } from "react";
import Image from "next/image";
import BaseButton from "../BaseButton/BaseButtons";
import { v4 as uuidv4 } from "uuid";
import { myLoader } from "../../../utils/image/image";
import { observer } from "mobx-react-lite";

import styles from "./AvatarSection.module.scss";

interface Props {
  src?: string | StaticImageData;
  changeable?: boolean;
  buttonText?: string;
  onChange?: (value: FormData) => void;
  activeUpload?: boolean;
  size?: number;
}

export const AvatarSection: FC<Props> = observer(
  ({ src, changeable, buttonText, onChange, activeUpload = true, size }) => {
    const labelId = changeable ? uuidv4() : "";

    const [fileSrc, setFileSrc] = useState(src ? src : "");

    const handleFile = (file: File) => {
      if (onChange) {
        let data = new FormData();
        data.append("file", file, file.name);
        onChange(data);
      }

      setFileSrc(URL.createObjectURL(file));
    };

    useEffect(() => {
      setTimeout(() => setFileSrc(src ? src : ""), 100);
      // setFileSrc(src ? src : "");
    }, [src]);

    return (
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={labelId}>
          <div className={styles.image}>
            <Image
              unoptimized
              alt={"Аватар пользователя"}
              src={fileSrc}
              layout={size ? undefined : "fill"}
              loader={(e) => myLoader(e.src, e.width, e.quality)}
              width={size}
              height={size}
              objectFit={"cover"}
            />
          </div>
        </label>
        {changeable && (
          <>
            {/*<label className={styles.label} htmlFor={labelId}>
              {activeUpload && (
                <BaseButton
                  className={styles.button}
                  onClick={() => {console.log('ava')}}
                  type="secondary"
                >
                  {buttonText ? buttonText : "Загрузить лого"}
                </BaseButton>
              )}
              </label>*/}
            <input
              type="file"
              id={labelId}
              multiple={false}
              accept="image/*"
              name={labelId}
              onChange={(file) => {
                if (file.target.files?.[0]) {
                  handleFile(file.target.files[0]);
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
  }
);
