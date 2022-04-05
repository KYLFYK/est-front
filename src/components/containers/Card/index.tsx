import React from "react";
import Link from "next/link";
import BaseSlider from "../../shared/BaseSlider/BaseSlider";
import Typography from "../../shared/Typography/Typography";
import { mapData } from "../CardContainer/config";
import { observer } from "mobx-react-lite";

import s from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  route: string | string[] | undefined;
  houseData: any;
  typeObject?: string | string[] | undefined;
  data?: any;
  hideLike?: boolean;
  classSlider?:string
}

const TEMP_LINK = "/";
// const MAX_SLIDERS_AMMOUNT = 7;

const ObjectCard: React.FC<Props> = observer(
  ({ route, houseData, typeObject, data, hideLike,classSlider }) => {
    //const houseImages = houseData.images.length > MAX_SLIDERS_AMMOUNT ? houseData.images.slice(0, MAX_SLIDERS_AMMOUNT) : houseData.images

    const houseImages =
      data.files && data.files.length > 0 ? data.files : mapData[0].images;
    const imagesUrls = houseImages.map((image: any) =>
      image.url.includes("public") ? mapData[0].images[0].url : image.url
    );

    function numberWithSpaces(price: any) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
      <div className={s.wrapper}>
        {/*<Link href={`${TEMP_LINK}${route}/${data.id}`} passHref>*/}
        <Link href={`/${route}/${encodeURIComponent(data.id)}`} >
        {/*<Link  href={{*/}
        {/*    pathname: `${route}`,*/}
        {/*    query: { id: `${data.id}` },*/}
        {/*}} passHref>*/}
          <a className={s.link}>
            <div className={s.slider}>
              <BaseSlider
                images={imagesUrls}
                height={200}
                withFavorite={
                  !!(
                    typeof window !== "undefined" &&
                    !hideLike &&
                    localStorage.getItem("roleEstatum")
                  )
                }
                onClickFavorite={() => {}}
              />
            </div>
            <div className={s.content}>
              <div className={s.ellipsisTextBold}>{data.name}</div>
              <p className={s.subtitle}>
                <Typography inline weight="light" color="tertiary">
                  {" "}
                  Адрес:{" "}
                </Typography>
                <div className={s.ellipsisText}> {data.address} </div>
              </p>
              <p className={s.subtitle}>
                <Typography inline weight="light" color="tertiary">
                  Этаж:
                </Typography>
                <Typography inline className={s.margin}>
                  {data.property?.floor} / {data.property?.totalFloor}
                </Typography>
              </p>
              <p className={s.subtitle}>
                <Typography inline weight="light" color="tertiary">
                  Тип жилья:
                </Typography>
                <Typography inline className={s.margin}>
                  {typeObject === "new" ? "Новостройка" : "Вторичное"}
                </Typography>
              </p>
              <p className={s.price}>{numberWithSpaces(data.price)} ₽</p>
            </div>
          </a>
        </Link>
      </div>
    );
  }
);

export default ObjectCard;
