import React, { FC, useState } from "react";
import css from "./EstateDevelopers.module.scss";
import Typography from "../../shared/Typography/Typography";
import { DeveloperDataModal } from "../DeveloperDataModal/DeveloperDataModal";
import Image from "next/image";
import {myLoader} from "../../../utils/image/image";

type EstateDevelopersPropsType = {
  img: string;
  title: string;
  description: string;
  developerInfo?: {
    title: string;
    location: string;
    passed: string;
    objectsDeveloper: Array<{ nameObject: string; id: string }>;
  };
  hideModal?: boolean;
};

export const EstateDeveloper: FC<EstateDevelopersPropsType> = ({
  title,
  description,
  img,
  developerInfo,
  hideModal,
}) => {

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className={css.containerEstate}>
      {!hideModal && developerInfo && (
        <DeveloperDataModal
          img={img}
          developer={developerInfo}
          setActive={setEdit}
          isActive={edit}
        />
      )}
      <div onClick={() => !hideModal && setEdit(true)} className={css.hover}>
        <Image
          width={200}
          height={80}
          className={css.img}
          src={img}
          alt="emmar"
          loader={(e) => myLoader(e.src, e.width, e.quality)}
        />
      </div>
      <div>
        <div className={css.infoCompany}>
          <Typography size={"default"} color="accent">
            {title}{" "}
          </Typography>
          <Typography size={"small"}>{description} </Typography>
        </div>
      </div>
    </div>
  );
};
