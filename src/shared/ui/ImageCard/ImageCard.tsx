import React, { FC } from 'react';
// import Image from 'next/image'
import css from './ImageCard.module.scss'

type ImageCardType = {
    src:string
    width?:number
    height?:number
}

// const myLoader = ({ src, width, quality }) => {
//     return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const ImageCard :FC<ImageCardType> = ({src,width,height}) => {

    return (
        <img src={src} alt="1"  className={css.image} />
        // <Image
        //     loader={undefined}
        //     src={src}
        //     alt="Picture of the author"
        //     width={width? width : 500}
        //     height={height? height : 500}
        //     className={css.image}
        // />
    );
};

export default ImageCard;