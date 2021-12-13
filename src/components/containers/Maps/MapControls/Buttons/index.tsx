import React from 'react';
import s from './styles.module.scss';
import BaseButton from '../../../../shared/BaseButton/BaseButtons';
import {AltCenter} from '../../../../../icons/MapControlsIcons/AltCenter';
import {Center} from '../../../../../icons/MapControlsIcons/Center';
import {FullScreen} from '../../../../../icons/MapControlsIcons/FullScreen';
import { ToggleButtonsWithIcons } from '../../../../shared/ToggleButtonsWithIcons/ToggleButtonsWithIcons';
import {ZoomIn} from '../../../../../icons/MapControlsIcons/ZoomIn';
import {ZoomOut} from '../../../../../icons/MapControlsIcons/ZoomOut';

interface Props {
    viewport: any
    setViewport: any 
    location: 'finder' | 'start' | 'infrastructure' | 'payback'
    center?: any
    onsetFullscreen?: any
}

export const MapControls: React.FC<Props> = ({location, viewport, setViewport, center, onsetFullscreen}) => {
    const toggleButtonOptions = [
        { icon: <ZoomIn />, onclick: () => setViewport({ ...viewport, zoom: viewport.zoom + 1 }) }, 
        { icon: <ZoomOut />, onclick: () => setViewport({ ...viewport, zoom: viewport.zoom - 1 }) },
    ]
    return (
        <div className={s.wrapper}>
            {location==='finder' && 
                <BaseButton onClick={() => setViewport({ ...viewport, latitude: center.lat, longitude: center.lng })} className={s.button} type="secondary" icon={<AltCenter />} />
            }
            {location==='infrastructure' && 
                <BaseButton onClick={() => setViewport({ ...viewport, latitude: center.lat, longitude: center.lng })} className={s.button} type="secondary" icon={<Center />} />
            }
            {location!=='payback' && 
                <div style={{margin: '0 0 0 5px'}}>
                    <ToggleButtonsWithIcons
                        items={toggleButtonOptions}
                    />
                </div>
            }
            {location==='finder' && 
                <BaseButton onClick={onsetFullscreen} className={s.button} type="secondary" icon={<FullScreen />} />
            }
        </div>
    )
}