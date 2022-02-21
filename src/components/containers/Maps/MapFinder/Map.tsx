import React, {useState, useRef, useEffect} from "react";
import { useRouter } from 'next/router'
import { observer } from "mobx-react-lite"
import { useSearchStore } from "../../../../mobx/stores/SearchStore/SearchStore"
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useSupercluster from "use-supercluster";
import { IconsCreator } from "../../../../lib/mapIcons/IconsCreator";
import { MappingCluster, storeDatatoMapData } from "../../../../lib/mapping/mapCluster";
import BaseButton from "../../../shared/BaseButton/BaseButtons";
import { CrossIcon } from "../../../../icons/MapControlsIcons/PlaceIcons/CrossIcon";
import ObjectCard from "../../Card/index";
import Typography from "../../../shared/Typography/Typography";
import s from './styles.module.scss';
import {MapControls} from "../MapControls/Buttons";
import {digitToSyntax} from "../../../../lib/syntax/syntax";
import {changeMapLanguage} from '../../../../lib/mapTranslate/changeMapLanguage';

interface Props {
  mapData: any
  location: 'finder' | 'start' | 'infrastructure' | 'payback'
  viewport: any
  setViewport?: any
  view?: string
  setView?: any
}

const Map: React.FC<Props> = observer(({mapData, location, viewport, setViewport, view, setView}) => {

  const router = useRouter()
  const searchStore = useSearchStore()
  const data = searchStore.getInitialData()
  const center = {
    lat: 45.16,
    lng: 36.90
  }
  console.log('rfhnf')
  const [activeMarker, setActivemarker] = useState(0)
  const [choosedPlaces, setChoosedplaces] = useState<any>([])
  const [open, setOpen] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const mapRef: any = useRef(null);
  const mapWrap: any = useRef(null);

  let bounds;
  if (mapRef.current) {
    bounds = mapRef.current.getMap().getBounds().toArray().flat()
  }

  const points = MappingCluster(storeDatatoMapData(data));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  } 

  const onsetFullscreen = () => {
    if (!fullscreen && mapWrap.current) {
      mapWrap.current.requestFullscreen();
      setFullscreen(true);
    } 
    else if (fullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }

  useEffect(() => { 
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        setFullscreen(true);
      } else {
        setFullscreen(false);
      }
      setViewport({ ...viewport, width: "100%", height: "100%", transitionDuration: 100 });
    }
  )}, [setViewport, viewport])

  return (
    <div className={view==='mapView' ? s.openMapWrapper : s.closeMapWrapper} ref={mapWrap}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/light-v9"
          onViewportChange={_onViewportChange}
          onClick={() => {
            setActivemarker(0)
            setChoosedplaces('')
            setOpen(false)
          }}
          ref={mapRef}
          onLoad={changeMapLanguage}
        >
          {clusters.map(cluster => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  latitude={latitude}
                  longitude={longitude}
                  className={s.marker}
                >
                  <BaseButton className={s.button} onClick={() => {
                    setActivemarker(cluster.id)
                    setChoosedplaces(supercluster.getLeaves(cluster.id, Infinity))
                    setOpen(true)

                  }}>
                    <IconsCreator
                      locationProject={'finder'}
                      color={cluster.id === activeMarker ? '#C5A28E' : '#1A4862'}
                      title={Math.min(...supercluster.getLeaves(cluster.id, Infinity).map((sc: any) => sc.properties.prop.price))}
                      clusterPoints={pointCount}
                    />
                  </BaseButton>
                </Marker>
              );
            }

            return (
              <Marker
                key={cluster.properties.prop.id}
                latitude={latitude}
                longitude={longitude}
                className={s.marker}
              >
                <BaseButton className={s.button} onClick={() => {
                  setActivemarker(cluster.properties.prop.id)
                  setChoosedplaces([cluster])
                  setOpen(true)
                }}>
                  <IconsCreator
                    locationProject={'finder'}
                    color={cluster.properties.prop.id === activeMarker ? '#C5A28E' : '#1A4862'}
                    title={cluster.properties.prop.price}
                  />
                </BaseButton>
              </Marker>
            );
          })}
        </MapGL>
        <div className={s.dynamicBar}>
                        <div className={open && s.localbarActive || s.localbar}>
                          <div className={s.checkboxTitle}>
                            <Typography color={'tertiary'} weight={'light'}> {choosedPlaces.length} объект{digitToSyntax(choosedPlaces.length)} </Typography>
                            <BaseButton className={s.button} onClick={() => { 
                              setOpen(!open) 
                              setActivemarker(0)
                            }}>
                                <CrossIcon />
                            </BaseButton>
                          </div>
                          <div className={s.list}>
                            {choosedPlaces.length && choosedPlaces.map((cp: any, i: number) => {
                              return (
                                <div key={i} style={{padding:'5px'}}>
                                  <ObjectCard 
                                    route={router.query['object-type']} 
                                    houseData={cp.properties.prop} 
                                    data={cp.properties.prop}
                                  />
                                </div>
                              )
                            })}
                          </div>
                        </div>
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} onsetFullscreen={onsetFullscreen}/>
    </div>
  );
})

export default Map;