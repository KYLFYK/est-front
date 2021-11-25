import React from "react";
import Typography from "../../components/shared/Typography/Typography";
import s from "./IconsCreator.module.scss";

import { Denomination } from "./denomination";
 
interface Props {
    locationProject: 'startPage' | 'infrastucture' | 'payback' | 'finder'
    color: string
    title?: string | number
    clusterPoints?: number
}

export const IconsCreator: React.FC<Props> = ({locationProject, color, title, clusterPoints}) => {
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

                { title && 
                    <div className={s.title}>
                        <Typography
                            size={'small'}
                        >
                            {`${clusterPoints ? 'от' : ''} ${locationProject === 'finder' ? Denomination(Number(title)) : title}`}
                        </Typography>
                    </div>
                }
            </div>
            <div
                className={s.marker}
                style={{backgroundColor: color}}
            >
            </div>
            
        </div>
    )
}