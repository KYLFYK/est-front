import React from "react";
import Image from 'next/image';
import Typography from "../../components/shared/Typography/Typography";
import { HomeIcon } from "../../icons/MapIcons/HomeIcon/HomeIcon";
import { OpenStreetIconsFactory } from "./map";
import s from "./IconsCreator.module.scss";

import { Denomination } from "./denomination";
 
interface Props {
    locationProject: 'startPage' | 'infrastucture' | 'payback' | 'finder'
    color?: string
    title?: string | number
    clusterPoints?: number
    colorBody?: string
    colorPath?: string
    currentHouse?: any
    type?: string
    active?: boolean | undefined
}

export const IconsCreator: React.FC<Props> = ({locationProject, color, title, clusterPoints, colorBody, colorPath, currentHouse, type, active}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.dataWrapper}>
                { clusterPoints && 
                    <div className={s.clusterPoints}>
                        <Typography
                            size={'small'}
                        >
                            {clusterPoints}
                        </Typography>
                    </div> 
                }
                { title && locationProject !== 'payback'  &&
                    <div className={s.title}>
                        <Typography
                            size={'small'}
                        >
                            {`${clusterPoints ? 'от' : ''} ${locationProject === 'finder' ? Denomination(Number(title)) : title}`}
                        </Typography>
                    </div>
                }
            </div>

            { locationProject === 'finder' 
                ? <div
                    className={s.marker}
                    style={{backgroundColor: color}}
                  />
                : <> 
                    {
                      (type === 'house' || type === 'apartment' || type === 'residential-complex' || type === 'plat')
                        ? <div style={{width: '100px', height: '100px', backgroundColor: '#000', borderRadius: '100%', 
                            border: `4px solid ${locationProject === 'payback' ? '#1A4862' : '#FFFFFF'}`, 
                            backgroundSize: 'cover', position: 'relative', top: '-120px', left: '-55px',
                            backgroundImage: `url(${currentHouse?.images[0]?.url})`}}>

                            <div style={{width: '20px', height: '20px', backgroundColor: `${locationProject === 'payback' ? '#1A4862' : '#FFFFFF'}`, 
                                transform: 'rotate(45deg)', position: 'relative', top: '90px', left: '40px', zIndex: -1}}>
                            </div>

                        </div>
                        : locationProject === 'infrastucture' 
                            ? <Image
                                  loader={() => OpenStreetIconsFactory(type, active, 'map')}
                                  unoptimized src={OpenStreetIconsFactory(type, active, 'map')}
                                  width={50} height={50}
                                  alt={'icon'}
                              />
                            : <HomeIcon colorBody={colorBody} colorPath={colorPath}/>
                    }
                    { locationProject !== 'infrastucture' && type !== 'apartment' && <div className={s.title}>
                        <Typography
                            size={'small'}
                            color={'nude'}
                        >
                            {title}
                        </Typography>
                    </div> }
                </>
            }
            
        </div>
    )
}