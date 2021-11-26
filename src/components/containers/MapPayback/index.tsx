import React, {useState} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapControls } from "../MapControls/Buttons/index";
import { IconsCreator } from "../../../lib/mapIcons/IconsCreator";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import s from './styles.module.scss';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
}

const Map: React.FC<Props> = ({mapData, location}) => {

  const center = {
    lat: 45.16,
    lng: 36.90
  }

  const [activeMarker, setActivemarker] = useState(0)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  } 
  console.log(mapData)
  return (
    <div className={s.wrapper}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={_onViewportChange}
          onClick={() => {
            setActivemarker(0)
          }}
        >
          {mapData.map((md: any) => {
            return (
              <Marker
                  key={md.object_id}
                  latitude={md.lng}
                  longitude={md.lat}
              >
                  <BaseButton className={s.button} onClick={() => {
                    setActivemarker(md.object_id)
                  }}>
                    <IconsCreator 
                      locationProject={'payback'}
                      title={md.price}
                      colorBody={md.object_id === activeMarker ? '#C5A28E' : '#FFFFFF'}
                      colorPath={md.object_id === activeMarker ? '#FFFFFF' : '#C5A28E'}
                    />
                  </BaseButton>
              </Marker>
            )
          })}
        </MapGL>
        <div className={s.dynamicBar}>
                        <div className={s.localbarActive}>
                          {mapData.map((md:any) => {
                            return (

                                <div 
                                  className={`${s.card} ${Number(activeMarker) === Number(md.object_id) && s.select}`}  
                                  key={md.object_id} 
                                  id={md.object_id.toString()} 
                                  onClick={() => setActivemarker(md.object_id)}
                                >
                                    <div id={md.object_id.toString()} className={s.img} style={{backgroundImage: `url(${md.images[0].url})`, backgroundSize: 'cover'}}></div>
                                    <div id={md.object_id.toString()} className={s.description}>
                                        <div id={md.object_id.toString()} className={s.price}>
                                            {`${(md.price || 0).toLocaleString('ru-RU')} ₽`}
                                        </div>
                                        <div id={md.object_id.toString()} >
                                            {md.address}
                                        </div>
                                    </div>
                                </div>
                            )}
                          )}
                        </div>
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} />
    </div>
  );
};

export default Map;
