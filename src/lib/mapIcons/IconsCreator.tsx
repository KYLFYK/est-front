import React from "react";
import Typography from "../../components/shared/Typography/Typography";
import { HomeIcon } from "../../icons/MapIcons/HomeIcon/HomeIcon";
import s from "./IconsCreator.module.scss";

import { Denomination } from "./denomination";
 
interface Props {
    locationProject: 'startPage' | 'infrastucture' | 'payback' | 'finder'
    color?: string
    title?: string | number
    clusterPoints?: number
    colorBody?: any
    colorPath?: any
}

export const IconsCreator: React.FC<Props> = ({locationProject, color, title, clusterPoints, colorBody, colorPath}) => {
    
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

            { locationProject !== 'payback' 
                ? <div
                    className={s.marker}
                    style={{backgroundColor: color}}
                  />
                : <> 
                    <HomeIcon colorBody={colorBody} colorPath={colorPath}/> 
                    <div className={s.title}>
                        <Typography
                            size={'small'}
                            color={'nude'}
                        >
                            {title}
                        </Typography>
                    </div> 
                </>
            }
            
        </div>
    )
}