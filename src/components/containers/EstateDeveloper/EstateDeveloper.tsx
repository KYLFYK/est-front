import React, {FC, useEffect, useState} from "react";
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
  id:number
};

export const EstateDeveloper: FC<EstateDevelopersPropsType> = ({
  title,
  description,
  img,
  developerInfo,
  hideModal,
  id
}) => {

  const [edit, setEdit] = useState<boolean>(false);

  const [width,setWidth]=useState<number>(200)
  const [height,setHeight]=useState<number>(80)

  useEffect(()=>{
    if (window.innerWidth >319 && window.innerWidth <= 576){
      setWidth(65)
      setHeight(65)
    }
    if(window.innerWidth >576){
      setWidth(200)
      setHeight(80)
    }
  },[])

  return (
    <div className={css.containerEstate}>
      {!hideModal && developerInfo && (
        <DeveloperDataModal
          id={id}
          img={img}
          developer={developerInfo}
          setActive={setEdit}
          isActive={edit}
        />
      )}
      <div onClick={() => !hideModal && setEdit(true)} className={css.hover}>
        <Image
          unoptimized
          width={width}
          height={height}
          className={css.img}
          src={img}
          alt="emmar"
          loader={(e) => myLoader(e.src, e.width, e.quality)}
        />
      </div>
      <div>
        <div className={css.infoCompany}>
          <Typography size={"default"} weight={"medium"} color="accent" title={title}>
            {title}{" "}
          </Typography>
          <Typography size={"small"} className={css.marginT}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
