import React, {useState, useEffect} from "react";
import { observer } from "mobx-react-lite";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {ObjectApi} from '../../../../api/object/object';
import {useObjectInStore} from '../../../../mobx/object/nearObjects';
import { MapControls } from "../MapControls/Buttons";
import { IconsCreator } from "../../../../lib/mapIcons/IconsCreator";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import s from './styles.module.scss';
import {changeMapLanguage} from '../../../../lib/mapTranslate/changeMapLanguage';

interface Props {
  currentHouse: any
  objects: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
}

const Map: React.FC<Props> = observer(({currentHouse, objects, location}) => {

  const store = useObjectInStore()
  const mapData = [currentHouse, ...store.get()];
  const [activeMarker, setActivemarker] = useState(0)
  console.log('objects', objects)
  console.log('mapData', [currentHouse, ...store.get()])
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: currentHouse.lat,
    longitude: currentHouse.lng,
    zoom: 6,
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  }
  
  useEffect(() => {
    store.fetchObjectIn(currentHouse.lat, currentHouse.lng)
  }, [])

  return (
    <div className={s.wrapper}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/light-v9"
          onViewportChange={_onViewportChange}
          onClick={() => {
            setActivemarker(0)
          }}
          className={s.border}
          onLoad={changeMapLanguage}
        >
          {mapData.map((md: any) => {
            return (
              <Marker
                  key={md.object_id}
                  latitude={md.lat}
                  longitude={md.lng}
                  className={md.type==='apartment' ? s.estateMarker : s.infraMarker}
              >
                  <BaseButton className={s.button} onClick={() => {
                    setActivemarker(md.object_id)
                  }}>
                    <IconsCreator 
                      locationProject={'payback'}
                      title={md.price}
                      colorBody={md.object_id === activeMarker ? '#C5A28E' : '#FFFFFF'}
                      colorPath={md.object_id === activeMarker ? '#FFFFFF' : '#C5A28E'}
                      currentHouse={currentHouse}
                      type={md.type}
                      active={md.object_id === activeMarker}
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
                                  id={md.object_id?.toString()} 
                                  onClick={() => setActivemarker(md.object_id)}
                                >
                                    <div id={md.object_id?.toString()} className={s.img} style={{backgroundImage: `url(${md.images[0]?.url})`, backgroundSize: 'cover'}}></div>
                                    <div id={md.object_id?.toString()} className={s.description}>
                                        <div id={md.object_id?.toString()} className={s.price}>
                                            {`${(md.price || 0).toLocaleString('ru-RU')} ₽`}
                                        </div>
                                        <div id={md.object_id?.toString()} >
                                            {md.address}
                                        </div>
                                    </div>
                                </div>
                            )}
                          )}
                        </div>
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={{lat: currentHouse.lat, lng: currentHouse.lng}} />
    </div>
  );
});

export default Map;
