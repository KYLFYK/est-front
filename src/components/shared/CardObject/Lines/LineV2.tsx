import React, { FC } from "react";
import css from "./Lines.module.scss";
import Typography from "../../Typography/Typography";
import FavoriteOffIcon from "../../FavoriteOffIcon/FavoriteOffIcon";


type LinesV2Type = {
  totalArea: string;
  name: string;
  datePublic: string;
  fromPublic: string;
  id: string;
};

const LineV2: FC<LinesV2Type> = ({
  totalArea,
  name,
  datePublic,
  fromPublic,
  id,
}) => {
  const favoriteOff = (id: string) => {

  };

  return (
    <div className={css.lineGridV2}>
      <div>
        <Typography className={css.paddingRight_10} weight={"bold"}>
          {name}, {totalArea}
        </Typography>
      </div>

      <div className={css.df}>
        <Typography weight={"light"} color={"tertiary"} className={css.paddingRight_5} >
          Дата публикации:
        </Typography>
        <Typography color={"tertiary"} >
            {datePublic}
        </Typography>
      </div>
      <div>
        <Typography color={"accent"}>{fromPublic}</Typography>
      </div>
      <FavoriteOffIcon onClick={favoriteOff} id={id} />
    </div>
  );
};

export default LineV2;
