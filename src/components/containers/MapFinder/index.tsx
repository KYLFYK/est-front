import React, {useState, useRef} from "react";
import MapGL, {Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import useSupercluster from "use-supercluster";
import { MapControls } from "../MapControls/Buttons/index";
import { IconsCreator } from "../../../lib/mapIcons/IconsCreator";
import { MappingCluster } from "../../../lib/mapping/mapCluster";
import BaseButton from "../../shared/BaseButton/BaseButtons";
import { ArrowIcon } from "../../../icons/MapControlsIcons/PlaceIcons/ArrowIcon";
import ObjectCard from "../Card/index";
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
  const [choosedPlaces, setChoosedplaces] = useState([])
  const [open, setOpen] = useState(false)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.lat,
    longitude: center.lng,
    zoom: 6,
  });
  
  const [modal, setModal] = useState(false);
  const onsetModal = () => {
    setModal(!modal)
    console.log(`установлено ${modal}`)
  }
  const mapRef: any = useRef(null);

  let bounds;
  if (mapRef.current) {
    bounds = mapRef.current.getMap().getBounds().toArray().flat()
  }
  const points = MappingCluster(mapData);
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 75, maxZoom: 20 }
  });

  const _onViewportChange = (viewport: any) => {
    setViewport({ ...viewport, transitionDuration: 100 });
  } 

  return (
    <div className={s.wrapper}>
        <MapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoibmlja29sYXlhcmJ1em92IiwiYSI6ImNrdmdtYWQxYjd0enQybnM3bGR5b2Fnd2YifQ.IEtk0ClJ58f6dgZYa8hKpA'}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={_onViewportChange}
          onClick={() => {
            setActivemarker(0)
            setChoosedplaces([])
            setOpen(false)
          }}
          ref={mapRef}
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
              >
                <BaseButton className={s.button} onClick={() => {
                  setActivemarker(cluster.properties.prop.id)
                  setChoosedplaces(cluster)
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
                          {choosedPlaces.length && choosedPlaces.map((cp: any, i: number) => <ObjectCard key={i} houseData={cp.properties.prop}/>)}
                        </div>
                        <button className={open ? s.openButton : s.backButton} onClick={() => { setOpen(!open) }}>
                            <div className={open ? s.openArrow : s.arrow}>
                                <ArrowIcon />
                            </div>
                        </button>
        </div>
        <MapControls location={location} viewport={viewport} setViewport={setViewport} center={center} setModal={onsetModal}/>
    </div>
  );
};

export default Map;

